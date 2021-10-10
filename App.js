import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import ImportBalancesButtons from "./components/ImportBalancesButtons";
import { SafeAreaView } from "react-native-safe-area-context";

import ImportBalances from "./screens/ImportBalances";
import MainNavigation from "./navigation/MainNavigation";
import SplashScreen from "./screens/SplashScreen";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <MainNavigation></MainNavigation>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
