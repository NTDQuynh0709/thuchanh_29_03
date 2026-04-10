import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import products from "../data";

export default function ExploreScreen({ navigation, route }) {
  const [activeTab, setActiveTab] = useState("Explore");
  const [searchText, setSearchText] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const categories = [
    {
      id: 1,
      title: "Frash Fruits\n& Vegetable",
      image: require("../images/anh1.png"),
      bg: "#EEF7F1",
      border: "#53B175",
    },
    {
      id: 2,
      title: "Cooking Oil\n& Ghee",
      image: require("../images/anh2.png"),
      bg: "#FFF8ED",
      border: "#F8A44C",
    },
    {
      id: 3,
      title: "Meat & Fish",
      image: require("../images/anh3.png"),
      bg: "#FDE8E4",
      border: "#F7A593",
    },
    {
      id: 4,
      title: "Bakery & Snacks",
      image: require("../images/anh4.png"),
      bg: "#F4EBF7",
      border: "#D3B0E0",
    },
    {
      id: 5,
      title: "Dairy & Eggs",
      image: require("../images/anh5.png"),
      bg: "#FFFCEB",
      border: "#FDE598",
    },
    {
      id: 6,
      title: "Beverages",
      image: require("../images/anh6.png"),
      bg: "#EDF7FC",
      border: "#B7DFF5",
      screen: "Beverages",
    },
  ];

  useEffect(() => {
    if (route.params?.selectedCategories) {
      setSelectedCategories(route.params.selectedCategories);
    }

    if (route.params?.selectedBrands) {
      setSelectedBrands(route.params.selectedBrands);
    }
  }, [route.params]);

  const onPressCategory = (item) => {
    if (item.screen) {
      navigation.navigate(item.screen);
    }
  };

  const filteredProducts = useMemo(() => {
    let result = [...products];
    const keyword = searchText.trim().toLowerCase();

    if (keyword) {
      result = result.filter((item) => {
        const name = item.name?.toLowerCase() || "";
        const category = item.category?.toLowerCase() || "";
        const brand = item.brand?.toLowerCase() || "";

        return (
          name.includes(keyword) ||
          category.includes(keyword) ||
          brand.includes(keyword)
        );
      });
    }

    if (selectedCategories.length > 0) {
      result = result.filter((item) =>
        selectedCategories.includes(item.category)
      );
    }

    if (selectedBrands.length > 0) {
      result = result.filter((item) => selectedBrands.includes(item.brand));
    }

    return result;
  }, [searchText, selectedCategories, selectedBrands]);

  const hasFilter = selectedCategories.length > 0 || selectedBrands.length > 0;
  const showProductList = searchText.trim() !== "" || hasFilter;

  const renderCategoryList = () => {
    return categories.map((item) => (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.85}
        style={[
          styles.card,
          {
            backgroundColor: item.bg,
            borderColor: item.border,
          },
        ]}
        onPress={() => onPressCategory(item)}
      >
        <Image
          source={item.image}
          style={styles.cardImage}
          resizeMode="contain"
        />
        <Text style={styles.cardTitle}>{item.title}</Text>
      </TouchableOpacity>
    ));
  };

  const renderProductList = () => {
    if (filteredProducts.length === 0) {
      return (
        <View style={styles.emptyBox}>
          <Text style={styles.emptyText}>Không tìm thấy sản phẩm</Text>
        </View>
      );
    }

    return filteredProducts.map((item) => (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.85}
        style={styles.productCard}
        onPress={() => navigation.navigate("ProductDetail", { product: item })}
      >
        <Image
          source={item.image}
          style={styles.productImage}
          resizeMode="contain"
        />

        <Text style={styles.productName} numberOfLines={2}>
          {item.name}
        </Text>

        <Text style={styles.productMeta}>
          {item.unit}, Price
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.productPrice}>${item.price.toFixed(2)}</Text>

          <TouchableOpacity style={styles.addBtn}>
            <Text style={styles.addBtnText}>+</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Find Products</Text>

        <View style={styles.searchRow}>
          <View style={styles.searchBox}>
            <Text style={styles.searchIcon}>⌕</Text>
            <TextInput
              placeholder="Search Store"
              placeholderTextColor="#7C7C7C"
              style={styles.searchInput}
              value={searchText}
              onChangeText={setSearchText}
            />
          </View>

          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() =>
              navigation.navigate("Filter", {
                selectedCategories,
                selectedBrands,
              })
            }
          >
            <Image
              source={require("../images/filter.png")}
              style={styles.filterIcon}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>

        {hasFilter && (
          <View style={styles.filterInfo}>
            <Text style={styles.filterInfoText}>
              Categories: {selectedCategories.length} | Brands:{" "}
              {selectedBrands.length}
            </Text>

            <TouchableOpacity
              onPress={() => {
                setSelectedCategories([]);
                setSelectedBrands([]);
              }}
            >
              <Text style={styles.clearText}>Clear</Text>
            </TouchableOpacity>
          </View>
        )}

        <View style={styles.grid}>
          {showProductList ? renderProductList() : renderCategoryList()}
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
    paddingHorizontal: 24,
    paddingTop: 22,
    paddingBottom: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
    marginBottom: 20,
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },

  searchBox: {
    flex: 1,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#F2F3F2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
  },

  searchIcon: {
    fontSize: 20,
    color: "#181725",
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#181725",
  },

  filterBtn: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: "#F2F3F2",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  filterIcon: {
    width: 22,
    height: 22,
  },

  filterInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
    paddingHorizontal: 4,
  },

  filterInfoText: {
    fontSize: 13,
    color: "#7C7C7C",
  },

  clearText: {
    fontSize: 14,
    color: "#53B175",
    fontWeight: "600",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "47.5%",
    height: 190,
    borderWidth: 1,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    paddingHorizontal: 12,
  },

  cardImage: {
    width: 90,
    height: 80,
    marginBottom: 18,
  },

  cardTitle: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
    color: "#181725",
    textAlign: "center",
  },

  productCard: {
    width: "47.5%",
    minHeight: 230,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 18,
    padding: 14,
    marginBottom: 16,
    backgroundColor: "#fff",
  },

  productImage: {
    width: "100%",
    height: 90,
    marginBottom: 12,
  },

  productName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
    marginBottom: 4,
  },

  productMeta: {
    fontSize: 13,
    color: "#7C7C7C",
    marginBottom: 12,
  },

  priceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "auto",
  },

  productPrice: {
    fontSize: 18,
    fontWeight: "700",
    color: "#181725",
  },

  addBtn: {
    width: 38,
    height: 38,
    borderRadius: 12,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  addBtnText: {
    color: "#fff",
    fontSize: 22,
    lineHeight: 22,
    fontWeight: "600",
  },

  emptyBox: {
    width: "100%",
    paddingVertical: 30,
    alignItems: "center",
  },

  emptyText: {
    fontSize: 16,
    color: "#7C7C7C",
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