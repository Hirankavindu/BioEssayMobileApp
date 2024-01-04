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

const Les2Sub8 = () => {
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
            ජීවී ද්‍රව්‍ය වල මූලද්‍රව්‍ය සංයුතිය (කෙටි සටහන්).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            හදුනාගත් මූල ද්‍රව්‍ය අනූදෙකක් පමණ ස්වාභාවියේ ඇත.{"\n"}
            {"\n"}නිරෝගී ජීවිතයක් පවත්වා ගැනීමට සහ ප්‍රජනනය සදහා එම මූලද්‍රව්‍ය
            අතරුන් 20% -25% ප්‍රමාණයක් අත්‍යවශ්‍යය.{"\n"}
            {"\n"}ශාකවලට මූලද්‍රව්‍ය 17 ක් පමණද මිනිසාට මූලද්‍රව්‍ය 25 ක් පමණද
            අත්‍යවශ්‍යය{"\n"}
            {"\n"}ජීවී පදාර්තයෙන් 96% ප්‍රමාණයක් ඔක්සිජන් (O) ,කාබන් (C)
            ,හයිට්‍රජන් (H), සහ නයිට්‍රජන් (N) වලින් සෑදී ඇත.{"\n"}
            {"\n"}ජීවීන්ගේ ස්කන්ධයෙහි ඉතිරි 4% බහුලව අඩංගුවන්නේ{"\n"}
            කැල්සියම් (Ca) ,පොස්පරස්(P) ,පොටෑසියම් (K) සහ සල්ෆර්ය(S){"\n"}
            {"\n"}මේවාට අමතරව ජීවි ද්‍රව්‍ය තුළ Na ,Mg ,B ,Co,Cu,Cr,F සහ Fe ද
            ස්වල්ප ප්‍රමාණයක් ඇත.
          </Text>
        </View>

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ප්‍රෝටීන වල දුස්වාභාවීකරණය (කෙටි සටහන්).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            ප්‍රෝටීනයක ඇති දුර්වල රසායනික බන්ධන හා අන්තර්ක්‍රියා වෙනස්වීමෙන්
            ප්‍රෝටීනයක වූ විශිෂ්ට රසායනික ත්‍රිමාණ හැඩය නැතිවීම දුස්සවභාවීකරණය
            නම් වේ.{"\n"}
            {"\n"}ප්‍රෝටීනවල දුස්සවභාවීකරණයට බලපාන කාරක: {"\n"}
            ඉහළ උෂ්ණත්ව සහ අධිශක්ති විකිරණ{"\n"}
            ප්‍රබල උෂ්ණත්ව හා අධිශක්ති විකිරණ{"\n"}
            ප්‍රබල අම්ල ,භෂ්ම හා අධික ලවණ සාන්ද්‍රණ{"\n"}
            බැර ලෝහ{"\n"}
            කාබනික ද්‍රාවක හා ක්ෂාලක
          </Text>

          {/* Lesson Categories Start */}
          <View className="px-3 bg-gray-300">
            <Text className="py-3 text-base font-bold text-gray-800">
              RNA වර්ග හා කෘත්‍ය (කෙටි සටහන්).
            </Text>
          </View>
          {/* Lesson Category end */}
          <Text className="px-3 mt-3 mb-5 text-base font-semibold text-justify text-gray-800">
            සෛලවල RNA වර්ග තුනක් ඇත.{"\n"}
            {"\n"}පණිවිඩකාරක RNA (m-RNA) :{"\n"}m – RNA රේඛීය අණුවකි.{"\n"}
            සාපේක්ෂව සෛල තුල අඩුවෙන්ම පවතින RNA වර්ගයයි.{"\n"}RNA වල ගබඩා වී ඇති
            ප්‍රවේණික තොරතුරු නයිට්‍රජනීය භෂ්ම අනුපිළිවෙළක් ලෙස පිටපත් කරයි.
            {"\n"}
            න්‍යෂ්ටි ප්ලාස්මයේ සිට ප්‍රෝටීන සංස්ලේෂණය සිදුවන ස්ථනයට (රයිබසෝම)
            න්‍යෂ්ටික සිදුරු හරහා ප්‍රවේණික තොරතුරු පරිවහනය.{"\n"}
            {"\n"}සංක්‍රාමී RNA(t-RNA) :{"\n"}කුඩාම RNA අණු වර්ගයයි.{"\n"}රේඛීය
            නමුත් පුඩු තුනක් සහිත ව්‍යුහයක් සාදයි.{"\n"}ප්‍රෝටීන සංස්ලේෂණය
            සිදුවන ස්ථානයට අමයිනෝ අම්ල පරිවහනය.{"\n"}
            {"\n"}රයිබොසෝමීය RNA (r-RNA) :{"\n"}බහුලතම RNA වර්ගයයි{"\n"}සංකීර්ණ
            වූ අක්‍රමවත් ව්‍යුහයක් ඇත.{"\n"}එය පොලිපෙප්ටයිඩ දාම සැදීමට ස්ථානය
            සපයයි
          </Text>
          {/* Lesson Categories Start */}
          <View className="px-3 bg-gray-300">
            <Text className="py-3 text-base font-bold text-gray-800">
              අමතරව ජීවීන් තුල අඩංගු වන නියුක්ලියෝටයිඩ (කෙටි සටහන්).
            </Text>
          </View>
          {/* Lesson Category end */}
          <Text className="px-3 mt-3 mb-5 text-base font-semibold text-justify text-gray-800">
            ATP :{"\n"} සර්වත්‍ර ශක්ති වාහකයකි.{"\n"}
            {"\n"}
            NAD+ {"\n"}
            සහඑන්සයිම ලෙස ක්‍රියාකරයි ඉලෙක්ට්‍රෝන වාහකයක් ලෙස ක්‍රියාකරයි.
            {"\n"}ශ්වසනයේදී ඔක්සිකාරකයක් ලෙස ක්‍රියාකරයි.{"\n"}
            {"\n"}
            NADP+{"\n"}
            සහඑන්සයිම ලෙස ක්‍රියාකරයි.{"\n"}ඉලෙක්ට්‍රෝන වාහකයක් ලෙස
            ක්‍රියාකරයි.{"\n"}ප්‍රභාසංස්ලේෂණයේදී ඔක්සිකාරකයක් ලෙස ක්‍රියාකරයි.
            {"\n"}
            {"\n"}
            FAD {"\n"}
            සහඑන්සයිමයක් ලෙස ක්‍රියාකරයි.{"\n"}ඉලෙක්ට්‍රෝන වාහකයක් ලෙස
            ක්‍රියාකරයි.{"\n"}ඔක්සිකාරකයක් ලෙස ක්‍රියාකරයි
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub8;
