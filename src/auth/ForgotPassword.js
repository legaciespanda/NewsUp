import React, { memo, useState } from "react";
import { TouchableOpacity, StyleSheet, Text, View, Alert } from "react-native";
import Background from "../ui-component/Background";
import Logo from "../ui-component/Logo";
import Header from "../ui-component/Header";
import Button from "../ui-component/Button";
import TextInput from "../ui-component/TextInput";
import BackButton from "../ui-component/BackButton";
import { theme } from "../core/Theme";
import { emailValidator } from "../core/Utils";
import { __resetPassword } from "../api/Firsebaseauth-api";
import Toast from "../ui-component/Toast";

const ForgotPasswordActivity = ({ navigation }) => {
  const [email, setEmail] = useState({ value: "", error: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const _onLoginPressed = async () => {
    //if (loading) return;

    const emailError = emailValidator(email.value);

    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }

    setLoading(true);

      await __resetPassword(email.value);
            Alert.alert(
              "Passsword Reset Link Sent ✅",
              "Please check your email and click on the link to reset your password",
              [
                {
                  text: "Ok",
                  onPress: () => {
                    return null;
                  },
                },
              ],
              { cancelable: false }
            );
      
    // if (response.error) {
    //   setError(response.error);
    // }
            if (response.error) {
              //setError(response.error);
              setLoading(false);
              navigation.replace("ForgotPasswordActivity");
        }

    setLoading(false);
  };

  return (
    <Background>
      {/* <BackButton goBack={() => navigation.navigate("HomeScreen")} /> */}

      <Logo />

      <Header>Password Reset</Header>

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

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate("ForgotPasswordScreen")}
        >
        </TouchableOpacity>
      </View>

      <Button loading={loading} mode="contained" onPress={_onLoginPressed}>
        Reset Password
      </Button>

      <View style={styles.row}>
        <Text style={styles.label}>Login to your account? </Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("LoginActivity")}
        >
          <Text style={styles.link}>Login</Text>
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

export default memo(ForgotPasswordActivity);
