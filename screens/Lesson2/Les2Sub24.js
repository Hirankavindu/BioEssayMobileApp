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

const Les2Sub24 = () => {
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
            එක් ග්ලූකෝස් අණුවක් ස්වායු ශ්වසනයට ලක්වීමට අදාළව මයිටොකොන්ඩ්‍රියාවක්
            තුළ සිදුවන ප්‍රතික්‍රියා විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-lg font-bold text-left text-gray-800">
            මයිටොකොන්ඩ්‍රියා ඔක්සිහරණය / සම්බන්ධක ප්‍රතික්‍රියාව
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            පයිරුවේට් අණු දෙක පටලය හරහා සක්‍රීය පරිවහනය මගින් මයිටොකොන්ඩ්‍රියා
            තුළට ඇතුළු වේ.{"\n"}
            {"\n"}මයිටොකොන්ඩ්‍රිආ පූරකය තුලදී පයිරුවේට් CO2 අණු දෙකක් පිට කරමින්
            ඇසිටයිල් කාණ්ඩයක් බවට පරිවර්තනය වේ.{"\n"}
            {"\n"}පසුව මෙම ඇසිටයිල් කාණ්ඩය සහඑන්සයිම A - සමග සම්බන්ධ වී ඇසිටයිල්
            Co .A සාදයි.{"\n"}
            {"\n"}මෙහිදී NAD+ අණු දෙකක් NADH අණු දෙකක් බවට පත් වේ.{"\n"}
            {"\n"}
            පයිරුවේට් ඔක්සිකරණය ග්ලයිකොලිසිය හා සිට්‍රික් අම්ල චක්‍රය සම්බන්ධ
            කරන ප්‍රතික්‍රියාවකි.{"\n"}
            {"\n"}ඇසිටයිල් -CO .A එහි ඇසිටයිල් කාණ්ඩය සිට්‍රික් අම්ල චක්‍රයට ලබා
            දෙයි.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-lg font-bold text-left text-gray-800">
            සිට්‍රික් අම්ල චක්‍රය
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            මෙය මයිටොකොන්ඩ්‍රියා පූරකය තුළ විශේෂිත එන්සයිම භාවිතයෙන් සිදු වේ.
            {"\n"}
            {"\n"}මෙම චක්‍රීය මාර්ගයේ ප්‍රධාන ඵලය සිට්‍රික් අම්ලය නිසා මෙය
            සිට්‍රික් අම්ල චක්‍රය ලෙස හදුන්වයි.{"\n"}
            {"\n"}හාන්ස් ක්‍රෙබ්ස් විද්‍යාගදයා විසින් සොයා ගත් මෙය ක්‍රෙබ්ස්
            චක්‍රය ලෙස හදුන්වයි.{"\n"}
            {"\n"}සිට්‍රික් අම්ලය කාබොක්සිලික් කාණ්ඩ තුනකින් යුක්ත නිසා
            ට්‍රයිකාබොක්සිලික් අම්ල චක්‍රය (TCA) ලෙස හදුන්වයි.{"\n"}
            {"\n"}මෙහිදී කාබන් හතරක් සහිත ඔක්සලෝ ඇසිටේට් කාබ්න් දෙකක් සහිත
            ඇසිටයිල් Co.A සමග සම්බන්ධවී කාබන් හයක් සහිත සං‍යෝගයක් වන සිට්‍රික්
            අම්ලය සාදයි.{"\n"}
            {"\n"}සිට්‍රික් අම්ලය එන්සයිම උත්ප්‍රේරිත ප්‍රතික්‍රියා ශ්‍රේණියක්
            ඔස්සේ ගොස් ඔක්සලෝ ඇසිටේට් පුනර්ජනනය වේ.{"\n"}
            {"\n"}මෙහිදී කාබොක්සිල්හරණයෙන් CO2 අණු දෙකක් පිටවේ.{"\n"}
            {"\n"}උපස්ථර පොස්පොරයිලීකරණයෙන් එක් ATP අණුවක් නිපදවයි.{"\n"}
            {"\n"}
            ඔක්සිකරණ ප්‍රතික්‍රියා මගින් එක් FADH2 අණුවක් හා NADH අණු තුනක්
            නිපදවේ.{"\n"}
            {"\n"}මෙය සිට්‍රික් අම්ල චක්‍රයට ඇතුළු වූ එක් ඇසිටයිල් කාණ්ඩයක්
            මගින් ඇතිවන ඵලයකි.{"\n"}
            {"\n"}ඒනිසා එක් ග්ලූකෝස් අණුවක් සදහා මෙම සංඛ්‍යාව දෙගුණ වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-lg font-bold text-left text-gray-800">
            ඉලෙක්ට්‍රෝන පරිවහන දාමය
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            මේ පියවර මයිටොකොන්ඩ්‍රියා ඇතුළු පටලය / මියර හරහා සිදු වේ.{"\n"}
            {"\n"}
            මියර නැමීම හේතුවෙන් ඔක්සිකාරක පොස්පොරයිලීකරණය සදහා පෘටික වර්ගඵලය
            වැඩි වේ.{"\n"}
            {"\n"}ස්වායු ශ්වස්නයේ මුල් අවස්ථාවේදී නිපදවූ NADH හා FADH2 ඉලෙක්‍රෝන
            පරිවහන දාමය ඔස්සේ ඉලෙක්‍රෝන හුවමාරුව හේතුවෙන් ඔක්සිකරණය වේ.{"\n"}
            {"\n"}
            අවසානයේදී මේ ඉලෙක්‍රෝන අණුක ඔක්සිජන් O2 ලබා ගනී.{"\n"}
            {"\n"}ඉලෙක්‍රෝන පරිවහන දාමය මයිටොකොන්ඩ්‍රියා ඇතුළු පටලයේ ස්ථානගතව
            ඇත.{"\n"}
            {"\n"}මෙය මියර හරහා ඉලෙක්‍රෝන හා ප්‍රෝටෝන පරිවහනයට දායක වන ප්‍රෝටීන
            හා ප්‍රෝටීන නොවන අණු ශ්‍රේණියකින් සමන්විත වේ.{"\n"}
            {"\n"}ඒ නිසා ස්වායු ශ්වසනයේ අවසාන ඉලෙක්‍රෝන ප්‍රතිග්‍රාහකයා වන්නේ
            අණුක ඔක්සිජන් වේ (O2) ය.{"\n"}
            {"\n"}ඉලෙක්ට්‍රෝන පරිවහන දාමයේදී ඔක්සිකාරක පොස්පොරයිලීකරණයෙන් ATP
            නිපදවනු ලබයි.{"\n"}
            {"\n"}ඉලෙක්ට්‍රෝන පරිවහන දාමයේදී NADH හා FADH2 වලින් ක්‍රමයෙන්
            නිදහස් වූ ශක්තිය ATP සංස්ලේෂණයට යොදා ගනී.{"\n"}
            {"\n"}මෙහිදී එක් NADH අණුවක් ඔක්සිකාරක පොස්පොරයිලීකරණය මගින්
            ඔක්සිකරණයේදී සාමාන්‍ය වශයෙන් ATP අණු 2.5 ක් ද FADH2 අණුවක් එසේ
            ප්ක්සිකරණයෙන් ATP අණු 1.5 ක් ද නිපදවේ.{"\n"}
            {"\n"}මේ පියවරේදී සම්පූර්නයෙන්ම නිපදවන ලද ATP අණු සංඛ්‍යාව වන්නේ 28
            කි.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub24;
