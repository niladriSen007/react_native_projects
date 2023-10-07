import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Register from "./screens/auth/Register";
import Login from "./screens/auth/Login";
import { NavigationContainer } from "@react-navigation/native";
import NavigationController from "./Navigation/NavigationController";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationController />
    </NavigationContainer>
  );
}
