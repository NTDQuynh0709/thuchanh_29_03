import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
  ScrollView,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const menuItems = [
  {
    id: 1,
    title: "Orders",
    icon: require("../images/Orders icon.png"),
  },
  {
    id: 2,
    title: "My Details",
    icon: require("../images/My Details icon.png"),
  },
  {
    id: 3,
    title: "Delivery Address",
    icon: require("../images/Delicery address.png"),
  },
  {
    id: 4,
    title: "Payment Methods",
    icon: require("../images/Vector icon.png"),
  },
  {
    id: 5,
    title: "Promo Cord",
    icon: require("../images/Promo Cord icon.png"),
  },
  {
    id: 6,
    title: "Notifications",
    icon: require("../images/Bell icon.png"),
  },
  {
    id: 7,
    title: "Help",
    icon: require("../images/help icon.png"),
  },
  {
    id: 8,
    title: "About",
    icon: require("../images/about icon.png"),
  },
];

export default function AccountScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("Account");
  const [orders, setOrders] = useState([]);
  const [showOrders, setShowOrders] = useState(false);

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
    React.useCallback(() => {
      loadOrders();
    }, [])
  );

  const handleLogout = async () => {
    try {
      await AsyncStorage.multiRemove(["token", "user"]);

      navigation.reset({
        index: 0,
        routes: [{ name: "Login" }],
      });
    } catch (error) {
      console.log("Logout error:", error);
      alert("Đăng xuất thất bại");
    }
  };

  const handleMenuPress = async (item) => {
    if (item.title === "Orders") {
      await loadOrders();
      setShowOrders(!showOrders);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Account</Text>
        </View>

        <View style={styles.profileSection}>
          <Image
            source={require("../images/Rectangle82.png")}
            style={styles.avatar}
            resizeMode="cover"
          />

          <View style={styles.profileInfo}>
            <View style={styles.nameRow}>
              <Text style={styles.name}>Afsar Hossen</Text>
              <Image
                source={require("../images/Vector (1).png")}
                style={styles.editIcon}
                resizeMode="contain"
              />
            </View>
            <Text style={styles.email}>lmshuvo97@gmail.com</Text>
          </View>
        </View>

        <View style={styles.profileDivider} />

        <View style={styles.menuList}>
  {menuItems.map((item) => (
    <TouchableOpacity
      key={item.id}
      style={styles.menuItem}
      onPress={() => {
        if (item.title === "Orders") {
          navigation.navigate("Order");
        }
      }}
    >
      <View style={styles.menuLeft}>
        <Image
          source={item.icon}
          style={styles.menuIcon}
          resizeMode="contain"
        />
        <Text style={styles.menuText}>{item.title}</Text>
      </View>

      <Text style={styles.arrow}>›</Text>
    </TouchableOpacity>
  ))}
</View>

        {showOrders && (
          <View style={styles.ordersWrap}>
            <Text style={styles.ordersTitle}>My Orders</Text>

            {orders.length === 0 ? (
              <Text style={styles.emptyText}>No orders yet</Text>
            ) : (
              orders.map((order) => (
                <View key={order.id} style={styles.orderCard}>
                  <Text style={styles.orderLabel}>Products:</Text>

                  {order.products && order.products.length > 0 ? (
                    order.products.map((product, index) => (
                      <Text key={index} style={styles.productText}>
                        - {product.name || product.title || `Product ${index + 1}`} x{" "}
                        {product.quantity || 1}
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
        )}

        <View style={styles.logoutWrap}>
  <TouchableOpacity
    style={styles.logoutBtn}
    activeOpacity={0.85}
    onPress={handleLogout}
  >
    <Image
      source={require("../images/Group 6892.png")}
      style={styles.logoutIcon}
    />
    <Text style={styles.logoutText}>Log Out</Text>
  </TouchableOpacity>
</View>
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setActiveTab("Shop");
            navigation.navigate("Home");
          }}
        >
          <Image
            source={require("../images/shop.png")}
            style={[styles.tabIcon, activeTab === "Shop" && styles.activeIcon]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setActiveTab("Explore");
            navigation.navigate("Explore");
          }}
        >
          <Image
            source={require("../images/explore.png")}
            style={[styles.tabIcon, activeTab === "Explore" && styles.activeIcon]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setActiveTab("Cart");
            navigation.navigate("Cart");
          }}
        >
          <Image
            source={require("../images/cart.png")}
            style={[styles.tabIcon, activeTab === "Cart" && styles.activeIcon]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setActiveTab("Favourite");
            navigation.navigate("Favourite");
          }}
        >
          <Image
            source={require("../images/favourite.png")}
            style={[styles.tabIcon, activeTab === "Favourite" && styles.activeIcon]}
          />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => {
            setActiveTab("Account");
            navigation.navigate("Account");
          }}
        >
          <Image
            source={require("../images/accout.png")}
            style={[styles.tabIcon, activeTab === "Account" && styles.activeIcon]}
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 10 : 12,
  },
  header: {
    height: 64,
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#181725",
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 16,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
    marginRight: 8,
  },
  editIcon: {
    width: 16,
    height: 16,
  },
  email: {
    fontSize: 14,
    color: "#7C7C7C",
  },
  profileDivider: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginTop: 8,
  },
  menuList: {
    flex: 1,
  },
  menuItem: {
    minHeight: 62,
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  menuText: {
    fontSize: 18,
    color: "#181725",
    fontWeight: "500",
  },
  arrow: {
    fontSize: 28,
    color: "#181725",
    lineHeight: 28,
  },
  ordersWrap: {
    paddingHorizontal: 24,
    paddingTop: 16,
  },
  ordersTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 14,
  },
  emptyText: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 12,
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
  logoutWrap: {
    paddingHorizontal: 24,
    paddingVertical: 18,
  },
  logoutBtn: {
    height: 66,
    borderRadius: 18,
    backgroundColor: "#F2F3F2",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  logoutIcon: {
    position: "absolute",
    left: 20,
    width: 22,
    height: 22,
    tintColor: "#53B175",
  },
  logoutText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#53B175",
  },
  tabBar: {
    height: 90,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    paddingBottom: 10,
  },
  tabItem: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  tabIcon: {
    width: 30,
    height: 40,
    tintColor: "#181725",
  },
  activeIcon: {
    tintColor: "#53B175",
  },
});