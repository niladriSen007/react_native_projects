import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, { FadeInDown, FadeIn, FadeOut } from "react-native-reanimated";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import {
  ChevronLeftIcon,
  ClockIcon,
  FireIcon,
} from "react-native-heroicons/outline";
import {
  HeartIcon,
  Square3Stack3DIcon,
  UsersIcon,
} from "react-native-heroicons/solid";
import axios from "axios";
import Loading from "../components/Loading";
import YouTubeIframe from 'react-native-youtube-iframe';

const RecipeDetails = (props) => {
  const navigation = useNavigation();
  console.log(props?.route?.params);
  const { idMeal, strMeal, strMealThumb } =
    props?.route?.params;
  const [recipeData, setRecipeData] = useState();
  const [isFavourite, setIsFavourite] = useState(false);
  const [loading, setLoading] = useState(false);

  const getRecipeDetails = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      setRecipeData(data?.meals?.at(0));
      // setActiveCategory(data?.categories.at(0)?.strCategory)
      setLoading(false);
      console.log(data?.meals[0]);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getRecipeDetails();
  }, []);



  const ingredientsIndexes = (meal)=>{
    if(!meal) return [];
    let indexes = [];
    for(let i = 1; i<=20; i++){
        if(meal['strIngredient'+i]){
            indexes.push(i);
        }
    }

    return indexes;
}


const getYoutubeVideoId = url=>{
  const regex = /[?&]v=([^&]+)/;
  const match = url.match(regex);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Animated.View
        entering={FadeInDown.delay(300).duration(600).springify().damping(30)}
        key={idMeal}
      >
        <View>
          <Image source={{ uri: strMealThumb }} style={tw`w-full h-96`} />
        </View>
      </Animated.View>
      <Animated.View
        entering={FadeIn.delay(200).duration(1000)}
        className="w-full absolute flex-row justify-between items-center pt-12"
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="p-2 rounded-full ml-5 bg-white"
        >
          <ChevronLeftIcon size={24} strokeWidth={4.5} color="blue" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setIsFavourite(!isFavourite)}
          className="p-2 rounded-full mr-5 bg-white"
        >
          <HeartIcon
            size={24}
            strokeWidth={4.5}
            color={isFavourite ? "red" : "gray"}
          />
        </TouchableOpacity>
      </Animated.View>

      <View style={tw`px-4 flex justify-between py-2`}>
        {/* name and area */}
        <Animated.View
          entering={FadeInDown.duration(700).springify().damping(12)}
        >
          <Text style={tw`font-bold text-3xl flex-1 text-blue-700`}>
            {recipeData?.strMeal}
          </Text>
          <Text style={tw`font-bold text-lg flex-1 text-neutral-500`}>
            {recipeData?.strArea}
          </Text>
        </Animated.View>

        {/* misc */}
        <Animated.View entering={FadeInDown.delay(100).duration(700).springify().damping(12)} className="flex-row justify-between py-4">
                    <View className="flex rounded-lg bg-blue-700 p-6">
                        <View 
                            style={tw`bg-white rounded-full flex items-center justify-center`}
                        >
                            <ClockIcon size={28} strokeWidth={2.5} color="blue" />
                        </View>
                        <View className="flex items-center py-2 space-y-1">
                            <Text style={tw`font-bold text-white`}>
                                35
                            </Text>
                            <Text style={tw`font-bold text-white`}>
                                Mins
                            </Text>
                        </View>
                    </View>
                    <View className="flex rounded-lg bg-blue-700 p-6">
                        <View 
                            style={tw`bg-white rounded-full flex items-center justify-center`}
                        >
                            <UsersIcon size={24} strokeWidth={2.5} color="blue" />
                        </View>
                        <View className="flex items-center py-2 space-y-1">
                            <Text style={tw`font-bold text-white`}>
                                03
                            </Text>
                            <Text style={tw`font-bold text-white`}>
                                Servings
                            </Text>
                        </View>
                    </View>
                    <View className="flex rounded-lg bg-blue-700 p-6">
                        <View 
                            style={tw`bg-white rounded-full flex items-center justify-center`}
                        >
                            <FireIcon size={24} strokeWidth={2.5} color="blue" />
                        </View>
                        <View className="flex items-center py-2 space-y-1">
                            <Text style={tw`font-bold text-white`}>
                                103
                            </Text>
                            <Text style={tw`font-bold text-white`}>
                                Cal
                            </Text>
                        </View>
                    </View>
                    <View className="flex rounded-lg bg-blue-700 p-6">
                        <View 
                            style={tw`bg-white rounded-full flex items-center justify-center`}
                        >
                            <Square3Stack3DIcon size={24} strokeWidth={2.5} color="blue" />
                        </View>
                        <View className="flex items-center py-2 space-y-1">
                            <Text style={tw`font-bold text-white`}>
                                
                            </Text>
                            <Text style={tw`font-bold text-white`}>
                                Easy
                            </Text>
                        </View>
                    </View>
                </Animated.View>

        {/* ingredients */}
        <Animated.View entering={FadeInDown.delay(200).duration(700).springify().damping(12)} className="space-y-4">
                    <Text style={tw`font-bold mt-4 text-black text-4xl`}>
                        Ingredients
                    </Text>
                    <View>
                        {
                            ingredientsIndexes(recipeData).map(i=>{
                                return (
                                    <View key={i} className="flex-row items-center gap-2">
                                        <View style={tw`bg-blue-700 rounded-full w-2 h-2`}/>
                                        <View className="flex-row space-x-2">
                                                <Text style={tw`font-extrabold text-lg text-blue-700`}>{recipeData['strMeasure'+i]}</Text>
                                                <Text style={tw`font-bold text-lg text-neutral-600`}>{recipeData['strIngredient'+i]}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </Animated.View>
        {/* instructions */}
        <Animated.View entering={FadeInDown.delay(300).duration(700).springify().damping(12)} className="my-12">
                    <Text style={tw`text-4xl`} className="font-bold flex-1 pb-1 text-black">
                        Instructions
                    </Text>
                    <Text style={tw`text-xl`} className="text-blue-500">
                        {
                            recipeData?.strInstructions
                        }
                    </Text>
                </Animated.View>

        {/* recipe video */}
        {
                    recipeData?.strYoutube && (
                        <Animated.View entering={FadeInDown.delay(400).duration(700).springify().damping(12)} className="space-y-4">
                            <Text style={tw`text-3xl`} className="font-bold flex-1 text-black">
                                Recipe Video
                            </Text>
                            <View>
                                <YouTubeIframe
                                    videoId={getYoutubeVideoId(recipeData.strYoutube)}
                                    height={220}
                                />
                            </View>
                        </Animated.View>
                    )
                }
      </View>
    </ScrollView>
  );
};

export default RecipeDetails;
