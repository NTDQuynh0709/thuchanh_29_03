import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Auth flow
import SplashScreen from "./screens/SplashScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import SignInScreen from "./screens/SignInScreen";
import NumberScreen from "./screens/NumberScreen";
import VerificationScreen from "./screens/VerificationScreen";
import SelectLocationScreen from "./screens/SelectLocationScreen";
import LoginScreen from "./screens/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen";

// Main app
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
import OrderScreen from "./screens/OrderScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  const [initialRoute, setInitialRoute] = useState(null);

  useEffect(() => {
    checkLoginStatus();
  }, []);

  const checkLoginStatus = async () => {
    try {
      const token = await AsyncStorage.getItem("token");

      if (token) {
        // ✅ đã login → vào Home
        setInitialRoute("Home");
      } else {
        // ❌ chưa login → đi từ Splash
        setInitialRoute("Splash");
      }
    } catch (error) {
      console.log("Check login status error:", error);
      setInitialRoute("Splash");
    }
  };

  // loading khi chưa biết route
  if (!initialRoute) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#53B175" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        {/* AUTH FLOW */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Number" component={NumberScreen} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="SelectLocation" component={SelectLocationScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />

        {/* MAIN APP */}
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
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}