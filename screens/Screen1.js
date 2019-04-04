import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class Screen1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SCREEN 1</Text>
        <Button
          title="next page"
          onPress={() => this.props.navigation.navigate("Screen2")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgreen"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "white"
  },
});
