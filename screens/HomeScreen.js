import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import React, { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CART_KEY = "@cart_items";

const PRODUCTS = [
  {
    id: "banana",
    name: "Organic Bananas",
    sub: "7pcs, Priceg",
    unit: "7pcs",
    price: 4.99,
    imageKey: "banana",
    description: "Fresh organic bananas from our store.",
  },
  {
    id: "apple",
    name: "Red Apple",
    sub: "1kg, Priceg",
    unit: "1kg",
    price: 4.99,
    imageKey: "apple",
    description: "Sweet and fresh red apples.",
  },
  {
    id: "bell_pepper_red",
    name: "Bell Pepper Red",
    sub: "1kg, Priceg",
    unit: "1kg",
    price: 4.99,
    imageKey: "bell_pepper_red",
    description: "Crisp and colorful bell peppers.",
  },
  {
    id: "ginger",
    name: "Ginger",
    sub: "250gm, Priceg",
    unit: "250gm",
    price: 4.99,
    imageKey: "ginger",
    description: "Fresh ginger for cooking and tea.",
  },
  {
    id: "beef",
    name: "Beef Bone",
    sub: "1kg, Priceg",
    unit: "1kg",
    price: 4.99,
    imageKey: "beef",
    description: "Fresh beef bone for soup and cooking.",
  },
  {
    id: "chicken",
    name: "Broiler Chicken",
    sub: "1kg, Priceg",
    unit: "1kg",
    price: 4.99,
    imageKey: "chicken",
    description: "Fresh broiler chicken from our market.",
  },
];

const IMAGE_MAP = {
  banana: require("../images/banana.png"),
  apple: require("../images/apple.png"),
  bell_pepper_red: require("../images/bell_pepper_red.png"),
  ginger: require("../images/ginger.png"),
  beef: require("../images/beef.png"),
  chicken: require("../images/chicken.png"),
  pulses: require("../images/pulses.png"),
  rice: require("../images/rice.png"),
};

export default function HomeScreen({ navigation }) {
  const [activeTab, setActiveTab] = useState("Shop");

  const goToDetail = (product) => {
    navigation.navigate("ProductDetail", { product });
  };

  const addToCart = async (product) => {
    try {
      const storedCart = await AsyncStorage.getItem(CART_KEY);
      const cart = storedCart ? JSON.parse(storedCart) : [];

      const existingIndex = cart.findIndex((item) => item.id === product.id);

      if (existingIndex !== -1) {
        cart[existingIndex].qty += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          unit: product.unit,
          price: product.price,
          qty: 1,
          imageKey: product.imageKey,
        });
      }

      await AsyncStorage.setItem(CART_KEY, JSON.stringify(cart));
      navigation.navigate("Cart");
    } catch (error) {
      console.log("Add to cart error:", error);
      Alert.alert("Lỗi", "Không thể thêm sản phẩm vào giỏ hàng");
    }
  };

  const renderProductCard = (product) => (
    <TouchableOpacity
      key={product.id}
      activeOpacity={0.85}
      style={styles.card}
      onPress={() =>
        goToDetail({
          name: product.name,
          sub: product.sub,
          price: `$${product.price.toFixed(2)}`,
          image: product.imageKey,
          description: product.description,
        })
      }
    >
      <Image
        source={IMAGE_MAP[product.imageKey]}
        style={styles.productImage}
        resizeMode="contain"
      />
      <Text style={styles.productTitle}>{product.name}</Text>
      <Text style={styles.productSub}>{product.sub}</Text>
      <View style={styles.priceRow}>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <TouchableOpacity
          style={styles.addBtn}
          onPress={() => addToCart(product)}
        >
          <Text style={styles.addText}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Image
          source={require("../images/logo2.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.locationRow}>
          <Text style={styles.locationIcon}>📍</Text>
          <Text style={styles.locationText}>Dhaka, Banassre</Text>
          
        </View>
        <View style={styles.locationRow}>
          
          <Text style={styles.locationText}>Nguyễn Thị Diễm Quỳnh-23810310350</Text>
        </View>

        <View style={styles.searchBox}>
          <Image
            source={require("../images/search.png")}
            style={styles.searchIcon}
            resizeMode="contain"
          />
          <TextInput
            placeholder="Search Store"
            placeholderTextColor="#7C7C7C"
            style={styles.searchInput}
          />
        </View>

        <Image
          source={require("../images/banner.png")}
          style={styles.banner}
          resizeMode="cover"
        />

        <View style={styles.dotsRow}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
          <View style={styles.dot} />
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Exclusive Offer</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {renderProductCard(PRODUCTS[0])}
          {renderProductCard(PRODUCTS[1])}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalList}
        >
          {renderProductCard(PRODUCTS[2])}
          {renderProductCard(PRODUCTS[3])}
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.groceryTopList}
        >
          <View style={[styles.categoryCard, { backgroundColor: "#F8E9D2" }]}>
            <Image
              source={IMAGE_MAP.pulses}
              style={styles.categoryImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>Pulses</Text>
          </View>

          <View style={[styles.categoryCard, { backgroundColor: "#E8F1E3" }]}>
            <Image
              source={IMAGE_MAP.rice}
              style={styles.categoryImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>Rice</Text>
          </View>
        </ScrollView>

        <View style={styles.gridRow}>
          {renderProductCard(PRODUCTS[4])}
          {renderProductCard(PRODUCTS[5])}
        </View>
      </ScrollView>

      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabItem}
          onPress={() => setActiveTab("Shop")}
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight || 10 : 18,
  },

  scrollContent: {
    paddingTop: 18,
    paddingBottom: 20,
  },

  logo: {
    width: 26,
    height: 32,
    alignSelf: "center",
    marginBottom: 10,
  },

  locationRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  locationIcon: {
    fontSize: 13,
    marginRight: 5,
  },

  locationText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
  },

  searchBox: {
    marginHorizontal: 24,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#F2F3F2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 18,
  },

  searchIcon: {
    width: 18,
    height: 18,
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#181725",
  },

  banner: {
    width: "86%",
    height: 115,
    alignSelf: "center",
    borderRadius: 18,
    marginBottom: 12,
  },

  dotsRow: {
    flexDirection: "row",
    alignSelf: "center",
    marginBottom: 20,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 3,
  },

  activeDot: {
    backgroundColor: "#53B175",
    width: 18,
  },

  sectionHeader: {
    marginHorizontal: 24,
    marginBottom: 16,
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    color: "#181725",
  },

  seeAll: {
    fontSize: 16,
    color: "#53B175",
    fontWeight: "500",
  },

  horizontalList: {
    paddingLeft: 24,
    paddingRight: 14,
    marginBottom: 20,
  },

  groceryTopList: {
    paddingLeft: 24,
    paddingRight: 14,
    marginBottom: 18,
  },

  card: {
    width: 173,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    paddingHorizontal: 15,
    paddingTop: 18,
    paddingBottom: 15,
    marginRight: 15,
    backgroundColor: "#fff",
  },

  productImage: {
    width: 100,
    height: 80,
    alignSelf: "center",
    marginBottom: 22,
  },

  productTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
    marginBottom: 4,
  },

  productSub: {
    fontSize: 14,
    color: "#7C7C7C",
    marginBottom: 24,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  price: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181725",
  },

  addBtn: {
    width: 46,
    height: 46,
    borderRadius: 17,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  addText: {
    color: "#fff",
    fontSize: 24,
    lineHeight: 26,
    fontWeight: "500",
  },

  categoryCard: {
    width: 248,
    height: 105,
    borderRadius: 18,
    marginRight: 15,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
  },

  categoryImage: {
    width: 72,
    height: 72,
    marginRight: 14,
  },

  categoryText: {
    fontSize: 20,
    fontWeight: "600",
    color: "#181725",
  },

  gridRow: {
    flexDirection: "row",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    marginBottom: 18,
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