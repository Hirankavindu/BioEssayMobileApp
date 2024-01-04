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

const Les3Sub13 = () => {
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
            සීලෙන්ටරේටා වංෂයට අයත් සාමාජිකයන් තම ජීවන විලාසය පවත්වා ගැනීමට දරන
            ව්‍යුහමය අනුවර්තන විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            මිරිදියවාසී විශේෂ කිහිපයක් හැර වැඩිදෙනෙක් කරදියවාසීය.{"\n"}
            {"\n"}සමහරුන් මහේක්ෂීයයි.{"\n"}
            {"\n"}සරල සංවිධානයක් පෙන්වයි.{"\n"}
            {"\n"}ද්විප්‍රස්තරිකයන්ය.{"\n"}
            {"\n"}නිඩාරියාවන්ගේ දේහ බිත්තිය ස්තර දෙකකින් සෑදී ඇත.{"\n"}
            {"\n"}බාහිරව බහිශ්චර්මය හා අභ්‍යන්තරිකව අන්තශ්චර්මය ඇත.{"\n"}
            {"\n"}එම ස්තර දෙක අතර අසෛලීය මධ්‍යශ්ලේෂයක් ඇත.{"\n"}
            {"\n"}ආමාශ වාහිනී කුහරය නැමැති මල්ලක් වැනි මධ්‍ය ජීර්ණ කුටීරයක් ඇත.
            {"\n"}
            {"\n"}එය අන්තශ්චර්මයෙන් ආස්තරණය වී ඇත.{"\n"}
            {"\n"}තනි සිදුරකින් (මුඛය) බාහිරයට විවෘත වේ.{"\n"}
            {"\n"}දේහ බිත්තිය හරහා ශ්වසනය සිදු කරයි.ශ්වසන ව්‍යුහ නැත.{"\n"}
            {"\n"}
            මෙඩුසා හා බුහුබා යන දේහ ආකාර දෙකක් සහිතය .{"\n"}
            {"\n"}අරීය සමමිතිය පෙන්වයි.{"\n"}
            {"\n"}බුහුබාවන් සිලින්ඩරාකාර වන අතර අපමෞඛ්‍ය කෙළෙවරින් උපස්තරයට ඇලී
            වාසය කරයි.{"\n"}
            {"\n"}මුඛය වටා ග්‍රාහිකා දරයි.{"\n"}
            {"\n"}මෙඩුසා ආකාරය මුඛය උදරීයව ඇත.{"\n"}
            {"\n"}පැතලි බුහුබාවන් වැනි නිදලිවාසීහුය.{"\n"}
            {"\n"}සමහර නිඩාරියාවෝ බුහුබා ආකාරයෙන් පමණක් ද සමහරු මෙඩුසා ආකාරයෙන්
            පමණක්ද හමුවෙයි.{"\n"}
            {"\n"}අනෙක් නිඩාරියාවෝ තම ජීවන චක්‍රය තුළ බුහුබා හා මෙඩුසා යන ආකාර
            දෙකම පවතී.{"\n"}
            {"\n"}ආරක්ෂාවට හා ගොදුරු අල්ලා ගැනීමට ආධාර කරන ග්‍රාහිකා.{"\n"}
            {"\n"}දංෂක සෛලවලින් සන්නද්ධව පවතී.{"\n"}
            {"\n"}දංෂක සෛල නිඩාරියාවන්ට අනන්‍ය වේ.{"\n"}
            {"\n"}ඒවා තුළ Cnidae (පිටතට විහිදී යා හැකි ප්‍රාවරයන් - Capsules
            වැනි සෛල ඉන්ද්‍රිකා) අන්තර්ගත වේ.{"\n"}
            {"\n"}දංශක කෝෂ්ට නම් වූ විශේෂිත Cnidae තුළ විදිය හැකි තන්තුවක් (
            Stinging thread ) ඇත.{"\n"}
            {"\n"}එය ගොදුරු විනිවිද යාමට උපකාරී වේ.{"\n"}
            {"\n"}විශේෂිත බහිස්‍රාවී පද්ධතියක් නැත.{"\n"}
            {"\n"}දේහ බිත්තිය හරහා බහිස්‍රාවය සිදු වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les3Sub13;
