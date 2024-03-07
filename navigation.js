import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();
import {View, Text } from  'react-native'
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';

export default function Navigation(){
    return(
        <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerShown: false
      }}> 
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Restaurant" component={RestaurantScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}