import React, { useEffect, useState } from "react";
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
  ActivityIndicator,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("imshuvo97@gmail.com");
  const [password, setPassword] = useState("12345678");
  const [showPassword, setShowPassword] = useState(false);
  const [checkingLogin, setCheckingLogin] = useState(true);

  useEffect(() => {
    checkAutoLogin();
  }, []);

  const checkAutoLogin = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      const user = await AsyncStorage.getItem("user");

      if (token && user) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
        return;
      }
    } catch (error) {
      console.log("Auto login error:", error);
    }

    setCheckingLogin(false);
  };

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        alert("Vui lòng nhập email và password");
        return;
      }

      const fakeToken = "abc123token";
      const fakeUser = {
        email,
        name: "User Demo",
      };

      await AsyncStorage.setItem("token", fakeToken);
      await AsyncStorage.setItem("user", JSON.stringify(fakeUser));

      navigation.reset({
        index: 0,
        routes: [{ name: "Home" }],
      });
    } catch (error) {
      console.log("Login error:", error);
      alert("Đăng nhập thất bại");
    }
  };

  if (checkingLogin) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#53B175" />
      </SafeAreaView>
    );
  }

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
          <Text style={styles.title}>Login</Text>
          <Text style={styles.subtitle}>Nguyễn Thị Diễm Quỳnh-23810310350</Text>

          <Text style={styles.subtitle}>Enter your emails and password</Text>

          <View style={styles.form}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="Enter your email"
              placeholderTextColor="#B1B1B1"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={styles.line} />

            <Text style={[styles.label, styles.passwordLabel]}>Password</Text>

            <View style={styles.passwordRow}>
              <TextInput
                style={styles.passwordInput}
                value={password}
                onChangeText={setPassword}
                placeholder="Enter your password"
                placeholderTextColor="#B1B1B1"
                secureTextEntry={!showPassword}
                autoCorrect={false}
              />

              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                activeOpacity={0.8}
                style={styles.eyeButton}
              >
                <Text style={styles.eyeFallback}>
                  {showPassword ? "🙈" : "👁"}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.line} />
          </View>
        </View>

        <View style={styles.bottomArea}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.85}
          >
            <Text style={styles.loginText}>Log In</Text>
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
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    marginTop: 20,
    marginBottom: 72,
  },
  content: {
    marginBottom: 80,
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
  label: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 10,
  },
  passwordLabel: {
    marginTop: 28,
  },
  input: {
    fontSize: 16,
    color: "#181725",
    paddingVertical: 8,
    marginBottom: 4,
  },
  passwordRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 4,
  },
  passwordInput: {
    flex: 1,
    fontSize: 16,
    color: "#181725",
    paddingVertical: 8,
  },
  eyeButton: {
    width: 30,
    alignItems: "flex-end",
    justifyContent: "center",
    marginLeft: 8,
  },
  eyeFallback: {
    fontSize: 18,
    color: "#7C7C7C",
  },
  line: {
    height: 1,
    backgroundColor: "#E2E2E2",
  },
  bottomArea: {
    marginTop: 0,
  },
  loginButton: {
    height: 58,
    borderRadius: 18,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  loginText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "600",
  },
});