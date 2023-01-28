import React, { useState } from "react";
import { Text, SafeAreaView, TextInput, TouchableOpacity } from "react-native";
import globalStyle from "../styleFiles/globalStyle";

const Login = (props) => {
  const [email, setemail] = useState("");
  const [pass, setpass] = useState("");

  const navigateIn = async () => {
    if (email == "sohil@gmail.com" && pass == "sohil1998") {
      props.navigation.navigate("home");
    } else {
      alert("Please enter correct email and password");
    }
  };
  return (
    <SafeAreaView style={[globalStyle.screenStyle, globalStyle.centerStyle]}>
      <TextInput
        style={[
          globalStyle.textInputStyle,
          globalStyle.borderStyle,
          globalStyle.textStyleMid,
        ]}
        placeholder="Email"
        onChangeText={(v) => {
          setemail(v);
        }}
      />

      <TextInput
        style={[
          globalStyle.textInputStyle,
          globalStyle.borderStyle,
          globalStyle.marginTopLevel1,
          globalStyle.textStyleMid,
        ]}
        secureTextEntry
        placeholder="Password"
        onChangeText={(v) => {
          setpass(v);
        }}
      />

      <TouchableOpacity
        onPress={() => {
          navigateIn();
        }}
        style={[
          globalStyle.buttonStyle,
          globalStyle.borderStyle,

          { borderWidth: null },
        ]}
      >
        <Text style={[globalStyle.textStyleMid]}>LOGIN</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Login;
