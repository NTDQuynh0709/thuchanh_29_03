import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

export default function SignInScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topSection}>
        <Image
          source={require("../images/screen3.png")}
          style={styles.topImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.bottomSection}>
        <View style={styles.tintLayer} />

        <Text style={styles.title}>
          Get your groceries{"\n"}with nectar
        </Text>

        <TouchableOpacity
          style={styles.phoneRow}
          activeOpacity={0.8}
          onPress={() => navigation.navigate("Number")}
        >
          <Image
            source={require("../images/flag.png")}
            style={styles.flag}
            resizeMode="contain"
          />
          <Text style={styles.countryCode}>+880</Text>
        </TouchableOpacity>

        <View style={styles.line} />

        <Text style={styles.socialText}>Or connect with social media</Text>

        <TouchableOpacity style={styles.buttonWrapper}>
          <Image
            source={require("../images/google.png")}
            style={styles.fullButton}
            resizeMode="stretch"
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonWrapper}>
          <Image
            source={require("../images/facebook.png")}
            style={styles.fullButton}
            resizeMode="stretch"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  topSection: {
    flex: 5,
  },
  topImage: {
    width: "100%",
    height: "100%",
  },
  bottomSection: {
    flex: 5,
    backgroundColor: "#FCFCFC",
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 10,
    position: "relative",
    overflow: "hidden",
  },
  tintLayer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(120,160,255,0.03)",
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#181725",
    lineHeight: 38,
    marginBottom: 18,
  },
  phoneRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 14,
    paddingVertical: 6,
  },
  flag: {
    width: 28,
    height: 20,
    marginRight: 10,
  },
  countryCode: {
    fontSize: 18,
    color: "#181725",
    fontWeight: "500",
  },
  line: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginBottom: 20,
  },
  socialText: {
    textAlign: "center",
    color: "#7C7C7C",
    fontSize: 14,
    marginBottom: 18,
  },
  buttonWrapper: {
    marginBottom: 12,
    borderRadius: 18,
    overflow: "hidden",
  },
  fullButton: {
    width: "100%",
    height: 67,
  },
});