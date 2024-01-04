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

const Les3Sub9 = () => {
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
            Selaginella ජීවන චක්‍රය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            බීජාණු ශාකය ප්‍රමුඛයි.{"\n"}
            {"\n"}ප්‍රභාසංලේෂකයි.{"\n"}
            {"\n"}ජන්මාණු ශාකය ව්‍යුහයෙන් ක්ෂීණයි.{"\n"}
            {"\n"}පැවැත්ම කෙටිකාලීනයයි.{"\n"}
            {"\n"}එය බීජාණු ශාකය මත අර්ධව යැඔඑයි.{"\n"}
            {"\n"}බීජාණු ශාකය මුල් , කද , පත්‍ර ලෙස විභේදනය වී ඇත.{"\n"}
            {"\n"}සනාල පටක අඩංගු අකාෂ්ඨීය ශාකයයි.{"\n"}
            {"\n"}විෂම පත්‍ර යුගල් ලෙස සැකසී ඇත.{"\n"}
            {"\n"}කද පෘෂ්ඨෝදරීය පැතලිය.{"\n"}
            {"\n"}බීජාණුධානි හටගන්නේ විශේෂණය වූ පත්‍ර වර්ගයක් වන බීජාණු
            පත්‍රවලයි.{"\n"}
            {"\n"}බීජාණුපත්‍ර සුසංහිතව සැකසීමෙන් හටගත් සංකේතුව නැමැති ව්‍යුහය කද
            අග්‍රස්ථයේ පිහිටයි.{"\n"}
            {"\n"}මහා බීජාණුපත්‍ර හා ක්ෂුද්‍රබීජාණු පත්‍ර ලෙස හදුන්වනු ලබන
            බීජාණුපත්‍ර දෙවර්ගයම එක සංකේතුවක පවතී.{"\n"}
            {"\n"}මහා බීජාණු පත්‍රයේ තනි මහා බීජාණුධානියක්ද ක්ෂුද්‍ර බීජාණු
            පත්‍රයේ තනි ක්ෂුද්‍ර බීජාණුධානියක්ද හටගනී.{"\n"}
            {"\n"}මහා බීජාණුධානිය තුල ඌනනයෙන් ප්‍රමාණයෙන් විශාල මහා බීජාණු 04 ක්
            හටගනී.{"\n"}
            {"\n"}ක්ෂුද්‍ර බීජාණුධානිය තුළ ඌනනයෙන් ප්‍රමාණයෙන් කුඩා ක්ෂුද්‍ර
            බීජාණු විශාල ගණනක් හටගනී.{"\n"}
            {"\n"}මෙම බීජාණු වර්ග දෙකම ඝනකම් බිත්තියකින් ආවරණය වී පවතියි.{"\n"}
            {"\n"}
            මෙලෙස රූපීය වශයෙන් වෙනස් බීජාණු ආකාර දෙකක් හටගැනීම සිදුවේ.{"\n"}
            {"\n"}මෙම ස්වාභාවය විෂමබීජාණුකතාවය ලෙස හදුන්වයි.{"\n"}
            {"\n"}ක්ෂුද්‍ර බීජාණු ක්ෂුද්‍ර බීජාණුධානිය තුළදීම විකසනය වී පුං
            ජන්මාණු ශාකය බවට පත් වේ.{"\n"}
            {"\n"}ක්ෂුද්‍ර බීජාණුවේ බිත්තියෙන් පුං ජන්මාණු ශාකය වට වී පවතී.
            {"\n"}
            {"\n"}එය ක්ෂුද්‍ර බීජාණුධානියෙන් නිදහස් වේ.{"\n"}
            {"\n"}ඒවා බාහිර පරිසරයේදී පරිණත පුං ජන්මාණු ශාකය බවට පත් වේ.{"\n"}
            {"\n"}
            ප්‍රභාසංස්ලේෂී නොවේ.{"\n"}
            {"\n"}සංචිත ආහාර මත යැපෙයි.{"\n"}
            {"\n"}අන්වීක්ෂීය යි.{"\n"}
            {"\n"}පුං ජන්මාණු ශාකයේ නිපදවන කශිකාධර ශුක්‍රාණු හටගෙන බාහිර පරිසරයට
            නිදහස් වේ.{"\n"}
            {"\n"}සංකේතුව තුල ඇති මහා බීජාණුව ජායා ජන්මාණු ශාකය බවට පත් වී බාහිර
            පරිසරයට නිදහස් වේ.{"\n"}
            {"\n"}මේ ජායා ජන්මාණු ශාකය බහුසෛලීයයි.{"\n"}
            {"\n"}මහා බීජාණුවේ ඝන බිත්තියෙන් වට ව පවතින මූලාභ විකසනය වූ
            ප්‍රභාසංස්ලේෂක හැකියාව ඇති නමුත් සංචිත ආහාර මත අර්ධව යැපෙන
            ව්‍යුහයකි.{"\n"}
            {"\n"}ජායා ජන්මාණු ශාකයේ ඉහළ මතුපිට ප්‍රදේශයේ අණ්ඩානුධානි හට ගනී.
            {"\n"}
            {"\n"}
            ඒවා ජන්මාණු පටකයේ සම්පූර්ණයෙන් ගිලී පවතී.{"\n"}
            {"\n"}අණ්ඩාණුධානි තුල තනි අණ්ඩ සෛලයක් නිපදවයි.{"\n"}ශුක්‍රාණු ,
            කශිකා ආධාරයෙන් බාහිර ජලයේ පිහිනා අණ්ඩාණුධානියට ඇතුළු වී.{"\n"}
            {"\n"}අණ්ඩය (n) සංසේචනය කර ද්විගුණ යුක්තාණුව (2n) සාදයි.{"\n"}
            {"\n"}
            යුක්තාණුව කළලය බවටත්,කළලය ළපටි බීජාණු ශාකය බවටත් පත් වේ.{"\n"}
            {"\n"}ඒ සදහා ජායා ජන්මාණු ශාකයෙන් පෝෂණය ලබා ගනී.{"\n"}
            {"\n"}බීජාණු ශාක පරම්පරාව පරම්පරා ප්‍රත්‍යාවර්තනය තුළ ඇති විශාල හා
            වඩා සංකීර්ණ ආකාර වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            Selaginella ශාකය , Pogonatum ශාකයට සාපේක්ෂව භෞමික පරිසරයට වඩාත්
            හොදින් අනුවර්ථනය වී ඇති බවට පවතින සාධක මොනවාද?
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            බීජාණු ශාකය ප්‍රමුඛ ශාකය බවට පත් වීම.{"\n"}
            {"\n"}බීජාණු ශාකය ප්‍රභාසංලේෂී ස්වාධීන ශාකයක් බවට පත් වීම .{"\n"}
            {"\n"}
            විෂමබීජාණුකතාවය දැක්වීම.{"\n"}
            {"\n"}එනම් මහා බීජාණු හා ල්ශුද්‍ර ලෙස බීජාණූ ආකාර දෙකක් දැරීම.{"\n"}
            {"\n"}
            ශෛලම හා ප්ලෝයම ඔස්සේ ද්‍රව්‍ය පරිවහනය වීම.{"\n"}
            {"\n"}මුල්වල පරිණාමය සිදු වීම.{"\n"}
            {"\n"}ක්ෂුද්‍ර පත්‍ර හා මහා පත්‍ර ලෙස පත්‍ර ආකාර දෙකක් දැරීම.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les3Sub9;
