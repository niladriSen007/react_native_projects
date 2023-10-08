import { View, Text } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/authContext";
import Footer from "../Menus/Footer";
import Header from "../Menus/Header";

const Home = () => {
  const [user, setUser] = useContext(AuthContext);
  console.log("User " + user?.user?.userName);
  const loggedinUser = user?.user?.userName;
  return (
    <LinearGradient
      colors={["#00008B", "#1F75FE"]}
      style={tw` flex-1 relative  `}
      start={{ x: -0.7, y: 0.5 }}
      end={{ x: 0.7, y: 0.9 }}
    >
      <View style={tw`absolute top-0 w-full z-50`}>
        <Header />
      </View>
      <Text style={tw`text-white font-bold text-2xl py-26 px-4`}>
        Welcome {loggedinUser}
      </Text>
      <View style={tw`absolute bottom-0 w-full`}>
        <Footer />
      </View>
    </LinearGradient>
  );
};

export default Home;
