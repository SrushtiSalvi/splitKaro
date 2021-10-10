import React, { useEffect } from "react";
import { Text, View } from "react-native";

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    setTimeout(() => {
      redirecttoNextPage();
    }, 2000);
  }, []);

  const redirecttoNextPage = async () => {
    setTimeout(() => {
      navigation.navigate("AccountScreen");
    }, 1000);
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#0080ff"
      }}
    >
      <Text style={{color: 'white', fontSize: 50}}>
        SplitKaro!
      </Text>
    </View>
  );
}
