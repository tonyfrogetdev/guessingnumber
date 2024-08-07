import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate("GameScreen")}
      >
        <Text style={styles.startButtonText}>Start Game!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e67e22",
  },
  startButton: {
    backgroundColor: "#8e44ad",
    padding: 20,
    borderRadius: 100,
  },
  startButtonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
