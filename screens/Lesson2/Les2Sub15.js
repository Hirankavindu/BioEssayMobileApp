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

const Les2Sub15 = () => {
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
            පිළිකා අර්බුද හා ගඩුවල ලක්ෂණ විස්තර කරමින් ඒවා ඇතිකිරීම සදහා
            පාලනයකින් තොරව සිදුවන වේගවත් අනූනන විභාජනය දායක වන අයුරු විස්තර
            කරන්න .
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-5 text-base font-semibold text-justify text-gray-800">
            සෛල චක්‍රය බාහිර හා අභ්‍යන්තර සාධක මගින් මෙහෙය වේ.{"\n"}
            {"\n"}මේවා රසායනික සාධක හෝ භෞතික සාධක විය හැක.{"\n"}
            {"\n"}සාමාන්‍යයෙන් පිළිකා සෛල දේහයේ පාලන යන්ත්‍රණවලට ප්‍රතිචාර
            නොදක්වයි.{"\n"}
            {"\n"}මේවා අධිකව බෙදී අනෙක් පටකද ආක්‍රමණය කරයි.{"\n"}
            {"\n"}මැඩ පැවැත්වීම සිදු නොකළහොත් ජීවියා මරණයට වුවද පත්විය හැකිය.
            {"\n"}
            {"\n"}
            සෛල චක්‍රය යාමනය කරන සාමාන්‍ය සංගදා පිළිකා සෛල නොසලකයි.{"\n"}
            {"\n"}ඒවාට වර්ධක සාධක අවශ්‍ය නොවේ.{"\n"}
            {"\n"}ඔවුන්ට අවශ්‍ය වර්ධක සාධක ඔවුන් විසින්ම සාදා ගැනීම හෝ වර්ධක
            සාධක රහිතව සෛල චක්‍රය ඉදිරියට ගෙන යෑමට සංගදා ලබාදෙයි.{"\n"}
            {"\n"}අසාමාන්‍ය සෛල චක්‍ර පාලන පද්ධතියක් ඇත.{"\n"}
            {"\n"}ගැටලුව ආරම්භ වන්නේ පටකයක ඇති තනි සෛලයක් පරිණාමය වූ විටය.{"\n"}
            {"\n"}
            මේ ක්‍රියාවලිය සාමාන්‍ය සෛලයක් , අසාමන්‍ය සෛලයක් බවට පරිවර්තනය කරයි.
            {"\n"}
            {"\n"}දේහයේ ප්‍රතිශක්තීකරණ පද්ධතියට එය හදුනා ගැනීමට හා විනාශ කිරීමට
            නොහැකි නම්,සෛල ගුණනය වීමට හා අර්බුදයක් සෑදීමට මෙය මග පාදයි.{"\n"}
            {"\n"}
            අසාමාන්‍ය සෛල මුල් ස්ථානය තුළම රැදුණහොත් ඇතිවන ඉදිමුම නිරුපද්‍රව
            අර්බුදයකි.{"\n"}
            {"\n"}බොහෝ නිරුපද්‍රව අර්බුද අනතුරුදායක ගැටලුවලට හේතු නොවන අතර
            ශල්‍යකර්මයක් මගින් සම්පූර්ණයෙන්ම ඉවත් කළ හැක.{"\n"}
            {"\n"}සෝපාද්‍රව අර්බුද ආක්‍රමණශීලී වී අවයව එකකට හෝ කිහිපයකට පහද
            දෙයි.සෝපාද්‍රව අර්බුදයක් ඇති පුද්ගලයෙකුට පිළිකාවක් ඇතැයි කියනු ලබේ.
            {"\n"}
            {"\n"}මුල් අර්බුදයෙන් අර්බුද සෛල ස්වල්පයක් වෙන්වී ඒවා රුධිරවාහිනී හෝ
            වසා තුළට ඇතුළු වී දේහයේ අනෙක් කොටස්වලට ඇතුළු විය හැක.{"\n"}
            {"\n"}ඒවා ගුණනය වී නව අර්බුදයක් සාදයි.{"\n"}
            {"\n"}මුල් ස්ථානයේ සිට දුර ස්ථානයකට පිළිකා සෛල පැතිරීම
            ස්ථානාන්තරණය(metastasis) නම් වේ.{"\n"}
            {"\n"}ශාක සෛලවල පාලනය කළ නොහැකි අනූනන විභාජනය නිසා ශාකවල ගඩු ඇති වේ.
            {"\n"}
            {"\n"}ශාක සෛල විභාජනය පාලනය කරනුයේ ඔක්සීන් හා සයිටොකයිනීන් වැනි ශාක
            වර්ධක යාමක අතර,නියමිත තුලනය පවත්වා ගැනීමෙනි.{"\n"}
            {"\n"}මේ සමතුලිතතාව නැති වූ විට ශාක සෛල විභේදනය නොවූ සෛල ස්කන්ධයක්
            සාදයි.{"\n"}
            {"\n"}ගඩු යනු ඉදිමුමක් හා වර්ධනයක් වන අතර ඇතැම් සුවිශේෂි ජීවීන්
            ආක්‍රමණය කිරීමෙන් පසුව ශාකවල විවිධ කොටස් මත විකසනය වේ.{"\n"}
            {"\n"}වයිරස්/ දිලීර / බැක්ටීරියා /කෘමීන් / මයිටාවන් ඇතුළු හේතු
            පරාසයක් ගඩුවලට තිබේ.{"\n"}
            {"\n"}සාමාන්‍යයෙන් ගඩු කාරක ,යම් ආකාරයකට ශාකයක වර්ධනය වන පටක
            ආක්‍රමණය හෝ විනිවිද යෑම .{"\n"}
            {"\n"}ධාරකයාට තම සෛල ප්‍රතිසංවිධානය කර අසාමාන්‍ය වර්ධනයක විකසනය හේතු
            වේ.
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub15;
