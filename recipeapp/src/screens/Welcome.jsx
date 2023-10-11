import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";


const Welcome = () => {

    const navigation = useNavigation();



  return (
    <LinearGradient
      colors={["#00008B", "#1F75FE"]}
      style={tw` flex-1 relative items-center justify-center `}
      start={{ x: -0.7, y: 0.5 }}
      end={{ x: 0.7, y: 0.9 }}
    >
      <View style={tw`bg-white/20 rounded-full p-8 `}>
        <View style={tw`bg-white/20 rounded-full p-6`}>
          <Image
            source={require("../../assets/images/welcome.png")}
            style={tw`w-52 h-52`}
          />
        </View>
      </View>

      <View style={tw`flex items-center justify-center py-5`}>
        <Text style={tw`text-white text-5xl  font-bold`}>Foodiez.</Text>
        <Text style={tw`text-white text-xl`}>Eat Breath Sleep Repeat 🍒</Text>
        <TouchableOpacity style={tw`bg-white rounded-md p-3 absolute top-32 z-50  `} onPress={()=>navigation.navigate("home")}>
            <Text style={tw`text-blue-700 font-bold text-xl`}>Explore Now</Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
};

export default Welcome;
