
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Register from '../screens/auth/Register'
import Login from '../screens/auth/Login'
import Home from '../screens/home/Home'
import About from '../screens/About'
import Account from '../screens/Account'
import Post from '../screens/Post'

const Stack = createNativeStackNavigator()

const NavigationController = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='login'>
     <Stack.Screen name="register" component={Register}/>
     <Stack.Screen name="login" component={Login}/>
     <Stack.Screen name="home" component={Home}/>
     <Stack.Screen name="post" component={Post}/>
     <Stack.Screen name="about" component={About}/>
     <Stack.Screen name="account" component={Account}/>
    </Stack.Navigator>
  )
}

export default NavigationController