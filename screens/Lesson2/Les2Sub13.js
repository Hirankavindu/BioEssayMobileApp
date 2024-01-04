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

const Les2Sub13 = () => {
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
            සත්ත්ව සෛල වල බහිස් සෛලීය පූරකය(ECM) පිළිබඳ කෙටිසටහන්.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-5 text-base font-semibold text-justify text-gray-800">
            සත්ත්ව සෛලවල සෛල බිත්ති රහිතය.නමුත් විස්තාරිත බහිෂ්සෛලීය පූරකයක් ඇත.
            {"\n"}
            {"\n"}එහි ප්‍රධාන සංඝටක ලෙස ගලයිකොප්‍රෝටීන හා සෛල මගින් ස්‍රාවය කරන
            වෙනත් කාබෝහයිඩ්‍රේට අඩංගු අණු පවතී.{"\n"}
            {"\n"}බොහෝ සත්ත්ව සෛලවල බහිස්සෛලීය පූරකයේ වඩාත් සුලභ ගලයිකොප්‍රෝටීනය
            වන්නේ, සෛලවලට පිටතින් ශක්තිමත් තන්තු සාදන කොලැජන්‍ ය.{"\n"}
            {"\n"}සෛල මගින් ස්‍රාවය කරන ප්‍රෝටියෝග්ලයිකෑන් වලින් වියන ලද ජාලය
            තුළ කොලැජන් තන්තු ගිලී පවතී.{"\n"}
            {"\n"}ෆයිබ්‍රොනෙක්ටීන් මගින් කොලැජන් තන්තු ,ප්ලාස්ම පටලයේ සම්පූරක
            ප්‍රෝටීන වලට බැදේ.{"\n"}
            {"\n"}සෛල පෘෂ්ඨය මත ආරක්ෂක ස්තරයක් සාදයි.{"\n"}
            {"\n"}සෛල සැකිල්ල හා බහිස්සෛලීය පූරකය සම්බන්ධ කරයි.{"\n"}
            {"\n"}යාන්ත්‍රික හා රසායනික සංගදා ගෙන යෑමට සහභාගීවීම මගින් සෛල
            චර්යාවලට බලපෑම් කරයි.
          </Text>
        </View>

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            සෛල සන්ධි පිලිබඳ කෙටි සටහන්.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            සෛල සන්ධි යනු යාබද සෛලවල සෛල ප්ලාස්ම සම්බන්ධ කරන ව්‍යුහ වේ.{"\n"}
            {"\n"}ඒවා සෘජු භෞතික සබදතා සහිත ප්‍රදේශ හරහා අන්තර්ක්‍රියා හා
            සන්නිවේදනය කරයි.{"\n"}
            {"\n"}එහි කෘත්‍ය යාබද සෛලවල අභ්‍යන්තර රසායනික පරිසර සම්බන්ධ කිරීමයි.
            {"\n"}
            {"\n"}තද සන්ධි : {"\n"}සෛල වටා සන්තතික ලෙස මුද්‍රා සාදන විශිෂ්ට
            ප්‍රෝටීන මගින් යාබද සෛලවල ප්ලාස්ම පටල සම්බන්ධ කරයි. {"\n"}කෘත්‍යය -
            අන්තර් සෛලීය අවකාශය තුළින් බහිෂ්සෛලීය තරලය කාන්දු වීම වළක්වයි.{"\n"}
            උදා -සමේ අපිච්ව්ඡදය{"\n"}
            {"\n"}ඩෙස්මොසෝම / නැංගුරම් සන්ධි :{"\n"}ශක්තිමත් බැදීමක් සදහා
            අතරමැදි සූත්‍රිකා මගින් යාබද සෛලවල සෛල සැකිල්ල යාන්ත්‍රිකව සම්බන්ධ
            කරයි.{"\n"}උදා-පේෂි පටකය{"\n"}
            {"\n"}හිදැස් සන්ධි / සන්නිවේදන සන්ධි : {"\n"}එක් සෛලයක සිට යාබද
            සෛලයට සෛල ප්ලාස්මීය නාලිකා සපයයි.{"\n"}හිදැස් සන්ධි වල අයන,සීනී
            ,ඇමයිනෝ අම්ලවලට ගමන් කළ හැකි සිදුරු ආවරණය කරන විශේෂ පටල ප්‍රෝටීන ඇත.
            {"\n"}ඒව සෘජු සම්බන්ධතා මගින් යාබද සෛල අතර සංගදා සහ ද්‍රවය හුවමාරුවට
            ඉඩ සලසයි.{"\n"}උදා-හෘත් පේෂි ,සත්ත්ව කළල
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub13;
