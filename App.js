import React, { Component } from "react";
import { StyleSheet, Text, View, Button, Animated, Easing } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./screens/Home.js";
import Screen1 from "./screens/Screen1.js";
import Screen2 from "./screens/Screen2.js";
import Screen3 from "./screens/Screen3.js";

const transitionConfig = () => {
    return {
      transitionSpec: {
        duration: 1000,
        easing: Easing.out(Easing.poly(3)),
        timing: Animated.timing,
        useNativeDriver: true
      },
      screenInterpolator: sceneProps => {
        const { position, layout, scene, index, scenes } = sceneProps;
        const toIndex = index;
        const thisSceneIndex = scene.index;
        const height = layout.initHeight;
        const width = layout.initWidth;

        const sceneRange = [index - 1, index];
        const outputOpacity = [0, 1];
        const transition = position.interpolate({
            inputRange: sceneRange,
            outputRange: outputOpacity
          });
          
        const translateX = position.interpolate({
          inputRange: [thisSceneIndex - 1, thisSceneIndex, thisSceneIndex + 1],
          outputRange: [width, 0, 0],
        });
        const translateY = position.interpolate({
            inputRange: [0, thisSceneIndex],
            outputRange: [height, 0]
          })
    
        const slideFromRight = { transform: [{ translateX }], opacity: transition };
        const slideFromBottom = { transform: [{ translateY }], opacity: transition  }

        const lastSceneIndex = scenes[scenes.length - 1].index;

        // Test whether we're skipping back more than one screen
        if (lastSceneIndex - toIndex > 1) {
          // Do not transoform the screen being navigated to
          if (scene.index === toIndex) return;
          // Hide all screens in between
          if (scene.index !== lastSceneIndex) return { opacity: 0 };
          // Slide top screen down
          return slideFromBottom;
        }

        return slideFromRight;
      }
    };
  };

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: "HOME",
        headerStyle: {
          backgroundColor: "blue"
        },
        headerTitleStyle: {
          color: "white"
        }
      }
    },
    Screen1: {
      screen: Screen1,
      navigationOptions: {
        title: "SCREEN 1",
        headerStyle: {
          backgroundColor: "green"
        },
        headerTitleStyle: {
          color: "white"
        }
      }
    },
    Screen2: {
      screen: Screen2,
      navigationOptions: {
        title: "SCREEN 2",
        headerStyle: {
          backgroundColor: "red"
        },
        headerTitleStyle: {
          color: "white"
        }
      }
    },
    Screen3: {
      screen: Screen3,
      navigationOptions: {
        title: "SCREEN 3",
        headerStyle: {
          backgroundColor: "yellow"
        },
        headerTitleStyle: {
          color: "black"
        }
      }
    }
  },
  {
    initialRouteName: "Home",
    transitionConfig
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

