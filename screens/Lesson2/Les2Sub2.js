import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Back, BackBox, BackBox2, Hero1, Hero2 } from "../../assets";

const Les2Sub2 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="relative flex-1 pt-5 bg-white">
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        {/* Back Button start */}
        <View className="px-3 h-14">
          <View className="flex-row">
            <TouchableOpacity
              className="items-center"
              onPress={() => navigation.navigate("Lesson2")}
            >
              <Image source={BackBox2} width={200} height={30} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Back Button End */}

        {/* Lesson name banner start */}
        <View className="h-20 bg-[#de8212] flex-col justify-center">
          <View className="flex-row px-3">
            <View className="w-2 bg-white h-14"></View>
            <View className="flex-col px-2">
              <Text className="flex flex-col justify-center text-lg font-bold text-white">
                ජීවයේ රසායනික හා සෛලීය පදනම
              </Text>
              <Text className="flex flex-col justify-center mt-1 text-sm font-semibold text-slate-100">
                පාඩම් අංක 02
              </Text>
            </View>
          </View>
        </View>
        {/* Lesson Banner end */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            කාබෝහයිඩ්‍රේටවල ප්‍රධාන කෘත්‍යය මොනවාදැයි උදාහරණ සහිතව දක්වන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 pt-2 pb-3 text-lg font-bold text-justify text-gray-800">
            මොනොසැකරයිඩ
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            ශක්ති ප්‍රභවයක් ලෙස{"\n"}
            {"\n"}ඩයිසැකරයිඩ හා පොලිසැකරයිඩවල තැනුම් ඒකක ලෙස{"\n"}
            {"\n"}මෝල්ටෝස්,සුක්‍රෝස් වැනි ඩයිසැකරයිඩවල සංඝටක ලෙස ( DNA ,RNA )
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            ඩයිසැකරයිඩ
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            කිරිවල සංචිත - ලැක්ටෝස්{"\n"}
            {"\n"}ෆ්ලෝයම තුළ පරිවහනයට - සුක්‍රෝස්{"\n"}
            {"\n"}උක් ශාකයේ සංචිත සීනි - සුක්‍රෝස්
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            පොලිසැකරයිඩ
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            ශාක හා හරිත ඇල්ගී (Chlorophytes) තුළ පිෂ්ඨය ලෙස ග්ලූකෝස් ගබඩා කරයි.
            {"\n"}
            {"\n"}සත්ත්වයන් හා දිලීර තුළ ග්ලයිකොජන් ලෙස ග්ලූකෝස් ගබඩා කරයි .
            {"\n"}
            {"\n"}
            ඩේලියා ආකන්ද තුළ ඉනියුලීන් ලෙස ෆ්රක්ටෝස් ගබඩා කරයි .{"\n"}
            {"\n"}ශාක හා හරිත ඇල්ගී (Chlorophytes) සෛල බිත්තියේ සෙලියුලෝස්{"\n"}
            {"\n"}ශාක පටකවල මධ්‍ය සූස්තරයේ පෙක්ටීන්{"\n"}
            {"\n"}ශාක සෛල බිත්තියේ හෙම්සෙලියුලෝස්{"\n"}
            {"\n"}දිලීර සෛල බිත්තියේ හා ආත්‍රපෝඩා පිට සැකිල්ලේ කයිටීන් .
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les2Sub2;
