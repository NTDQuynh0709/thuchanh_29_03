import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CheckoutScreen({ navigation, route }) {
  const totalPrice = route?.params?.totalPrice || 13.97;
  const cartItems = route?.params?.cartItems || [];

  const handlePlaceOrder = async () => {
    try {
      const newOrder = {
        id: Date.now().toString(),
        products: cartItems,
        total: Number(totalPrice),
        createdAt: new Date().toLocaleString(),
      };

      const existingOrders = await AsyncStorage.getItem("orders");
      const parsedOrders = existingOrders ? JSON.parse(existingOrders) : [];

      const updatedOrders = [newOrder, ...parsedOrders];

      await AsyncStorage.setItem("orders", JSON.stringify(updatedOrders));

      navigation.navigate("OrderAccepted");
    } catch (error) {
      console.log("Save order error:", error);
      alert("Lưu đơn hàng thất bại");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.backdrop} />

      <View style={styles.sheet}>
        <View style={styles.headerRow}>
          <Text style={styles.title}>Checkout</Text>

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.closeIcon}>✕</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.row}>
          <Text style={styles.leftText}>Delivery</Text>
          <View style={styles.rightWrap}>
            <Text style={styles.rightText}>Select Method</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.row}>
          <Text style={styles.leftText}>Payment</Text>
          <View style={styles.rightWrap}>
            <View style={styles.cardIcon}>
              <View style={styles.cardLeft} />
              <View style={styles.cardRight} />
            </View>
            <Text style={styles.arrow}>›</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.row}>
          <Text style={styles.leftText}>Promo Code</Text>
          <View style={styles.rightWrap}>
            <Text style={styles.rightText}>Pick discount</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />

        <TouchableOpacity style={styles.row}>
          <Text style={styles.leftText}>Total Cost</Text>
          <View style={styles.rightWrap}>
            <Text style={styles.totalText}>${Number(totalPrice).toFixed(2)}</Text>
            <Text style={styles.arrow}>›</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.divider} />

        <Text style={styles.termsText}>
          By placing an order you agree to our{" "}
          <Text style={styles.termsBold}>Terms And Conditions</Text>
        </Text>

        <TouchableOpacity
          style={styles.orderBtn}
          activeOpacity={0.85}
          onPress={handlePlaceOrder}
        >
          <Text style={styles.orderBtnText}>Place Order</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.18)",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.18)",
  },
  sheet: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 28,
    minHeight: "56%",
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#181725",
  },
  closeIcon: {
    fontSize: 28,
    color: "#181725",
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#E2E2E2",
  },
  row: {
    minHeight: 54,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftText: {
    fontSize: 18,
    color: "#7C7C7C",
    fontWeight: "500",
  },
  rightWrap: {
    flexDirection: "row",
    alignItems: "center",
  },
  rightText: {
    fontSize: 16,
    color: "#181725",
    fontWeight: "500",
    marginRight: 10,
  },
  totalText: {
    fontSize: 18,
    color: "#181725",
    fontWeight: "700",
    marginRight: 10,
  },
  arrow: {
    fontSize: 26,
    color: "#181725",
    lineHeight: 26,
  },
  termsText: {
    marginTop: 18,
    fontSize: 14,
    color: "#7C7C7C",
    lineHeight: 21,
  },
  termsBold: {
    color: "#181725",
    fontWeight: "600",
  },
  orderBtn: {
    marginTop: 26,
    height: 67,
    borderRadius: 20,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },
  orderBtnText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#fff",
  },
  cardIcon: {
    width: 26,
    height: 18,
    borderRadius: 4,
    overflow: "hidden",
    flexDirection: "row",
    marginRight: 10,
    borderWidth: 0.5,
    borderColor: "#DADADA",
  },
  cardLeft: {
    flex: 1,
    backgroundColor: "#3D5AFE",
  },
  cardRight: {
    flex: 1,
    backgroundColor: "#FF5252",
  },
});