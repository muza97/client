import React, { useState } from 'react'; // Make sure to import useState
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'; // Use Image, not image
import { categories } from '../constants';

export default function Categories() {
    const [activeCategory, setActiveCategory] = useState(null);

    return (
        <View style={{ marginTop: 16 }}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ paddingHorizontal: 15 }}
            >
                {categories.map((category, index) => {
                    let isActive = category.id === activeCategory;
                    return (
                        <View key={index} style={{ justifyContent: 'center', alignItems: 'center', marginRight: 24 }}>
                            <TouchableOpacity
                                onPress={() => setActiveCategory(category.id)}
                                style={{
                                    padding: 8,
                                    borderRadius: 9999,
                                    shadowOpacity: 0.15,
                                    shadowRadius: 4,
                                    shadowOffset: { width: 0, height: 2 },
                                    backgroundColor: isActive ? '#4B5563' : '#E5E7EB', // bg-gray-600 / bg-gray-200
                                }}
                            >
                                <Image
                                    style={{ width: 45, height: 45 }}
                                    source={category.image}
                                />
                            </TouchableOpacity>
                            <Text style={{
                                fontSize: 12,
                                fontWeight: isActive ? 'bold' : 'normal', // font-semibold / normal
                                color: isActive ? '#1F2937' : '#6B7280', // text-gray-800 / text-gray-500
                                marginTop: 4,
                            }}>
                                {category.name}
                            </Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
}
