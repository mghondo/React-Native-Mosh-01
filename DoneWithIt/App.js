import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, SafeAreaView, Button } from "react-native";

export default function App() {
  const handlePress = () => console.log("text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      {/* <StatusBar style="auto" /> */}
      <Button title="Click Me" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "60px",
  },
});
