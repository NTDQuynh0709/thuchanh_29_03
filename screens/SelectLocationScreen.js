import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  Platform,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function SelectLocationScreen({ navigation }) {
  const [zone, setZone] = useState("Banasree");
  const [area, setArea] = useState("");

  const handleSubmit = () => {
  navigation.replace("Login");
};

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
        activeOpacity={0.8}
      >
        <Ionicons name="chevron-back" size={26} color="#181725" />
        {/* Nếu icon không hiện thì dùng tạm dòng dưới */}
        {/* <Text style={styles.backText}>←</Text> */}
      </TouchableOpacity>

      <View style={styles.content}>
        <Image
          source={require("../images/map.png")}
          style={styles.mapImage}
          resizeMode="contain"
        />

        <Text style={styles.title}>Select Your Location</Text>

        <Text style={styles.subtitle}>
          Switch on your location to stay in tune with{"\n"}
          what’s happening in your area
        </Text>

        <View style={styles.form}>
          <Text style={styles.label}>Your Zone</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={zone}
              onChangeText={setZone}
              placeholder="Your zone"
              placeholderTextColor="#B1B1B1"
            />
            <Ionicons name="chevron-down" size={18} color="#7C7C7C" />
          </View>

          <Text style={[styles.label, styles.secondLabel]}>Your Area</Text>
          <View style={styles.inputRow}>
            <TextInput
              style={styles.input}
              value={area}
              onChangeText={setArea}
              placeholder="Types of your area"
              placeholderTextColor="#B1B1B1"
            />
            <Ionicons name="chevron-down" size={18} color="#7C7C7C" />
          </View>
        </View>
      </View>

      <View style={styles.bottomWrap}>
        <TouchableOpacity
          style={styles.submitButton}
          onPress={handleSubmit}
          activeOpacity={0.85}
        >
          <Text style={styles.submitText}>Submit</Text>
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

  backButton: {
    position: "absolute",
    top: Platform.OS === "android" ? 18 : 10,
    left: 18,
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 99,
  },

  backText: {
    fontSize: 28,
    color: "#181725",
    fontWeight: "600",
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    alignItems: "center",
    paddingTop: 70,
  },

  mapImage: {
    width: 220,
    height: 170,
    marginTop: 28,
    marginBottom: 24,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#181725",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 15,
    lineHeight: 22,
    color: "#7C7C7C",
    textAlign: "center",
    marginBottom: 85,
  },

  form: {
    width: "100%",
  },

  label: {
    fontSize: 15,
    color: "#7C7C7C",
    marginBottom: 10,
  },

  secondLabel: {
    marginTop: 28,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E2E2E2",
    paddingBottom: 10,
  },

  input: {
    flex: 1,
    fontSize: 16,
    color: "#181725",
    paddingVertical: 4,
  },

  bottomWrap: {
    paddingHorizontal: 24,
    paddingBottom: 36,
  },

  submitButton: {
    height: 58,
    borderRadius: 18,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  submitText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});