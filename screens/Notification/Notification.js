import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { Back, BackBlack, BackBox2, Logo, Menu2, NewImage, NotifiBell, Update} from '../../assets';



const Notification = () => {
    const navigation = useNavigation();

     useLayoutEffect(() => {
       navigation.setOptions({
         headerShown: false,
       });
     }, []);
  return (
    <SafeAreaView className="relative pt-5">
      {/* Back Button start */}
      <View className="px-3">
        <View className="flex-row">
          <TouchableOpacity
            className="items-center"
            onPress={() => navigation.navigate("Home1")}
          >
            <Image source={BackBox2} width={200} height={30} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Back Button End */}

      {/* Topic Start */}
      <View className="px-3 py-5">
        <Text className="text-3xl font-bold text-gray-600">Notifications</Text>
      </View>
      {/* Topic End */}
      <View className="px-3">
        {/* Sub Lesson 1 start */}
        <TouchableOpacity
          className="justify-center w-full h-20 rounded-lg bg-[#d6d6d6] mt-2"
          onPress={() => navigation.navigate("Notification1")}
        >
          <View className="flex flex-col items-center">
            <View className="flex-row w-full">
              <View className="absolute inset-y-0 left-0 justify-center pl-3 pr-3 mr-3">
                <Image source={NotifiBell} className="w-[45] h-[45]" />
              </View>
              <View>
              <Text className="pl-20 pr-10 text-sm font-medium text-[#454545]">
                BioEssay Team
              </Text>
              <Text className="pl-20 pr-5 text-left text-xs text-[#454545]">
                Thank you for join with us. Through this app we try to help bio student to answer the biology paper essay part.
              </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* Sub Lesson 1 end */}
      </View>
    </SafeAreaView>
  );
}

export default Notification