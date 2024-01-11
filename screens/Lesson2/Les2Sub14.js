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

const Les2Sub14 = () => {
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
            සෛල චක්‍රය යනු කුමක්ද?
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-5 text-base font-semibold text-justify text-gray-800">
            එක් සෛල විභාජනයක අවසානයේ සිට ඊලග සෛල විභාජනයේ අවසානය තෙක් සෛලයක
            ජීවිත කාලයක් තුළ සිදුවන සිදුවීම් අනුපිළිවෙලයි.
          </Text>
        </View>

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            සූන්‍යෂ්ටික සෛල චක්‍රයේ පියවර අනුපිළිවෙලින් විස්තර කරමින් මාතෘ සෛලයේ
            විභාජනයෙන් දුහිතෘ සෛල දෙකක් ඇතිවන අයුරු විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            සූන්‍යෂ්ටික සෛල චක්‍රය ප්‍රධාන කලා දෙකකි .එනම්,{"\n"}අන්තර් කලාව
            {"\n"}
            අනූනන කලාව / M කලාව{"\n"}
            {"\n"}අන්තර් කලාව සෛල චක්‍රයේ දීර්ඝතම කලාවයි.{"\n"}
            {"\n"}සෛල චක්‍රයෙන් 90% ක් පමණ ආවරණය කරයි .{"\n"}
            {"\n"}අන්තර් කලාව කලා තුනකට වෙන් කළ හැක .{"\n"}
            {"\n"}G1 කලාව (ප්‍රථම පරතර කලාව){"\n"}S කලාව සදහා අත්‍යවශ්‍ය
            ප්‍රෝටීන සංස්ලේෂණය{"\n"}සෛල වර්ධනයට මග පාදන ප්‍රෝටීන සංස්ලේෂණය සහ
            සෛල ඉන්ද්‍රිකා නිපදවයි.{"\n"}
            {"\n"}S කලාව (සංස්ලේෂණ කලාව){"\n"}DNA ප්‍රතිවලිතය වීම හා හිස්ටෝන්
            ප්‍රෝටීන සංස්ලේෂණය.{"\n"}හිස්ටෝන් ප්‍රෝටීන (පබළු හැඩැති) මත DNA වෙළී
            ක්‍රොමටීන් සාදයි.{"\n"}
            {"\n"}2 කලාව (දෙවන පරතර කලාව){"\n"}සෛලීය ඉන්ද්‍රිකා මෙන්ම ප්‍රෝටීන
            සංස්ලේෂණය මගින් සෛල වර්ධනය අඛණ්ඩව පවත්වා ගනී.{"\n"}අනූනන කලාවට
            අත්‍යවශ්‍ය වන ප්‍රෝටීන සංස්ලේෂණය.{"\n"}කේන්ද්‍රදේහ ද්වීකරණය වීම.
            {"\n"}M කලාව සෛල චක්‍රයෙන් 10% ක් ආවරණය කරයි.{"\n"}අනූනය හා සෛල
            ප්ලාස්ම විභාජනය මීට අයත්ය.{"\n"}අනූනය යනු එක් මාතෘ න්‍යෂ්ටියකින්
            ප්‍රවේණිකව සර්වසම දුහිතෘ න්‍යෂ්ටි දෙකක් නිපදවන න්‍යෂ්ටික විභාජනයකි.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-lg font-black text-justify text-gray-800">
            ප්‍රාග් කලාව
          </Text>
        </View>
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            ක්‍රොමැටින් තන්තු කෙටි වීම හා ඝන වී වර්ණදේහ බවට පරිවර්තනය වේ.එහි
            ප්‍රතිඵලයක් ලෙස වර්ණදේහ ආලෝක අන්වීක්ෂයෙන් පෙනේ.{"\n"}
            {"\n"}න්‍යෂ්ටිකාව අතුරුදහන් වේ.{"\n"}
            {"\n"}සෙන්ට්‍රොමියර මගින් සම්බන්ධ වී ඇති සහෝදර වර්ණදේහාංශ දෙකක්
            සහිතව වර්ණදේහ දිස් වේ.{"\n"}
            {"\n"}කොහෙසීන් ප්‍රෝටීනයෙන් සහෝදර වර්ණදේහාංශවල වර්ණදේහ බාහු බැදේ.
            {"\n"}
            {"\n"}අනූනන තර්කුව සෑදීම ආරම්භ වේ.{"\n"}
            {"\n"}තර්කුව සෑදෙන්නේ එකතු වූ ක්ෂුද්‍ර නාළිකා සංකීරණයකිනි.තර්කුවට
            කේන්ද්‍රදේහය තර්කු ක්ෂුද්‍ර නාලිකා සහ තුරුව ඇතුළත්ය.{"\n"}
            {"\n"}
            කේන්ද්‍රදේහ දෙක අතර,ක්ෂුද්‍රනාලිකා දික් වීම හේතුවෙන් කේන්ද්‍රදේහ
            සෛලයේ ප්‍රතිවිරුද්ධ ධ්‍රැව දෙසට චලනය වේ.{"\n"}
            {"\n"}කේන්ද්‍රදේහය හෝ සෙන්ට්‍රොසෝල ශාක සෛලවල නැත.{"\n"}
            {"\n"}නමුත් සෛල විභාජනයේ දී එකතු වූ ක්ෂුද්‍ර නාලිකා සංකීර්ණ මගින්
            තර්කුව සෑදේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-lg font-black text-justify text-gray-800">
            පෙරයෝග කලාව
          </Text>
        </View>
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            න්‍යෂ්ටික ආවරණය බිදී යයි .{"\n"}
            {"\n"}වර්ණදේහ තවදුරටත් ඝන බවට පත් වේ.{"\n"}
            {"\n"}කයිනෙටොකෝර් ආධාරයෙන් එක් එක් වර්ණදේහයේ වර්ණදේහාංශවල
            සෙන්ට්‍රොමියරය අසළදී සම්බන්ධ වේ.{"\n"}
            {"\n"}වර්ණදේහවල කයිනෙටොකෝර්වලට සමබන්ධව ඇති සමහර ක්ෂුද්‍රනාලිකා
            වර්ණදේහ ඉදිරියට හා පසුපසට චලනය කරයි.{"\n"}
            {"\n"}කයිනෙටොකෝර්වලට සම්බන්ධ නොවූ ක්ෂුද්‍රනාලිකා ප්‍රතිවිරුද්ධ
            ධ්‍රැවවල සිට එන ක්ෂුද්‍රනාලිකා සමග අන්තර්ක්‍රියා කරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-lg font-black text-justify text-gray-800">
            යෝග කලාව
          </Text>
        </View>
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            කේන්ද්‍රදේහ ප්‍රතිවිරුද්ධ ධ්‍රැව දෙසට ළගා වේ.{"\n"}
            {"\n"}එක් එක් ධ්‍රැවයේ සිට සම දුරකින් පිහිටි යෝග කලා තලයට වර්ණදේහ
            පැමිණ ඇත.{"\n"}
            {"\n"}සෑම වර්ණදේහයකම සෙන්ට්‍රොමියර යෝග කලා තලය මත පිහිටයි.{"\n"}
            {"\n"}මේ කලාව අවසාන වන විට සෛලයේ එක් එක් වර්ණදේහය ඒවායේ
            සෙන්ට්‍රොමියරය අසලදී කයිනෙටොකෝර් ක්ෂුද්‍රනාලිකා වලට බැදී යෝග කලා
            තලයේ පෙළ ගැසේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-lg font-black text-justify text-gray-800">
            වියෝග කලාව
          </Text>
        </View>
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            සහෝදර වර්ණදේහංශ සෙන්ට්‍රොමියරයෙන් වෙන් වේ.{"\n"}
            {"\n"}කයිනෙටොකෝර්වලට සම්බන්ධ වූ ක්ෂුද්‍රනාලිකා කෙටි වී වර්නදේහාංශ
            ප්‍රතිවිරුද්ධ ධ්‍රැව දෙසට ඇදේ.{"\n"}
            {"\n"}කයිනෙටොකෝර්වලට සම්බන්ධනොවූ ක්ෂුද්‍රනාලිකා දිගු වී සෛලය දිගින්
            වැඩි වේ.{"\n"}
            {"\n"}වියෝග කලාව අවසාන වීමත් සමග සමාන හා සම්පූර්ණ වර්ණදේහ කට්ටල
            සෛලයේ එක් එක් ධ්‍රැවයේ පිහිටයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-lg font-black text-justify text-gray-800">
            අන්ත කලාව
          </Text>
        </View>
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            ප්‍රතිවිරුද්ධ ධ්‍රැවවල ඇති එක් එක් වර්ණදේහ කට්ටල වටා න්‍යෂ්ටි ආවරණය
            නැවත ඇති වේ.{"\n"}
            {"\n"}න්‍යෂ්ටිකාව නැවත දර්ශනය වේ.{"\n"}
            {"\n"}තර්කු ක්ෂුද්‍ර නාලිකා විබහුඅවයවීකරණය වේ.{"\n"}
            {"\n"}ක්‍රොමැටීන් සෑදීමට වර්ණදේහ ලෙහී ඝන වීම අඩු වේ.{"\n"}
            {"\n"}අන්තකලාව අවසාන වන විට සෛල ප්ලාස්ම විභාජනය ආරම්භා වේ. ඒ නිසා
            අනූන විභාජනය අවසාන වන විට ප්‍රවේණිකව සර්වසම දුහිතෘ සෛල දෙකක්
            නිපදවයි.{"\n"}
            {"\n"}සත්ත්ව සෛලවල භේදන ඇලියක් ඇති වේ.{"\n"}
            {"\n"}ප්‍රවේණිකව සර්වසම දුහිතෘ සෛල දෙකක් නිපදවයි.{"\n"}
            {"\n"}ශාක සෛලවල ගෝල්ගී උපකරණයෙන් නිපදවන ආශයිකාවල ප්‍රතිඵලයක් ලෙස සෛල
            තලයක් සෑදේ.{"\n"}
            {"\n"}මෙමගින් සෛල ප්ලාස්මය දෙකට බෙදී මාතෘ සෛලවලට ප්‍රවේණිකව සර්වසම
            දුහිතෘ සෛල දෙකක් සෑදේ.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les2Sub14;
