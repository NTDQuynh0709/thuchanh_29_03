import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ExploreScreen from "./screens/ExploreScreen";
import ProductDetailScreen from "./screens/ProductDetailScreen";
import BeveragesScreen from "./screens/BeveragesScreen";
import FilterScreen from "./screens/FilterScreen";
import MyCartScreen from "./screens/MyCartScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import CheckoutScreen from "./screens/CheckoutScreen";
import OrderAcceptedScreen from "./screens/OrderAcceptedScreen";
import OrderErrorScreen from "./screens/OrderErrorScreen";
import AccountScreen from "./screens/AccountScreen";

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
        <Stack.Screen name="Filter" component={FilterScreen} />
        <Stack.Screen name="Cart" component={MyCartScreen} />
        <Stack.Screen name="Favourite" component={FavouriteScreen} />

        <Stack.Screen
          name="Checkout"
          component={CheckoutScreen}
          options={{
            presentation: "transparentModal",
            animation: "slide_from_bottom",
          }}
        />

        <Stack.Screen name="OrderAccepted" component={OrderAcceptedScreen} />
          <Stack.Screen
            name="OrderError"
            component={OrderErrorScreen}
            options={{
              presentation: "transparentModal",
              animation: "fade",
            }}
          />
          <Stack.Screen name="Account" component={AccountScreen} />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}