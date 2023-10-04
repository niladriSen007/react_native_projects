import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"

const ButtonNew = () => {
  return (
    <TouchableOpacity style={tw`bg-blue-600 w-80 rounded-full px-2 py-3 `}>
    <Text style={tw`text-white font-bold text-lg text-center`}>Submit</Text>
  </TouchableOpacity>
  )
}

export default ButtonNew