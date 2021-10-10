import React from "react";
import { View, Text } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from "../screens/SplashScreen";
import AccountScreen from "../screens/Account"
import ImportBalances from "../screens/ImportBalances";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"SplashScreen"}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AccountScreen"
          component={AccountScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ImportBalancesScreen"
          component={ImportBalances}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
