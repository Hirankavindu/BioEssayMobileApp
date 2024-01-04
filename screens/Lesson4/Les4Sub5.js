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

const Les4Sub5 = () => {
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
            දිවීබීජපත්‍රී ශාක කද ඒ දර්ශීය ව්‍යුහය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            පිටතින්ම අපිචර්මීය සෛල ස්ථරය පිහිටයි.{"\n"}
            {"\n"}එමගින් ඇතුලත කොටස් වියළීමෙන් ආරක්ෂා කරයි.{"\n"}
            {"\n"}ආසාදන වලින් ආරක්ෂා කරයි.{"\n"}
            {"\n"}අපිචර්මයේ තැනින් තැන පූටිකා ලෙස හඳුන්වන කුඩා සිදුරු ඇත.
            {"\n"}
            {"\n"}අපිචර්මයට වහාම ඇතුළතින් බාහිකය පවතී.{"\n"}
            {"\n"}එහි ප්‍රධාන වශයෙන් ම මෘදුස්තර සෛල අඩංගු වෙයි.{"\n"}
            {"\n"}අපිචර්මයට ඇතුළතින් ස්ථුලකෝණාස්තර සෛල පිහිටයි.{"\n"}
            {"\n"}එමගින් සන්ධාරණය සැපයේ.{"\n"}
            {"\n"}බාහිකයේ දෘඩස්තර තන්තු ද පිහිටයි.{"\n"}
            {"\n"}ඒවා මගින් අමතර සන්ධාරණයක් සපයයි.{"\n"}
            {"\n"}සනාල කලාප වලයක් ලෙස පිහිටයි.{"\n"}
            {"\n"}සනාල කලාපයක ප්‍රාථමික ප්ලෝයම බාහිකය දෙසටත්,ප්‍රාථමික ශෛලම
            මජ්ජාව දෙසටත් පිහිටයි.{"\n"}
            {"\n"}ඒ දෙකට මැදිව කැම්බියම් පටකය පිහිටයි.{"\n"}
            {"\n"}සනාල කලාපයට පිටතින් දෘඩස්තර සෛල ගොනුවක් පිහිටයි.{"\n"}
            {"\n"}සනාල කලාප වල ඇතුළතින් විශාල මජ්ජාවක් පිහිටයි.{"\n"}
            {"\n"}එය මෘදුස්තර සෛල වලින් සෑදී ඇත.{"\n"}
            {"\n"}මතුපිට පෘෂ්ඨයේ කක්ෂීය අංකුර පවතියි.{"\n"}
            {"\n"}එමඟින් පපාර්ශ්වික ශාඛා හට ගැනීම සිදුවේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ඒක බීජ පත්‍රී ශාක කදෙහි ව්‍යුහය ඉන් වෙනස් වන්නේ කවර ලක්ෂණ හේතුවෙන්
            ද.?
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            කදෙහි පූරක පටකය බාහිකය හා මජ්ජාව ලෙස විභේදනය වී නැත.{"\n"}
            {"\n"}සනාල පටක පූරක පටකය තුළ විසිරී පවතී.{"\n"}
            {"\n"}සෑම සනාල කලාපයක් ම දෘඩස්තර කොපුවකින් වටවී ඇත.{"\n"}
            {"\n"}සනාල කලාපයක් තුළ ශෛලම හා ප්ලෝයම පටක අඩංගුය.{"\n"}
            {"\n"}නමුත්, ඒ දෙක අතර කැම්බියම් පටකයක් නොපවතී.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub5;
