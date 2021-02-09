import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Alert } from "react-native";
import Background from "../ui-component/Background";
import Logo from "../ui-component/Logo";
import Header from "../ui-component/Header";
import Button from "../ui-component/Button";
import TextInput from "../ui-component/TextInput";
import { theme } from "../core/Theme";
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from "../core/Utils";


import { registerUser, createUserData } from "../api/Firsebaseauth-api";

import Toast from "../ui-component/Toast";

const RegisterActivity = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onSignUpPressed = async () => {
    //if (loading) return;

    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);

    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }

    setLoading(true);

    createUserData({
      email: email.value,
      password: password.value,
      name: name.value,
    });
    
    await registerUser({
      email: email.value,
      password: password.value,
      name: name.value,
    });
      if (response.error) {
        //setError(response.error);
        setLoading(false);
        navigation.replace("Auth");
      }
      Alert.alert(
              "Thanks For Registering",
              "Your NewsUp account has been successfully created. Please login to use the application",
              [
                {
                  text: "Ok",
                  onPress: () => {
                    return null;
                  },
                },
              ],
              { cancelable: false }
            )
    // if (response.error) {
    //   setError(response.error);
    // }

    navigation.replace("NavigationComponent")

    setLoading(false);
  };

  return (
    <Background>
      <Logo />

      <Header>Create A NewsUp Account</Header>

      <TextInput
        label="Name"
        returnKeyType="next"
        value={name.value}
        onChangeText={(text) => setName({ value: text, error: "" })}
        error={!!name.error}
        errorText={name.error}
      />

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

      <Button
        loading={loading}
        mode="contained"
        onPress={_onSignUpPressed}
        style={styles.button}
      >
        Become A NewsUp Member
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have a NewsUp account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginActivity")}>
          <Text style={styles.link}>Login</Text>
        </TouchableOpacity>
      </View>

      <Toast message={error} onDismiss={() => setError("")} />
    </Background>
  );
};

const styles = StyleSheet.create({
  label: {
    color: theme.colors.secondary,
  },
  button: {
    marginTop: 24,
  },
  row: {
    flexDirection: "row",
    marginTop: 4,
  },
  link: {
    fontWeight: "bold",
    color: theme.colors.primary,
  },
});

export default memo(RegisterActivity);
