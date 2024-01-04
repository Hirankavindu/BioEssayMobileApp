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
import { Back, BackBox, BackBox2, Hero1, Hero2 } from "../../assets";

const Les2Sub21 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="relative flex-1 pt-10 bg-white">
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
            C3 ශාකයක ශාක පත්‍රයක පූටිකාවක් තුළින් ඇතුළු වූ CO2 අණුවක් ,ග්ලූකෝස්
            බවට පරිවර්ථනය වීම දක්වා ක්‍රියා පිළිවෙල විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            කැල්වින් චක්‍රය හරිතලවය තුළ පංජරයේදී සිදු වේ.{"\n"}
            {"\n"}ආලෝක ප්‍රතික්‍රියාවේදී නිපදවනු ලබන ATP හා NADPH වල ශක්තියෙන්
            CO2 ඔක්සිහරණය කෙරේ.{"\n"}
            {"\n"}එන්සයිම උත්ප්‍රේරිත ප්‍රතික්‍රියා මගින් සිදුවන අතර මෙය
            සංවෘත්තීය ප්‍රතික්‍රියා වෙයි.{"\n"}
            {"\n"}ග්ලිසරැල්ඩිහයිඩ් - 3 - පොස්පේට් කැල්වින් චක්‍රයේ ඵලයක් වේ.
            {"\n"}
            {"\n"}
            එක් G3P අණුවක් ශුද්ධ සංස්ලේෂණය සදහා කැල්වින් චක්‍රය තෙවරක් සිදුවිය
            යුතුය.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-4 text-lg font-bold text-justify text-gray-800">
            කාබොක්සිල්කරණය / කාබන් තිර කිරීම.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            CO2 ප්‍රතිග්‍රාහකයා 5C සං‍යුතියකින් යුක්ත සීනි අණුවක් වන අතර එය
            රිබියුලෝස් බිස්පොස්ෆේට් (RUBP) වේ.{"\n"}
            {"\n"}RUBP ට CO2 එකතු වීම කාබොක්සිල්කරණයයි.{"\n"}
            {"\n"}RUBP කබොක්සිලේස් ඔක්සිජනේස් හෙවත් රුබිස්කෝ (RUBP) එනසයිමය මෙම
            ප්‍රතික්‍රියාව උත්ප්‍රේරණය කරයි.{"\n"}
            {"\n"}RUBP කබොක්සිල්කරණයේ ප්‍රථම ඵලය කාබන් 06 කින් යුතු අස්ථායි
            අණුවක් වන අතර එය වහාම 3C බැගින් වන 3PGA ( 3- පොස්ෆොග්ලිසරේට්) අණු 02
            ක් බවට බිදී යයි.{"\n"}
            {"\n"}මෙය ප්‍රභාසංස්ලේෂණයේදී සෑදෙන ප්‍රථම ස්ථායි ඵලයයි.{"\n"}
            {"\n"}RUBP කාබොක්සිලේස් ඔක්සිජනේස් එන්සයිමය විශාල ප්‍රමාණයකින්
            හරිතලව පංජරය තුළ පවතී.{"\n"}
            {"\n"}3-PGA වලට ATP වලින් එක් පොස්පේට් කාණ්ඩයක් එකතු කිරීමෙන් එය
            1,3-බිස්පොස්ෆොග්ලිසරේට් බවට පරිවර්තනය වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-4 text-lg font-bold text-justify text-gray-800">
            ඔක්සිහරණය
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            1,3-බිස්පොස්ෆොග්ලිසරේට් ග්ලිසරැල්ඩිහයිඩ3- පොස්ෆේට් (G3P) බවට
            පියවරෙන් පියවර ඔක්සිහරණය වේ.{"\n"}
            {"\n"}මේවා එන්සයිම උත්ප්‍රේරිත ප්‍රතික්‍රියා වන අතර ආලෝක
            ප්‍රතික්‍රියාවේදී නිපදවූ NADPH හා ATP මේ සදහා වැය කරයි.{"\n"}
            {"\n"}G3P කාබෝහයිඩ්‍රේට ( ග්ලූකෝස් සංස්ලේෂණයේ පූර්වග අණු වේ)
            (Precursor)
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-4 text-lg font-bold text-justify text-gray-800">
            RUBP පුනර්ජනනය
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            සංකීර්ණ ප්‍රතික්‍රියා ශ්‍රේණියක් හරහා ගොස් RUBP පුනර්ජනනය වේ.{"\n"}
            {"\n"}
            මෙම ක්‍රියාවලියේදී ආලෝක ප්‍රතික්‍රියාවේදී නිපදවා ගත් ATP වැයවේ.
            {"\n"}
            {"\n"}
            පසුව G3P වලින් ග්ලූකෝස් සංස්ලේෂ්ණය වේ.{"\n"}
            {"\n"}මෙය එන්සයිම උත්ප්‍රේරිත ක්‍රියාවලියකි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub21;
