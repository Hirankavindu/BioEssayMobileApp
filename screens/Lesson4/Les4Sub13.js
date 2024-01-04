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

const Les4Sub13 = () => {
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
              onPress={() => navigation.navigate("Lesson4")}
            >
              <Image source={BackBox2} width={200} height={30} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Back Button End */}

        {/* Lesson name banner start */}
        <View className="h-20 bg-[#3a301c] flex-col justify-center">
          <View className="flex-row px-3">
            <View className="w-2 bg-white h-14"></View>
            <View className="flex-col px-2">
              <Text className="flex flex-col justify-center text-lg font-bold text-white">
                ශාක ආකාරය හා ක්‍රියාකාරිත්වය
              </Text>
              <Text className="flex flex-col justify-center mt-1 text-sm font-semibold text-slate-100">
                පාඩම් අංක 04
              </Text>
            </View>
          </View>
        </View>
        {/* Lesson Banner end */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ජල විභවය යනු කුමක්දැයි හඳුන්වා එහි සංරචක සහ ඒවා විචලනයට හේතු වන සාධක
            විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ජලය ගමන් කරන දිශාව තීරණය කරනු ලබන ද්‍රව්‍ය සාන්ද්‍රනය හා යොදනු ලබන
            පීඩනය මගින් පාලනය වන භෞතික ගුණාංගයක් ජල විභවය ලෙස හදුන්වයි.
            {"\n"}
            {"\n"}ජල විභවය ජල අණුවල විභව ශක්තිය හා සම්බන්ධයි.{"\n"}
            {"\n"}ජලය සහිත ඕනෑම පද්ධතියක ජල විභවයක් පවතී.{"\n"}
            {"\n"}ජල ගමනට බාධකයක් නැතිනම් ජල විභවය වැඩි ස්ථානයක සිට ජල විභවය අඩු
            ස්ථානයකට නිදහස් ජල අණු ගමන් කරයි.{"\n"}
            {"\n"}ජල විභවය ¥ මගින් සංකේතවත් කරයි.{"\n"}
            {"\n"}¥ මනිනු ලබන්නේ mega pascal ඒකකයෙන්.{"\n"}
            {"\n"}ආසන්න වශයෙන් සම්මත තත්ව යටතේ භාජනකය ඇති වායුගෝලයට නිරාවරණය වූ
            සංශුද්ද ජලයේ ජල විභවය mega pascal බිංඳුවක් වෙයි.{"\n"}
            {"\n"}ද්‍රව්‍ය සාන්ද්‍රණය මෙන්ම භෞතික පීඩනය ජල විභවය කෙරෙහි බලපායි
            .ඒ නිසා ජල විභවය පහත සමීකරණයෙන් පෙන්නුම් කෙරේ.{"\n"}
            {"\n"}¥=¥s + ¥p {"\n"}
            {"\n"}¥s ද්‍රාව්‍ය විභවය නම් වේ.{"\n"}
            {"\n"}¥s ආස්‍රැතික විභවය ලෙස ද හඳුන්වයි ද්‍රවයේ ආස්‍රැතියේ දිශාව
            කෙරෙහි බලපායි.{"\n"}
            {"\n"}ද්‍රාව්‍යය විභවය ද්‍රාවණයක මවුලිකතාවය ට අනුලෝම ව සමානුපාතික
            වේ.{"\n"}
            {"\n"}ශාකවල ඇති ද්‍රව්‍ය ලෙස දක්නට ලැබෙන්නේ ඛනිජ අයන හා සීනිය.
            {"\n"}
            {"\n"}සංශුද්ධ ජලයේ ජල විභවය megapascal බිංදුවක් වේ.{"\n"}
            {"\n"}ද්‍රව්‍ය දිය කරන විට ජල අණු එම ද්‍රව්‍ය අණු සමග බැඳීමෙන්
            නිදහස් ජල අණු ප්‍රමාණය අඩුවේ.{"\n"}
            {"\n"}ජලයේ චලනය හා කාර්ය කිරීමේ හැකියාව ද අඩුකරයි.{"\n"}
            {"\n"}මෙලෙස ද්‍රාවය සාන්ද්‍රනය වැඩි වන විට ජල විභවය කෙරෙහි ඍණ
            බලපෑමක් ඇති වේ.{"\n"}
            {"\n"}එනිසා ද්‍රාවණය ¥s හැමවිටම සෘණ අගයක් ලෙස ප්‍රකාශ වේ.
            {"\n"}
            {"\n"}ද්‍රව්‍ය සාන්ද්‍රනය වැඩි වත්ම එය වඩාත් සෘණ අගයක් ගනී.
            {"\n"}උදාහරණ-0.1M සීනී ද්‍රාවණයේ ¥s =-0.23MPa වේ.{"\n"}
            {"\n"}පීඩන විභවය ද්රාවණයක් මතය ඇති භෞතික පීඩනය නම් වේ. (25)වායුගෝලීය
            පීඩනයට සාපේක්ෂව ධන හෝ සෘණ අගයක් ගනී.{"\n"}උදාහරණ ශෛලම වාහිනී වල ¥p
            සාමාන්‍යයෙන් -2MPa ට වඩා අඩුය.{"\n"}
            {"\n"}එයට හේතුව ශෛලම වාහිනී ආතතියක් යටතේ පැවතීමයි.{"\n"}
            {"\n"}සජීවී සෛල ආස්‍රැතිය මගින් ජලය අවශෝෂණය කරයි.{"\n"}
            {"\n"}එනිසා එම සෛල තුල සැමවිටම ධන පීඩනයක් පවතී.{"\n"}
            {"\n"}එනිසා ඒවායේ ¥p ධන අගයකි.{"\n"}
            {"\n"}සෛලයක අන්තර්ගතය මගින් ප්ලාස්ම පටලය සෛල බිත්තිය මතට තෙරපීමක්
            ඇති කරයි.{"\n"}
            {"\n"}එවිට ප්‍රාක්ප්ලාස්මය ප්‍රතිවිරුද්ධ දෙසට තෙරපවයි.{"\n"}
            {"\n"}ඒ හේතුවෙන් ශුනතා පීඩනයක් ඇතිවේ.{"\n"}
            {"\n"}ශුනතාව පීඩනය වැඩිවත්ම සෛලයේ ජල විභවය ද වැඩි විය.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            විශුනශාක සෛලයක් සංශුද්ධ ජලයේ ගිල්වා ඇති විට ජලවිභව සමීකරණයේ සංඝටක වල
            සිදුවන වෙනස්කම් විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සංශුද්ධ ජලයේ ¥=0MPa වේ.{"\n"}
            {"\n"}සෛලයේ ජල විභවය සංශුද්ධ ජලයේ ජල විභව ට වඩා අඩුය.{"\n"}
            {"\n"}එයට හේතුව සෛලය තුළ ද්‍රව්‍ය දිය වී තිබීමයි.{"\n"}
            {"\n"}එවිට ද්‍රාවණයේ සිට සෛලය තුළට ආස්‍රැතිය මඟින් ජලය ඇතුළු වේ.
            {"\n"}
            {"\n"}එවිට ප්‍රාක් ප්ලාස්ටය ඉදිමීමට පටන් ගනී.{"\n"}
            {"\n"}ප්ලාස්ම පටලය සෛල බිත්තිය මතට තෙරපව්යි.{"\n"}
            {"\n"}එවිට අර්ධ වශයෙන් ප්‍රත්‍යස්ථ සෛල බිත්තිය මඟින් පීඩනයට ලක්ව
            ඇති, ප්‍රාක්ප්ලාස්ටය මතට ශුනතා පීඩනයක් ඇති කරයි.{"\n"}
            {"\n"}ඒ නිසා සෛලයේ ¥p ක්‍රමයෙන් වැඩි වේ.{"\n"}
            {"\n"}¥p සඳහා ලබාගත හැකි උපරිම අගය සෛලයේ ¥sට සමාන වේ.{"\n"}
            {"\n"}එනම් ¥p=¥s එවිට ¥=0වේ.{"\n"}
            {"\n"}එනම් බහිස්සෛලීය පරිසරයේ ජලවිභවයට 0MPa වලට සමාන වේ.{"\n"}
            {"\n"}එවිට ජල ගමනය ගතික සමතුලිතතාව යට පත්වෙයි.{"\n"}
            {"\n"}එනම් තවදුරටත් ශුද්ධ ජල ගමනක් සිදු නොවේ.{"\n"}
            {"\n"}සෛලයට උපරිම ¥p අගයක් ඇති විටදී සෛලය පූර්ණ වශයෙන් ශුන වී ඇත.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub13;
