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
            ප්‍රෝටීනවල මූලික රසායනික ස්වභාවය සහ ප්‍රෝටීන්වල ව්‍යුහ මට්ටම් සැකසුම
            විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            ඇමයිනෝ අම්ලවලින් සෑදී ඇත.{"\n"}
            {"\n"}ප්‍රෝටීන සෑදීමට විවිධ ඇමයිනෝ අම්ල විස්සක් සහභාගී වේ.{"\n"}
            {"\n"}
            මූලද්‍රව්‍ය සං‍යුතිය C ,H ,O, N, හා S වේ.{"\n"}
            {"\n"}ග්ලයිසීන් හැර අනෙක් ඇමයිනෝ අම්ල අණුවල මැද අසමමිතික කාබන්
            පරමාණුවක් ඇත.{"\n"}
            {"\n"}මීට අමතරව සෑම ඇමයිනො අම්ලයකම ඇමයිනෝ කාණ්ඩයක්,කාබොක්සිල්
            කාණ්ඩයක්,H පරමාණුවක්,ඇල්කිල් කාණ්ඩයක් වන විචල්‍ය කාණ්ඩයකින් (R)
            සමන්විත වේ.{"\n"}
            {"\n"}ග්ලයිසීන් හි R වෙනුවට H පරමාණුවක් ඇත.{"\n"}
            {"\n"}R කාණ්ඩය අංශ දාමය ලෙස හදුන්වයි.{"\n"}
            {"\n"}එක් එක් ඇමයිනෝ අම්ලවල R කාණ්ඩ එකිනෙකට වෙනස්ය.{"\n"}
            {"\n"}අංශදාම හැර ඇමයිනෝ අම්ලවල ඇති අනෙක් කාණ්ඩ පිට කොන්ද (back bone)
            ලෙස හදුන්වයි.(H පරමාණුවද අන්තර්ගතය ){"\n"}
            {"\n"}ඇමයිනෝ අම්ලවල කාබොක්සිල් කාණ්ඩ හා ඇමයිනෝ කාණ්ඩ එකක් හෝ
            කිහිපයක් ඇත.{"\n"}
            {"\n"}කාබොක්සිල් කාණ්ඩයට ක්ෂාරීය ස්වභාවයක් ඇත.{"\n"}
            {"\n"}මෙම ලක්ෂණ දෙකම එකම අණුවක ඇති විට උභයගුණ අණුවක් ලෙස හදුන්වයි.
            {"\n"}
            {"\n"}
            එම නිසා ඇමයිනෝ අම්ල උභයගුණි අණුවක් ලෙස හදුන්වයි .{"\n"}
            {"\n"}ඇමයිනෝ අම්ල අණු දෙකක් අතර සංඝනන ප්‍රතික්‍රියාවක් සිදු වී එම
            ඇමයිනෝ අම්ල දෙක මගින්ම ජල අණුවක් නිදහස් කරමින් සෑදෙන බන්ධනය.{"\n"}
            {"\n"}
            පෙප්ටයිඩ බන්ධනයක් නම් වේ.{"\n"}
            {"\n"}එක් ඇමයිනෝ අම්ලයක OH කාණ්ඩය සහ අනෙක් ඇමයිනෝ අම්ලයක H කාණ්ඩය
            එකතු වී ජල අණූවක් සාදයි.{"\n"}
            {"\n"}ඇමයිනෝ අම්ලවලින් සෑදුණු පොලිපෙප්ටයිඩ දාම එකකින් හෝ කිහිපයකින්
            ප්‍රෝටීන සෑදෙයි.{"\n"}
            {"\n"}ප්‍රෝටීනවල කෘත්‍ය ඉටුකිරීමට වැදගත් කාර්යභාරයක් ඉටුකරන ව්‍යුහ
            මට්ටම් හතරකි.
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            ප්‍රාථමික ව්‍යුහය
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            පෙප්ටයිඩ බන්ධන මගින් සම්බන්ධ වීමෙන් රේඛීයව සකස් වූ ඇමයිනෝ අම්ලවල
            අනන්‍ය අනුපිළිවෙලකි.
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            ද්විතීක ව්‍යුහය
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            එකම පොලිපෙටයිඩ දාමයක පිටකොන්දේ ඇති කාබොක්සිල් කාණ්ඩයේ ඔක්සිජන්
            පරමාණු හා ඇමයිනෝ කාණ්ඩයට සම්බන්ධ හයිඩ්‍රජන් පරමාණුව අතර ඇතිවන
            අන්තඃඅණුක H බන්ධන නිසා ප්‍රාථමික ව්‍යුහය තැනී ඇති තනි පොලිපෙප්ටයිඩ
            දාමය දගර ගැසීමෙන් හා නැමීමෙන් නිර්මාණය වේ.{"\n"}
            {"\n"}ඇල්ෆා හෙලික්සය{"\n"}
            උදා-කෙරටීන්{"\n"}
            {"\n"}
            බීටා රැළිතල{"\n"}
            උදා-මකුළුවන්ගේ සිල්ක් තන්තු
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            තෘතීක ව්‍යුහය
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            ඇමයිනෝ අම්ලවල අංශදාම / R කාණ්ඩ අතර ඇතිවන අන්තර් ක්‍රියා හේතුවෙන්
            සාමාන්‍යයෙන් ද්විතීක පොලිපෙප්ටයිඩ දාමය පුළුල්ව නැමීමෙන් හා එතීමෙන්
            ඇතිවන නිශ්චිත ,සුසංගිත,අනන්‍ය වූ කෘත්‍යමය හා ත්‍රිමාණ හැඩයයි.{"\n"}
            {"\n"}H බන්ධන{"\n"}
            ඩයිසල්ෆයිඩ බන්ධන{"\n"}
            අයනික බන්ධන{"\n"}
            වැන්ඩවාල් අන්තර් ක්‍රියා සහ ජලභීතික අන්තර් ක්‍රියා.{"\n"}
            {"\n"}බොහෝ එන්සයිම ,මයොග්ලොබීන්,ඇල්බියුමීන්
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            චාතුර්තක ව්‍යුහය
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            එක් කෘත්‍යාත්මක ප්‍රෝටීනයක් සෑදීමට පොලිපෙප්ටයිඩ දාම දෙකක් හෝ
            කිහිපයක් එක් වේ.{"\n"}
            {"\n"}එහි ඇති එකිනෙකට වෙන් වූ දාම ප්‍රෝටීන උප ඒකක ලෙස හදුන්වයි.
            {"\n"}
            {"\n"}
            අන්තර් අණුක හා අන්තඃඅණුක අන්තර් ක්‍රියා මගින් ඒවා එකිනෙක බැද තබාගනී.
            {"\n"}
            උදා-හිමොග්ලොබීන් /කොලැජන්
          </Text>

          {/* Lesson Categories Start */}
          <View className="px-3 mt-10 bg-gray-300">
            <Text className="py-3 text-base font-bold text-gray-800">
              උදාහරණ සහිතව ප්‍රෝටීනවල කෘත්‍ය විස්තර කරන්න.
            </Text>
          </View>
          {/* Lesson Category end */}
          <Text className="px-3 mt-4 text-base font-semibold text-justify text-gray-800">
            උත්ප්‍රේරක{"\n"}
            පෙප්සීන් ,ඇමයිලේස් -ජෛව රසායනික ප්‍රතික්‍රියා උත්ප්‍රේරණය{"\n"}
            {"\n"}
            ව්‍යුහමය{"\n"}
            කෙරටීන් - වියළීම වළක්වයි.{"\n"}
            කොලැජන් -ශක්තිමත් බව සහ සන්ධාරණය ලබා දෙයි.{"\n"}
            {"\n"}සංචිත{"\n"}
            ඕවැල්බියුමීන් -බිත්තරවල සංචිත ප්‍රෝටීනය{"\n"}
            කේසීන් -කිරිවල සංචිත ප්‍රෝටීනය{"\n"}
            {"\n"}පරිවාහක{"\n"}
            හිමොග්ලොබීන් -O2 හා CO2 පරිවහනය{"\n"}
            මස්තු ඇල්බියුමීන් - මේද අම්ලව පරිවහනය{"\n"}
            {"\n"}හෝර්මෝන{"\n"}
            ඉන්සියුලීන් ,ග්ලූකගන් -රුධිර ග්ලූකෝස් මට්ටම යාමනය{"\n"}
            {"\n"}සංකෝචක /චාලක{"\n"}
            ඇක්ටීන් /මයොසීන් - පේෂි තන්තු සංකෝචනය.{"\n"}
            {"\n"}ආරක්ෂක{"\n"}
            ඉමියුනෝග්ලොබියුලින් - ආගන්තුක දේහ උදාසීන කරයි
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub5;
