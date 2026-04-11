import React, { useCallback, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  StatusBar,
  Platform, // thêm cái này luôn
} from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function OrderScreen({ navigation }) {
  const [orders, setOrders] = useState([]);

  const loadOrders = async () => {
    try {
      const savedOrders = await AsyncStorage.getItem("orders");
      const parsedOrders = savedOrders ? JSON.parse(savedOrders) : [];
      setOrders(parsedOrders);
    } catch (error) {
      console.log("Load orders error:", error);
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadOrders();
    }, [])
  );

  const renderOrder = ({ item }) => (
    <View style={styles.orderCard}>
      <Text style={styles.orderTitle}>Products:</Text>

      {item.products && item.products.length > 0 ? (
        item.products.map((product, index) => (
          <Text key={index} style={styles.productText}>
            - {product.name || product.title || `Product ${index + 1}`} x{" "}
            {product.quantity || 1}
          </Text>
        ))
      ) : (
        <Text style={styles.productText}>- No product data</Text>
      )}

      <Text style={styles.infoText}>
        Total: ${Number(item.total).toFixed(2)}
      </Text>
      <Text style={styles.infoText}>Time: {item.createdAt}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate("Account")}>
  <Text style={styles.backText}>←</Text>
</TouchableOpacity>
        <Text style={styles.headerTitle}>My Orders</Text>
        <View style={{ width: 24 }} />
      </View>

      {orders.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyText}>No orders yet</Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={renderOrder}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  backgroundColor: "#FCFCFC",
  paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 10 : 18,
},
  header: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backText: {
    fontSize: 26,
    color: "#181725",
    fontWeight: "600",
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#181725",
  },
  listContent: {
    paddingHorizontal: 20,
    paddingBottom: 24,
  },
  orderCard: {
    backgroundColor: "#F2F3F2",
    borderRadius: 16,
    padding: 16,
    marginBottom: 14,
  },
  orderTitle: {
    fontSize: 17,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 10,
  },
  productText: {
    fontSize: 15,
    color: "#181725",
    marginBottom: 4,
  },
  infoText: {
    fontSize: 15,
    color: "#7C7C7C",
    marginTop: 8,
  },
  emptyWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyText: {
    fontSize: 18,
    color: "#7C7C7C",
  },
});