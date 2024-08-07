import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "expo-router";

export default function GameScreen() {
  const [currentNumber, setCurrentNumber] = useState(
    Math.floor(Math.random() * 100)
  );
  const [score, setScore] = useState(0);
  const navigation = useNavigation();

  const handleGuess = (guess: "higher" | "lower") => {
    const nextNumber = Math.floor(Math.random() * 100);
    if (
      (guess === "higher" && nextNumber > currentNumber) ||
      (guess === "lower" && nextNumber < currentNumber)
    ) {
      setScore(score + 1);
      setCurrentNumber(nextNumber);
    } else {
      navigation.navigate("ResultScreen", { score, currentNumber });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Starting: {currentNumber}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, styles.higher]}
          onPress={() => handleGuess("higher")}
        >
          <Text style={styles.buttonText}>Higher</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.lower]}
          onPress={() => handleGuess("lower")}
        >
          <Text style={styles.buttonText}>Lower</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    padding: 20,
    margin: 10,
    borderRadius: 5,
  },
  higher: {
    backgroundColor: "green",
  },
  lower: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
