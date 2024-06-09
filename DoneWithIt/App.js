import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, SafeAreaView } from "react-native";

export default function App() {
  const handlePress = () => console.log("text pressed");
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <StatusBar style="auto" />
      {/* <Image
        source={require("./assets/icon.png")}
        style={{ width: 200, height: 200 }}
      /> */}
      <Image
        // blurRadius={1}
        fadeDuration={1000}
        source={{ uri: "https://picsum.photos/200/300" }}
        style={{ width: 200, height: 200 }}
      />
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
