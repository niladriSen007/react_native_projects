import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./Menus/Header";
import Footer from "./Menus/Footer";
import { AuthContext } from "../context/authContext";

const Account = () => {
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
      <View style={tw`flex-1 items-center py-44 relative`}>
        <Image
          source={{
            uri: "https://scontent.fccu1-2.fna.fbcdn.net/v/t39.30808-6/351212187_562649686078199_2947093897638546977_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=WWvEnKofuHUAX_18HUR&_nc_ht=scontent.fccu1-2.fna&oh=00_AfCAg6ePF_Hdjg6FNxwbX1f-iXsCO9eBeKE7J0THX65kqQ&oe=6529B4C8",
          }}
          style={tw`w-36 h-36 rounded-full border-4 border-white p-4 `}
        />
        <Text style={tw`text-3xl py-3 pb-1 font-bold text-white`}>
          {loggedinUser}
        </Text>
        <Text style={tw`text-2xl  text-white`}>
          Full Stack Developer
        </Text>
        <View style={tw`bg-white w-full absolute bottom-18 h-96`}>
          <View
            style={tw`flex flex-row gap-3 items-start bg-blue-700 mx-5 rounded-lg py-4 items-center justify-start my-6 px-2`}
          >
            <Text style={tw`text-5xl`}>🗺️</Text>
            <View>
              <Text style={tw`text-2xl text-white`}>Location</Text>
              <Text style={tw`text-2xl text-white`}>India</Text>
            </View>
          </View>
          <View
            style={tw`flex flex-row gap-3 items-center bg-blue-700 mx-5 rounded-lg py-4 items-center justify-start mb-6 px-2`}
          >
            <Text style={tw`text-5xl`}>🏢</Text>
            <View>
              <Text style={tw`text-2xl text-white`}>Software Engineer</Text>
              <Text style={tw`text-2xl text-white`}>
                Tata Consultancy Services
              </Text>
            </View>
          </View>

          <View
            style={tw`flex flex-row gap-3 items-center bg-blue-700 rounded-lg mx-5 py-4 items-center justify-start px-2`}
          >
            <Text style={tw`text-5xl`}>📞</Text>
            <View>
              <Text style={tw`text-2xl text-white`}>Contact</Text>
              <Text style={tw`text-2xl text-white`}>
                85840712911
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={tw`absolute bottom-0 w-full`}>
        <Footer />
      </View>
    </LinearGradient>
  );
};

export default Account;
