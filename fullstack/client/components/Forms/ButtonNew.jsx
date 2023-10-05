import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from "twrnc"

const ButtonNew = ({title,handleSubmit,loading}) => {
  return (
    <TouchableOpacity onPress={handleSubmit} style={tw`bg-blue-600 w-80 rounded-full px-2 py-3 `}>
    <Text style={tw`text-white font-bold text-lg text-center`}>{title}</Text>
  </TouchableOpacity>
  )
}

export default ButtonNew