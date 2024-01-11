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

const Les2Sub10 = () => {
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
            දර්ශීය ප්‍රාග්න්‍යෂ්ටික සෛලයක ව්‍යුහය ,එම එක් එක් කොටස මගින් ඉටුකරන
            කෘත්‍යයට අදාළව විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-5 text-base font-semibold text-justify text-gray-800">
            සෛල බිත්තිය පෙප්ටයිඩොග්ලයිකෑන් වලින් නිර්මණය වී ඇත.{"\n"}
            {"\n"}ඉන් බැක්ටීරියා සෛලයේ නිෂ්චිත හැඩය පවත්වා ගනියි.{"\n"}
            {"\n"}ප්ලාස්ම පටලය හා සෛල ප්ලාස්මය ඇතුළු සෛලයේ අභ්‍යන්තර කොටස්වලට
            ආරක්ෂාව සලසයි.{"\n"}
            {"\n"}සෛල බිත්තියට පිටතින් පොලිසැකරයිඩමය ප්‍රාවරණයක් පවතියි.{"\n"}
            {"\n"}
            එමගින් වියළීමෙන් ආරක්ෂා කරයි.{"\n"}
            {"\n"}උපස්තරයට තදින් සවිකර ගනියි.{"\n"}
            {"\n"}වෙනත් ක්ෂුද්‍රජීවි සෛල හා සුදු රුධිරාණු මගින් භක්ෂණයෙන් ආරක්ෂා
            කරයි.{"\n"}
            {"\n"}ප්ලාස්ම පටලය ද්විත්ව පොස්පොලිපිඩ ස්තරයක පාවෙන ප්‍රෝටීන අණු
            මගින් තැනේ.{"\n"}
            {"\n"}එමගින් සෛල තුලට ඇතුළුවන හා පිටවන ද්‍රව්‍ය පාලනය කරයි.{"\n"}
            {"\n"}
            ස්වායු ශ්වසනය කරන ආකාරවල ප්ලාස්ම පටලයේ අවතලන ලෙස මීසොසෝම ඇත.{"\n"}
            {"\n"}
            ප්‍රභාසංස්ලේෂණය කරන ආකාරවල ප්ලාස්ම පටලයේ අවතලන ලෙස ප්‍රභාසංස්ලේෂක
            පටල ඇත.{"\n"}
            {"\n"}නයිට්‍රජන් තිරකරන ආකාරවල ප්ලාස්ම පටලයේ අවතලන ලෙස N තිරකාරක පටල
            ඇත.{"\n"}
            {"\n"}ප්ලාස්ම පටලයට ඇතුලතින් සෛල ප්ලාස්මය ඇත.{"\n"}
            {"\n"}එහි ජලය ,එන්සයිම ,පෝෂක ද්‍රව්‍ය හා රයිබොසෝම වැනි උපසෛලීය
            ව්‍යුහ අන්තර්ගතය.{"\n"}
            {"\n"}එය ස්වායු ශ්වසනයේ ග්ලයිකොසිය වන ස්ථානය ලෙස ක්‍රියාකරයි.{"\n"}
            {"\n"}
            සෛල ප්ලාස්මය තුළ තනි DNA අණුවකින් නිර්මිත ව්‍යාජ වර්ණදේහයක් පවතී.
            {"\n"}
            {"\n"}
            ආවේණික ලක්ෂණ තැම්පත් කරගැනීමට හා ඉදිරි පරම්පරාවට සම්ප්‍රේෂණය කරයි.
            {"\n"}
            {"\n"}
            සියලුම ක්‍රියාවන් පාලනය කරයි.{"\n"}
            {"\n"}ඊට අමතර සෛල ප්ලාස්මය තුල ප්ලාස්මිඩ ලෙස හදුන්වන කුඩා චක්‍රීය
            DNA අණු අඩංගුය.{"\n"}
            {"\n"}ඉන් ප්‍රතිජීවකවලට ප්‍රතිරෝධීතව ඇති කරයි.{"\n"}
            {"\n"}රයිබොසෝම මගින් ප්‍රෝටීන සංස්ලේෂණය කරයි.{"\n"}
            {"\n"}ඇතැම් ආකාර පටලයක් රහිත ෆැලැජෙරීන් ප්‍රෝටීනයෙන් නිර්මාණය වන
            කෂිකා දරයි.{"\n"}
            {"\n"}එය සෛල චලන ඇතිකිරීමට දායක වේ.{"\n"}
            {"\n"}සෛල පෘෂ්ඨයෙන් පිටතට පැන නගින ප්‍රෝටීනවලින් නිර්මිත රෝම වැනි
            පිලයි හෙවත් ෆිම්බ්‍රියේ පවතී.{"\n"}
            {"\n"}එමගින් බැක්ටීරියා සෛල උපස්තරයට සව්කර ගනියි.{"\n"}
            {"\n"}සං‍යුග්මනය වැනි ලිංගික ප්‍රජනන ක්‍රමවලදී ආවේණික ද්‍රව්‍ය
            හුවමාරුවට දායක වේ
          </Text>
        </View>

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ප්‍රාග්න්‍යෂ්ටික සෛල හා සූන්‍යෂ්ටික සෛල අතර ඇති සමාන -අසමානතා
            සංසන්ධන කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            බැක්ටීරියා හා ආකි බැක්ටීරියා ප්‍රාග්න්‍යෂ්ටික සෛල වේ.{"\n"}
            {"\n"}
            ප්‍රොටිස්ටා ,දිලීර (fungi) ශාක හා සත්ත්වයන් සූන්‍යෂ්ටික සෛල වේ.
            {"\n"}
            {"\n"}
            ප්‍රාග් න්‍යෂ්ටික සෛලවල සාමාන්‍ය විශ්කම්භය 0.5 -5 මයික්‍රෝ මීටර් වේ
            .{"\n"}
            {"\n"}සූන්‍යෂ්ටික සෛලවල සාමාන්‍ය විශ්කම්භය 10-100 මයික්‍රෝ මීටර් වේ.
            {"\n"}
            {"\n"}ප්‍රාග් න්‍යෂ්ටිකයන් ප්‍රධාන වශයෙන් ඒකසෛලිකය.{"\n"}
            {"\n"}සූන්‍යෂ්ටිකයන් ප්‍රධාන වශයෙන් බහුසෛලිකය (බොහෝ ප්‍රොටිස්ටාවන්
            හැර සමහර දිලීර ඒක සෛලිකය).{"\n"}
            {"\n"}අවුරුදු බිලියන 3.5 කට පෙර ප්‍රාග්න්‍යෂ්ටිකයන් සම්භවය විය.
            {"\n"}
            {"\n"}
            අවුරුදු බිලියන 1.8 කට පෙර සූන්‍යෂ්‍ටිකයන් ප්‍රාග්න්‍යෂ්ටිකයන්ගෙන්
            සම්භවය විය.{"\n"}
            {"\n"}ප්‍රාග්න්‍යෂ්ටික සෛලවල ද්විඛණ්ඩනය මගින් සෛල විභාජනය වේ.{"\n"}
            {"\n"}
            තවද ඌනනය හෝ අනූන විභාජනය සිදු නොවේ.{"\n"}
            {"\n"}සූන්‍යෂ්ටික සෛලවල ඌනන විභාජනය හෝ අනූනන විභාජනය හෝ දෙකම මගින්
            සෛල විභාජනය සිදු වේ.{"\n"}
            {"\n"}ප්‍රාග් න්‍යෂ්ටිකයන්ගේ ප්‍රවේණික ද්‍රව්‍ය ලෙස වලයාකර DNA
            ක්‍රියා කරයි.{"\n"}
            {"\n"}ඒවා නියුක්ලියෝටයිඩ නම් ප්‍රදේශය තුල සෛල ප්ලාස්මයේ නිදහසේ පවතී
            .{"\n"}
            {"\n"}එම DNA හිස්ටෝන ප්‍රෝටීන සමග බැදී නැත.{"\n"}
            {"\n"}සූන්‍යෂ්ටිකයන්ගේ න්‍යෂ්ටිය තුළ අඩංගුවන රේඛීය DNA හිස්ටෝන
            ප්‍රෝටීන සමග බැදී ඇත.{"\n"}
            {"\n"}ප්‍රාග්න්‍යෂ්ටිකයන් තුල 70s කුඩා රයිබොසෝම පවතී.{"\n"}
            {"\n"}
            සූන්‍යෂ්ටිකයන්ගේ හරිතලව හා මයිටොකොන්ඩ්‍රියා තුල 70s රයිබොසෝම ද ඇත.
            {"\n"}
            {"\n"}
            80s (විශාල) රයිබොසෝම අන්තඃප්ලාස්මීය ජාලිකාවලට සම්බන්ධ වී පැවතිය
            හැකිය / සෛටසොලය තුළ නිදහසේ ඇත.{"\n"}
            {"\n"}ප්‍රාග්න්‍යෂ්ටිකයන් පටලවලින් වට නොවූ සෛල ඉන්ද්‍රිකා දරයි
            .උපසෛලීය සංඝටක සුළු ප්‍රමාණයක් අඩංගුය,{"\n"}උදා -රයිබොසෝම{"\n"}
            {"\n"}
            ශ්වසනය ,ප්‍රභාසංස්ලේෂණය හා N2 තිර කිරීම සදහා හැරුණු විට අභ්‍යන්තර
            පටල දුර්ලභය.{"\n"}
            {"\n"}සූන්‍යෂ්ටිකයන්ගේ පටලවලින් වටවූ ඉන්ද්‍රිකා සහ අනෙකුත් උපසෛලීය
            සංඝටක ඇත.{"\n"}
            {"\n"}ඉන්ද්‍රිකාවල ඉහළ විවිධත්වයක් ඇත.{"\n"}
            {"\n"}න්‍යෂ්ටිය ,මයිටොකොන්ඩ්‍රියා ,හරිතලව පටල දෙකකින් වට වේ.{"\n"}
            {"\n"}
            ලයිසොසෝම ,මධ්‍ය රික්තක තනි පටලයකින් වට වේ.{"\n"}
            {"\n"}බැක්‍ටීරියා හා සයනොබැක්ටීරියාවල සෛල බිත්තියේ
            පෙප්ටයිඩොග්ලයිකෑන් ඇත.{"\n"}
            {"\n"}ආකි බැක්ටීරියා සෛල බිත්තියේ පොලිසැකරයිඩ හා ප්‍රෝටීන ඇත.{"\n"}
            {"\n"}
            හරිත ශාක හා දිලීරවලට පොලිසැකරයිඩමය දැඩි සෛල බිත්තියක් ඇත.{"\n"}
            {"\n"}ශාක සෛල බිත්තිය සෙලියුලෝස් වලින්ද දිලීර සෛල බිත්තිය කයිටීන්
            වලින්ද නිර්මාණය වේ, සත්ත්ව සෛලවල සෛල බිත්ති නැත.{"\n"}
            {"\n"}
            ප්‍රාග්න්‍යෂ්ටිකයන් විශ්කම්භය 20 nm වන ක්ෂුද්‍ර නාලිකා රහිත
            බහිස්සෛලීය සරල කශිකා දරයි(සෛල මතුපිට පටලයෙන් ආවරණය වී නැත).{"\n"}
            {"\n"}
            සූන්‍යෂ්ටිකයන් විශ්කම්භය 200 nm වන (9+2) ව්‍යුහය සහිත ක්ෂුද්‍ර
            නාලිකාවලින් සැකසුණු අන්තඃසෛලීය සංකීර්ණ කශිකා දරයි,(සෛල මතුපිට
            පටලයෙන් වටවී ඇත).{"\n"}
            {"\n"}ප්‍රාග්න්‍යෂ්ටිකයන්ගේ ශ්වසනය මීසොසෝම මගින් සිදු වේ,/අභ්‍යන්තර
            පටල නැමුම් මගින් සිදු කරයි.{"\n"}
            {"\n"}සූන්‍යෂ්ටිකයන්ගේ ස්වායු ශ්වනයට මයිටොකොන්ඩ්‍රියා ඇත.{"\n"}
            {"\n"}
            ප්‍රාග් න්‍යෂ්ටිකයන්ට හරිතලව නැත,ගොනු ලෙස සැකසී නැති පටල මත සිදු වේ.
            {"\n"}
            {"\n"}සූන්‍යෂ්ටික ප්‍රභාසංස්ලේෂණය සූස්තර හෝ ග්‍රැනාවලට ගොනු වී ඇති
            පටලවලින් සමන්විත හරිතලව තුල සිදු වේ.{"\n"}
            {"\n"}සමහර ප්‍රාග්න්‍යෂ්ටිකයන් නයිට්‍රජන් තිර කාරක හැකියාව දරයි.
            {"\n"}
            {"\n"}
            කිසිදු සූන්‍යෂ්ටික ජීවියෙක් නයිට්‍රජන් තිරකාරක හැකියාව නොදරයි.
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les2Sub10;
