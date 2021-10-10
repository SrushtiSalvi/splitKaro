import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import SplashScreen from '../screens/SplashScreen'
import Account from '../screens/Account'
import ImportBalances from '../screens/ImportBalances'

const Stack = createStackNavigator();

const NewNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="SplashScreen"
          component={SplashScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AccountScreen"
          component={Account}
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

export default NewNavigator;
