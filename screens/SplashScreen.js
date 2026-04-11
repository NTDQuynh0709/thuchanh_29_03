import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";

export default function SplashScreen({ navigation }) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => navigation.replace("Onboarding")}
    >
      <Image
        source={require("../images/group1.png")}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5DB67A", // nền xanh
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 220,   // chỉnh theo ảnh của bạn
    height: 220,
  },
});