import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Welcome from '../screens/Welcome';

const Stack = createNativeStackNavigator();

const NavigationController = () => {
  return (
    <Stack.Navigator initialRouteName='welcome' screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="welcome" component={Welcome} />
    </Stack.Navigator>
  )
}

export default NavigationController