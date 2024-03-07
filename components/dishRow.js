import { View, Text, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import * as Icon from "react-native-feather";

export default function DishRow({item}) {
    return (
      <View className="flex-row items-center bg-white p-3 rounded-3xl shadow-2xl mb-3 mx-2">
          <Image className="rounded-3xl" style={{height: 100, width: 100}} source={item.image}/>
          <View className="flex-1 justify-between">
              <View className="px-3">
                  <Text className="text-xl font-bold">{item.name}</Text>
                  <Text className="text-gray-500">{item.description}</Text>
              </View>
              <View className="flex-row items-center justify-between px-3">
                  <Text className="text-lg font-bold">
                      ${item.price}
                  </Text>
                  <View className="flex-row items-center">
                      <TouchableOpacity
                          className="p-1 rounded-full"
                          style={{backgroundColor: themeColors.bgColor(1)}}
                          >
                          <Icon.Minus strokeWidth={2} height={20} width={20} color={'white'} />
                      </TouchableOpacity>
                      <Text className="px-3">
                          {2} {/* Assuming you have a state for this number */}
                      </Text>
                      <TouchableOpacity
                          className="p-1 rounded-full"
                          style={{backgroundColor: themeColors.bgColor(1)}}
                          >
                          <Icon.Plus strokeWidth={2} height={20} width={20} color={'white'} />
                      </TouchableOpacity>
                  </View>
              </View>
          </View>
      </View>
    )
  }
  