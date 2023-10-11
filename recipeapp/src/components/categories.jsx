import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { categoryData } from "../constants/data";
import tw from "twrnc";

const Categories = ({activeCategory,setActiveCategory}) => {
  return (
    <View classname="pl-1 ">
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingVertical : 10}}>
        {categoryData?.map((catData, index) => (
          <TouchableOpacity key={index} style={tw`mr-6 flex items-center justify-center`} onPress={()=>setActiveCategory(catData?.name)}>
            <View>
              <Image source={{ uri: catData?.image }} style={tw`w-16 h-16 rounded-full`} />
            </View>
            <Text style={tw`${activeCategory === catData?.name ? "font-bold text-lg" :""}`}>{catData?.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
