import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

export default function BeveragesScreen({ navigation }) {
  const data = [
    {
      id: "1",
      name: "Diet Coke",
      sub: "355ml, Price",
      price: "$1.99",
      image: require("../images/diet_coke.png"),
    },
    {
      id: "2",
      name: "Sprite Can",
      sub: "325ml, Price",
      price: "$1.50",
      image: require("../images/sprite.png"),
    },
    {
      id: "3",
      name: "Apple & Grape Juice",
      sub: "2L, Price",
      price: "$15.99",
      image: require("../images/apple_grape_juice.png"),
    },
    {
      id: "4",
      name: "Orange Juice",
      sub: "2L, Price",
      price: "$15.99",
      image: require("../images/orange_juice.png"),
    },
    {
      id: "5",
      name: "Coca Cola Can",
      sub: "325ml, Price",
      price: "$4.99",
      image: require("../images/cocacola.png"),
    },
    {
      id: "6",
      name: "Pepsi Can",
      sub: "330ml, Price",
      price: "$4.99",
      image: require("../images/pepsi.png"),
    },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} activeOpacity={0.85}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />

      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.sub}>{item.sub}</Text>

      <View style={styles.bottomRow}>
        <Text style={styles.price}>{item.price}</Text>

        <TouchableOpacity style={styles.addBtn} activeOpacity={0.8}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.headerIcon}>‹</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Beverages</Text>

        <TouchableOpacity activeOpacity={0.8}>
          <Text style={styles.headerIcon}>⚙</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={styles.columnWrapper}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },

  header: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginTop: 4,
  },

  headerIcon: {
    fontSize: 28,
    color: "#181725",
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
  },

  listContent: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 24,
  },

  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16,
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    paddingHorizontal: 14,
    paddingTop: 18,
    paddingBottom: 14,
  },

  image: {
    width: 85,
    height: 95,
    alignSelf: "center",
    marginBottom: 12,
  },

  name: {
    fontSize: 16,
    fontWeight: "600",
    color: "#181725",
    marginBottom: 4,
    minHeight: 40,
  },

  sub: {
    fontSize: 13,
    color: "#7C7C7C",
    marginBottom: 14,
  },

  bottomRow: {
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
    width: 42,
    height: 42,
    borderRadius: 14,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  plus: {
    fontSize: 24,
    color: "#fff",
    lineHeight: 24,
  },
});