import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  SafeAreaView,
  Alert,
  Keyboard,
  Platform,
} from "react-native";

export default function NumberScreen({ navigation }) {
  const inputRef = useRef(null);
  const [phone, setPhone] = useState("");
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

  const handleChangePhone = (text) => {
    const onlyNumbers = text.replace(/[^0-9]/g, "");
    setPhone(onlyNumbers);
  };

  const validatePhone = () => {
    if (!phone.trim()) {
      Alert.alert("Thông báo", "Vui lòng nhập số điện thoại");
      return false;
    }

    if (phone.length < 10 || phone.length > 15) {
      Alert.alert("Thông báo", "Số điện thoại phải từ 10 đến 15 số");
      return false;
    }

    return true;
  };

  const handleNext = () => {
    if (validatePhone()) {
      navigation.navigate("Verification", {
        phone: `+880${phone}`,
      });
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
        <Text style={styles.title}>Enter your mobile number</Text>

        <Text style={styles.label}>Mobile Number</Text>

        <View style={styles.inputRow}>
          <View style={styles.codeBox}>
            <Image
              source={require("../images/flag.png")}
              style={styles.flag}
              resizeMode="contain"
            />
            <Text style={styles.code}>+880</Text>
          </View>

          <TextInput
            ref={inputRef}
            style={styles.input}
            value={phone}
            onChangeText={handleChangePhone}
            keyboardType="number-pad"
            placeholder=""
            autoFocus={false}
            returnKeyType="done"
            maxLength={15}
          />
        </View>

        <View style={styles.line} />
      </View>

      <TouchableOpacity
        style={[
          styles.nextButton,
          {
            bottom: keyboardHeight > 0 ? keyboardHeight + 12 : 40,
          },
        ]}
        onPress={handleNext}
      >
        <Text style={styles.nextText}>›</Text>
      </TouchableOpacity>
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
    paddingTop: 70,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#181725",
    marginBottom: 34,
  },

  label: {
    fontSize: 16,
    color: "#7C7C7C",
    marginBottom: 14,
  },

  inputRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  codeBox: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10,
    paddingVertical: 8,
  },

  flag: {
    width: 20,
    height: 14,
    marginRight: 6,
  },

  code: {
    fontSize: 16,
    color: "#181725",
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: "#181725",
    paddingVertical: 8,
  },

  line: {
    height: 1,
    backgroundColor: "#E2E2E2",
    marginTop: 8,
  },

  nextButton: {
    position: "absolute",
    right: 24,
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