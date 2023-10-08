import { View, Text, TouchableOpacity, Alert } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { AuthContext } from "../../context/authContext";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Header = () => {

    const [user,setUser] = useContext(AuthContext);
    const navigation = useNavigation();

    const handleLogout = async() =>{
        console.log("Logged out")
        setUser();
        await AsyncStorage.removeItem("@auth");
        navigation.navigate("login")
        Alert.alert("Success","Logged out successfully")
    }

  return (
    <View style={tw`bg-white pt-12  h-24`}>
      <View style={tw`flex-row justify-between items-center px-4 `}>
        <Text style={tw`text-3xl font-bold text-blue-700`}>PostBook.</Text>
        <TouchableOpacity style={tw`flex-row `} onPress={handleLogout}>
          <Text style={tw`text-xl text-blue-600`}>Logout ↪️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
