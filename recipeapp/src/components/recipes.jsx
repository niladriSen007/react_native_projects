import { View, Text } from "react-native";
import React from "react";
import MasonryList from "@react-native-seoul/masonry-list";
import tw from "twrnc";
import SingleRecipe from "./SingleRecipe";
import Loading from "./Loading";

const Recipes = ({ recipies, loading }) => {

  

  return (
    <View>
      <Text style={tw`text-3xl font-bold pb-2`}>Recipies</Text>
      {loading ? (
        <Loading />
      ) : (
        <MasonryList
          data={recipies}
          keyExtractor={(item) => item?.idMeal}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, i }) => <SingleRecipe item={item} index={i} />}
          // refreshing={isLoadingNext}
          // onRefresh={() => refetch({first: ITEM_CNT})}
          onEndReachedThreshold={0.1}
          // onEndReached={() => loadNext(ITEM_CNT)}
        />
      )}
    </View>
  );
};

export default Recipes;
