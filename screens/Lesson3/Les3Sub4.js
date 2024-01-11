import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Back, BackBox, BackBox2, Hero1, Hero2 } from "../../assets";

const Les3Sub4 = () => {
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
            නූතන ජීවි වර්ගීකරණ පද්ධතිය පදනම් වී ඇති නිර්ණායක මොනවාද?
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            වැදගත් ජානවල DNA හි භෂ්ම අනුපිළිවෙල.{"\n"}
            {"\n"}මයිටොකොන්ඩ්‍රියා හා හරිතලව වල DNA හි භෂ්ම අනුපිළිවෙල{"\n"}
            {"\n"}
            රයිබොසෝම RNA හි භෂ්ම අනුපිළිවෙල{"\n"}
            {"\n"}සුලබ ප්‍රෝටීනවල ඇමයිනෝ අම්ල අනුපිළිවෙල{"\n"}
            {"\n"}සෛලීය සංඝටකවල අණුක ව්‍යුහය
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            නූතන ජීවී වර්ගීකරණයට අනුව අධිරාජධානි තුනක් යටතේ ජීවීන් බෙදා
            දැක්වීමේදී යොදාගන්නා නිර්ණායක සහ එක් එක් අධිරාජධනියට අයත් ජීවීන් තුළ
            එම ලක්ෂණ පවතින ආකාරය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සෛලීය සංවිධානය{"\n"}බැක්ටීරියා - ප්‍රාග් න්‍යෂ්ටික{"\n"}ආකියා -
            ප්‍රාග් න්‍යෂ්ටික{"\n"}ඉයුකැරියා- සූන්‍යෂ්ටික{"\n"}
            {"\n"}සෛලීය සං‍යුතිය.{"\n"}බැක්ටීරියාවන්ගේ පෙප්ටයිඩොග්ලයිකෑන් වලින්
            සමන්විත ය.{"\n"}ආකියාවන්ගේ සෛල බිත්තිය ප්‍රෝටීන හා පොලිසැකරයිඩ වලින්
            නිර්මාණය වී ඇත.{"\n"}පෙප්ටයිඩොග්ලයිකෑන් නැත.{"\n"}
            ඉයුකැරියා,සෙලියුලෝස් ,හෙම්සෙලියුලෝස් ,පෙක්ටීන් හා කයිටීන් වලින්
            සමන්විත සෛල බිත්තියක් ඇත.{"\n"}
            {"\n"}පටල ලිපිඩ{"\n"}බැක්ටීරියාවන්ගේ ශාඛනය නොවූ හයිඩ්‍රොකාබන්
            ආකියාවන්ගේ සමහර හයිඩ්‍රොකාබන් ශාඛනය වී ඇත.{"\n"}යුකැරියාවන්ගේ ශාඛනය
            නොවූ හයිඩ්‍රොකාබන් අඩංගුය.{"\n"}
            {"\n"}ජාන සං‍යුතිය{"\n"}බැක්ටීරියාවල DNA සමග බැදුණු හිස්ටෝන්
            ප්‍රෝටින නැත.{"\n"}ආකියා සමහර විශේෂවල DNA බැදුණු හිස්ටෝන ප්‍රෝටීන
            ඇත.{"\n"}ඉයුකැරියාවන්ගේ DNA සමග බැදුණු හිස්ටෝන ප්‍රෝටීන ඇත.{"\n"}
            බැක්ටීරියාවන්ගේ හා ආකියාවන්ගේ චක්‍රාකාර වර්ණදේහ ඇත.{"\n"}
            ඉයුකැරියාවන්ගේ චක්‍රාකාර වර්ණදේහ නැත.{"\n"}බැක්ටීරියාවන්ගේ ජානවල ඉතා
            කලාතුරකින් ඉන්ට්‍රෝන ඇත.{"\n"}ආකියාවන්ගේ සමහර ජානවල ඉන්ට්‍රෝන ඇත.
            {"\n"}
            යුකැරියාවන්ගේ බොහෝ ජානවල ඉන්ට්‍රෝන ඇත.{"\n"}
            {"\n"}ප්‍රෝටීන සංස්ලේෂණය{"\n"}බැක්ටීරියාවන්ගේ RNA පොලිමරේස් එක්
            වර්ගයක් ඇත.{"\n"}ආකියාවන්ගේ හා යුකැරියාවන්ගේ RNA පොලිමරේස් බොහෝ ආකාර
            ඇත.{"\n"}බැක්ටීරියාවන්ගේ ප්‍රෝටීන සංස්ලේෂණය සදහා ආරම්භක ඇමයිනෝ අම්ලය
            ෆෝමයිල් මෙතියොනීන් වේ.{"\n"}ආකියාවන්ගේ හා යුකැරියාවන්ගේ එය
            මෙතියොනීන් වේ.{"\n"}Streptomycin , Chloramphenicol යන ප්‍රතිජීවක
            සදහා බැක්ටීරියාවන්ගේ වර්ධනය නිශේධනය වේ.{"\n"}ආකියාවන්ගේ හා
            යුකැරියාවන්ගේ වර්ධනය නිශේධනය නොවේ.{"\n"}100c0 ට වඩා වැඩි උෂ්ණත්වලදී
            වර්ධනය .{"\n"}බැක්ටීරියාවන්ගේ නැත.{"\n"}ආකියාවන්ගේ සමහර විශේෂ වර්ධනය
            වේ.{"\n"}යුකැරියාවන්ගේ වර්ධනයක් නැත.{"\n"}බැක්ටීරියාවන් විවිධ
            වාසස්ථානවල ජීවත් වේ.{"\n"}ආකියාවන් ආන්තික පරිසර තත්ත්ව (ගිනිකදු ආවාට
            ,උණුදිය උල්පත්, ලවණ , වගුරු ආදී ) පරිසර තත්ත්වල ජීවත් වේ.{"\n"}
            යුකැරියාවන් විවිධ වාසස්ථානවල ජීවත් වේ.{"\n"}බැක්ටීරියා -
            සයනොබැක්ටීරියා ,Nostoc, Anabaena , Escherichia coli, Salmonellatypi6
            {"\n"}ආකියා - Methanococcus , Halobacteria,Thermococcus{"\n"}
            ඉයුකැරියා- ප්‍රොටිස්ටා , දිලීර ,ශාක ,සතුන්
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les3Sub4;
