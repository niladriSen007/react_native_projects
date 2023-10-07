import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from '../screens/auth/Register'
import Login from '../screens/auth/Login'

const Stack = createNativeStackNavigator()

const NavigationController = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='login'>
     <Stack.Screen name="register" component={Register}/>
     <Stack.Screen name="login" component={Login}/>
    </Stack.Navigator>
  )
}

export default NavigationController