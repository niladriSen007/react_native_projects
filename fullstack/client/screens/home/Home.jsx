import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";

const Home = () => {
  return (
    <LinearGradient
      colors={["#00008B", "#1F75FE"]}
      style={tw` flex-1 relative items-center justify-center`}
      start={{ x: -0.7, y: 0.5 }}
      end={{ x: 0.7, y: 0.9 }}
    >

        <Text>Home</Text>
    </LinearGradient>
  );
};

export default Home;
