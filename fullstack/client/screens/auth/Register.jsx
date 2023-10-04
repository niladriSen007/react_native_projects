import { View, Text} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import InputField from "../../components/Forms/InputField";
import ButtonNew from "../../components/Forms/ButtonNew";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
            label={"Name"}
            value={name}
            name={"name"}
            setValue={setName}
          />
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
      <ButtonNew />
      </View>
      {/* </View> */}
    </LinearGradient>
  );
};

export default Register;
