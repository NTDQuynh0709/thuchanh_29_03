import React, { useState } from "react";
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
} from "react-native";

const initialFavourites = [
  {
    id: 1,
    name: "Sprite Can",
    unit: "325ml",
    price: 1.5,
    image: require("../images/sprite.png"),
  },
  {
    id: 2,
    name: "Diet Coke",
    unit: "355ml",
    price: 1.99,
    image: require("../images/diet_coke.png"),
  },
  {
    id: 3,
    name: "Apple & Grape Juice",
    unit: "2L",
    price: 15.5,
    image: require("../images/orange_juice.png"),
  },
  {
    id: 4,
    name: "Coca Cola Can",
    unit: "325ml",
    price: 4.99,
    image: require("../images/cocacola.png"),
  },
  {
    id: 5,
    name: "Pepsi Can",
    unit: "330ml",
    price: 4.99,
    image: require("../images/pepsi.png"),
  },
];

export default function FavouriteScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("Favourite");
  const [favourites] = useState(initialFavourites);

  const handleAddAllToCart = () => {
    console.log("Add all to cart");
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Favourite</Text>
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {favourites.map((item) => (
          <View key={item.id} style={styles.itemWrap}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.itemRow}
            >
              <Image
                source={item.image}
                style={styles.productImage}
                resizeMode="contain"
              />

              <View style={styles.infoSection}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productSub}>{item.unit}, Price</Text>
              </View>

              <View style={styles.rightSection}>
                <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                <Text style={styles.arrow}>›</Text>
              </View>
            </TouchableOpacity>

            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>

      <View style={styles.bottomArea}>
        <TouchableOpacity
          style={styles.addAllBtn}
          activeOpacity={0.85}
          onPress={handleAddAllToCart}
        >
          <Text style={styles.addAllText}>Add All To Cart</Text>
        </TouchableOpacity>
      </View>

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
            style={[
              styles.tabIcon,
              activeTab === "Shop" && styles.activeIcon,
            ]}
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
            style={[
              styles.tabIcon,
              activeTab === "Cart" && styles.activeIcon,
            ]}
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
    paddingTop: 2,
    paddingBottom: 8,
  },

  itemWrap: {
    paddingHorizontal: 20,
  },

  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 22,
  },

  productImage: {
    width: 48,
    height: 58,
    marginRight: 18,
  },

  infoSection: {
    flex: 1,
    justifyContent: "center",
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
  },

  rightSection: {
    flexDirection: "row",
    alignItems: "center",
  },

  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "#181725",
    marginRight: 14,
  },

  arrow: {
    fontSize: 28,
    color: "#181725",
    marginTop: -2,
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E2E2",
  },

  bottomArea: {
    paddingHorizontal: 24,
    paddingTop: 14,
    paddingBottom: 10,
    backgroundColor: "#FCFCFC",
    borderTopWidth: 1,
    borderTopColor: "#F0F0F0",
  },

  addAllBtn: {
    height: 66,
    borderRadius: 18,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  addAllText: {
    color: "#fff",
    fontSize: 20,
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
});