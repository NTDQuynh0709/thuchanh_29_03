import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";

export default function ProductDetailScreen({ navigation }) {
  const [quantity, setQuantity] = useState(1);

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.topSection}>
          <View style={styles.headerRow}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.headerIcon}>‹</Text>
            </TouchableOpacity>

            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.headerIcon}>⤴</Text>
            </TouchableOpacity>
          </View>

          <Image
            source={require("../images/apple.png")}
            style={styles.productImage}
            resizeMode="contain"
          />

          <View style={styles.dotsRow}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.titleRow}>
            <View>
              <Text style={styles.productName}>Naturel Red Apple</Text>
              <Text style={styles.productSub}>1kg, Price</Text>
            </View>

            <TouchableOpacity activeOpacity={0.8}>
              <Text style={styles.heartIcon}>♡</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.qtyPriceRow}>
            <View style={styles.qtyRow}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={decreaseQty}
                style={styles.qtyAction}
              >
                <Text style={styles.minusText}>−</Text>
              </TouchableOpacity>

              <View style={styles.qtyBox}>
                <Text style={styles.qtyText}>{quantity}</Text>
              </View>

              <TouchableOpacity
                activeOpacity={0.8}
                onPress={increaseQty}
                style={styles.qtyAction}
              >
                <Text style={styles.plusText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.price}>$4.99</Text>
          </View>

          <View style={styles.divider} />

          <TouchableOpacity activeOpacity={0.8} style={styles.infoRow}>
            <Text style={styles.infoTitle}>Product Detail</Text>
            <Text style={styles.arrowDown}>⌄</Text>
          </TouchableOpacity>

          <Text style={styles.description}>
            Apples Are Nutritious. Apples May Be Good For Weight Loss.
            Apples May Be Good For Your Heart. As Part Of A Healthful
            And Varied Diet.
          </Text>

          <View style={styles.divider} />

          <TouchableOpacity activeOpacity={0.8} style={styles.infoRow}>
            <Text style={styles.infoTitle}>Nutritions</Text>

            <View style={styles.rightRow}>
              <View style={styles.badge}>
                <Text style={styles.badgeText}>100gr</Text>
              </View>
              <Text style={styles.arrowRight}>›</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.divider} />

          <TouchableOpacity activeOpacity={0.8} style={styles.infoRow}>
            <Text style={styles.infoTitle}>Review</Text>

            <View style={styles.rightRow}>
              <Text style={styles.stars}>★★★★★</Text>
              <Text style={styles.arrowRight}>›</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} activeOpacity={0.85}>
            <Text style={styles.buttonText}>Add To Basket</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FCFCFC",
  },

  scrollContent: {
    paddingBottom: 24,
  },

  topSection: {
    backgroundColor: "#F2F3F2",
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 24,
  },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginBottom: 12,
  },

  headerIcon: {
    fontSize: 28,
    color: "#181725",
  },

  productImage: {
    width: 255,
    height: 200,
    alignSelf: "center",
    marginBottom: 14,
  },

  dotsRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#D9D9D9",
    marginHorizontal: 3,
  },

  activeDot: {
    width: 16,
    backgroundColor: "#53B175",
  },

  content: {
    paddingHorizontal: 24,
  },

  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 22,
  },

  productName: {
    fontSize: 30,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 6,
  },

  productSub: {
    fontSize: 16,
    color: "#7C7C7C",
  },

  heartIcon: {
    fontSize: 28,
    color: "#7C7C7C",
    marginTop: 4,
  },

  qtyPriceRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 22,
  },

  qtyRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  qtyAction: {
    width: 28,
    alignItems: "center",
    justifyContent: "center",
  },

  minusText: {
    fontSize: 28,
    color: "#B3B3B3",
    fontWeight: "400",
  },

  plusText: {
    fontSize: 28,
    color: "#53B175",
    fontWeight: "400",
  },

  qtyBox: {
    width: 46,
    height: 46,
    borderWidth: 1,
    borderColor: "#E2E2E2",
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 12,
  },

  qtyText: {
    fontSize: 18,
    color: "#181725",
    fontWeight: "600",
  },

  price: {
    fontSize: 30,
    fontWeight: "700",
    color: "#181725",
  },

  divider: {
    height: 1,
    backgroundColor: "#E2E2E2",
  },

  infoRow: {
    height: 56,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  infoTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#181725",
  },

  arrowDown: {
    fontSize: 24,
    color: "#181725",
  },

  arrowRight: {
    fontSize: 26,
    color: "#181725",
    marginLeft: 10,
  },

  description: {
    fontSize: 14,
    lineHeight: 22,
    color: "#7C7C7C",
    marginBottom: 14,
  },

  rightRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  badge: {
    minWidth: 42,
    height: 20,
    borderRadius: 7,
    backgroundColor: "#EBEBEB",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 6,
  },

  badgeText: {
    fontSize: 9,
    color: "#7C7C7C",
    fontWeight: "600",
  },

  stars: {
    fontSize: 16,
    color: "#F3603F",
    letterSpacing: 1,
  },

  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 26,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});