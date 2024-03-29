import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import Background from "../ui-component/Background";
import Logo from "../ui-component/Logo";
import Header from "../ui-component/Header";
import Button from "../ui-component/Button";
import TextInput from "../ui-component/TextInput";
import BackButton from "../ui-component/BackButton";
import { theme } from "../core/Theme";
import { emailValidator, passwordValidator } from "../core/Utils";
import { signInUser } from "../api/Firsebaseauth-api";
import Toast from "../ui-component/Toast";

import AsyncStorage from "@react-native-async-storage/async-storage";

const LoginActivity = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onLoginPressed = async () => {
    //if (loading) return;

    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    await signInUser({
      email: email.value,
      password: password.value,
    });
    setLoading(true);

    // if (response.error) {
    //   setError(response.error);
    // }

        if (response.error) {
          //setError(response.error);
          setLoading(false);
          navigation.replace("Auth");
        }
    navigation.replace("NavigationComponent");

    //setLoading(false);
  };

  const loginAsGuest = async () => {
    let value = "yes";
    try {
        await AsyncStorage.setItem('@guest_login', value)
      } catch (e) {
        // saving error
      console.log(e);
      }
    navigation.replace("NavigationComponent");
  }

  return (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate("HomeScreen")} /> */}

      <Logo />

      <Header>Welcome back to NewsUp</Header>

      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: "" })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
      />

      <TextInput
        label="Password"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text) => setPassword({ value: text, error: "" })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        autoCapitalize="none"
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordActivity")}
        >
          <Text style={styles.label}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>

      <Button loading={loading} mode="contained" onPress={_onLoginPressed}>
        Login to NewsUp
      </Button>

      <Button mode="contained" onPress={loginAsGuest}>
        Skip Login
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterActivity")}
        >
          <Text style={styles.link}>Sign up on NewsUp</Text>
        </TouchableOpacity>
      </View>

      <Toast message={error} onDismiss={() => setError("")} />
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  label: {
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default memo(LoginActivity);
