import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Category = () => {
  return (
    <View className="pt-2">
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      {/* Item 1 start */}
        <View className="flex flex-col items-center justify-center h-10 mt-2 ml-3 bg-gray-700 rounded-md w-28">
          <Text className="text-base font-semibold text-white">Bio essay</Text>
        </View>
        {/* Item 1 end */}

        {/* Item 2 start */}
        <View className="flex flex-col items-center justify-center w-32 h-10 mt-2 ml-3 bg-gray-300 rounded-md">
          <Text className="text-base font-semibold ">Past papers</Text>
        </View>
        {/* Item 2 end */}

        {/* Item 3 start */}
        <View className="flex flex-col items-center justify-center w-32 h-10 mt-2 ml-3 bg-gray-300 rounded-md">
          <Text className="text-base font-semibold ">Mcq papers</Text>
        </View>
        {/* Item 3 end */}

        {/* Item 4 start */}
        <View className="flex flex-col items-center justify-center w-32 h-10 mt-2 ml-3 bg-gray-300 rounded-md">
          <Text className="text-base font-semibold ">Model papers</Text>
        </View>
        {/* Item 4 end */}
        
      </ScrollView>
    </View>
  );
}

export default Category