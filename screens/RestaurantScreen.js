import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import {useNavigation, useRoute} from '@react-navigation/native'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon'

export default function RestaurantScreen() {
  const {params} = useRoute();
  const navigation = useNavigation();
  let item= params;
  // console.log('restaurant: ',item);
  return (
    <View>
    <CartIcon/>
      <ScrollView>
        <View className="realtive">
            <Image className="w-full h-72" source={item.image}/>
            <TouchableOpacity
                onPress={() => navigation.goBack()}
                className="absolute top-14 bg-gray-50 p-2 rounded-full shadow">
                   <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
            </TouchableOpacity>
        </View>
        <View
            style={{borderTopLeftRadius: 40, borderTopRightRadius: 40}}
            className="bg-white -mt-12 pt-6"
        >
          <View className="px-5">
              <Text className="text-3xl font-bold">{item.name}</Text>
              <View className="flex-row space-x-2 my-1">
                   <View className="flex-row items-center space-x-1">
                   <Image source={require('../assets/images/fullStar.png')} className="h-4 w-4" />
                   <Text className="text-xs">
                       <Text className="text-green-700">{item.stars}</Text>
                       <Text className="text gray-700">
                         ({item.reviews} review <Text className="font-semibold">{item.category}</Text>)
                         </Text>
                       </Text>
                 </View>          
               <View className="flex-row items-center space-x-1">
                 <Icon.MapPin color="gray" width={15} height={15} marginTop={4}/>
                 <Text className="text-xs text-gray-500">Nearby {item.address}</Text>
               </View> 
            </View>
            <Text className="text-gray-500 mt-2">Nearby ·{item.address} </Text>
          </View>
        </View>
          <View className="pb-36 bg-white">
             <Text className="px-4 py-4 text-2xl font-bold">Menu</Text>
             {/* dishes*/}
             {
              item.dishes.map((dish, index)=> <DishRow item={{...dish}} key={index}/>)
              }
          </View>
      </ScrollView>
    </View>
  )
}
