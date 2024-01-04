import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Back, BackBox, Hero1, Hero2 } from '../assets';

const Lesson1 = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    },[])
  return (
    <SafeAreaView className="relative flex-1">
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        {/* Banner Start */}
        <View className="h-96 bg-[#29ADB2] flex-col">
          {/* Back Button start */}
          <View className="px-3 pt-12 h-96">
            <View className="flex-row">
              <TouchableOpacity
                className="items-center"
                onPress={() => navigation.navigate("Home")}
              >
                <Image source={BackBox} width={200} height={30} />
              </TouchableOpacity>
            </View>
          </View>
          {/* Back Button End */}

          {/* Hero Image Start */}
          <View className="absolute inset-y-0 right-0 justify-end ">
            <Image source={Hero2} className="w-[328] h-[350] " />
          </View>
          {/* Heo Image end */}
        </View>
        {/* banner end */}

        {/* Lesson name banner start */}
        <View className="h-20 bg-[#0D6A6E] flex-col justify-center">
          <View className="flex-row px-3">
            <View className="w-2 bg-white h-14"></View>
            <View className="flex-col px-2">
              <Text className="flex flex-col justify-center text-lg font-bold text-white">
                ජීව විද්‍යාව හැඳින්වීම
              </Text>
              <Text className="flex flex-col justify-center mt-1 text-sm font-semibold text-slate-100">
                පාඩම් අංක 01
              </Text>
            </View>
          </View>
        </View>
        {/* Lesson Banner end */}
        <View className="px-3">
          {/* Sub Lesson 1 start */}
          <TouchableOpacity
            className="justify-center w-full h-20 rounded-lg bg-[#113a3b] mt-3"
            onPress={() => navigation.navigate("Les1Sub1")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ජීව දේහය තුල ඉටු කරන කෘත්‍යන්ට අදාළව ජීවය සඳහා වැදගත් වන ජලයේ
                  භෞතික හා රසායනික ගුණ සැකසී ඇති ආකාරය විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 1 end */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Lesson1