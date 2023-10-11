import { View, Text, TouchableOpacity, Image, Pressable } from "react-native";
import React from "react";
import tw from "twrnc";
import Animated,{ FadeInDown, FadeOut } from 'react-native-reanimated';
import { useNavigation } from "@react-navigation/native";

const SingleRecipe = ({ item, index }) => {

  const navigation =  useNavigation()
  return (
    <Animated.View entering={FadeInDown.delay(index * 100).duration(600).springify().damping(30)} key={item?.idMeal}>
      <Pressable
        style={tw`w-full flex justify-center py-2 ${
          index % 2 !== 0 ? "pl-3" : "pr-3"
        }`}
        onPress={()=>navigation?.navigate("recipedetails",{...item})}
      >
        <View>
          <Image
            source={{ uri: item?.strMealThumb }}
            style={tw`w-full ${index % 3 === 0 ? "h-48" : "h-72 "} rounded-3xl`}
          />
        </View>
        <Text style={tw`font-bold text-lg pt-1 `}>{ item?.strMeal?.length > 15 ? item?.strMeal?.slice(0,14)+"..." : item?.strMeal } </Text>
      </Pressable>
    </Animated.View>
  );
};

export default SingleRecipe;
