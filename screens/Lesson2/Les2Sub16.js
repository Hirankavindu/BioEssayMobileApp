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

const Les2Sub16 = () => {
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
            ඌනනය යනු?
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-5 text-base font-semibold text-justify text-gray-800">
            ද්විගුණ මාතෘ න්‍යෂ්ටියකින් ප්‍රවේණිකව සර්වසම නොවන ඒකගුණ දුහිතෘ
            න්‍යෂ්ටි හතරක් සාදන.න්‍යෂ්ටි විභාජන ක්‍රමයකි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ඌනනයේ පළමු විභාජනය මගින් මාතෘ සෛලයේ වර්ණදේහ සංඛ්‍යාවෙන් අඩක් දරන
            න්‍යෂ්ටි යුගලක් නිර්මාණය වන අයුරු විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 text-lg font-bold text-justify text-gray-800">
            ප්‍රාග් කලාව
          </Text>
        </View>
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            අන්තර් කලාවේ සිට ප්‍රාග් කලාව 1 ඇතුළු වූ සෛලයේ ඇති වර්ණදේහ ඝන බවට
            පත් වේ.{"\n"}
            {"\n"}න්‍යෂ්ටිකාව අතුරුදහන් වීමට පටන් ගනී.{"\n"}
            {"\n"}පසුව විශිෂ්ට ප්‍රෝටීනයක් මගින් සමජාත වර්ණදේහ දෙක එකට බැද තබන
            උපාගමපට සංකීරණය නම් සිප් එකක් (Zipper) වැනි ව්‍යුහයක් සාදයි.{"\n"}
            {"\n"}
            සමජාත වර්ණදේහ යුගලනය සහ භෞතිකව සම්බන්ධවීම උපාගමය ලෙස හදුන්වයි.{"\n"}
            {"\n"}
            උපාගමයේදී සමජාත වර්ණදේහ යුගලෙහි සහෝදර නොවන වර්ණදේහාංශවල DNA අණුවේ
            කොටස් කැඩී,හුවමාරු වී අනුරූපි ලක්ෂ අසලදී නැවත සම්බන්ධ වේ.{"\n"}
            {"\n"}මෙම ක්‍රියාවලිය අවතරණය නම් වේ.{"\n"}
            {"\n"}උපාගම පට සංකීරණය වෙන් වූ පසු අවතරණය වූ ලක්ෂ්‍ය (ස්ථාන ) මංසල
            ලෙස දිස් වේ.{"\n"}
            {"\n"}සමජාත වර්ණදේහ සුළු වශයෙන් එකිනෙකින් ඈත් වේ.{"\n"}
            {"\n"}න්‍යෂ්ටි ආවරණය බිද වැටේ.{"\n"}
            {"\n"}සත්ත්ව සෛලවල තර්කුව සාදමින් කේන්ද්‍රදේහ ප්‍රතිවිරුද්ධ ධ්‍රැව
            කරා ගමන් කරයි.{"\n"}
            {"\n"}එක් ධ්‍රැවයක හෝ අනෙක් අනෙක් ධ්‍රැවයේ සිට එන ක්ෂුද්‍රනාලිකාවලට
            එක් එක් සමජාත වර්ණදේහවල කයිනෙටොකෝර්වලට සම්නධ වේ.{"\n"}
            {"\n"}සමජාත වර්ණදේහ යුගල,පසුව යෝග කලා තලය දෙසට ගමන් කරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 text-lg font-bold text-justify text-gray-800">
            යෝග කලාව 1
          </Text>
        </View>
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            සමජාත වර්ණදේහ යුගල යෝග කලා තලය මත එක් එක් යුගලේ වර්ණදේහයක් එක් එක්
            ධ්‍රැවයට මුහුනලා සකස් වේ.{"\n"}
            {"\n"}එක් සමජාත වර්ණදේහයක වර්ණදේහාංශ දෙකම එක් ධ්‍රැවයක සිට එන
            කයිනෙටොකෝර් ක්ෂුද්‍ර නාලිකාවලට සම්බන්ධ වේ.{"\n"}
            {"\n"}අනෙක් සමජාත වර්ණදේහයේ වර්ණදේහාංශ දෙක ප්‍රතිවිරුද්ධ ධ්‍රැවයේ
            සිට එන කයිනෙටකෝර් ක්ෂුද්‍රනාලිකාවලට සම්බන්ධ වේ.{"\n"}
            {"\n"}සමජාත වර්ණදේහ යුගල අහඹු ලෙස යෝග කලා තලය මත සකස් වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 text-lg font-bold text-justify text-gray-800">
            වියෝග කලාව
          </Text>
        </View>
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            තර්කුවේ කයිනෙටොකෝර් නාලිකා කෙටි වේ.{"\n"}
            {"\n"}සමජාත වර්ණදේහ යුගල වෙන් වේ.{"\n"}
            {"\n"}එක් එක් සමජාත යුගලේ එක් එක් වර්ණදේහයක් ප්‍රතිවිරුද්ධ ධ්‍රැව
            දෙසට චලනය වේ.{"\n"}
            {"\n"}එක් එක් වර්ණදේහයේ සහෝදර වර්ණදේහයේ සහෝදර වර්ණදේහාංශ
            සෙන්ට්‍රොමියරයට සම්බන්ධ වේ.{"\n"}
            {"\n"}ඒවා තනි ඒකකයක් ලෙස අදාළ ධ්‍රැවයට චලනය වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 text-lg font-bold text-justify text-gray-800">
            අන්ත කලාව
          </Text>
        </View>
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            සම්පූර්ණ ඒකගුණ වර්ණදේහ කට්ටලයක් එක් එක් ධ්‍රැවයේ ඒකරාශී වී පවතී.
            {"\n"}
            {"\n"}
            න්‍යෂ්ටි ආවරණය එම එක් එක් ඒකගුණ වර්ණදේහ කට්ටලය වටා යළි සෑදේ.{"\n"}
            {"\n"}
            න්‍යෂ්ටිකාව යළි පෙනේ.{"\n"}
            {"\n"}තර්කුව කැඩී බිදී යයි.{"\n"}
            {"\n"}වර්ණදේහ ඝන වී ලිහිල් වී ක්‍රොමැටීන් බවට පත් වේ.{"\n"}
            {"\n"}
            ප්‍රවේණිකව සර්වසම නොවන ඒකගුණ න්‍යෂ්ටි දෙකක් එක් සෛලයක් තුළ සෑදේ.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub16;
