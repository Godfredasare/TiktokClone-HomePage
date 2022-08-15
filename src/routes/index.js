import { View, Text } from "react-native";
import React from "react";
import HomeScreen from '../screens/Home'

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from "./BottomNavigation";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={BottomNavigation} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
