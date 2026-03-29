
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";


export default function HomeScreen({ navigation }) {
  const goToDetail = (product) => {
    navigation.navigate("ProductDetail", { product });
  };
  const [activeTab, setActiveTab] = useState("Shop");
  return (
    <SafeAreaView style={styles.container}>
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

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.card}
            onPress={() =>
              goToDetail({
                name: "Organic Bananas",
                sub: "7pcs, Priceg",
                price: "$4.99",
                image: "banana",
                description: "Fresh organic bananas from our store.",
              })
            }
          >
            <Image
              source={require("../images/banana.png")}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productTitle}>Organic Bananas</Text>
            <Text style={styles.productSub}>7pcs, Priceg</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>$4.99</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.card}
            onPress={() =>
              goToDetail({
                name: "Red Apple",
                sub: "1kg, Priceg",
                price: "$4.99",
                image: "apple",
                description: "Sweet and fresh red apples.",
              })
            }
          >
            <Image
              source={require("../images/apple.png")}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productTitle}>Red Apple</Text>
            <Text style={styles.productSub}>1kg, Priceg</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>$4.99</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Best Selling</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.horizontalList}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.card}
            onPress={() =>
              goToDetail({
                name: "Bell Pepper Red",
                sub: "1kg, Priceg",
                price: "$4.99",
                image: "bell_pepper_red",
                description: "Crisp and colorful bell peppers.",
              })
            }
          >
            <Image
              source={require("../images/bell_pepper_red.png")}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productTitle}>Bell Pepper Red</Text>
            <Text style={styles.productSub}>1kg, Priceg</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>$4.99</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.card}
            onPress={() =>
              goToDetail({
                name: "Ginger",
                sub: "250gm, Priceg",
                price: "$4.99",
                image: "ginger",
                description: "Fresh ginger for cooking and tea.",
              })
            }
          >
            <Image
              source={require("../images/ginger.png")}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productTitle}>Ginger</Text>
            <Text style={styles.productSub}>250gm, Priceg</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>$4.99</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </ScrollView>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Groceries</Text>
          <TouchableOpacity activeOpacity={0.8}>
            <Text style={styles.seeAll}>See all</Text>
          </TouchableOpacity>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.groceryTopList}>
          <View style={[styles.categoryCard, { backgroundColor: "#F8E9D2" }]}>
            <Image
              source={require("../images/pulses.png")}
              style={styles.categoryImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>Pulses</Text>
          </View>

          <View style={[styles.categoryCard, { backgroundColor: "#E8F1E3" }]}>
            <Image
              source={require("../images/rice.png")}
              style={styles.categoryImage}
              resizeMode="contain"
            />
            <Text style={styles.categoryText}>Rice</Text>
          </View>
        </ScrollView>

        <View style={styles.gridRow}>
          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.card}
            onPress={() =>
              goToDetail({
                name: "Beef Bone",
                sub: "1kg, Priceg",
                price: "$4.99",
                image: "beef",
                description: "Fresh beef bone for soup and cooking.",
              })
            }
          >
            <Image
              source={require("../images/beef.png")}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productTitle}>Beef Bone</Text>
            <Text style={styles.productSub}>1kg, Priceg</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>$4.99</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.85}
            style={styles.card}
            onPress={() =>
              goToDetail({
                name: "Broiler Chicken",
                sub: "1kg, Priceg",
                price: "$4.99",
                image: "chicken",
                description: "Fresh broiler chicken from our market.",
              })
            }
          >
            <Image
              source={require("../images/chicken.png")}
              style={styles.productImage}
              resizeMode="contain"
            />
            <Text style={styles.productTitle}>Broiler Chicken</Text>
            <Text style={styles.productSub}>1kg, Priceg</Text>
            <View style={styles.priceRow}>
              <Text style={styles.price}>$4.99</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addText}>+</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.tabBar}>
  <TouchableOpacity
    style={styles.tabItem}
    onPress={() => setActiveTab("Shop")}
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
    onPress={() => setActiveTab("Cart")}
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
    onPress={() => setActiveTab("Favourite")}
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
    onPress={() => setActiveTab("Account")}
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
  container: { flex: 1, backgroundColor: "#FCFCFC" },
  scrollContent: { paddingTop: 14, paddingBottom: 20 },
  logo: { width: 26, height: 32, alignSelf: "center", marginBottom: 10 },
  locationRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  locationIcon: { fontSize: 13, marginRight: 5 },
  locationText: { fontSize: 16, fontWeight: "600", color: "#181725" },
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
  searchIcon: { width: 18, height: 18, marginRight: 8 },
  searchInput: { flex: 1, fontSize: 14, color: "#181725" },
  banner: {
    width: "86%",
    height: 115,
    alignSelf: "center",
    borderRadius: 18,
    marginBottom: 12,
  },
  dotsRow: { flexDirection: "row", alignSelf: "center", marginBottom: 20 },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 3,
  },
  activeDot: { backgroundColor: "#53B175", width: 18 },
  sectionHeader: {
    marginHorizontal: 24,
    marginBottom: 16,
    marginTop: 6,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: { fontSize: 24, fontWeight: "600", color: "#181725" },
  seeAll: { fontSize: 16, color: "#53B175", fontWeight: "500" },
  horizontalList: { paddingLeft: 24, paddingRight: 14, marginBottom: 20 },
  groceryTopList: { paddingLeft: 24, paddingRight: 14, marginBottom: 18 },
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
  productSub: { fontSize: 14, color: "#7C7C7C", marginBottom: 24 },
  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  price: { fontSize: 18, fontWeight: "600", color: "#181725" },
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
  categoryImage: { width: 72, height: 72, marginRight: 14 },
  categoryText: { fontSize: 20, fontWeight: "600", color: "#181725" },
  gridRow: {
    flexDirection: "row",
    paddingHorizontal: 24,
    justifyContent: "space-between",
    marginBottom: 18,
  },
  tabBar: {
  height: 100, // 👈 tăng lên
  flexDirection: "row",
  justifyContent: "space-around",
  alignItems: "center",
  backgroundColor: "#fff",
  borderTopWidth: 1,
  borderTopColor: "#eee",
  paddingBottom: 10, // 👈 tránh bị cắt dưới
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
  tintColor: "#53B175", // 👈 xanh
},

tabText: {
  fontSize: 12,
  color: "#181725",
},

activeText: {
  color: "#53B175",
  fontWeight: "600",
},
});