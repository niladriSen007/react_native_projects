import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";

const Home = () => {

  const [activeCategory,setActiveCategory] = useState("")

  return (
    <View style={tw`flex-1 bg-white`}>
      <ScrollView style={tw`my-8`} contentContainerStyle={{ padding: 16 }}>
        <View style={tw`flex flex-row justify-between items-center`}>
          <Image
            style={tw`w-16 h-16`}
            source={require("../../assets/images/avatar.png")}
          />
          <BellIcon size={30} color={"blue"} />
        </View>
        <View>
          <Text style={tw`text-3xl ml-1   mt-4 mb-1 `}>Hi Niladri!</Text>
          <View>
            <Text style={tw`ml-1 text-3xl `}>
              Cook your{" "}
              <Text style={tw`text-3xl ml-1 font-bold mt-4 mb-2 text-blue-700`}>
                Delicious
              </Text>{" "}
              food
            </Text>
          </View>
          <Text style={tw`ml-1 text-3xl `}>easily.</Text>
        </View>

        <View className="flex flex-row border-2 border-gray-200 my-4 rounded-full">
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={"gray"}
            // style={{ fontSize: hp(1.7) }}
            className="flex-1 text-lg mb-1 pl-4 tracking-wider"
          />
          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon size={24} strokeWidth={3} color="blue" />
          </View>
        </View>
        <View>
          <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
