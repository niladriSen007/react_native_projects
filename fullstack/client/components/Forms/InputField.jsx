import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";

const InputField = ({
  label,
  autoCorrect = false,
  autoComplete,
  secureTextEntry = false,
  keyboardType,
  name,
  value,
  setValue,
}) => {


//   const handleChange = (e) => {
//     // const {name, value : val} = e.target;
//     console.log(e)
//     setValue((prevVal) => ({
//       ...prevVal,
//       [e?.target?.name]: e?.target?.value,
//     }));
//   };

  return (
    <View style={tw`pb-4`}>
      <TextInput
        onChangeText={(text)=>setValue(text)}
        name={name}
        value={value}
        style={tw`h-14 text-base bg-gray-100 w-80 rounded-full px-4`}
        keyboardType={keyboardType}
        autoCorrect={autoCorrect}
        autoComplete={autoComplete}
        secureTextEntry={secureTextEntry}
        placeholder={` Enter Your ${label}`}
      ></TextInput>
    </View>
  );
};

export default InputField;
