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

const Les2Sub1 = () => {
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
            කාබෝහයිඩ්‍රේටවල මූලික රසායනික ස්වභාවය හා විවිධත්වය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            පෘථිවියේ ඇති වඩාත් ම සුලබතම කාබනික සං‍යෝග කාණ්ඩයයි.{"\n"}
            {"\n"}ප්‍රධාන මූලද්‍රව්‍ය සං‍යුතිය C,H හා O{"\n"}
            {"\n"}කාබන්වල හයිඩ්‍රේටවල අඩංගු H:O අනුපාතය ජලය මෙන් 2:1 ට සමානයි.
            {"\n"}
            {"\n"}පොදු සූත්‍රය Cx(H2O)Y වේ.ප්‍රධාන කාබෝහයිඩ්‍රේට කාණ්ඩ 03 කි.
            {"\n"}එනම් මොනොසැකරයිඩ,ඩයිසැකරයිඩ ,පොලිසැකරයිඩ{"\n"}
            {"\n"}සාමන්‍යයෙන් කාබෝහයිඩ්‍රේටවල සීනි (ඩයිසැකරයිඩ හා මොනොසැකරයිඩ)
            සහ පොලිසැකරයිඩ අඩංගු වේ.
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            මොනොසැකරයිඩ
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            කාබෝහයිඩ්‍රේටවල සරලතම ආකාරයයි.{"\n"}
            {"\n"}පොදු අණුක සූත්‍රය (CH2O)n වේ.{"\n"}
            {"\n"}කාබන් පරමාණු සංඛ්‍යාව මත 3 සිට 7 දක්වා වෙනස් වේ .{"\n"}
            {"\n"}සියල්ල ඔක්සිහාරක සීනි වේ.{"\n"}
            {"\n"}ජලයේ ද්‍රාව්‍යයයි.{"\n"}
            {"\n"}ස්ඵටික ආකාරයෙන් පවතී.{"\n"}
            {"\n"}C පරමාණු සංඛ්‍යාව මත පදනම්ව පහත ආකාරයට නම් කරයි.{"\n"}
            3C -ට්‍රයෝස{"\n"}
            ග්ලිසරැල්ඩිහයිඩ(පොස්පොග්ලිසරැල්ඩිහයිඩ ට්‍රයෝස වල ව්‍යුත්පන්නයකි).
            {"\n"}
            {"\n"}4C - ටෙට්‍රෝස .{"\n"}
            එරිට්‍රෝස් (ස්වාභාවයේ විරලය ).{"\n"}
            {"\n"}5C- පෙන්ටෝස{"\n"}
            රයිබෝස් , ඩිඔක්සි රයිබෝස් ,රිබියුලෝස් (RUBP යනු රිබියුලෝස්වල
            ව්‍යුත්පන්නයකි){"\n"}
            {"\n"}6C - හෙක්සෝස{"\n"}
            ග්ලූකෝස් , ෆ්රක්ටෝස් , ග්ලැක්ටෝස් ,කාබොනිල් කාණ්ඩයේ (කීටෝ ,ඇල්ඩෝ)
            {"\n"}
            {"\n"}වර්ගය අනුව ඒවා වර්ග කෙරේ.{"\n"}
            ඇල්ඩෝස් - ග්ලූකෝස් , ගැලැක්ටෝස්.{"\n"}
            {"\n"}කීටෝස් - ෆ්රක්ටෝස් ,ජලීය මාධ්‍යවල දී සමහර මොනොසැකරයිඩ වළලු
            ආකාරයෙන් ඇත.
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            ඩයිසැකරයිඩ
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            මොනොසැකරයිඩ අණු 02 ක් ග්ලයිකොසිඩික් බන්ධනයක් මගින් සම්බන්ධ වී සෑදෙන
            සීනි වේ .{"\n"}
            {"\n"}යාබද මොනොසැකරයිඩ අණු 2 ක් අතර සංඝනන ප්‍රතික්‍රියාවක් මගින් ජල
            අණුවක් පිටවීමෙන් එම අණු දෙක අතර ,ග්ලයිකොසිඩික් බන්ධනයක් සෑදේ.එහිදී
            එක් මොනොසැකරයිඩ අණුවක OH කාණ්ඩයක් යාබද මොනොසැකරයිඩ අණුවේ ඇති
            පරමාණුවක් සමග සම්බන්ධ වී මේ ජල අණුව සාදයි.{"\n"}
            ග්ලූකෝස් + ග්ලූකෝස් ------ මෝල්ටෝස් + ජලය .{"\n"}
            ග්ලූකෝස් + ෆ්රක්ටෝස් ------ සුක්‍රෝස් + ජලය .{"\n"}
            ග්ලූකෝස් + ගැලැක්ටෝස් ----- ලැක්ටෝස් + ජලය .{"\n"}
            මෝල්ටෝස් සහ ලැක්ටෝස් ඔක්සිහාරක සීනිය .සුක්‍රෝස් නිරොක්සිහාරක සීනිය.
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            පොලිසැකරයිඩ
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            මහා අණු වේ.{"\n"}
            {"\n"}ජෛව බහුඅවයවික වේ .{"\n"}
            {"\n"}මොනොසැකරයිඩ උප ඒකක සිය ගණනක සිට දහස් ගණනකින් පොලිසැකරයිඩ සෑදේ
            .{"\n"}
            {"\n"}ස්ඵටිකීකරණය නොවේ .{"\n"}
            {"\n"}ජලයේ අද්‍රාව්‍යයි.{"\n"}
            {"\n"}සීනි ලෙස නොසලකයි.{"\n"}
            {"\n"}සමහර පොලිසැකරයිඩ සංචිත සංඝටක වේ .{"\n"}
            {"\n"}අනෙක් පොලිසැකරයිඩ සංචිත ජීවීන්ගේ ව්‍යුහ සෑදීමට දායක වේ .{"\n"}
            {"\n"}ඉටු කරන කෘත්‍ය අනුව සංචිත පොලිසැකරයිඩ සහ ව්‍යුහමය පොලිසැකරයිඩ
            ලෙස පොලිසැකරයිඩ වර්ග කර ඇත .{"\n"}
            {"\n"}සංචිත - පිශ්ඨය , ග්ලයිකොජන් .{"\n"}
            {"\n"}ව්‍යුහමය - සෙලියුලෝස් , හෙම්සෙලියුලෝස් ,පෙක්ටීන් පොලිසැකරයිඩ
            නිර්මාණය වී ඇති ආකාරය අනුව වර්ග කර ඇත .{"\n"}
            {"\n"}රේඛීය - සෙලියුලෝස් ,ඇමයිලේස්.{"\n"}
            {"\n"}ශාඛනය වූ -ග්ලයිකොජන්,ඇමයිලෝපෙක්ටීන්,හෙම්සෙලියුලෝස් .{"\n"}
            {"\n"}
            පිෂ්ඨය - ග්ලූකෝස්{"\n"}
            ග්ලයිකොජන් - ග්ලූකෝස්{"\n"}
            සෙලියුලෝස් - ග්ලූකෝස්{"\n"}
            ඉනියුලීන් - ෆ්රක්ටෝස්{"\n"}
            පෙක්ටීන් - ගැලැක්ටියුරොනික් අම්ලය{"\n"}
            හෙම්සෙලියුලෝස් - පෙන්ටෝස් සහ හෙක්සෝස්{"\n"}
            කයිටීන් - ග්ලූකොසැමීන් ( නයිට්‍රජන් අඩංගු පොලිසැකරයිඩයකි )
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub1;
