import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  Image,
  ScrollView,
  Platform,
} from "react-native";

export default function SignUpScreen({ navigation }) {
  const [username, setUsername] = useState("Afsar Hossen Shuvo");
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
  navigation.replace("Home"); // hoặc navigate
};

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        bounces={false}
        
      >
        <Image
          source={require("../images/logo2.png")}
          style={styles.logo}
          resizeMode="contain"
        />

        <View style={styles.content}>
          <Text style={styles.title}>Sign Up</Text>
          <Text style={styles.subtitle}>Enter your credentials to continue</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="Enter your username"
              placeholderTextColor="#B1B1B1"
            />
            <View style={styles.line} />

            <Text style={[styles.label, styles.fieldGap]}>Email</Text>
            <View style={styles.row}>
              <TextInput
                style={styles.rowInput}
                value={email}
                onChangeText={setEmail}
                placeholder="Enter your email"
                placeholderTextColor="#B1B1B1"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Text style={styles.checkIcon}>✓</Text>
            </View>
            <View style={styles.line} />

            <Text style={[styles.label, styles.fieldGap]}>Password</Text>
            <View style={styles.row}>
              <TextInput
                style={styles.rowInput}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor="#B1B1B1"
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                activeOpacity={0.8}
                style={styles.eyeButton}
              >
                <Text style={styles.eyeText}>{showPassword ? "🙈" : "👁"}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.line} />

            <Text style={styles.termsText}>
              By continuing you agree to our{" "}
              <Text style={styles.greenText}>Terms of Service</Text>
              {"\n"}and <Text style={styles.greenText}>Privacy Policy</Text>.
            </Text>
          </View>
        </View>

        <View style={styles.bottomArea}>
          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleSignUp}
            activeOpacity={0.85}
          >
            <Text style={styles.signupButtonText}>Sing Up</Text>
          </TouchableOpacity>

          <View style={styles.loginRow}>
            <Text style={styles.loginText}>Already have an account? </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.loginLink}>Signup</Text>
            </TouchableOpacity>
          </View>
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
    minHeight: "100%",
    paddingHorizontal: 24,
    paddingTop: Platform.OS === "android" ? 42 : 24,
    paddingBottom: 26,
  },

  logo: {
    width: 52,
    height: 52,
    alignSelf: "center",
    marginTop: 18,
    marginBottom: 72,
  },

  content: {
    marginBottom: 70,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 10,
  },

  subtitle: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 34,
  },

  form: {},

  label: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 10,
  },

  fieldGap: {
    marginTop: 26,
  },

  input: {
    fontSize: 16,
    color: "#181725",
    paddingVertical: 8,
    marginBottom: 4,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 4,
  },

  rowInput: {
    flex: 1,
    fontSize: 16,
    color: "#181725",
    paddingVertical: 8,
  },

  line: {
    height: 1,
    backgroundColor: "#E2E2E2",
  },

  checkIcon: {
    fontSize: 22,
    color: "#53B175",
    fontWeight: "700",
    marginLeft: 8,
  },

  eyeButton: {
    width: 30,
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 8,
  },

  eyeText: {
    fontSize: 18,
  },

  termsText: {
    fontSize: 14,
    lineHeight: 22,
    color: "#7C7C7C",
    marginTop: 16,
  },

  greenText: {
    color: "#53B175",
  },

  bottomArea: {
    marginTop: 0,
  },

  signupButton: {
    height: 58,
    borderRadius: 18,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },

  signupButtonText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },

  loginRow: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  loginText: {
    fontSize: 14,
    color: "#181725",
  },

  loginLink: {
    fontSize: 14,
    color: "#53B175",
    fontWeight: "600",
  },
});