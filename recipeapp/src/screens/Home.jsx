import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import axios from "axios";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import Recipes from "../components/Recipes";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState("Beef");
  const [categories, setCategories] = useState([]);
  const [recipies, setRecipies] = useState([]);
  const [loading, setLoading] = useState(false);

  const getAllCategories = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(
        `https://themealdb.com/api/json/v1/1/categories.php`
        );
        setCategories(data?.categories);
        setActiveCategory(data?.categories.at(0)?.strCategory)
        setLoading(false)
        // console.log("Data ========="+data?.categories);
      } catch (e) {
        console.log(e);
        setLoading(false)
      }
    };
    
    
    const getAllRecipies = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(
        `https://themealdb.com/api/json/v1/1/filter.php?c=${activeCategory?.toLowerCase()}`
        );
        setRecipies(data?.meals);
        // setActiveCategory(data?.categories.at(0)?.strCategory)
        setLoading(false)
        console.log(data?.meals);
      } catch (e) {
        console.log(e);
        setLoading(false)
    }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  
  useEffect(() => {
    getAllRecipies()
  }, [activeCategory]);

  // console.log(categories);

  return (
    <View style={tw`flex-1 bg-white py-3`}>
      <ScrollView style={tw`my-8`} contentContainerStyle={{ padding: 16 }}>
        <View style={tw`flex flex-row justify-between items-center`}>
          <Image
            style={tw`w-16 h-16`}
            source={require("../../assets/images/avatar.png")}
          />
          <BellIcon size={30} color={"blue"} />
        </View>
        <View>
          <Text style={tw`text-3xl ml-1   mt-4 mb-1 `}>
            Hi{" "}
            <Text style={tw`text-blue-700 font-bold underline `}>Niladri!</Text>
          </Text>
          <View>
            <Text style={tw`ml-1 text-3xl `}>
              Cook your{" "}
              <Text style={tw`text-3xl ml-1 font-bold mt-4 mb-2 text-blue-700`}>
                Delicious
              </Text>{" "}
              food
            </Text>
          </View>
          <Text style={tw`ml-1 mt-1 text-3xl `}>easily 🍒.</Text>
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
          { categories?.length > 0 && <Categories
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            categories={categories} loading={loading}
          />}
        </View>
        <View style={tw`mt-6 ml-1`}>
        { categories?.length > 0 && <Recipes recipies={recipies} loading={loading}/>}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
