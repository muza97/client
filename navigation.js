import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();
import {View, Text } from  'react-native'
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import RestaurantScreen from './screens/RestaurantScreen';
import CartScreen from './screens/CartScreen';
import OrderPreparingScreen from './screens/OrderPreparingScreen';
import DeliveryScreen from './screens/DeliveryScreen';

export default function Navigation(){
    return(
        <NavigationContainer>
      <stack.Navigator screenOptions={{
        headerShown: false
      }}> 
        <stack.Screen name="Home" component={HomeScreen} />
        <stack.Screen name="Restaurant" component={RestaurantScreen} />
        <stack.Screen name="Cart" options={{presentation: 'modal'}} component={CartScreen} />
        <stack.Screen name="OrderPreparing" options={{presentation: 'fullScreenModal'}} component={OrderPreparingScreen} />
        <stack.Screen name="Delivery" options={{presentation: 'fullScreenModal'}} component={DeliveryScreen} />
      </stack.Navigator>
    </NavigationContainer>
  );
}