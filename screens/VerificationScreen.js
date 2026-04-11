import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  Alert,
  Keyboard,
  Platform,
} from "react-native";

export default function VerificationScreen({ navigation }) {
  const [code, setCode] = useState("");
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  useEffect(() => {
    const showEvent =
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow";
    const hideEvent =
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide";

    const showSub = Keyboard.addListener(showEvent, (e) => {
      setKeyboardHeight(e.endCoordinates?.height || 0);
    });

    const hideSub = Keyboard.addListener(hideEvent, () => {
      setKeyboardHeight(0);
    });

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);

  const handleChangeCode = (text) => {
    const onlyNumbers = text.replace(/[^0-9]/g, "");
    setCode(onlyNumbers);
  };

  const validateCode = () => {
    if (!code.trim()) {
      Alert.alert("Thông báo", "Vui lòng nhập mã xác nhận");
      return false;
    }

    if (code.length !== 4) {
      Alert.alert("Thông báo", "Mã xác nhận phải đủ 4 số");
      return false;
    }

    return true;
  };

  const handleNext = () => {
  if (validateCode()) {
    console.log("OTP:", code);
    navigation.navigate("SelectLocation");
  }
};

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backText}>‹</Text>
      </TouchableOpacity>

      <View style={styles.content}>
        <Text style={styles.title}>Enter your 4-digit code</Text>

        <Text style={styles.label}>Code</Text>

        <TextInput
          style={styles.input}
          value={code}
          onChangeText={handleChangeCode}
          keyboardType="number-pad"
          maxLength={4}
          placeholder="- - - -"
          placeholderTextColor="#181725"
          autoFocus={false}
        />

        <View style={styles.line} />
      </View>

      <View
        style={[
          styles.bottomRow,
          {
            bottom: keyboardHeight > 0 ? keyboardHeight + 12 : 40,
          },
        ]}
      >
        <TouchableOpacity>
          <Text style={styles.resendText}>Resend Code</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
          <Text style={styles.nextText}>›</Text>
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
    marginTop: 10,
    marginLeft: 20,
    width: 30,
  },

  backText: {
    fontSize: 34,
    color: "#181725",
  },

  content: {
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 32,
  },

  label: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 12,
  },

  input: {
    fontSize: 22,
    color: "#181725",
    paddingVertical: 8,
    letterSpacing: 6,
  },

  line: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginTop: 8,
  },

  bottomRow: {
    position: "absolute",
    left: 24,
    right: 24,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  resendText: {
    color: "#53B175",
    fontSize: 16,
    fontWeight: "500",
  },

  nextButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#53B175",
    justifyContent: "center",
    alignItems: "center",
  },

  nextText: {
    fontSize: 34,
    color: "#fff",
    lineHeight: 36,
    marginTop: -2,
  },
});