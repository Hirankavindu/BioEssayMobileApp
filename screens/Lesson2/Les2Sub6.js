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

const Les2Sub6 = () => {
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
            සං‍යුක්ත ආලෝක අන්වීක්ෂයේ ව්‍යුහය එහි එක් එක් කොටස මගින් ඉටුකරන
            කෘත්‍යයට අදාළව විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            දර්පණය/ප්‍රභවය :{"\n"}
            ආලෝක කිරණ නිදර්ශකය වෙත යොමු කරයි{"\n"}
            {"\n"}සංඝනීකාරක කාචය /කන්ඩෙන්සරය :{"\n"}
            ආලෝක කිරණ ඒකාකාරී කදම්භයක් ලෙස නිදර්ශකයට යොමු කරයි{"\n"}
            {"\n"}සංඝනීකාරක ප්‍රාචීරය :{"\n"}
            නිදර්ශකය වෙත ගමන්කරන ආලෝකය පාලනය කරයි{"\n"}
            {"\n"}වේදිකාව :{"\n"}
            වීදුරු කදාව රදවා ගනියි{"\n"}
            {"\n"}වේදිකා ක්ලිප :{"\n"}
            වීදුරු කදාව වේදිකාවට සවිකර තබා ගනියි{"\n"}
            {"\n"}අවනෙත :{"\n"}
            නිදර්සකයේ විශාලනය මුලින්ම වැඩිකරන්නේ අවනෙත මගිනි.මෙය උත්තල
            කාචයකි.අවබල , මැදිබල ,අධිබලය ලෙස අවනෙත වෙනස් කළ හැකි කාච තුනකින්
            සමන්විතය{"\n"}
            {"\n"}උපනෙත :{"\n"}
            නිදර්ශකය දෙවනුව විශාල වන්නේ උපනෙත මගිනි{"\n"}
            {"\n"}සියුම් සීරුමාරුව හා රළු සීරුමාරුව -සීරුමාරු වර්ග දෙකකි.
            නිදර්ශකය හා අවනෙත කාචය අතර දුර වෙනස් කරමින් ප්‍රතිබිම්භය වඩාත්
            පැහැදිලි කිරීම සදහා භාවිතා කරයි
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub6;
