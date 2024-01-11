import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

const Category = () => {

  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View className="pt-2">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {/* Item 1 start */}
        <TouchableOpacity
          className="flex flex-col items-center justify-center h-10 mt-2 ml-3 bg-gray-700 rounded-md w-28"
          onPress={() => navigation.navigate("Home1")}
        >
          <Text className="text-base font-semibold text-white">Bio essay</Text>
        </TouchableOpacity>
        {/* Item 1 end */}

        {/* Item 2 start */}
        <TouchableOpacity
          className="flex flex-col items-center justify-center w-32 h-10 mt-2 ml-3 bg-gray-300 rounded-md"
          onPress={() => navigation.navigate("Notification1")}
        >
          <Text className="text-base font-semibold ">Past papers</Text>
        </TouchableOpacity>
        {/* Item 2 end */}

        {/* Item 3 start */}
        <TouchableOpacity
          className="flex flex-col items-center justify-center w-32 h-10 mt-2 ml-3 bg-gray-300 rounded-md"
          onPress={() => navigation.navigate("Notification1")}
        >
          <Text className="text-base font-semibold ">Mcq papers</Text>
        </TouchableOpacity>
        {/* Item 3 end */}

        {/* Item 4 start */}
        <TouchableOpacity
          className="flex flex-col items-center justify-center w-32 h-10 mt-2 ml-3 bg-gray-300 rounded-md"
          onPress={() => navigation.navigate("Notification1")}
        >
          <Text className="text-base font-semibold ">Model papers</Text>
        </TouchableOpacity>
        {/* Item 4 end */}
      </ScrollView>
    </View>
  );
}

export default Category