import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="(tabs)/index" options={{ title: "Home" }} />
      <Tabs.Screen name="(tabs)/GameScreen" options={{ title: "Game" }} />
      <Tabs.Screen name="(tabs)/ResultScreen" options={{ title: "Result" }} />
    </Tabs>
  );
}
