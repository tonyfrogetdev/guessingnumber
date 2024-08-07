import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation, useRoute, RouteProp } from "expo-router";

type ResultScreenRouteProp = RouteProp<
  { params: { score: number; currentNumber: number } },
  "params"
>;

export default function ResultScreen() {
  const route = useRoute<ResultScreenRouteProp>();
  const navigation = useNavigation();
  const { score, currentNumber } = route.params;
  const resultText = score > currentNumber ? "You've won" : "You've lost";

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{resultText}</Text>
      <Text style={styles.text}>
        BaseNumber was {currentNumber} and score {score}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("index")}
      >
        <Text style={styles.buttonText}>Play Again</Text>
      </TouchableOpacity>
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
  button: {
    backgroundColor: "#8e44ad",
    padding: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});
