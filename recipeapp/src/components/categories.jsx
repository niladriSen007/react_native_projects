import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { categoryData } from "../constants/data";
import tw from "twrnc";
import Animated, { FadeInDown, FadeOut } from "react-native-reanimated";
import Loading from "./Loading";

const Categories = ({
  activeCategory,
  setActiveCategory,
  categories,
  loading,
}) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(500).springify()}
      exiting={FadeOut}
      classname="pl-1 "
    >
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingVertical: 10 }}
        >
          {categories?.map((catData) => (
            <TouchableOpacity
              key={catData?.idCategory}
              style={tw`mr-6 flex items-center justify-center`}
              onPress={() => setActiveCategory(catData?.strCategory)}
            >
              <View>
                <Image
                  source={{ uri: catData?.strCategoryThumb }}
                  style={tw`w-16 h-16 rounded-full`}
                />
              </View>
              <Text
                style={tw`${
                  activeCategory === catData?.strCategory
                    ? "font-bold text-blue-700 text-lg"
                    : ""
                }`}
              >
                {catData?.strCategory}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
    </Animated.View>
  );
};

export default Categories;
