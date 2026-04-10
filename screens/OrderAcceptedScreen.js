import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";

export default function OrderAcceptedScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.content}>
        <Image
          source={require("../images/order_accepted.png")}
          style={styles.acceptedImage}
          resizeMode="contain"
        />

        <Text style={styles.title}>Your Order has been accepted</Text>

        <Text style={styles.subTitle}>
          Your items has been placcd and is on it&apos;s way to being processed
        </Text>
      </View>

      <View style={styles.bottomArea}>
        <TouchableOpacity
          style={styles.trackBtn}
        >
          <Text style={styles.trackBtnText}>Track Order</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.backBtnText}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
    paddingHorizontal: 24,
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  acceptedImage: {
    width: 260,
    height: 260,
    marginBottom: 40,
  },
  title: {
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
    marginBottom: 20,
    width: "90%",
  },
  subTitle: {
    fontSize: 16,
    lineHeight: 24,
    color: "#7C7C7C",
    textAlign: "center",
    width: "85%",
  },
  bottomArea: {
    paddingBottom: 28,
  },
  trackBtn: {
    height: 67,
    borderRadius: 20,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  trackBtnText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  backBtn: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
  },
  backBtnText: {
    color: "#181725",
    fontSize: 18,
    fontWeight: "600",
  },
});