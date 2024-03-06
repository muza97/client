import { View, Text, TouchableWithoutFeedback, Image } from 'react-native';
import React from 'react';
import * as Icon from "react-native-feather";
import { themeColors} from '../theme'

export default function RestaurantCard({ item }) {
  return (
    <TouchableWithoutFeedback>
      <View 
      style={{
          shadowColor: themeColors.bgColor(0.2),
          shadowRadius: 7
      }}
      
      className="m-2 p-2 bg-white rounded-2xl shadow-md">
        <Image className="h-36 w-64 rounded-t-xl" source={item.image} />
        <View className="px-4 py-2">
          <Text className="text-lg font-bold">{item.name}</Text>
          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <Image className="h-4 w-4" source={require('../assets/images/fullStar.png')} />
              <Text className="text-xs text-gray-600">
                {item.stars} <Text>({item.reviews} Reviews)</Text>
              </Text>
            </View>
            <Text className="font-semibold text-xs text-gray-600">{item.category}</Text>
          </View>
          <View className="flex-row items-center space-x-1">
            <Icon.MapPin color="gray" width={15} height={15} marginTop={4}/>
            <Text className="text-xs text-gray-500">Nearby {item.address}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
