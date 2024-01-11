import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Back, Hero1, Logo, Notification, Search } from '../assets';
import Category from '../components/Category';
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(()=> {
        navigation.setOptions({
            headerShown: false,
        });
    }, [])
  return (
    <SafeAreaView className="relative flex-1 pt-5">
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        <View className="relative flex-row items-center pl-3 ">
          <Image source={Logo} width={200} height={30} />
          <Image
            source={Notification}
            width={25}
            height={29}
            className="absolute inset-y-0 right-0 mr-3"
          />
        </View>
        {/* Welcome back greeting start */}
        <View className="px-3 pt-2">
          <Text className="text-xl font-bold text-gray-600">Welcome back</Text>
        </View>
        {/* Welcome back greeting end */}

        {/* Search bar start */}
        <View className="flex-row h-12 mx-3 mt-8 bg-gray-300 rounded-lg">
          <TextInput
            className="h-12 mx-3 text-base"
            placeholder="Search here..."
          />
          <View className="absolute inset-y-0 right-0 justify-center mr-3">
            <Image source={Search} className="w-5 h-5" />
          </View>
        </View>
        {/* Search bar end */}

        {/* Banner Start */}
        <View className="flex-row px-3 mx-3 mt-10 bg-[#52D3D8] rounded-md h-[170]">
          <View className="flex-col justify-center">
            <Text className="w-[200] text-2xl font-bold text-white">
              What do you want to learn today?
            </Text>
            <View className="flex flex-col items-center justify-center w-[116] h-9 mt-5 rounded-md bg-slate-800">
              <Text className="text-base font-bold text-white">Get Start</Text>
            </View>
          </View>
          <View className="absolute inset-y-0 right-0 justify-center">
            <Image source={Hero1} className="w-[173] h-[200] mb-1" />
          </View>
        </View>
        {/* Banner End */}

        {/* Categories topic start */}
        <View className="flex-row px-3 mt-5">
          <Text className="text-xl font-bold text-gray-800">Categories</Text>
          <View className="absolute inset-y-0 right-0 justify-center pr-3">
            <Text className="text-sm font-medium text-gray-800">View All</Text>
          </View>
        </View>
        {/* Categories Topic end */}
        {/* Categories list start */}
        <Category />
        {/* Categories List end */}

        {/* Start of Bio essay categories */}
        <View className="flex items-center px-3 pt-7">
          {/* Lesson 1 start */}
          <TouchableOpacity
            className="justify-center w-full h-16 rounded-lg bg-[#265073]"
            onPress={() => navigation.navigate("Lesson1")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 text-base font-bold text-white">
                  ජීව විද්‍යාව හැඳින්වීම
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Lesson 1 end */}

          {/* Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-16 rounded-lg bg-[#265073] mt-3"
            onPress={() => navigation.navigate("Lesson2")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 text-base font-bold text-white">
                  ජීවයේ රසායනික හා සෛලීය පදනම
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Lesson 2 end */}

          {/* Lesson 3 start */}
          <TouchableOpacity
            className="justify-center w-full h-16 rounded-lg bg-[#265073] mt-3"
            onPress={() => navigation.navigate("Lesson3")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 text-base font-bold text-white">
                  පරිණාමය හා ජීවීන්ගේ විවිධත්වය
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Lesson 3 end */}

          {/* Lesson 4 start */}
          <TouchableOpacity
            className="justify-center w-full h-16 rounded-lg bg-[#265073] mt-3"
            onPress={() => navigation.navigate("Lesson4")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 text-base font-bold text-white">
                  ශාක ආකාරය හා ක්‍රියාකාරිත්වය
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Lesson 4 end */}

          {/* Lesson 5 start */}
          <TouchableOpacity
            className="justify-center w-full h-16 rounded-lg bg-[#265073] mt-3"
            onPress={() => navigation.navigate("Lesson1")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 text-base font-bold text-white">
                  ශාක ආකාරය හා ක්‍රියාකාරිත්වය
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Lesson 5 end */}
        </View>
        {/* End of Bio essay categories */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

export default HomeScreen