import { View, Text } from 'react-native'
import React from 'react'
import tw from "twrnc";
const Loading = () => {
  return (
    <View>
      <Text style={tw`text-black text-xl font-bold`}>Loading...</Text>
    </View>
  )
}

export default Loading