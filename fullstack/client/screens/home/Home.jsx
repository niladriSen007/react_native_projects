import { View, Text } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { AuthContext } from "../../context/authContext";
import Footer from "../Menus/Footer";

const Home = () => {
  const [user, setUser] = useContext(AuthContext);
  console.log("User " + user?.user?.userName);
  const loggedinUser = user?.user?.userName;
  return (
    <LinearGradient
      colors={["#00008B", "#1F75FE"]}
      style={tw` flex-1 relative items-center justify-center `}
      start={{ x: -0.7, y: 0.5 }}
      end={{ x: 0.7, y: 0.9 }}
    >
      <Text style={tw`text-white font-bold text-4xl`}>
        Welcome {loggedinUser}
      </Text>
      <View style={tw`absolute bottom-0 w-full`}>
        <Footer />
      </View>
    </LinearGradient>
  );
};

export default Home;
