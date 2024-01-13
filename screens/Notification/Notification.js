import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { Back, BackBlack, BackBox2, Logo, NewImage, Update} from '../../assets';



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
        <View
          className="justify-center w-full h-20 rounded-lg bg-[#d6d6d6] mt-3"
        >
          <View className="flex flex-col items-center">
            <View className="flex-row w-full">
              <Text className="pl-3 pr-10 text-sm font-bold text-gray-800">
                ජීව දේහය තුල ඉටු කරන කෘත්‍යන්ට අදාළව ජීවය සඳහා වැදගත් වන ජලයේ
                භෞතික හා රසායනික ගුණ සැකසී ඇති ආකාරය විස්තර කරන්න.
              </Text>
              <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                <Image source={BackBlack} className="w-[10] h-[15]" />
              </View>
            </View>
          </View>
        </View>
        {/* Sub Lesson 1 end */}
      </View>
    </SafeAreaView>
  );
}

export default Notification