import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";

const Footer = () => {
  const navigateTo = useNavigation();
  const route = useRoute()
  return (
    <View style={tw`bg-white py-2 px-2 `}>
      <View style={tw`flex-row justify-between px-4 `}>
        <TouchableOpacity style={tw`flex items-center justify-center ${route?.name === "home" && 'bg-blue-100 p-2 rounded-md '}`} onPress={()=>navigateTo.navigate("home")}>
          <Text style={tw`text-blue-500 text-xl pb-1`}>🏠</Text>
          <Text style={tw`text-blue-600 text-base`}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex items-center justify-center ${route?.name === "post" && 'bg-blue-100 p-2 rounded-md '}`} onPress={()=>navigateTo.navigate("post")}>
          <Text style={tw`text-blue-500 text-2xl pb-1`}>➕</Text>
          <Text style={tw`text-blue-600 text-base`}>Post</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex items-center justify-center ${route?.name === "about" && 'bg-blue-100 p-2 rounded-md '}`}  onPress={()=>navigateTo.navigate("about")} >
          {/* <FontAwesome name="info-circle" size={24} color="blue" /> */}
          <Text style={tw`text-blue-500 text-2xl pb-1`}>ℹ️</Text>
          <Text style={tw`text-blue-600 text-base`}>About</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex items-center justify-center ${route?.name === "account" && 'bg-blue-100 py-2 px-1 rounded-md '}`}  onPress={()=>navigateTo.navigate("account")} >
          <Text style={tw`text-blue-500 text-2xl pb-1`}>👤</Text>
          <Text style={tw`text-blue-600 text-base`}>Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
