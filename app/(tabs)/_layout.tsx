import { Stack } from "expo-router";

export default function TabLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="GameScreen" options={{ title: "Game" }} />
      <Stack.Screen name="ResultScreen" options={{ title: "Result" }} />
    </Stack>
  );
}
