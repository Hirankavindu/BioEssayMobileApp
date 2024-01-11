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

const Les2Sub19 = () => {
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
            ප්‍රභාසංස්ලේෂක වර්ණක ,ප්‍රභා පද්ධති ලෙස සැකසී ඇති ආකාරය විස්තර
            කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-5 text-base font-semibold text-justify text-gray-800">
            ක්ලෝරෝෆීල අණු අනෙකුත් කාබනික අණු හා ප්‍රෝටීන හරිතලවයේ ඇති තයිලකොයිඩ
            පටල මත සංකීර්ණ වලට සංවිධානය වී ප්‍රභා පද්ධති නිර්මාණය වේ.
            {"\n"}
            {"\n"}ප්‍රභා පද්ධතියක ප්‍රතික්‍රියා මධ්‍යස්ථාන සංකීර්ණයක් (reaction
            centre complex) හා ආලෝක ඵල ලබා ගන්නා සංකීර්ණයක් (light harvesting
            complex) අඩංගු වේ.{"\n"}
            {"\n"}ක්ලෝරෝෆීල් ඇල්ෆා අණු යුගලක් හා ප්‍රාථමික ඉලෙක්ට්‍රෝන
            ප්‍රතිග්‍රාහකය දරන සංවිධානය වූ ප්‍රෝටීන වලින් ප්‍රතික්‍රියා
            මධ්‍යස්ථාන සංකීර්ණය සමන්විත වේ.{"\n"}
            {"\n"}ප්‍රතික්‍රියා මධ්‍යස්ථාන සංකීර්ණය තුළ ප්‍රාතමික ඉලෙක්ට්‍රෝන
            ප්‍රතිග්‍රාහකයෙක්ද ඇත.(primary electron accepter){"\n"}
            {"\n"}ආලෝක ඵල ලබාගන්න සංකීර්ණයේ විවිධ ප්‍රභාසංස්ලේෂක වර්ණක අඩංගු වේ.
            {"\n"}
            {"\n"}තයිලකොයිඩ පටල මත වර්ග දෙකකට අයත් ප්‍රභා පද්ධති ඇත.{"\n"}
            {"\n"}ඒවා නම් ප්‍රභා පද්ධති 1(ps1) හා ප්‍රභා පද්ධති 2 (ps2) ය.{"\n"}
            {"\n"}
            ප්‍රභා පද්ධති 1 හි ඇති ක්ලෝරෝෆීල් අණුව p700 ලෙස හදුන්වන අතර එය තරංග
            ආයාමය 700nm වන ආලෝකය ඵලදායීව අවශෝෂණය කරයි.{"\n"}
            {"\n"} ප්‍රභා පද්ධති 2 හි ප්‍රතික්‍රියා මධ්‍යස්ථානයේ ඇති ක්ලෝරෝෆීල්
            a අණුව p680 ලෙස හදුන්වන අතර එය තරංග ආයමය 680 nm වන ආලෝකය ඵලදායීව
            අවශෝෂණය කරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ප්‍රභාසංස්ලේෂණයේ ආලෝකය මත රදා පවතින ප්‍රතික්‍රියාව විස්තර කරන්න.
          </Text>
        </View>
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            ප්‍රභාසංලේෂක වර්ණක මගින් ආලෝකය අවශෝෂණය කළ පසු හරිතලවය තුළ ඇති
            තයිලකොයිඩ පටල තුළ ගිලී ඇති ප්‍රභා පද්ධති 1 හා 2 උද්දීපනය වී ATP හා
            NADPH සංස්ලේෂණය කරයි.{"\n"}
            {"\n"}තයිලකොයිඩ තුල ඇති ප්‍රභා පද්ධති හා වෙනත් අණුක සංඝටක මගින්
            ඉලෙක්ට්‍රෝන එක් දිශාවකට ගැලීම මේ ශක්ති පරිණාමනයේදී සිදු වේ.{"\n"}
            {"\n"}මේ ක්‍රියාවලිය රේඛීය ඉලෙක්ට්‍රෝන ගලනය නම් වේ.{"\n"}
            {"\n"}ආලෝහ ෆෝටෝන වර්ණක මත ගැටීම නිසා ප්‍රභා පද්ධති 2 හි ඉලෙක්ට්‍රෝන
            අධි ශක්ති මට්ටමකට උද්දීපනය වේ.{"\n"}
            {"\n"}එම ඉලෙක්ට්‍රෝන ප්‍රභා පද්ධති 2 හි ප්‍රාථමික ඉලෙක්ට්‍රෝන
            ප්‍රතිග්‍රාහකයා විසින් ප්‍රතිග්‍රහණය කරයි.{"\n"}
            {"\n"}එන්සයිම උත්ප්‍රේරිත ප්‍රතික්‍රියා මගින් ජලය විච්ඡේදනය් වී එහි
            ප්‍රතිඵලයක් ලෙස O2 වායු,H+ අයන හා ඉලෙක්ට්‍රෝන නිදහස් කරයි.{"\n"}
            {"\n"}
            ජලය විච්ඡේදනයේදී නිදහස් වන ඉලෙක්ට්‍රෝන,උද්දීපනය වූ ප්‍රභා පද්ධති 2
            හි ( p680+) උදාසීන කිරීම සදහා යොදවයි.{"\n"}
            {"\n"}ෆෝටෝන ලෙස වර්ණක මත ගැටෙන ආලෝක කිරණ නිසා ප්‍රභා පද්ධති 1 (P
            700+) හි ඇති ඉලෙක්ට්‍රෝන අධි ශක්ති මට්ටමකට උද්දීපනය වේ.{"\n"}
            {"\n"}
            උද්දීපනය වූ ඉලෙක්ට්‍රෝන ප්‍රභා පද්ධති 1 හි ප්‍රාථමික ඉලෙක්‍ට්‍රෝන
            ප්‍රතිග්‍රාහකයා විසින් ප්‍රතිග්‍රහණය කරනු ලබයි.{"\n"}
            {"\n"}ප්‍රභා පද්ධති 2 උද්දීපනය වී නිදහස් වූ ඉලෙක්‍ට්‍රෝන ප්‍රභා
            පද්ධති 2 හි ප්‍රාථමික ඉලෙක්ට්‍රෝන ප්‍රතිග්‍රාහකයාගෙ සිට ඉලෙක්ට්‍රෝන
            ප්‍රතිග්‍රාහක ශ්‍රේණියක් හරහා ගමන් කර ප්‍රභා පද්ධති 1 වෙතට පැමිණ
            උද්දීපනය වූ ප්‍රභා පද්ධති ද් උදාසීන කරයි.{"\n"}
            {"\n"}මෙලෙස ඉහළ ශක්ති මට්ටමක සිට පහළ ශක්ති මට්ටමකට ඉලෙක්ට්‍රෝන
            පැමිණීමේදී නිදහස් වූ ශක්තිය ATP සංස්ලේෂණයට යොදවයි.{"\n"}
            {"\n"}මෙමෙ ක්‍රියාවලිය ප්‍රභා පොස්ෆොරයිලීකරණය ලෙස හදුන්වයි. • ප්‍රභා
            පද්ධති ද් හි ද උද්දීපනය ලක් වී එහි ප්‍රාථමික ඉලෙක්ට්‍රෝන
            ප්‍රතිග්‍රාහකයා මගින් ප්‍රතිග්‍රහණය කළ ඉලෙක්ට්‍රෝන වෙනත් ඉලෙක්ට්‍රෝන
            ප්‍රතිග්‍රාහක ශ්‍රේණියක් හරහා ගමන් කර NADP+ ඔක්සිහරණය කර NADPH සාදයි
            {"\n"}
            {"\n"}NADP+ ඔක්සිහරණ ක්‍රියාවලිය NADP+ රිඩක්ටේස් එන්සයිමය මගින්
            උත්ප්‍රේරණය කරයි.{"\n"}
            {"\n"}චක්‍රීය ඉලෙක්ට්‍රෝන ගලනය ප්‍රභා පද්ධති 1 හි සිදු වේ.{"\n"}
            {"\n"}
            ප්‍රභා පද්ධති 2 හි සිදු නොවේ.{"\n"}
            {"\n"}මෙහිදී ප්‍රභා උද්දීපනයට ලක් වූ ඉලෙක්ට්‍රෝන වෙනත් චක්‍රීය
            ඉලෙක්ට්‍රෝන පථයක් හරහා ගමන් කරයි .{"\n"}
            {"\n"}මෙම පියවරේදී ATP සැදෙන අතර NADPH සෑදීම හෝ O2 නිදහස් වීමක් සිදු
            නොවේ.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Category end */}

        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les2Sub19;
