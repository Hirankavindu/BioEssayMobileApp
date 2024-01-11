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

const Les2Sub7 = () => {
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
            පොකුණු ජලය ස්වල්පයක් ගෙන එහි ක්ෂුද්‍රජීවීන් සිටි දැයි සෙවීම සදහා
            අණ්වීක්ෂය යොදාගත හැකි පරීක්ෂණාත්මක ක්‍රමයක පියවර අනුපිළිවෙලින්
            ලියන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            පොකුණකින් ලබා ගත් ජල සාම්පලයේ ද්‍රාවණයක් ගෙන එයින් බිංදුවක් වීදුරු
            කූරක් හෝ බිංදුකරයක් (ඩ්‍රොපර් එකක්) භාවිතයෙන් ලබාගනීම.{"\n"}
            {"\n"}එම බිංදු පිරිසුදු වියළි කදාවක් මත තැබීම.{"\n"}
            {"\n"}නැන්වුම් කටුවක් ආධාරයෙන් වැසුම් පෙත්තක් නිදර්ශකයට ආනතව ජල
            බිංදුව ස්පර්ශ වන පරිදි තබා වායු බුබුළු නොරැදෙන සේ එම වැසුම් පෙත්ත
            නිදර්ශකය මතට සෙමින් පහත් කරන්න.{"\n"}
            {"\n"}වැසුම් පෙත්ත උඩු අතට සිටින සේ වීදුරු කදාව අණ්වීක්ෂයේ වේදිකාව
            මත තබන්න.{"\n"}
            {"\n"}ප්‍රාචීරය සීරුමාරු කිරීමෙන් ඇතුළුවන ආලෝක ප්‍රමාණය පාලනය කරන්න
            {"\n"}
            {"\n"}.අවබල අවනෙත නියමිත ස්ථානයට යොමු කරන්න.{"\n"}
            {"\n"}වස්තුවේ පැහැදිලි දර්ශනයක් ලැබෙන සේ ප්‍රශස්ත ආලෝක ප්‍රමානයක්
            ලබා ගැනීමට සුදුසු පරිදි දර්පණය සකසන්න.{"\n"}
            {"\n"}වඩාත් පැහැදිලි ප්‍රතිබිම්භයක් ලබා ගැනීමට දළ සීරු මාරුව භාවිතා
            කරන්න.{"\n"}
            {"\n"}නැවතත් මැදිබල අවනෙත වස්තුවට යොමු කිරීම{"\n"}
            {"\n"}සීරුමාරුව සකස් කර පැහැදිලි ප්‍රතිබිම්භය ලබා ගැනීම{"\n"}
            {"\n"}අධිබල අවනෙත වස්තුවට යොමු කිරීම{"\n"}
            {"\n"}සියුම් සීරුමාරුව අධාර කරගෙන නැවතත් ප්‍රතිබිම්භය පැහැදිලි කර
            ගැනීම
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub7;
