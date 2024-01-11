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

const Les2Sub12 = () => {
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
            ඉලෙක්ට්‍රෝන අණ්වීක්ෂයෙන් පෙනෙන අයුරු මයිටොකොන්ඩ්‍රියාවේ සූක්ෂම
            ව්‍යුහය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-5 text-base font-semibold text-justify text-gray-800">
            සූන්‍යෂ්ටික සෛලවල බහුලතම ඉන්ද්‍රිකාවලින් එකකි.{"\n"}
            {"\n"}පටල දෙකකින් වටවූ දිගටි ඉන්ද්‍රිකාවකි.{"\n"}
            {"\n"}පිටත පටලය සිනිදුය.{"\n"}
            {"\n"}ඇතුළත පටලය මියර සෑදීමට නැමී ඇත.{"\n"}
            {"\n"}මියර මගින් පෘෂ්ඨ වර්ගඵලය වැඩි කරයි.{"\n"}
            {"\n"}එහි සවෘන්ත අංශු ඇත.{"\n"}
            {"\n"}මයිටොකොන්ඩ්‍රියමක පිටත හා ඇතුළත පටලය අතර ඇති අවකාශය අන්තර්පටල
            අවකාශය නම් වේ.{"\n"}
            {"\n"}ඉන්ද්‍රිකාවේ ඇතුලතින්ම ඇති කොටස මයිටොකොන්ඩ්‍රියම් පූරකයයි.
            {"\n"}
            {"\n"}
            පූරකය තුළ 70s රයිබොසෝම, චක්‍රීය DNA අණු (මයිටොකොන්ඩ්‍රියම් DNA ),
            පොස්ෆේට් කණිකා, එන්සයිම ඇත.{"\n"}
            {"\n"}ක්‍රෙබ්ස් චක්‍රයට අවශ්‍ය එන්සයිම පූරකය තුළ ඇත.{"\n"}
            {"\n"}ස්වායු ශ්වසනයේ ඉලෙක්ට්‍රෝන පරිව්හන දාමය හා ඔක්සිකාරක
            පොස්ෆොරයිලීකරණයට අත්‍යවශ්‍යය ප්‍රෝටීන හා එන්සයිමවලින් මියර සමන්විතය.
            {"\n"}
            {"\n"}ප්‍රභා ශ්වසනයට දායක වේ. (රූපසටහනක් අදින්න)
          </Text>
        </View>

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            එම ව්‍යුහයෙන් හරිතලවයේ ව්‍යුහය වෙනස්වන අයුරු විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            හරිතලවය ශාකවල හා සම්හර ප්‍රොටිස්ටාවන් තුල හමු වේ.{"\n"}
            {"\n"}එය ද්වීඋත්තල කාචයක හැඩය ගනියි.{"\n"}
            {"\n"}එය පටල දෙකකින් වට වූ ඉන්ද්‍රිකාවකි.{"\n"}
            {"\n"}පිටත සහ ඇතුලත පටල සිනිදුය.{"\n"}
            {"\n"}ඒවා ඉතා පටු අන්තර්පටල අවකාශවලින් වෙන් වී ඇත.{"\n"}
            {"\n"}හරිතලවය තුල වෙනත් පටල පද්ධතියක් ඇත.{"\n"}
            {"\n"}මේ පටල තයිලකොයිඩ ලෙස හදුන්වන අන්තර් සම්බන්ධිත පැතලි මඩි සාදයි.
            {"\n"}
            {"\n"}එම තයිලකොයිඩ ප්‍රභාසංස්ලේෂක වර්ණවලින් සෑදුණු ප්‍රභා පද්ධති ලෙස
            හදුන්වන සංකීර්ණ ඇත.{"\n"}
            {"\n"}තයිලකොයිඩ එක මත එක පිහිටා පංජර කණිකාවක් සාදයි.{"\n"}
            {"\n"}අන්තර් පංජර කණිකා සූස්තර මගින් පංජර කණිකා එකිනෙක සම්බන්ධවී ඇත.
            {"\n"}
            {"\n"}තයිලකොයිඩවලට පිටතින් ඇති තරලය පංජරයයි.{"\n"}
            {"\n"}පංජරය තුල චක්‍රීය DNA ( හරිතලව DNA),70s රයිබොසෝම,බොහෝ
            එන්සයිම,පිෂ්ට කණිකා,ලිපිඩ බිදිති,හරිතලවය මගින් ප්‍රභාසංස්ලේෂණයට දායක
            වේ. (රූපසටහනක් අදින්න)
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les2Sub12;
