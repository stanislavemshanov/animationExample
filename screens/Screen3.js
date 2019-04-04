import React, { Component } from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class Screen3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>SCREEN 3</Text>
        <Button
          title="return to home"
          onPress={() => this.props.navigation.navigate("Home")}
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
    backgroundColor: "lightyellow"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "black"
  },
});
