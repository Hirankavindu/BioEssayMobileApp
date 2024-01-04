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

const Les3Sub16 = () => {
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
              onPress={() => navigation.navigate("Lesson3")}
            >
              <Image source={BackBox2} width={200} height={30} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Back Button End */}
        {/* Lesson name banner start */}
        <View className="h-20 bg-[#6a1b3b] flex-col justify-center">
          <View className="flex-row px-3">
            <View className="w-2 bg-white h-14"></View>
            <View className="flex-col px-2">
              <Text className="flex flex-col justify-center text-lg font-bold text-white">
                පරිණාමය හා ජීවීන්ගේ විවිධත්වය
              </Text>
              <Text className="flex flex-col justify-center mt-1 text-sm font-semibold text-slate-100">
                පාඩම් අංක 03
              </Text>
            </View>
          </View>
        </View>
        {/* Lesson Banner end */}
        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ඇනිමාලියා රාජධානියේ ශ්වසන ව්‍යුහ (කෙටි සටහන්)
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            නිඩාරියා වංශිකයන් ශ්වසන අවයව හෝ ශ්වසන පද්ධතියක් නොමැත.{"\n"}
            {"\n"}බාහිර ජලය හා දේහය අතර ශ්වසන වායු හුවමාරුව විසරණය මගිනි.{"\n"}
            {"\n"}
            ප්ලැටිහෙල්මින්තස් වංශිකයන් ශ්වසන අවයව නොදරයි.{"\n"}
            {"\n"}නෙමටෝඩාවන් ශ්වසන අවයව නොදරයි.{"\n"}
            {"\n"}වායු හුවමාරුව දේහාවරණ හරහා සරල විසරණයෙන් සිදු වේ.{"\n"}
            {"\n"}
            ඇනලීඩාවන්ගේ ගැඩවිලා වැනි සමහර ආකාරවල දේහාවරණය ශ්වසන පෘෂ්ඨය ලෙස
            ක්‍රියාකරයි.{"\n"}
            {"\n"}ජලජවාසී ආකාරවල ශ්වසනය බාහිර ජලක්ලෝම මගිනි.{"\n"}
            {"\n"}ජලජ මොලුස්කාවන්ගේ ප්‍රාවරණ කුහරය තුල පිහිටි ජලක්ලෝම දරයි.
            {"\n"}
            {"\n"}
            භෞමික ආකාරවල ප්‍රාවරණ කුහරය විශේෂණය වී ව්‍යාජ පෙනහළු දරයි.{"\n"}
            {"\n"}මීට අමතරව කංකත නැමැති ව්‍යුහද ශ්වසනයට දායක වේ.{"\n"}
            {"\n"}
            ආත්‍රපෝඩාවන්ගේ ජලජ සතුන් ජලක්ලෝම දරයි.{"\n"}
            {"\n"}මකුළුවන් වැනි ඇරක්නීඩාවන් පත් පෙනහළු දරයි.{"\n"}
            {"\n"}භෞමික ජීවීන් ශ්වාස නාල පද්ධතියක් දරයි.{"\n"}
            {"\n"}එකයිනොඩෙර්මෙටාවන්ගේ ශ්වසන අවයව ලෙස ජලක්ලෝම , පිටිකා හා නාල පාද
            පවතී,{"\n"}
            {"\n"}මුහුදු කැකිරි වැනි සතුන්ගේ ජම්බාලික ශ්වසන රුක් පවතී.{"\n"}
            {"\n"}
            වර්ගය-කොන්ඩ්‍රික්තියේස් පිධානයකින් ආවරණය නොවූ ජලක්ලෝම දරයි.{"\n"}
            {"\n"}
            වර්ගය- ඔස්ටික්තියේස් පිධානටකින් ආවරණය වූ ජලක්ලෝම දරයි.{"\n"}
            {"\n"}වර්ගය - ඇම්ෆිබියා - ශ්වසනය ජල්ක්ලෝම , පෙණහැලි .තෙත සම හෝ මුඛ
            කුහර ආස්තරණය මගින් සිදු වේ.{"\n"}
            {"\n"}වර්ගය - රෙප්ටීලියා පෙනහළු මගින් ශ්වසනය කරයි.{"\n"}
            {"\n"}වර්ගය- ආවේස් පෙනහළු මගින් ශ්වසනය කරයි.{"\n"}
            {"\n"}වර්ගය - මැමේලියා පෙනහැලි මගින් ශ්වනය කරයි.
          </Text>
        </View>

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ආත්‍රපෝඩා වංශය(කෙටි සටහන්)
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            උදා -කෘමීහු / මකුළුවා / ඉස්සා/ කකුළුවා/ ගෝනුස්සා/ කිනිතුල්ලා/
            මයිටාවෝ/ හැකරැල්ලෝ/ පත්තෑයෝ{"\n"}
            {"\n"}වැඩිම ජීවී විශේෂ ගණනක් අයත් වේ.{"\n"}
            {"\n"}පෘථිවිය මත වඩාත්ම සාර්ථක සත්ත්ව කණ්ඩායමයි.{"\n"}
            {"\n"}ජලය /වාතය / පස ආදී සෑම තැනකම ජීවත් වේ.{"\n"}
            {"\n"}ඛණ්ඩනය වූ ශරීරයක් හා සන්ධි සහිත පාද දරයි.{"\n"}
            {"\n"}කයිටිනීමය බහිස් සැකිල්ලකි.(බාහිර සැකිල්ල){"\n"}
            {"\n"}බහිස් සැකිල්ල නිසා අඛණ්ඩව වර්ධනය නොවේ/වරින් වර සැකිල්ල හැලීම
            සිදු වේ.{"\n"}
            {"\n"}ආදී පෘෂ්ඨීය මොලයක් සහිත හොදින් විකසනය වූ ස්නායූ පද්ධතියක් ඇත.
            {"\n"}
            {"\n"}ඛණ්ඩනය වූ ඝන ස්නායු රැහැනක් ඇත.{"\n"}
            {"\n"}එය උදරීයව පිහිටයි.{"\n"}
            {"\n"}විවිධ සංවේදක ඉන්ද්‍රියන් රාශියක් පිහිටයි.{"\n"}
            {"\n"}විවෘත රුධිර සංසරණ පද්ධතියක් සහිතය.{"\n"}
            {"\n"}හෘදය මගින් ශරීර කුහර (රුධිර හෙබ) තුළට රුධිරය පොම්ප කරයි.{"\n"}
            {"\n"}
            රුධිර හෙබ තුළ ඇති රුධිරයෙන් පටක නැහැවේ.{"\n"}
            {"\n"}කේශනාලික නැත.{"\n"}
            {"\n"}ජලජ ජීවීන්ගේ - ජලක්ලෝම{"\n"}
            {"\n"}භෞමික ජීවීන්ගේ - ශ්වසන නාල පද්ධතිය( මේවා කයිටීන සහිත නාලිකා
            වේ){"\n"}
            {"\n"}ඇරක්නීඩාවන්- පත්පෙනහළු මගින් ශ්වසනය කරයි.{"\n"}
            {"\n"}මැල්පිගීය නාලික මගින් යුරුක් අම්ලය බහිස්ස්‍රාවය කරයි.{"\n"}
            {"\n"}
            ප්‍රජනනය -ලිංග වෙන් වෙන්ව පවතී / ඒකලිංගිකය.
          </Text>
        </View>

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les3Sub16;
