import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Back, BackBox, Hero1, Hero2 } from "../assets";

const Lesson4 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="relative flex-1">
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        {/* Banner Start */}
        <View className="h-96 bg-[#BBAB8C] flex-col">
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
        <View className="h-20 bg-[#755a25] flex-col justify-center">
          <View className="flex-row px-3">
            <View className="w-2 bg-white h-14"></View>
            <View className="flex-col px-2">
              <Text className="flex flex-col justify-center text-lg font-bold text-white">
                ශාක ආකාරය හා ක්‍රියාකාරිත්වය
              </Text>
              <Text className="flex flex-col justify-center mt-1 text-sm font-semibold text-slate-100">
                පාඩම් අංක 04
              </Text>
            </View>
          </View>
        </View>
        {/* Lesson Banner end */}
        <View className="px-3">
          {/* Sub Lesson 1 start */}
          <TouchableOpacity
            className="justify-center w-full h-36 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub1")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ශාක කඳෙහි ප්‍රරෝහාග්‍රයේ ව්‍යුහය සහ එහි ප්‍රාථමික වර්ධනය
                  සිදුවන ආකාරයත් මුලෙහි ප්‍රාථමික වර්ධනය සිදුවන ආකාරයත් විස්තර
                  කරන්න.{"\n"}මුල් අග්‍රස්ථයේ ව්‍යුහය ප්‍රරෝහ අග්‍රස්ථයෙන් වෙනස්
                  වන ලක්ෂණ මොනවාද.?
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
};

export default Lesson4;
