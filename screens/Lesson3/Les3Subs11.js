import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Back, BackBox, BackBox2, Hero1, Hero2 } from "../../assets";

const Les3Sub11 = () => {
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
              onPress={() => navigation.navigate("Lesson3")}
            >
              <Image source={BackBox2} width={200} height={30} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Back Button End */}
        {/* Lesson name banner start */}
        <View className="h-20 bg-[#6a1b3b] flex-col justify-center">
          <View className="flex-row px-3">
            <View className="w-2 bg-white h-14"></View>
            <View className="flex-col px-2">
              <Text className="flex flex-col justify-center text-lg font-bold text-white">
                පරිණාමය හා ජීවීන්ගේ විවිධත්වය
              </Text>
              <Text className="flex flex-col justify-center mt-1 text-sm font-semibold text-slate-100">
                පාඩම් අංක 03
              </Text>
            </View>
          </View>
        </View>
        {/* Lesson Banner end */}
        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            Cycas ජීවන චක්‍රය විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ජීවන චක්‍රයේ ප්‍රමුඛ ශාකය ද්විගුණ බීජාණු ශාකයයි.{"\n"}
            {"\n"}එය ප්‍රභාසංස්ලේෂකය.{"\n"}
            {"\n"}ජන්මාණු ශාකය ක්ෂීණ වී .{"\n"}
            {"\n"}එහි ජීවිත කාලය පුරාම බීජාණු ශාකය මත යැපෙන තත්වයට පත් වී ඇත.
            {"\n"}
            {"\n"}
            ප්‍රමුඛ බීජාණු ශාකය මුල් , කද , පත්‍රවලට විභේදිත බහුවාර්ෂික ශාකයකි.
            {"\n"}
            {"\n"}කද අතු නොබෙදුණු ස්තම්බ ආකාර කාෂ්ඨීය ව්‍යුහයකි.{"\n"}
            {"\n"}පත්‍ර කිරුළක් ලෙස සැකසේ.{"\n"}
            {"\n"}සං‍යුක්ත පත්‍ර ශුෂ්කරූපී අනුවර්තන පෙන්වයි.{"\n"}
            {"\n"}ළපටි පත්‍ර කුණ්ඩලාකාර ප්‍රාක් පත්‍රනය දක්වයි.{"\n"}
            {"\n"}බීජාණු ශාකය ද්විගෘහිය.{"\n"}
            {"\n"}විෂමබීජාණුකය{"\n"}
            {"\n"}බීජාණු ශාකයට මුදුන් මූල පද්ධතියක් ඇත.{"\n"}
            {"\n"}ද්විතීක වර්ධනය පෙන්වයි.{"\n"}
            {"\n"}මහා බීජාණූ නිපදවන බීජාණු ශාකය ජායා ශාකයයි.{"\n"}
            {"\n"}ක්ෂුද්‍ර බීජාණු නිපදවන නිපදවන ශාකය පුං බීජාණු ශාකයයි.{"\n"}
            {"\n"}
            පරිණත ජායා ශාකයේ අග්‍රස්ථයේ කිරුළක් පරිද්දෙන් මහා බීජාණුපත්‍ර හටගනී.
            {"\n"}
            {"\n"}මහාබීජාණුධානිය ආරක්ෂිත ස්තරයක් වන ඩිම්භාවරණයෙන් වට වී ඩිම්බය
            සාදයි.{"\n"}
            {"\n"}ඩිම්බයේ විදුර අන්තයේ ඩිම්බාවරණයේ කුඩා සිදුරක් ඇත.{"\n"}
            {"\n"}එය අනුද්වාරය ලෙස හදුන්වයි.{"\n"}
            {"\n"}මහා බීජාණු පටකයේ ඇති එක් සෛලයක් විභේදනය වී තනි මහා බීජාණු මාතෲ
            සෛලයක් බවට පත් වේ.{"\n"}
            {"\n"}මහා බීජාණු මාතෘ සෛලය එහි ඌනනයෙන් ඒකගුණ මහා බීජාණු හතරක් හටගනී.
            {"\n"}
            {"\n"}ඉන් එකක් පමණක් ක්‍රියාකාරීව ඉතිරි වේ.{"\n"}
            {"\n"}මහා බීජාණුධානි පටකයේ ඉතිරිය කුක්ෂීය ලෙසම ඉතිරි වී පෝෂණය සපයයි.
            {"\n"}
            {"\n"}මහා බීජාණුව බාහිර පරිසරයට නිදහස් නොකෙරේ.{"\n"}
            {"\n"}එය ඩිම්බය තුල රැදෙමින් ජායා ජන්මාණු ශාකය (n) බවට විකසනය වේ.
            {"\n"}
            {"\n"}
            පරිණත ඩිම්බය තුල ජායා ජන්මාණූ (n) ශාකය අඩංගු වේ.{"\n"}
            {"\n"}ජායා ජන්මාණු ශාකය අණ්ඩාණුධානි රැසක් නිපදවයි.{"\n"}
            {"\n"}එක් එක් අණ්ඩානුධානිය තුල තනි අණ්ඩයක් බැගින් නිපදවයි.{"\n"}
            {"\n"}
            පරිණත පුං ශාකය පුං කේතුවක් නිපදවන අතර ඒවා ක්ෂුද්‍ර බීජාණු පත්‍රවලින්
            සමන්විතය.{"\n"}
            {"\n"}මේ ක්ෂුද්‍ර බීජාණු පත්‍රවල යටි පැත්තේ ක්ෂුද්‍ර බීජාණුධානි
            අඩංගු වේ.{"\n"}
            {"\n"}ක්ෂුද්‍ර බීජාණුධානිවල තුළ ඇති ක්ෂුද්‍ර බීජාණු මාතෘ සෛලවලින්
            (2n) ක්ෂුද්‍ර බීජාණු (n) රැසක් ඌනනයෙන් නිපදවයි.{"\n"}
            {"\n"}ඒවා බීජාණුධානි තුළදී පරාග කණිකාවලට විකසනය වී නිදහස් කරයි.
            {"\n"}
            {"\n"}
            පරාග කණික සුළග මගින් ව්‍යාප්ත වේ.{"\n"}
            {"\n"}මේවා පරිණත ඩිම්බයක අනුද්වාරයේ තැන්පත්වීම පරාගණයයි.{"\n"}
            {"\n"}
            ඩිම්බයේ පරාග කුටීරයට පරාග කණිකා ඇතුළු වන්නේ අනුද්වාරය තුළිනි.{"\n"}
            {"\n"}
            පරාග කුටීරය තුළදී පරාග කණිකා පුං ජන්මාණු ශාකය බවට විකසනය වේ.{"\n"}
            {"\n"}
            පුං ජන්මාණු ශාකයේ බෙදුණු පරාග නාලයක් අඩංගුවන අතර එමගින් කුක්ෂියෙන්
            පෝෂක අවශෝෂණය කරගනී.{"\n"}
            {"\n"}පුං ජන්මාණු ශාකයට කෙටි ජීවන කාලයක් ඇත.{"\n"}
            {"\n"}පුං ජන්මාණු ශාකය විශාල ශුක්‍රාණු දෙකක් නිපදවයි.{"\n"}
            {"\n"}පරාග නාළයේ කෙළවර පිපිරීමෙන් ඩිම්බයේ අණ්ඩානුධානි කුටීරයට
            ශුක්‍රාණු නිදහස් කරයි.{"\n"}
            {"\n"}ශුක්‍රාණු ජලීය මාධ්‍ය තුළින් පිහිනා ගොස් අණ්ඩය සංසේචනය කරයි.
            {"\n"}
            {"\n"}
            එමගින් ද්විගුණ (2n) යුක්තාණුව සාදයි.{"\n"}
            {"\n"}යුක්තාණුව කළලය බවට විකසනය වේ.{"\n"}
            {"\n"}ඉතිරිවන ජායා ජන්මාණු ශාකය භ්‍රෑණපෝෂය බවට පත් වේ.{"\n"}
            {"\n"}එය බීජ ප්‍රරෝහණයේදී විකසනය වන කලලයට පෝෂණය සපයයි.{"\n"}
            {"\n"}
            ඩිම්බාවරණය බීජාවරණය බවට පත් වේ.{"\n"}
            {"\n"}ඩිම්බය බීජය බවට පත් වේ.{"\n"}
            {"\n"}බීජය ව්‍යාප්ත ඒකකය වේ.{"\n"}
            {"\n"}එහි කලලය හා සංචිත ආහාර අඩංගුය.
            {"\n"}
            {"\n"}
            මේවා බීජාවරණයකින් වට වී ඇත.{"\n"}
            {"\n"}බීජ ව්‍යාපත් වී හිතකර පරිසර තත්ත්ව ලැබුණු විට ඒවා ප්‍රරෝහණය වී
            බීජ පැළ නිපදවයි.( ළපටි බීජාණු ශාකය නිපදවයි)
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les3Sub11;
