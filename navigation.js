import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();
import {View, Text } from  'react-native'
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';

export default function Navigation(){
    return(
        <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerShown: false
      }}> 
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Resturant" component={ResturantScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}