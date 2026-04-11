import React, { useCallback, useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";

const CART_KEY = "@cart_items";

const IMAGE_MAP = {
  banana: require("../images/banana.png"),
  apple: require("../images/apple.png"),
  bell_pepper_red: require("../images/bell_pepper_red.png"),
  ginger: require("../images/ginger.png"),
  beef: require("../images/beef.png"),
  chicken: require("../images/chicken.png"),
  egg: require("../images/anh5.png"),
};

export default function MyCartScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("Cart");
  const [cartItems, setCartItems] = useState([]);

  const loadCart = async () => {
    try {
      const storedCart = await AsyncStorage.getItem(CART_KEY);
      const cart = storedCart ? JSON.parse(storedCart) : [];
      setCartItems(cart);
    } catch (error) {
      console.log("Load cart error:", error);
    }
  };

  const saveCart = async (updatedCart) => {
    try {
      setCartItems(updatedCart);
      await AsyncStorage.setItem(CART_KEY, JSON.stringify(updatedCart));
    } catch (error) {
      console.log("Save cart error:", error);
      Alert.alert("Lỗi", "Không thể cập nhật giỏ hàng");
    }
  };

  useFocusEffect(
    useCallback(() => {
      loadCart();
    }, [])
  );

  const increaseQty = async (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    );
    await saveCart(updatedCart);
  };

  const decreaseQty = async (id) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, qty: item.qty > 1 ? item.qty - 1 : 1 }
        : item
    );
    await saveCart(updatedCart);
  };

  const removeItem = async (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    await saveCart(updatedCart);
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  }, [cartItems]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
      </View>

      {cartItems.length === 0 ? (
        <View style={styles.emptyWrap}>
          <Text style={styles.emptyTitle}>Giỏ hàng đang trống</Text>
          <TouchableOpacity
            style={styles.shopBtn}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.shopBtnText}>Mua ngay</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {cartItems.map((item) => (
              <View key={item.id} style={styles.cartItemWrap}>
                <View style={styles.cartItem}>
                  <Image
                    source={IMAGE_MAP[item.imageKey]}
                    style={styles.productImage}
                    resizeMode="contain"
                  />

                  <View style={styles.infoSection}>
                    <Text style={styles.productName}>{item.name}</Text>
                    <Text style={styles.productSub}>{item.unit}, Price</Text>

                    <View style={styles.bottomRow}>
                      <View style={styles.qtyRow}>
                        <TouchableOpacity
                          style={styles.qtyBtn}
                          onPress={() => decreaseQty(item.id)}
                        >
                          <Text style={styles.minusText}>−</Text>
                        </TouchableOpacity>

                        <Text style={styles.qtyText}>{item.qty}</Text>

                        <TouchableOpacity
                          style={styles.qtyBtn}
                          onPress={() => increaseQty(item.id)}
                        >
                          <Text style={styles.plusText}>+</Text>
                        </TouchableOpacity>
                      </View>

                      <Text style={styles.itemPrice}>
                        ${(item.price * item.qty).toFixed(2)}
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity
                    style={styles.closeBtn}
                    onPress={() => removeItem(item.id)}
                  >
                    <Text style={styles.closeText}>✕</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.divider} />
              </View>
            ))}
          </ScrollView>

          <View style={styles.checkoutArea}>
            <TouchableOpacity
              style={styles.checkoutBtn}
              activeOpacity={0.85}
              onPress={() =>
                navigation.navigate("Checkout", {
                  totalPrice: totalPrice,
                })
              }
            >
              <Text style={styles.checkoutText}>Go to Checkout</Text>

              <View style={styles.totalBadge}>
                <Text style={styles.totalBadgeText}>
                  ${totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </>
      )}

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
            style={[
              styles.tabIcon,
              activeTab === "Explore" && styles.activeIcon,
            ]}
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
            style={[
              styles.tabIcon,
              activeTab === "Favourite" && styles.activeIcon,
            ]}
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
            style={[
              styles.tabIcon,
              activeTab === "Account" && styles.activeIcon,
            ]}
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
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    backgroundColor: "#FCFCFC",
  },

  headerTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#181725",
  },

  scrollContent: {
    paddingTop: 6,
    paddingBottom: 8,
  },

  cartItemWrap: {
    paddingHorizontal: 20,
  },

  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 22,
    position: "relative",
  },

  productImage: {
    width: 78,
    height: 78,
    marginRight: 16,
  },

  infoSection: {
    flex: 1,
    justifyContent: "center",
    paddingRight: 18,
  },

  productName: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181725",
    marginBottom: 4,
  },

  productSub: {
    fontSize: 14,
    color: "#7C7C7C",
    marginBottom: 14,
  },

  bottomRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  qtyBtn: {
    width: 46,
    height: 46,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  minusText: {
    fontSize: 26,
    color: "#B3B3B3",
    lineHeight: 28,
    fontWeight: "400",
  },

  plusText: {
    fontSize: 26,
    color: "#53B175",
    lineHeight: 28,
    fontWeight: "400",
  },

  qtyText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#181725",
    marginHorizontal: 18,
    minWidth: 12,
    textAlign: "center",
  },

  itemPrice: {
    fontSize: 22,
    fontWeight: "600",
    color: "#181725",
  },

  closeBtn: {
    position: "absolute",
    top: 16,
    right: 0,
    padding: 4,
  },

  closeText: {
    fontSize: 22,
    color: "#B3B3B3",
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E2E2",
  },

  checkoutArea: {
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 8,
    backgroundColor: "#FCFCFC",
  },

  checkoutBtn: {
    height: 66,
    borderRadius: 18,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  checkoutText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  totalBadge: {
    position: "absolute",
    right: 14,
    backgroundColor: "#489E67",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },

  totalBadgeText: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "600",
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

  emptyWrap: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  emptyTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#181725",
    marginBottom: 16,
  },

  shopBtn: {
    backgroundColor: "#53B175",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 12,
  },

  shopBtnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});