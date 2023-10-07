import { View, Text, Alert } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import InputField from "../../components/Forms/InputField";
import ButtonNew from "../../components/Forms/ButtonNew";
import { Link } from "@react-navigation/native";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);
    try {
      if (!email || !password) {
        Alert.alert("Please fill all the details");
        setLoading(false);
        return;
      }
      console.log(name);
      Alert.alert("Success", "You have successfully registered");
      setLoading(false);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };

  return (
    <LinearGradient
      colors={["#00008B", "#1F75FE"]}
      style={tw` flex-1 relative items-center justify-center`}
      start={{ x: -0.7, y: 0.5 }}
      end={{ x: 0.7, y: 0.9 }}
    >
      {/* <View style={tw`bg-slate-900 flex-1 items-center justify-center`}> */}
      {/* <Text>Register123</Text> */}
      <View
        style={tw`w-full bg-white h-[480px] rounded-t-3xl absolute bottom-0 flex-1 items-center justify-center`}
      >
        <Text style={tw`text-5xl font-extrabold text-blue-600 `}>SKOUT</Text>
        <View style={tw`px-4 items-center justify-center flex pt-8 pb-4`}>
          <InputField
            label={"Email"}
            keyboardType="email-address"
            autoComplete={"email"}
            value={email}
            name={"email"}
            setValue={setEmail}
          />
          <InputField
            label={"Password"}
            autoComplete={"password"}
            secureTextEntry={true}
            value={password}
            name={"password"}
            setValue={setPassword}
          />
        </View>
        <ButtonNew
          title={"Login"}
          handleSubmit={handleSubmit}
          loading={loading}
        />
        <Link to={{ screen: "register" }} style={tw`py-3`}>
          <Text style={tw`text-blue-500 underline text-lg`}>
            Didn't have an account ?{" "}
          </Text>
        </Link>
      </View>
      {/* </View> */}
    </LinearGradient>
  );
};

export default Login;
