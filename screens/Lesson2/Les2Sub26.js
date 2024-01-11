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

const Les2Sub26 = () => {
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
            ග්ලයිකොලිසිය පිලිබඳ කෙටි සටහන්.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            මෙය සෛලයේ සෛටසොලය තුළ සිද්දු වේ.{"\n"}
            {"\n"}එයට හේතු වන්නේ ග්ලයිකොලිසියේ ප්‍රතික්‍රියා උත්ප්‍රේරණය කරන
            සියලු එන්සයිම සෛලයේ සයිටොසොලය තුළ පැවතීමයි.{"\n"}
            {"\n"}මෙය අණුක ඔක්සිජන් ( O2 ) මත නොපවතියි.{"\n"}
            {"\n"}මෙහිදී කාබන් 06 ක් ඇති ග්ලූකෝස් අණුවක් පියවරෙන් පියවර කාබන් 03
            ක් ඇති පයිරුවේට් අණු 02 ක් බවට බිද වැටේ{"\n"}
            {"\n"}ආරම්භක ක්‍රියාවලියේදී ATP අණු 02 ක් භාවිතා වේ{"\n"}
            {"\n"}ග්ලූකෝස් බිද දැමීමේදී පිටවන H+ පරමාණු 04 හා ඉලෙක්ට්‍රෝන මගින්
            {"\n"}
            {"\n"}NAD+ අණු දෙකක් ඔක්සිහරණය කිරීමෙන් NADH අණු 02 ක් නිපදවේ.{"\n"}
            {"\n"}
            ග්ලයිකොලිසිය අවසානයේදී ATP අණු 4 ක් නිපද වේ.{"\n"}
            {"\n"}මූලික පියවරේදී ATP අණු දෙකක් වැය වන නිසා ශුද්ධ ATP ප්‍රමාණය
            ATP අණු දෙකකි.{"\n"}
            {"\n"}O2 ඇතිවිට පමණක් පයිරුවේට් අණු මයිටොකොන්ඩ්‍රියා තුළට ඇතුලු වී
            ඉතිරි පියවර සිදු වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            එතිල් මධ්‍යසාර පැසීම සහ ලැක්ටික් අම්ල පැසීම පිලිබඳ කෙටි සටහන්.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            ස්වායු ශ්වසනයේ ලෙසම එතිල් මධ්‍යසාර පැසීමේද පළමු පියවර
            ග්ලයිකොලිසියයි.{"\n"}
            {"\n"}ඒනිසා එක් ග්ලූකෝස් අණුවක් පයිරුවේට අණු 02 ක් , ATP අණු 02 ක්
            හා NADH අණු 02 ක් බවට පත් වේ.{"\n"}
            {"\n"}ඉන්පසු මේ පයිරුවේට් පියවර 02 ක් හා NADH අණු 02 ක් බවට පත් වේ.
            {"\n"}
            {"\n"}පළමු පියවරේදී පයිරුවේට් ඇසිටැල්ඩිහයිඩ් බවට පත් වේ.{"\n"}
            {"\n"}CO2 අණුවක් නිදහස් වේ.{"\n"}
            {"\n"}දෙවන පියවරේදී ඇසිටැල්ඩිහයිඩ් එතනෝල් බවට ඔක්සිහරණය වේ.{"\n"}
            {"\n"}මේ සදහා ග්ලයිකොලිසියේදී නිපදවූ NADH භාවිතා වේ.{"\n"}
            {"\n"}මෙහි අවසාන හයිඩ්‍රජන් ප්‍රතිග්‍රාහකයා ඇසිටැල්ඩිහයිඩ් ( කාබනික
            සං‍යෝගයකි){"\n"}
            {"\n"}බොහෝ බැක්ටීරියා එතනෝල් පැසීම සිදු කරයි.{"\n"}
            {"\n"}ඉතා සුලබ එතිල් මධ්‍යසාර පැසීම සිදුකරන ජීවියා වන්නේ යීස්ටය.
            {"\n"}
            {"\n"}
            එතිල් මධ්‍යසාර පැසීමේ දී ලෙසම ලැක්ටික් අම්ල පැසීමේදීද ග්ලයිකොලිසිය
            පළමු පියවර ලෙස සිදු වේ.{"\n"}
            {"\n"}ඒනිසා එක් ග්ලූකෝස් අණුවකින් පයිරුවේට් අණු 02 ක් ATP අණු 02 ක්
            හා NADH අණු 02 ක් නිපද වේ.{"\n"}
            {"\n"}පසුව පයිරුවේට් සෘජුවම අන්තඵලය වන ලැක්ටික් අම්ලය බවට NADH මගින්
            ඔක්සිහරණය වේ.{"\n"}
            {"\n"}මෙහිදී CO2 නිදහස් නොවේ.{"\n"}
            {"\n"}අවසාන H ප්‍රතිග්‍රාහකයා වන්නේ පයිරුවේට්ය.{"\n"}
            {"\n"}සමහර දිලීර හා බැක්ටීරියා ලැක්ටික් අම්ල පැසීම සිදු කරයි .{"\n"}
            {"\n"}
            එහෙත් සුලබ වන්නේ යෝගට් හා මුදවපු කිරි නිපදවන ලැක්ටික් අම්ල
            බැක්ටීරියා ය.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            සෛලීය ශ්වසනයේදී වෙනත් උපස්තර භාවිතය පිලිබඳ කෙටි සටහන්.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            ආහාර ජීරණ පද්ධතිය තුලදී පිෂ්ඨය ග්ලූකෝස් බවට පත් කෙරේ.{"\n"}
            {"\n"}එන ග්ලූකෝස් ශ්වනය සදහා යොදා ගනියි.{"\n"}
            {"\n"}ග්ලයිකොජන් හෙවත් සත්ත්ව සෛල වල ප්‍රධාන සංචිත ආහාරය අවශ්‍ය
            අවස්ථා වලදී ජල විච්ඡේදනයට ලක් කල ග්ලූකෝස් බවට ලක් කිරීමෙන් ශ්වසනය
            සදහා යොදා ගත හැකිය.{"\n"}
            {"\n"}ඩයිසැකරයිඩ ආහාර ජීර්ණ පද්ධතිය තුලදීම මොනොසැකරයිඩ බවට බිද වැටී
            දේහයට අවශෝෂණය වේ.{"\n"}
            {"\n"}ඒවා පසුව ශ්වසනය සදහා යොදාගත හැක.{"\n"}
            {"\n"}ප්‍රෝටීනමය ආහාර ඇමයිනෝ අම්ල බවට බිදහෙලා දේහයට අවශෝෂණය කරනු
            ලැබේ.{"\n"}
            {"\n"}එසේ අවශෝෂණය කරනු ලබන ඇමයිනෝ අම්ල භාවිතයෙන් දේහයට අවශ්‍ය
            ප්‍රෝටීන සංස්ලේෂණය කරනු ලබයි.{"\n"}
            {"\n"}නමුත් අතිරික්තව පවතින ඇමයිනෝ අම්ල එන්සයිමීය ප්‍රතික්‍රියා
            මගින් ග්ලයිකොලිසියේ හා සිට්‍රික් අම්ල චක්‍රයේ අතරමැදි ඵල බවට පත්කර
            ශ්වසනයට ලක්කල හැක.{"\n"}
            {"\n"}මෙහිදී ප්‍රථමයෙන්ම ඇමයිනෝ අම්ලයේ ඇමයිනෝ කාණ්ඩය (NH2) බවත් කළ
            යුතුය.{"\n"}
            {"\n"}මෙම ක්‍රියාව ඇමයින්හරණය නම් වේ.මෙහිදී ඉවත්වන නයිට්‍රජනීය කොටස්
            ඇමයිනෝ , යූරියා හෝ වෙනත් බහිස්‍රාවී ඵලයක් ලෙස දේහයට බැහැර කෙරේ.
            {"\n"}
            {"\n"}මේදය ඇතුළු ලිපිඩ මගින් ශක්තිය ලබා ගැනීමේදී ඒවා ග්ලිසරෝල් සහ
            මේද අම්ල බවට බිදහෙලනු ලබයි.{"\n"}
            {"\n"}මෙසේ සෑදෙන ග්ලිසරෝල් Glyceraldyhe – 3 – phosphate හෙවත් G3P /
            PGAL නැමැති ග්ලයිකොලිසියේ අතරමැදි ඵලය බවට පත්කර ශ්වසන ක්‍රියාවලියට
            එක් කෙරේ.{"\n"}
            {"\n"}මේදය තුල ගබඩා වී ඇති මුළු ශක්තියෙන් බහුතරය එහි මේද අම්ල තුල
            ගබඩා වී ඇත.{"\n"}
            {"\n"}බීටා ඔක්සිකරණය ( Beta oxidation) නැමැති ක්‍රියාවලිය මගින් මෙම
            මේද අම්ල කාබන් පරමාණු 02 ක් සහිත කොටස් වලට බිදහෙලනු ලැබේ.{"\n"}
            {"\n"}පසුව එම කොටස් Acetyl Co .A බවට පත්වී ශ්වසන ප්‍රතික්‍රියා වලට
            එකතු කෙරේ{"\n"}
            {"\n"}මෙම බීටා ඔක්සිකරණයේදී NADH සහ FADH2 නිපදවීම ද සිදුවන අතර ඒවා
            භාවිතයෙන් පසුව ඔක්සිකාරක පොස්පොරයිලීකරණයෙන් ATP නිපදවිය හැකි වේ.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub26;
