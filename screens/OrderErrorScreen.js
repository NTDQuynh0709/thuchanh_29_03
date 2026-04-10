import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";

export default function OrderErrorScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="rgba(0,0,0,0.35)" />

      <View style={styles.overlay} />

      <View style={styles.modal}>
        <TouchableOpacity
          style={styles.closeBtn}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.closeText}>✕</Text>
        </TouchableOpacity>

        <Image
          source={require("../images/image13.png")}
          style={styles.errorImage}
          resizeMode="contain"
        />

        <Text style={styles.title}>Oops! Order Failed</Text>
        <Text style={styles.subTitle}>Something went tembly wrong.</Text>

        <TouchableOpacity style={styles.tryAgainBtn} activeOpacity={0.85}>
          <Text style={styles.tryAgainText}>Please Try Again</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.navigate("Cart")}
        >
          <Text style={styles.backBtnText}>Back to home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  modal: {
    width: "86%",
    backgroundColor: "#fff",
    borderRadius: 24,
    paddingHorizontal: 22,
    paddingTop: 22,
    paddingBottom: 24,
    alignItems: "center",
  },
  closeBtn: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 2,
    padding: 6,
  },
  closeText: {
    fontSize: 26,
    color: "#181725",
  },
  errorImage: {
    width: 220,
    height: 220,
    marginTop: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 16,
    color: "#7C7C7C",
    textAlign: "center",
    marginBottom: 30,
  },
  tryAgainBtn: {
    width: "100%",
    height: 67,
    borderRadius: 20,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  tryAgainText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
  backBtn: {
    paddingVertical: 8,
  },
  backBtnText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181725",
  },
});