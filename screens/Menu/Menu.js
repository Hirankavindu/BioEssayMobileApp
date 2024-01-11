import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Back, BackBlack, Logo, Menu1, Menu2, Menu3, Menu4 } from "../../assets";

const Menu = () => {

      const navigation = useNavigation();

      useLayoutEffect(() => {
        navigation.setOptions({
          headerShown: false,
        });
      }, []);
  return (
    <SafeAreaView className="relative flex-1 pt-12">
      <View className="relative flex-row items-center pl-3 ">
        <Image source={Logo} width={200} height={30} />
      </View>
      <View className="pl-3">
        <Text className="text-4xl font-black text-[#454545]">Menu</Text>
      </View>

      <View className="px-3">
        {/* Sub Lesson 1 start */}
        <TouchableOpacity
          className="justify-center w-full h-20 rounded-lg bg-[#DCDCDC] mt-10"
          onPress={() => navigation.navigate("Home")}
        >
          <View className="flex flex-col items-center">
            <View className="flex-row w-full">
              <View className="absolute inset-y-0 left-0 justify-center pl-3 pr-3 mr-3">
                <Image source={Menu1} className="w-[65] h-[65]" />
              </View>
              <Text className="pl-24 pr-10 text-base font-bold text-[#454545]">
                BioEssay note
              </Text>
              <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                <Image source={BackBlack} className="w-[10] h-[15]" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* Sub Lesson 1 end */}
      </View>

      <View className="px-3">
        {/* Sub Lesson 1 start */}
        <TouchableOpacity
          className="justify-center w-full h-20 rounded-lg bg-[#DCDCDC] mt-4"
          onPress={() => navigation.navigate("Notification1")}
        >
          <View className="flex flex-col items-center">
            <View className="flex-row w-full">
              <View className="absolute inset-y-0 left-0 justify-center pl-3 pr-3 mr-3">
                <Image source={Menu2} className="w-[65] h-[65]" />
              </View>
              <Text className="pl-24 pr-10 text-base font-bold text-[#454545]">
                Bio MCQ questions
              </Text>
              <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                <Image source={BackBlack} className="w-[10] h-[15]" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* Sub Lesson 1 end */}
      </View>

      <View className="px-3">
        {/* Sub Lesson 1 start */}
        <TouchableOpacity
          className="justify-center w-full h-20 rounded-lg bg-[#DCDCDC] mt-4"
          onPress={() => navigation.navigate("Notification1")}
        >
          <View className="flex flex-col items-center">
            <View className="flex-row w-full">
              <View className="absolute inset-y-0 left-0 justify-center pl-3 pr-3 mr-3">
                <Image source={Menu3} className="w-[65] h-[65]" />
              </View>
              <Text className="pl-24 pr-10 text-base font-bold text-[#454545]">
                Bio Past Papers
              </Text>
              <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                <Image source={BackBlack} className="w-[10] h-[15]" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* Sub Lesson 1 end */}
      </View>

      <View className="px-3">
        {/* Sub Lesson 1 start */}
        <TouchableOpacity
          className="justify-center w-full h-20 rounded-lg bg-[#DCDCDC] mt-4"
          onPress={() => navigation.navigate("Notification1")}
        >
          <View className="flex flex-col items-center">
            <View className="flex-row w-full">
              <View className="absolute inset-y-0 left-0 justify-center pl-3 pr-3 mr-3">
                <Image source={Menu4} className="w-[65] h-[65]" />
              </View>
              <Text className="pl-24 pr-10 text-base font-bold text-[#454545]">
                Bio Model Papers
              </Text>
              <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                <Image source={BackBlack} className="w-[10] h-[15]" />
              </View>
            </View>
          </View>
        </TouchableOpacity>
        {/* Sub Lesson 1 end */}
      </View>
    </SafeAreaView>
  );
};

export default Menu;
