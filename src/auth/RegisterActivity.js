import React, { memo, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../ui-component/Background";
import Logo from "../ui-component/Logo";
import Header from "../ui-component/Header";
import Button from "../ui-component/Button";
import TextInput from "../ui-component/TextInput";
import BackButton from "../ui-component/BackButton";
import { theme } from "../core/Theme";
import {
  emailValidator,
  passwordValidator,
  nameValidator,
} from "../core/Utils";
import { signInUser } from "../api/Firsebaseauth-api";
import Toast from "../ui-component/Toast";

const RegisterActivity = ({ navigation }) => {
  const [name, setName] = useState({ value: "", error: "" });
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onSignUpPressed = async () => {
    if (loading) return;

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

    const response = await signInUser({
      name: name.value,
      email: email.value,
      password: password.value,
    });

    if (response.error) {
      setError(response.error);
    }

    setLoading(false);
  };

  return (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate("HomeScreen")} /> */}

      <Logo />

      <Header>Create A DigiWigi Account</Header>

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
        Become A DigiWigi Member
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Already have a DigiWigi account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
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
