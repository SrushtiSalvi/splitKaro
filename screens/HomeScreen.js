import React from "react";
import { View, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = ({navigation}) => {
  return (
    <View>
      <TouchableOpacity onPress={() => {
        navigation.navigate("SplashScreen");
      }}>
        <Text>Hello World!</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;