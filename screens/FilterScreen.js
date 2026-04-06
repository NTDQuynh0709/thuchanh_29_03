import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  Platform,
  StatusBar,
} from "react-native";

export default function FilterScreen({ navigation, route }) {
  const [selectedCategories, setSelectedCategories] = useState(
    route.params?.selectedCategories || []
  );
  const [selectedBrands, setSelectedBrands] = useState(
    route.params?.selectedBrands || []
  );

  const categoryOptions = [
    "Eggs",
    "Noodles & Pasta",
    "Chips & Crisps",
    "Fast Food",
  ];

  const brandOptions = [
    "Individual Collection",
    "Cocola",
    "Ifad",
    "Kazi Farms",
  ];

  const toggleItem = (value, list, setList) => {
    if (list.includes(value)) {
      setList(list.filter((item) => item !== value));
    } else {
      setList([...list, value]);
    }
  };

  const handleApply = () => {
    navigation.navigate("Explore", {
      selectedCategories,
      selectedBrands,
    });
  };

  const renderCheckItem = (label, checked, onPress, keyValue) => {
    return (
      <TouchableOpacity key={keyValue} style={styles.optionRow} onPress={onPress}>
        <View style={[styles.checkbox, checked && styles.checkedBox]}>
          {checked && <Text style={styles.checkText}>✓</Text>}
        </View>
        <Text style={[styles.optionText, checked && styles.activeText]}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.closeIcon}>✕</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Filters</Text>

        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        <View style={styles.panel}>
          <Text style={styles.sectionTitle}>Categories</Text>

          {categoryOptions.map((item, index) =>
            renderCheckItem(
              item,
              selectedCategories.includes(item),
              () => toggleItem(item, selectedCategories, setSelectedCategories),
              `category-${index}-${item}`
            )
          )}

          <Text style={[styles.sectionTitle, { marginTop: 32 }]}>Brand</Text>

          {brandOptions.map((item, index) =>
            renderCheckItem(
              item,
              selectedBrands.includes(item),
              () => toggleItem(item, selectedBrands, setSelectedBrands),
              `brand-${index}-${item}`
            )
          )}
        </View>
      </ScrollView>

      <View style={styles.bottomArea}>
        <TouchableOpacity style={styles.applyBtn} onPress={handleApply}>
          <Text style={styles.applyBtnText}>Apply Filter</Text>
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

  header: {
    height: 64,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 24,
    backgroundColor: "#FCFCFC",
  },

  closeIcon: {
    fontSize: 24,
    color: "#181725",
    fontWeight: "500",
  },

  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
    color: "#181725",
  },

  content: {
    paddingHorizontal: 16,
    paddingTop: 14,
    paddingBottom: 30,
  },

  panel: {
    backgroundColor: "#F2F3F2",
    borderRadius: 28,
    paddingHorizontal: 22,
    paddingTop: 28,
    paddingBottom: 34,
    minHeight: 620,
  },

  sectionTitle: {
    fontSize: 26,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 22,
  },

  optionRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 22,
  },

  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 8,
    borderWidth: 1.5,
    borderColor: "#B1B1B1",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 14,
    backgroundColor: "#fff",
  },

  checkedBox: {
    backgroundColor: "#53B175",
    borderColor: "#53B175",
  },

  checkText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "700",
  },

  optionText: {
    fontSize: 18,
    color: "#181725",
  },

  activeText: {
    color: "#53B175",
    fontWeight: "500",
  },

  bottomArea: {
    paddingHorizontal: 24,
    paddingBottom: 28,
    paddingTop: 12,
    backgroundColor: "#FCFCFC",
  },

  applyBtn: {
    height: 62,
    borderRadius: 18,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  applyBtnText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});