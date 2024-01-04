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

const Les2Sub20 = () => {
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
            අනූනන විභාජනය හා ඌනන විභාජනය අතර වෙනස්කම් (කෙටි සටහන්).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-5 text-base font-semibold text-justify text-gray-800">
            අනූනන විභාජනයේදී මාතෘ සෛලයකින් දුහිතෘ සෛල 2ක් ඇති වේ.{"\n"}
            {"\n"}ඌනන විභාජනයේදී මාතෘ සෛලයකින් දුහිතෘ සෛල 4ක් සෑදේ.{"\n"}
            {"\n"}අනූනන විභාජනයේදී මාතෘ සෛලයේ පවතින වර්ණදේහ සංඛ්‍යාව අඩුවීමකින්
            තොරව දුහිතෘ සෛලයට ලැබේ.{"\n"}
            {"\n"}ඌනන විභාජනයේදී මාතෘ සෛලයේ වර්ණදේහ සංඛ්‍යාව අඩු වී දුහිතෘ
            සෛලවලට ලැබේ.{"\n"}
            {"\n"}අනූනන විභාජනයේදී ප්‍රවේණික සං‍යුතියේ වෙනසක් සිදු නොවේ.{"\n"}
            {"\n"}
            ඌනන විභාජනයේදී ප්‍රවේණික සං‍යුතියෙන් අසමාන දුහිතෘ න්‍යෂ්ටි ඇති වේ.
            {"\n"}
            {"\n"}
            අනූනන විභාජනයේදී ප්‍රධාන විභාජක අවධි 01 ක් ඇති වේ.{"\n"}
            {"\n"}ඌනන විභාජනයේදී විභාජක අවධි 02 ක් ඇති වේ.{"\n"}
            {"\n"}අනූනන විභාජනයේදී සමජාත වර්ණදේහ යුගලනයක් සිදු නොවේ.{"\n"}
            {"\n"}ඌනන විභාජනයේදී සමජාත වර්ණදේහ යුගලනය වේ.{"\n"}
            {"\n"}අනූනන විභාජනයේදී අවතරණය සිදු නොවේ.{"\n"}
            {"\n"}ඌනන විභාජනයේදී අවතරණය සිදු වේ.{"\n"}
            {"\n"}අනූනන විභාජනයේදී වර්ණදේහවල සෙන්ට්‍රොමියර වලට ප්‍රතිවිරුද්ධ
            ධ්‍රැව දෙකෙන්ම තර්කු තන්තු බැදේ.{"\n"}
            {"\n"}ඌනනය 1 විභාජනයේදී තර්කු තන්තු බැදෙන්නේ එක් ධ්‍රැවයකින් පමණි
            {"\n"}
            {"\n"}
            අනූනන විභාජනයේ යෝග කලාවේදී සෛලයේ මධ්‍ය තලයෙහි වර්ණදේහ තනි තනිව
            පිළියෙල වේ.{"\n"}
            {"\n"}ඌනනය 1 විභාජනයේ යෝග කලාවේදී වර්ණදේහ සමජාත වර්ණදේහ යුගල ලෙස
            සැලකේ.{"\n"}
            {"\n"}අනූනන විභාජනයේ වියෝග කලාවේදී සෙන්‍ට්‍රොමියරය බිද වැටේ.{"\n"}
            {"\n"}
            ඌනන විභාජනයේ වියෝග කලාව දී සෙන්ට්‍රොමියර බිදී යාමක් සිදු නොවේ.{"\n"}
            {"\n"}
            අනූනන විභාජනය ඒකගුණ මෙන්ම ද්වීගුණ සෛලවලද සිදු වේ.{"\n"}
            {"\n"}ඌනන විභාජනය ඒකගුණ සෛලවල සිදු නොවන අතර ද්වීගුණ සෛලවල සිදු වේ.
            {"\n"}
            {"\n"}
            අනූනන විභාජනයේදී උපාගම සංකීර්ණයක් නොසෑදේ.{"\n"}
            {"\n"}ඌනන විභාජනයේදී උපාගම සංකීර්ණයක් සෑදේ.{"\n"}
            {"\n"}අනූනන විභාජනයට සාපේක්ෂව අඩු කාලයක් ගත වේ.{"\n"}
            {"\n"}ඌනන විභාජනයට සාපේක්ෂව වැඩි කාලයක් ගත වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            සූන්‍යෂ්ටික වර්ණදේහක මූලික ව්‍යූහය (කෙටි සටහන්).
          </Text>
        </View>
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            න්‍යෂ්ටියේ පවතින DNA දාමයක සෑම නියුක්ලියෝටයිඩ 200 කට වරක් DNA දාමය
            හිස්ටෝන් ප්‍රෝටීන අණු 8 ක් වටා එතෙමින් නියුක්ලියෝසෝම නිර්මාණය කරයි.
            {"\n"}
            {"\n"}(+) ලෙස ආරෝපිත හිස්ටෝන් ප්‍රෝටීන අණු (-) ලෙස ආරෝපිත DNA සමග
            තදින් සම්බන්ධ වී පවතී.{"\n"}
            {"\n"}මෙසේ තැනෙන නියුක්ලියෝසෝම තදින් ඇසිරෙමින් සෙලනොයිඩ නිර්මාණය
            කරයි .{"\n"}
            {"\n"}
            {"\n"}මේ සදහා කන්ඩෙන්සීන් ප්‍රෝටීනය දායක වේ.{"\n"}
            {"\n"}මෙසේ දගර ගැසී ඇඹරී ඇති DNA හා ඊට සම්බන්ධ ප්‍රෝටීන මගින්
            වර්ණදේහයක් නිර්මාණය වේ.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Category end */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            එන්සයිම ක්‍රියාකාරිත්වය සඳහා සහසාධක වල වැදගත්කම(කෙටි සටහන්).
          </Text>
        </View>
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            සමහර එන්සයිමවල උත්ප්‍රේරක ක්‍රියාකාරීත්වයට අත්‍යවශ්‍යවන ප්‍රෝටීන
            නොවන සංඝටක සහසාධක නම් වේ.{"\n"}
            {"\n"}සහසාධක එන්සයිමවලට ආකාර දෙකකින් බැදේ.{"\n"}
            {"\n"}සමහර ඒවා ඉතා තදින් බැදේ ස්ථිර ලෙස පවතී.{"\n"}
            {"\n"}අනෙකුත් ඒවා තාවකාලිකව හා ලිහිල්ව බැදී පවතී.{"\n"}
            {"\n"}යම් යම් තත්ත්ව යටතේ ලිහිල්ව බැදුණු සහසාධක ප්‍රතිවර්ත්‍ය වේ.
            {"\n"}
            {"\n"}
            කාබනික සහසාධක සහැන්සයිම ලෙස හදුන්වයි.{"\n"}උදා- විටමින් ව්‍යුත්පන්න
            {"\n"}NAD+ / FAD/ බයොටීන්{"\n"}Zn2+ / Fe2+ / Cu2+ අකාබනික සහසාධක වේ.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Category end */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub20;
