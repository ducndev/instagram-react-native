import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  Alert,
  View,
} from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { firebase } from "../../firebase";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(8, "Your password has to have at least 8 characters"),
  });

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("Firebase Login Successfully!", email, password);
    } catch (error) {
      Alert.alert(
        "Something Went Wrong!",
        error.message + "\n\n What would you like to do next?",
        [
          {
            text: "OK",
            onPress: () => console.log("OK"),
            style: "cancel",
          },
          { text: "Sign Up", onPress: () => navigation.push("SignUpScreen") },
        ]
      );
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => onLogin(values.email, values.password)}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username or email"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={false}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
              {/* <TextInput /> */}
            </View>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 8
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                textContentType="password"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {/* <TextInput /> */}
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <Text style={{ color: "#6bb0f5" }}>Forgot password?</Text>
            </View>
            <Pressable style={styles.button(isValid)} onPress={handleSubmit}>
              <Text style={{ color: "white", fontWeight: "bold" }}>Log in</Text>
            </Pressable>
            <View style={styles.signUpContainer}>
              <Text>Don't have an account?</Text>
              <TouchableOpacity onPress={() => navigation.push("SignUpScreen")}>
                <Text style={{ color: "#6bb0f5" }}> Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#fafafa",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096f6" : "#9acaf7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 32,
    padding: 15,
    borderRadius: 4,
  }),
  signUpContainer: {
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default LoginForm;
