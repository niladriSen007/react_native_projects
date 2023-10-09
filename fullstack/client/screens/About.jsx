import { View, Text } from "react-native";
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import Header from "./Menus/Header";
import Footer from "./Menus/Footer";




const About = () => {

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
     
      <View style={tw`absolute bottom-0 w-full`}>
        <Footer />
      </View>
    </LinearGradient>
  );
};

export default About;
