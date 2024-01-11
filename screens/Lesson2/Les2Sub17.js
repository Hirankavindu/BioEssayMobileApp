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

const Les2Sub17 = () => {
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
            ජීවි පද්ධති සදහා ශක්තියේ අවශ්‍යතාවය විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-5 text-base font-semibold text-justify text-gray-800">
            ද්‍රව්‍ය සංස්ලේෂණය{"\n"}
            {"\n"}ප්ලාස්ම පටල හරහා සිදුවන සක්‍රීය පරිවහනය.{"\n"}
            {"\n"}ස්නායු ආවේග සම්ප්‍රේෂණය{"\n"}
            {"\n"}පේශි සංකෝචනය{"\n"}
            {"\n"}පක්ෂ්ම හා කශිකා සැලීම{"\n"}
            {"\n"}ජෛව සංදීප්තිය{"\n"}
            {"\n"}විද්‍යුත් විසර්ජනය
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            සංවෘත්තීය ප්‍රතික්‍රියා හා අපවෘත්තීය ප්‍රතික්‍රියා යනු මොනවාදැයි
            උදාහරණ සහිතව විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            සංත්තීය ප්‍රතික්‍රියාවලදී නිදහස් ශක්තිය අවශෝෂණය කිරීමෙන්,සරල
            අණුවලින් සංකීර්ණ අණු සාදයි.{"\n"}
            {"\n"}ශක්ති අවශෝෂක ප්‍රතික්‍රියාවකි.{"\n"}උදා - ප්‍රභාසංස්ලේෂණය
            {"\n"}
            ප්‍රෝටීන සංස්ලේෂණය{"\n"}
            {"\n"}අපවෘත්තීය ප්‍රතික්‍රියාවලදී සංකීර්ණ අණු සරල අණු බවට බිද
            හෙලමින් නිදහස් ශක්තිය මුදා හරියි.{"\n"}
            {"\n"}ශක්ති දායක ප්‍රතික්‍රියාවක් ලෙස හදුන්වයි.{"\n"}උදා- සෛලීය
            ශ්වසනය
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            සර්වත්‍ර ශක්ති හුවමාරු ඒකකය ලෙස ATP හි කාර්යභාරය විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            ATP නියුක්ලියෝටයිඩයකි.{"\n"}
            {"\n"}රයිබෝස් සීනි.{"\n"}
            {"\n"}ඇඩිනීන් නයිට්‍රජනීය භෂ්මයක්ද{"\n"}
            {"\n"}පොස්ෆේට කාණ්ඩ තුනක දාමයකින් එය සමන්විතය.{"\n"}
            {"\n"}ජලවිච්ඡේදනයේදී අවසාන පොස්පේට් කාණ්ඩය ඉවත් වී ADP හා Pi ලබා දේ.
            {"\n"}
            {"\n"}ප්‍රතිඵල ලෙස විශාල ශක්තියක් මුදා හරියි.{"\n"}
            {"\n"}මක් නිසාද යත් ඵල (ADP + Pi) හා සසදන විට,ප්‍රතික්‍රියකවල
            (ATP+ජලය) බොහෝ ශක්තියක් අඩංගු බැවිනි. ඒනිසා එය ශක්තිය නිපදවන අතර,
            ශක්තිදායක ප්‍රතික්‍රියාවකි.{"\n"}
            {"\n"}ATP ජල විච්ඡේදනයේදී ලබාදෙන නිදහස් ශක්තිය -305.5kJmol-1{"\n"}
            {"\n"}
            බොහෝ ජෛව විද්‍යාත්මක ප්‍රතික්‍රියා අග්‍රස්ථ පොස්ෆේට් බන්ධනය බිදෙන
            විට පිටවන ශක්තිය භාවිතා කරයි.{"\n"}
            {"\n"}ATP අණුව සචලය{"\n"}
            {"\n"}ඒ නිසා එයට සෛලය තුළ ඕනෑම ශක්තිය අවශ්‍ය වන ප්‍රතික්‍රියාවක්
            සිදුවන ඕනෑම ස්ථානයකට ශක්තිය රැගෙන යාමට හැකිය.{"\n"}
            {"\n"}ADP,අකාබනික පොස්ෆේට් (Pi) හා ශක්තිය භාවිතයෙන් ,ජීවී දේහ තුළ
            කෙටි කාලයක් තුළ ATP නිපදවිය හැක.{"\n"}
            {"\n"}සෛල තුල ATP නිපදවීම පොස්ෆොරයිලීකරණය ලෙස හදුන්වයි.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les2Sub17;
