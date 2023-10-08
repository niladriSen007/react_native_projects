import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const Footer = () => {
  return (
    <View style={tw`bg-white py-3 px-6 rounded-t-3xl`}>
      <View style={tw`flex-row justify-between px-4 `}>
        <TouchableOpacity style={tw`flex items-center justify-center`}>
          <Text style={tw`text-blue-500 text-2xl pb-1`}>🏠</Text>
          <Text style={tw`text-blue-500 text-base`}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex items-center justify-center`}>
          <Text style={tw`text-blue-500 text-2xl pb-1`}>➕</Text>
          <Text style={tw`text-blue-500 text-base`}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex items-center justify-center`}>
          {/* <FontAwesome name="info-circle" size={24} color="blue" /> */}
          <Text style={tw`text-blue-500 text-2xl pb-1`}>ℹ️</Text>
          <Text style={tw`text-blue-500 text-base`}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex items-center justify-center`}>
          <Text style={tw`text-blue-500 text-2xl pb-1`}>👤</Text>
          <Text style={tw`text-blue-500 text-base`}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
