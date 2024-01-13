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

const Les2Sub5 = () => {
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
            නියුකිලියෝසයිඩ,නියුක්ලියෝටයිඩ හා පොලිනියුක්ලියෝටයිඩ පිළීබදව විස්තර
            කරන්න .
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            නියුක්ලෙයික් අම්ල බහුඅවයවික වේ /ජෛව බහුඅවයවික{"\n"}
            {"\n"}
            පොලිනියුක්ලියෝටයිඩ ලෙස පවතී{"\n"}
            {"\n"}තැනුම් ඒකකය නියුක්ලියෝටයිඩ වේ{"\n"}
            {"\n"}C,H,O,N හා P අඩංගුය{"\n"}
            {"\n"}නියුක්ලික් අම්ල මහා අණුය{"\n"}
            {"\n"}නියුක්ලික් අම්ල වර්ග දෙකක් පවතී{"\n"}DNA (ඩියොක්සිරයිබොස්
            නියුක්ලියෝටයිඩ){"\n"}RNA(රයිබෝස් නියුක්ලියෝටයිඩ ){"\n"}
            {"\n"}
            නියුක්ලියෝටයිඩවල සංඝඨක තුනකි{"\n"}පෙන්ටෝස් සීනි{"\n"}නයිට්‍රජනීය
            භෂ්ම{"\n"}පොස්ෆේට් කාණ්ඩය{"\n"}
            {"\n"}පොස්ෆේට් කාණ්ඩය රහිත නියුක්ලියීටයිඩ නියුක්ලියෝසයිඩ නම් වේ ,
            {"\n"}
            උදා -ඇඩිනොසීන් ,ගුවනොසීන් {"\n"}
            {"\n"}පෙන්ටෝස් සීනි වර්ග දෙකකි{"\n"}ඩිඔක්සිරයිබෝස්{"\n"}රයිබෝස්
            (ඩිඔක්සිරයිබෝස්වල රයිබෝස් වලට වඩා ඔක්සිජන් පරමාණුවක් අඩුය){"\n"}
            {"\n"}
            නයිට්‍රජනීය භෂ්ම ප්‍රධාන කාණ්ඩ දෙකකි{"\n"}
            පියුරීන{"\n"}වළලු දෙකක් සහිතව ප්‍රමාණයෙන් විශාලය{"\n"}
            {"\n"}පිරමිඩීන්{"\n"}එක් වලයක් සහිතව ප්‍රමාණයෙන් කුඩාය{"\n"}
            {"\n"}
            පියුරීන්වලට අයත් භෂ්ම වර්ග දෙකකි{"\n"}ඇඩිනීන් (A) හා ගුවැනීන් (G)
            {"\n"}
            {"\n"}
            පිරමිඩීන් වර්ග තුනකි{"\n"}
            {"\n"}තයිමීන්(T) , යුරැසීල් (U) හා සයිටොසීන් (C){"\n"}
            {"\n"}පොස්පේට් කාණ්ඩය මගින් නියුක්ලෙයික් අම්ලයවලට ආම්ලික ස්වභාවයක්
            ලබා දෙයි{"\n"}
            {"\n"}එක් නියුක්ලියෝටයිඩයක පෙන්ටොස් සීනි වල තුන්වන කාබන් පරමාණුවලට
            සම්බන්ධ OH කාණ්ඩ අතර සිදුවන සංඝණන ප්‍රතික්‍රියාවක් මගින් සාදන
            පොස්පොඩයිඑස්ටර් බන්ධන මගින් නියුක්ලියෝටයිඩ අණු මිලියන ගණනක් සම්බන්ධ
            වීමෙන් සෑදෙන පොලිනියුක්ලියෝටයිඩ දාමවලින් නියුක්ලික් අම්ල සාදයි{"\n"}
            {"\n"}මෙසේ බන්ධන ඇති වීම නිසා සීනි පොස්පේට් ඒකකවල පුනරාවර්තන රටාවක්
            සහිත පිටකොන්දක් සාදයි{"\n"}
            {"\n"}නියුක්ලික් අම්ල නියුක්ලියෝටයිඩවල රේඛීය බහුඅවයවික වේ{"\n"}
            {"\n"}
            සහභාගීවන සීනි අණු ආකරය මත නියුක්ලෙයික් අම්ල වර්ග දෙකකි{"\n"}
            {"\n"}
            ඩියොක්සිරයිබෝස් සීනි අණු සහිත නියුක්ලියෝටයිඩවලින් DNA තැනේ{"\n"}
            {"\n"}එහි A ,T,G හා C යන නයිට්‍රජනීය භෂ්ම ඇත{"\n"}
            {"\n"}නියුක්ලියෝටයිඩයේ අඩංගු සීනී කාණ්ඩය රයිබෝස් නම් නියුක්ලෙයික්
            අම්ලය RNA වේ{"\n"}
            {"\n"}එහි A,G,C හා U යන නයිට්‍රජනීය භෂ්ම ඇත
          </Text>

          {/* Lesson Categories Start */}
          <View className="px-3 mt-10 bg-gray-300">
            <Text className="py-3 text-base font-bold text-gray-800">
              DNA අණුවේ හා RNA අණුවේ ව්‍යුහ විස්තර කරමින් ඒවා එකිනෙක වෙනස්වන
              අයුරු පැහැදිලි කරන්න
            </Text>
          </View>
          {/* Lesson Category end */}

          {/* Lesson Categories Start */}
          <View className="px-3 mt-3">
            <Text className="py-3 text-lg font-bold text-gray-800">DNA</Text>
          </View>
          {/* Lesson Category end */}
          <Text className="px-3 mt-4 text-base font-semibold text-justify text-gray-800">
            මනඃකල්පිත අක්ෂයක් වටා සර්පිලාකාරව සැකසුණූ ප්‍රතිසමාන්තර
            පොලිනියුක්ලියෝටයිඩ දාම දෙකකින් සෑදුණු ද්විත්ව හෙලික්සාකාර ව්‍යුහයක්
            DNA වලට ඇත.{"\n"}
            {"\n"}එකිනෙකට විරුද්ධ දිශාවලට දිවෙන සීනි -පොස්පේට් පිටකොදු දෙක
            ප්‍රතිසමාන්තර ලෙස හදුන්වයි{"\n"}
            {"\n"}හෙලික්සයේ පිටතට සීනි පොස්ෆේට පිටකොදු පිහිටයි{"\n"}
            {"\n"}හෙලික්සයේ ඇතුලත නයිට්‍රජනීය භෂ්ම යුගලනය වී ඇත{"\n"}
            {"\n"}යුගලනය් වූ නයිට්‍රජනීය භෂ්ම අතර ඇති හයිට්‍රජන් බන්ධන මගින් පට
            දෙක එකට බැද තබා ගනී{"\n"}
            {"\n"}සෑමවිටම පියුරීන භෂ්ම විශේෂිත පිරමිඩීන භෂ්ම සමග යුගලනය වේ{"\n"}
            {"\n"}A හා T අතර හයිට්‍රජන් බන්ධන 2 ක් සාදයි{"\n"}
            {"\n"}G හා C අතර හයිට්‍රජන් බන්ධන 3 ක් සාදයි{"\n"}
            {"\n"}මේ නිසා දාම දෙක එකිනෙකට අනුපූරක වේ{"\n"}
            {"\n"}මේවා අනුපූරක භෂ්ම යුගල වේ{"\n"}
            {"\n"}මූලික ද්විත්ව හෙලික්සාකාර ව්‍යුහයේ එක සම්පූර්ණ දගරයක භෂ්ම යුගල
            10 කි{"\n"}
            {"\n"}ප්‍රවේණික තොරතුරු සංචිත කිරීම හා පරම්පරාවකින් තවත් පරම්පරාවකට
            එම ප්‍රවේනික තොරතුරු සම්ප්‍රේෂණය{"\n"}
            {"\n"}ප්‍රෝටීන සංස්ලේෂණයට ප්‍රවේණික තොරතුරු සංචිත කිරීම්
          </Text>

          {/* Lesson Categories Start */}
          <View className="px-3 mt-3">
            <Text className="py-3 text-lg font-bold text-gray-800">RNA</Text>
          </View>
          {/* Lesson Category end */}
          <Text className="px-3 mt-4 text-base font-semibold text-justify text-gray-800">
            RNA සාමන්‍යයෙන් තනිපට නියුක්ලෙයික් අම්ල වේ{"\n"}
            {"\n"}යුරැසීල් (U) , සයිටොසීන් (C) , ගුඇනීන්(G) ,ඇඩිනීන්(A) භෂ්ම
            අඩංගුය{"\n"}
            {"\n"}රයිබොනියුක්ලියෝටයිඩ වලින් සමන්විතය{"\n"}
            {"\n"}අනුපූරක භෂ්ම යුගලනය අණු 02 ක් අතර හෝ ඇතැම් අවස්තාවල එකම අණුව
            තුල සිදු වේ{"\n"}
            {"\n"}ඇඩිනීන් සහ යුරැසීල් හයිට්‍රජන් බන්ධන දෙකකින් ද ගුවැනීන් සහ
            සයිටොසීන් හයිට්‍රජන් බන්ධන තුනකින්ද බැදී ඇත{"\n"}
            {"\n"}මේ නිසා RNA වල කෘත්‍යයට අත්‍යවශ්‍ය වන ත්‍රිමාණ ව්‍යුහය පවත්වා
            ගනී{"\n"}
            {"\n"}DNA ද්විත්ව පට අණුවකි {"\n"}
            {"\n"}RNA තනි පට අණුවකි{"\n"}
            {"\n"}DNA වල A ,T,G හා C ඇත U නැත{"\n"}
            {"\n"}RNA වල A ,U G හා C ඇත T නැත{"\n"}
            {"\n"}DNA වල ඩියොක්සිරයිබෝස් සීනි ඇත{"\n"}
            {"\n"}RNA වල රයිබෝස් සීනි ඇත
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les2Sub5;
