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

const Les2Sub9 = () => {
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
            ප්ලාස්ම පටලයේ ව්‍යුහය පිළිබදව දැනට පිළිගන්නා ආකෘතිය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            ප්ලාස්ම පටලය සෛල ප්ලාස්මයේ පිටතම සීමාවයි.{"\n"}
            {"\n"}සියලු සෛල පටල ප්ලාස්ම පටලයේ සියුම් ව්‍යුහයට සමානයි.{"\n"}
            {"\n"}සිගර් හා නිකොල්සන් විසින් සෛල පටලයේ තරල විචිත්‍ර ආකෘතිය
            ඉදිරිපත් කරන ලදි.{"\n"}
            {"\n"}පොස්පොලිපිඩ (ප්ලාස්ම පටලයේ සුලබතම ලිපිඩ ආකාර) හා ප්‍රෝටීන
            ප්ලාස්ම පටලයේ ප්‍රධාන සංඝටක වේ.{"\n"}
            {"\n"}එහි ඝනකම 7nm පමණ වේ.{"\n"}
            {"\n"}ප්‍රධාන වශයෙන් පොස්පොලිපිඩ ද්විත්ව ස්තරයකින් සෑදේ.{"\n"}
            {"\n"}
            පොස්පොලිපිඩ උභයසාභී අණු වේ.{"\n"}
            {"\n"}සෛලයේ ඇතුළත හා පිටත යන දෙකෙහිම ඇති ජලීය පරිසරයක් තුළට
            පොස්පොලිපිඩවල ජලකාමී හිස පිටතට යොමු වී ඇත.{"\n"}
            {"\n"}ජලභීතික හයිඩ්‍රොකාබන් වලිග ඇතුළු දෙසට මුහුණලා ජලභීතික
            අභ්‍යන්තරයක් සාදයි.{"\n"}
            {"\n"}ප්ලාස්මපටලය තරල විචිත්‍ර ආකෘතියට සම කල හැකිය.{"\n"}
            {"\n"}පොස්පොලිපිඩ අණු චාලක බැවින් පටලයට තරලමය ස්ව්භාවයක් ලබා දෙයි.
            {"\n"}
            {"\n"}
            අහඹු ලෙස ගිලී ඇති ප්‍රෝටීන අණු පටලයේ විචිත්‍ර ස්වභාවයට දායක වේ.
            {"\n"}
            {"\n"}මේ ප්‍රෝටීන සම්පූරක (integral) ප්‍රෝටීන ලෙස හදුන්වයි.{"\n"}
            {"\n"}
            පටලය තුළින් සම්පූර්ණයෙන්ම විනිවිද යන ඇතැම් සම්පූරක ප්‍රෝටීන අණු.
            {"\n"}
            {"\n"}
            තීර්යක් පටල ප්‍රෝටීන ලෙස හදුන්වයි.{"\n"}
            {"\n"}පටලයේ කොටසක් තුලින් පමණක් විනිවිද යන ප්‍රොටීනද ඇත.{"\n"}
            {"\n"}බොහෝ සම්පූරක ප්‍රොටීන ජලකාමී නාලිකා සහිත තීර්යක් පටල ප්‍රෝටීන
            වේ.{"\n"}
            {"\n"}මේවා අයන හෝ ඇතැම් ධ්‍රැවීය අණුවලට ගමන් කළ හැකි සිදුරු ලෙස
            ක්‍රියා කරයි.{"\n"}
            {"\n"}ලිපිඩ ද්විත්ව ස්තරයේ කොහෙත්ම නොගිලුණු පටලයේ පෘෂ්ඨයට ලිහිල්ව
            බැදුණු ඇතැම් ප්‍රෝටීන පර්යන්ත ප්‍රෝටීන ලෙස හදුන්වයි.{"\n"}
            {"\n"}ඇතැම් ප්‍රෝටීන හා ලිපිඩවල පිළිවෙලින් ග්ලයිකොප්‍රෝටීන හා
            ග්ලයිකොලිපිඩ සාදමින් ඇන්ටෙනා මෙන් කෙටි ශාඛනය වූ කාබෝහයිඩ්‍රේට දාම
            සාදයි.{"\n"}
            {"\n"}සත්ත්ව සෛල පටලයේ ලිපිඩ ද්විත්ව ස්තරයේ අහඹුව ඒකාබද්ධ වූ
            කොලෙස්ටරෝල් අණු ස්වල්පයක් අඩංගුය.{"\n"}
            {"\n"}මේ කොලෙස්ටරෝල් අණු මගින් ප්ලාස්ම පටලයට දෘඩතාවක් හා ස්ථායිතාවක්
            ලබා දේ.{"\n"}
            {"\n"}පටලය දෙපස සං‍යුතියෙන් හා ක්‍රියාකාරීත්වයෙන් වෙනස්ය. (රූපසටහනක්
            අදින්න)
          </Text>
        </View>

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ප්ලාස්ම පටලය මගින් ඉටුකරන ප්‍රධාන කෘත්‍යයන් මොනවාද ?
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            ප්ලාස්ම පටලය ජීවී සෛලවල සෛල ප්ලාස්මය වට කිරීමෙන් බහිස්සෛලීය පරිසරය
            අන්තඃසෛලීය සංඝටකවලින් භෞතිකව වෙන් කරයි.{"\n"}
            {"\n"}වරණීය පාරගම්‍ය වන අතර පැවැත්ම සදහා අවශ්‍ය ද්‍රව්‍ය හුවමාරුව
            යාමනය කල හැකිය.{"\n"}
            {"\n"}ප්ලාස්ම පටලය තුල ගිලුණු ප්‍රෝටීන සෛල හදුනා ගෙන ආසන්න සෛල
            එකිනෙක සමග සන්නිවේදනය කරයි.(සෛල හදුනා ගැනීමට දායක වේ){"\n"}
            {"\n"}
            හෝර්මෝන,ස්නායු සම්ප්‍රේෂක හා ප්‍රතිශක්තීකරන ප්‍රෝටීන වැනි විශිෂ්ට
            ජෛව රසායනික ද්‍රව්‍ය සමග අන්තර් ක්‍රියා සදහා ඇතැම් ප්‍රෝටීන අණු
            ප්‍රතිග්‍රාහක අණු ලෙස ක්‍රියා කරයි.{"\n"}
            {"\n"}සෛල පටලයේ ඇති ඇතැම් ප්‍රෝටීන සමහර සෛල සැකිලි තන්තුවලට සම්බන්ධ
            වී සෛලයේ හැඩය පවත්වා ගැනීමට උපකාරී වේ.{"\n"}
            {"\n"}පටලයේ ඇති ඇතැම් ප්‍රෝටීන සම්හර සෛල සැකිලි තන්තුවලට සම්බන්ධ වී
            සෛලයේ හැඩය පවත්වා ගැනීමට උපකාරී වේ.{"\n"}
            {"\n"}පටලයේ ඇති ඇතැම් ප්‍රෝටීන එන්සයිම ලෙස ක්‍රියාකරයි.{"\n"}
            {"\n"}ආහර මාර්ගයේ ඇතැම් කොටස්වල අපිච්ඡද සෛල ආස්තරණය මත ඇති ක්ෂුද්‍ර
            අංගුලිකා දරන සෛලවල පටල පෘෂ්ඨයේ ජීර්ණ එන්සයිම ඇත.
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les2Sub9;
