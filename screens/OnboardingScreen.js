import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function OrderAcceptedScreen({ navigation }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

  const loadOrders = async () => {
    try {
      const savedOrders = await AsyncStorage.getItem("orders");
      const parsedOrders = savedOrders ? JSON.parse(savedOrders) : [];
      setOrders(parsedOrders);
    } catch (error) {
      console.log("Load orders error:", error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView contentContainerStyle={styles.scrollContent}>
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

        <View style={styles.ordersSection}>
          <Text style={styles.ordersTitle}>Order List</Text>

          {orders.length === 0 ? (
            <Text style={styles.emptyText}>No orders yet</Text>
          ) : (
            orders.map((order) => (
              <View key={order.id} style={styles.orderCard}>
                <Text style={styles.orderLabel}>Products:</Text>

                {order.products && order.products.length > 0 ? (
                  order.products.map((item, index) => (
                    <Text key={index} style={styles.productText}>
                      - {item.name || item.title || `Product ${index + 1}`} x{" "}
                      {item.quantity || 1}
                    </Text>
                  ))
                ) : (
                  <Text style={styles.productText}>- No product data</Text>
                )}

                <Text style={styles.orderInfo}>
                  Total: ${Number(order.total).toFixed(2)}
                </Text>
                <Text style={styles.orderInfo}>
                  Time: {order.createdAt}
                </Text>
              </View>
            ))
          )}
        </View>

        <View style={styles.bottomArea}>
          <TouchableOpacity
            style={styles.trackBtn}
            onPress={loadOrders}
          >
            <Text style={styles.trackBtnText}>Refresh Orders</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.backBtnText}>Back to home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 30,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },
  acceptedImage: {
    width: 260,
    height: 260,
    marginBottom: 30,
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
    marginBottom: 28,
  },
  ordersSection: {
    marginTop: 10,
  },
  ordersTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 16,
  },
  emptyText: {
    fontSize: 16,
    color: "#7C7C7C",
  },
  orderCard: {
    backgroundColor: "#F2F3F2",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  orderLabel: {
    fontSize: 16,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 8,
  },
  productText: {
    fontSize: 15,
    color: "#181725",
    marginBottom: 4,
  },
  orderInfo: {
    fontSize: 15,
    color: "#7C7C7C",
    marginTop: 8,
  },
  bottomArea: {
    paddingTop: 18,
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