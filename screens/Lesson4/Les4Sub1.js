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

const Les4Sub1 = () => {
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
            ශාක කඳෙහි ප්‍රරෝහාග්‍රයේ ව්‍යුහය සහ එහි ප්‍රාථමික වර්ධනය සිදුවන
            ආකාරයත් මුලෙහි ප්‍රාථමික වර්ධනය සිදුවන ආකාරයත් විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ප්‍රරෝහ අග්‍රස්ථය පවතින ප්‍රාථමික විභාජක පටකය ක්‍රියාකාරීත්වය
            හේතුවෙන් ශාක කද දිගින් වැඩි වීම ශාක කඳේ ප්‍රාථමික වර්ධනයයි.
            {"\n"}
            {"\n"}ප්‍රරෝහ අග්‍රස්ථ විභාජක ප්‍රරෝහ අග්‍රස්ථයේ පවතී.{"\n"}
            {"\n"}විභාජනය වෙමින් පවතින බුබුලාකාර හැඩයකින් යුතු සෛල සමූහයකි.
            {"\n"}
            {"\n"}පත්‍ර ,පත්‍ර මූලාකෘති වලින් වර්ධනය වේ.{"\n"}
            {"\n"}පත්‍ර මූලාකෘති අග්‍රස්ත විභාජක දෙපස ඇඟිලි වැනි නෙරුම් පවතී.
            {"\n"}
            {"\n"}ප්‍රරෝහ අග්‍රස්ත විභාජකය පත්‍ර මූලාකෘති වලින් ආවරණය වේ.
            {"\n"}
            {"\n"}ප්‍රරෝහ අග්‍රස්ථ විභාජකය අනූනනයෙන් කඳ දෙසට පමණක් නව සෛල
            නිපදවයි.{"\n"}
            {"\n"}නව සෛල දික් වීම හා ඉන්පසුව සෛල විභේදනය සිදුවෙයි.{"\n"}
            {"\n"}මේ හේතුවෙන් ශාක කඳෙහි ප්‍රාථමික පටක ඇතිවෙයි.{"\n"}
            {"\n"}මේ නිසා ප්‍රාථමික වර්ධනය හේතුවෙන් ශාක කදේ උස වැඩි වෙයි.
            {"\n"}
            {"\n"}මුලෙහි අග්‍රස්ථයේ පිහිටි මුලාග්‍ර විභාජක වල ක්‍රියාකාරිත්වයෙන්
            මුලෙහි දිග වැඩිවීම මුලෙහි ප්‍රාථමික වර්ධනයයි.{"\n"}
            {"\n"}එහිදී ක්‍රියාවලි තුනක් සිදුවේ.{"\n"}
            {"\n"}සෛල විභාජනය- අනූනන විභාජනය හේතුවෙන් සෛල දිගින් වැඩි වැඩිවීම.
            {"\n"}
            {"\n"}සෛල පරිණත වීම මෙහිදී සිදු වේ.{"\n"}
            {"\n"}මුලඅග්‍රස්ත විභාජකයේ සිට මේ ක්‍රියාවලිය තුන සිදුවන ප්‍රදේශ
            එකිනෙකට අතිපිහිතව පවතී.{"\n"}
            {"\n"}සෛල විභාජනය වන ප්‍රදේශයට මූලඅග්‍රස්ත විභාජකය හා එහි වියුත්පන්න
            අයත් වේ.{"\n"}
            {"\n"}මේ විභාජකයන් දෙපසටම නව සෛල නිපදවයි.{"\n"}
            {"\n"}අග්‍රස්ත විභාජකයෙන් පිටතට නිපදවන සෛල විභේදනයන් මුල්ග්‍ර කොපුව
            සාදයි.{"\n"}
            {"\n"}ඉන් මුල පසු තුලින් ගමන් කිරීමේදී ඝර්ෂණය නිසා මූලාග්‍රය
            විභාජකයට විය හැකි හානිය වළක්වයී.{"\n"}
            {"\n"}අග්‍රස්ත විභාජකයෙන් ඇතුලට නිපදවන සෛල දිගුවන කලාපයේ දී දිගු
            වීමට ලක්වේ.{"\n"}
            {"\n"}සමහරවිට මුලේ සෛල ඒවායේ මුල් දිග මෙන් දස ගුණයකටත් වඩා දිගු වේ.
            {"\n"}
            {"\n"}මෙය නිසා මුල පස තුළට තල්ලු වේ.{"\n"}
            {"\n"}පරිණත වන කලාපය තුළ දී සෛල ව්‍යුහයෙන් හා කෘත්‍යෙන් විශේෂණය
            ඇරඹී,විභේදනය සම්පූර්ණ වේ.{"\n"}
            {"\n"}සෛල කෘත්‍යමය වශයෙන් පරිණත වේ.{"\n"}
            {"\n"}ප්‍රාථමික වර්ධනයේදී ප්‍රතිඵලයක් ලෙස මුලේ ප්‍රාථමික ව්‍යුහය
            ඇතිවේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            මුල් අග්‍රස්ථයේ ව්‍යුහය ප්‍රරෝහ අග්‍රස්ථයෙන් වෙනස් වන ලක්ෂණ මොනවාද.?
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            මුලේ අග්‍රස්ථයේ දැකිය හැකි වේ.{"\n"}
            {"\n"}මූලාග්‍ර කොපුවෙන් ආරක්ෂා වෙයි.{"\n"}
            {"\n"}නව සෛල සෑදීම දිශා දෙකටම සිදුවෙයි.
          </Text>
        </View>
        {/* Lesson Note End */}
        
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub1;
