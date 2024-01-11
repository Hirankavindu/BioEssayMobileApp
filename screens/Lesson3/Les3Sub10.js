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

const Les3Sub10 = () => {
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
            බීජක ශාකවල පවතින මූලික ලක්ෂණ විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            බීජ නිෂ්පාදනය{"\n"}
            බීජයක් සමන්විත වන්නේ කලලය හා භ්‍රෑණපෝෂයෙනි.{"\n"}
            {"\n"}
            කලලයට ආහාර සැපයෙන්නේ භ්‍රෑණ්පෝෂය මගිනි.{"\n"}
            {"\n"}බීජාවරණ ලෙස හදුන්වන ආරක්ෂක ආවරණවලින් භ්‍රෑණපෝෂය ආවරණය වී ඇත,
            {"\n"}
            {"\n"}
            බීජ පරිණත වූ විට විවිධ ව්‍යාප්ත ක්‍රම ආධාරයෙන් ඒවා විසිර යයි.{"\n"}
            {"\n"}
            වර්තමානයේ ගොඩබිම පරිසරයේ විශාල විවිධත්වයකට හිමිකම් කියන ප්‍රමුඛ
            නිෂ්පාදකයන් බවට පත්වීමට මූලික අනුවර්තනය වූයේ බීජ නිපදවීමයි.{"\n"}
            {"\n"}
            ක්ෂීණ වූ ජන්මාණු ශාකය.{"\n"}
            {"\n"}සනාල ශාකවලින් බීජ ශාක පරිණාමයට මග සලසමින් ජන්මාණු ශාකය ක්ෂීණ
            වීමේ පරිණාමික ප්‍රවණතාවය නොකඩවා සිදු විය .{"\n"}
            {"\n"}බීජ සහිත සනාල ශාකවල ජන්මාණු ශාකය පියවි ඇසට නොපෙනේ.{"\n"}
            {"\n"}ඒවා බොහෝ දුරට අන්වීක්ෂීය වේ.{"\n"}
            {"\n"}බීජාණුවලින් හටගත් කුඩා ජන්මාණු ශාකය බීජාණු ශාකයේ වූ
            බීජාණුධානිය තුලම රැදී පවතී.{"\n"}
            {"\n"}මේ නිසා පාරිසරික ආතති තත්ත්ව වලින් ජන්මාණු ශාකය ආරක්ෂා වේ.
            {"\n"}
            {"\n"}
            බීජාණු ශාකයේ තෙත් ප්‍රජනක පටක මගින් ජන්මාණු ශාකය වියළීමෙන් හා
            පාරජම්බූල කිරණවලින් ආරක්ෂා කරයි.{"\n"}
            {"\n"}මේනිසා පරාධීන ජන්මාණු ශාකයට බීජාණු ශාකයෙන් පෝෂක ලබා ගනී.{"\n"}
            {"\n"}
            විෂමබීජාණුකතාව {"\n"}
            බීජ ශාක විෂමබීජාණුකයි / ක්ෂුද්‍ර හා මහා බීජාණු නිපදවයි.{"\n"}
            {"\n"}සෑම මහා බීජාණුධානියකම තනි කෘත්‍යම මහා බීජාණුවක්ද {"\n"}
            {"\n"}සෑම ක්ෂුද්‍ර බීජාණුධානියකම ක්ෂුද්‍ර බීජාණු විශාල සංඛ්‍යාවක් ද
            අන්තර්ගතය .{"\n"}
            {"\n"}ඩිම්බ හා අණ්ඩ නිපදවීම.{"\n"}
            {"\n"}මහා බීජාණුධානිය{"\n"}ජනක බීජාණුශාකය තුලම රදවා ගැනීම බීජ ශාකවල
            අනන්‍ය ලක්ෂණයකි.{"\n"}
            {"\n"}මහාබීජාණුධානිය ආරක්ෂා කරන බීජාණු ශාක පටක ස්තරය ඩිම්භාවරණය ලෙස
            හදුන්වයි.{"\n"}
            {"\n"}මහාබීජාණුධානිය , මහාබීජාණුව හා ආවරණ පටක සියල්ල එක්ව සැලකූ විට
            එය ඩිම්භය ලෙස හදුන්වයි.{"\n"}
            {"\n"}සෑම ඩිම්බයකම මහාබීජාණුවෙන් නිපදවන ජායා ජන්මාණු ශාකය හා ඒ තුළ
            අඩංගු අණ්ඩ එකක් හෝ කිහිපයක් අන්තර්ගත වේ.{"\n"}
            {"\n"}පරාග හා ශුක්‍රාණු නිපදවීම. ක්ෂුද්‍ර බීජානූ පරාග කණිකා බවට
            විකසනය වේ.{"\n"}
            {"\n"}එහි පරාග බිත්තියෙන් වටකරගත් පුං ජන්මාණු ශාක අන්තර්ගත වේ.{"\n"}
            {"\n"}
            ස්පෝරොපොලනීන් නම් බහු අවයවිකයෙන් ඝන වූ බිත්ති නිසා පරාගණයේදී පරාග
            කණිකා ආරක්ෂා වේ.{"\n"}
            {"\n"}පරාග කණිකා ප්‍රරෝහණය වන විට විකසනය වන පරාග නාළය මගින් අණ්ඩය
            තුළ අඩංගු ජායා ජන්මාණු ශාකාය තුළට ශුක්‍රාණු (පුං ජන්මාණු ) නිදහස්
            කරයි.{"\n"}
            {"\n"}පරාග කණිකාව තුළ , ශුක්‍රාණූ නිපදවන පුං ජන්මාණු ශාකය අඩංගුය.
            {"\n"}
            {"\n"}
            ශුක්‍රාණු සෘජුවම පරාග නාළය ඔස්සේ පරිවහනය වන නිසා බීජ ශාකවල
            ශුක්‍රාණුවලට චලභාවයක් අවශ්‍ය නොවේ.{"\n"}
            {"\n"}එහෙත් සමහර විවෘත බීජක ශාක කශිකාධර ශුක්‍රාණු දැරීමේ පුරාතන
            ලක්ෂණය සහිතය.{"\n"}
            {"\n"}සියලු අවෘත බීජක ශාක හා බොහෝ විවෘත්ස් බීජක ශාක ශුක්‍රාණු කශිකා
            නොදරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            Phylum Gentophyta ට අයත්වන ශාක අවෘත බීජක ශාකවලට වඩාත් සමීප විවෘත
            බීජක ශාක ලෙස හැදින්වීමට හේතු මොනවාද?
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ශෛලමයේ වාහිනී දරන එකම විවෘත බීජක ආකාරයයි.{"\n"}
            {"\n"}මේවායේ පත්‍ර සපුෂ්ක ශාක පත්‍ර වැනි පෙනුමක් ගනී.{"\n"}
            {"\n"}ඒවායේ බීජයද අවෘත බීජක ඵලයක් වැනි පෙනුමක්ද ගනී.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les3Sub10;
