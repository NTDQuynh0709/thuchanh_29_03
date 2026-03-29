
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
export default function ExploreScreen({ navigation }) {
    const [activeTab, setActiveTab] = useState("Explore");
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

  const onPressCategory = (item) => {
    if (item.screen) {
      navigation.navigate(item.screen);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.title}>Find Products</Text>

        <View style={styles.searchBox}>
          <Text style={styles.searchIcon}>⌕</Text>
          <TextInput
            placeholder="Search Store"
            placeholderTextColor="#7C7C7C"
            style={styles.searchInput}
          />
        </View>

        <View style={styles.grid}>
          {categories.map((item) => (
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
          ))}
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
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },

  scrollContent: {
    paddingHorizontal: 24,
    paddingTop: 18,
    paddingBottom: 30,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
    marginBottom: 20,
  },

  searchBox: {
    height: 52,
    borderRadius: 14,
    backgroundColor: "#F2F3F2",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 14,
    marginBottom: 18,
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