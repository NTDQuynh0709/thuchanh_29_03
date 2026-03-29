import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import BeveragesScreen from "./screens/BeveragesScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Explore" component={ExploreScreen} />
        <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
        <Stack.Screen name="Beverages" component={BeveragesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}