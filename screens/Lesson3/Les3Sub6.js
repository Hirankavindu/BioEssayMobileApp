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

const Les3Sub6 = () => {
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
            ප්‍රොටිස්ටා රාජධානියට අයත් ප්‍රධාන කාණ්ඩවල මූලික ලක්ෂණ , එම එක් එක්
            කාණ්ඩයේ දර්ශීය ජීවියාගේ ලක්ෂණ අනුව විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">Euglena</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            කරදිය හා මිරිදියා වාසීය.{"\n"}
            {"\n"}ඒකසෛලිකය.{"\n"}
            {"\n"}සෛල බිත්තියක් නැත.{"\n"}
            {"\n"}ඡවිකාවක් ඇත.{"\n"}
            {"\n"}මිශ්‍රපෝෂීන්ය .( ප්‍රභා ස්වයංපෝෂී හෝ විෂම පෝෂී වේ){"\n"}
            {"\n"}හරිතලව ඇත.{"\n"}
            {"\n"}කශිකා එකක් හෝ දෙකක් ඇත.{"\n"}
            {"\n"}අක්ෂිලප ඇත.{"\n"}
            {"\n"}සංකෝචක රික්තක ඇත.{"\n"}
            {"\n"}කශිකා එකක් හෝ දෙකක් ගිලී පවතින මඩියක් එක් අන්තයක තිබේ .
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            Paramecium
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            මිරිදිය වාසීය.{"\n"}
            {"\n"}විෂමපෝෂී වේ.{"\n"}
            {"\n"}සෛල බිත්තියක් නැත.එහෙත් ඡවිකාවක් ඇත.{"\n"}
            {"\n"}ඒක සෛලිකය.{"\n"}
            {"\n"}සෛලය මතුපිට පූර්ණව පක්ෂම වලින් වැසී ඇත.{"\n"}
            {"\n"}ඔවුන්ට දෙයාකාරයක න්‍යෂ්ටි ඇත, මහා න්‍යෂ්ටිය හා ක්ෂුද්‍ර
            න්‍යෂ්ටිය.{"\n"}
            {"\n"}සංකෝචක රික්තක සහ ආහාර රික්තක ඇත.{"\n"}
            {"\n"}ආහාර අධිග්‍රහණය සදහා මෞඛ්‍ය ඇලියක් ඇත.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">Amoeba</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ජලය ( මිරිදිය හා කරදිය) විශේෂ නිදලිවාසීය.{"\n"}
            {"\n"}විෂමපෝෂී වේ.{"\n"}
            {"\n"}අනෙක් ආකාර පරපෝෂී වේ.{"\n"}
            {"\n"}සෛල බිත්තියක් නැත. ඒක් සෛලිකය.{"\n"}
            {"\n"}නිෂ්චිත හැඩයක් නැත.{"\n"}
            {"\n"}සංචරණයට හා ආහාර ගනීමට ව්‍යාජපාද සාදයි.{"\n"}
            {"\n"}ආහාර රික්තක සහ සංකෝචක රික්තක ඇත.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">Ulva</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            මහේක්ෂීය ( පියවි ඇසින් නිරීක්ෂණය) වේ.{"\n"}
            {"\n"}කරදිය වාසීය.{"\n"}
            {"\n"}සෛල බිත්ති ඇත.(ප්‍රධාන වශයෙන් සෙලියුලෝස්වලින් සමන්විතය){"\n"}
            {"\n"}
            බහුසෛලික තලස,පත්‍ර වැනි තලසකට සහ මුල් වැනි අවුල් පාසුවකට , විභේදනය
            වී ඇත.{"\n"}
            {"\n"}කොළ පැහැතිය( හරිත ඇල්ගී){"\n"}
            {"\n"}සංචිත ආහාර පිෂ්ටය වේ.{"\n"}
            {"\n"}ප්‍රභාසංස්ලේෂක වර්ණක ක්ලෝරෝෆීල් a ක්ලෝරෝෆීල් b
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">Gelidium</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            කරදිය වාසීය .{"\n"}
            {"\n"}සෛල බිත්ති සහිතයි.(ප්‍රධාන වශයෙන් සලියුලෝස් වලින් සමන්විතය)
            {"\n"}
            {"\n"}
            අවුල්පාසුව සහිත බහුසෛලික තලසකි.{"\n"}
            {"\n"}කොළ පැහැයට හුරු රතු වර්ණය ගනී.(රතු ඇල්ගී){"\n"}
            {"\n"}සංචිත ආහාර ග්ලොරිඩියන් පිෂ්ටය වේ.{"\n"}
            {"\n"}ප්‍රභාසංස්ලේෂක වර්ණක ලෙස ක්ලෝරොෆීල් a සහ ක්ලෝරෝෆීල් d ,
            ෆයිකොබිලි ප්‍රෝටීන
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            Sargassum{" "}
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            කරදිය වාසීය.{"\n"}
            {"\n"}සපේක්ෂව විශාල හා සංකීර්ණයි.{"\n"}
            {"\n"}සෛල බිත්ති සහිතය (සෙලියුලෝස් සහ ඇල්ජනික් අම්ල වලින් සමන්විතය )
            {"\n"}
            {"\n"}බහුසෛලික තලස ශාකාකාරය .{"\n"}
            {"\n"}එය මුල් වැනි අවුල්පාසුවකින් , කදක් වැනි වෘන්තයකින් හා පත්‍ර
            වැනි තලසකින් ද යුක්තය .{"\n"}
            {"\n"}බහුසෛලික වායු පිරුණු බල්බයක හැඩැති උත්ප්ලාවක / ඉපිල්ලා තලසකට
            ආධාරකයක් සපයයි.{"\n"}
            {"\n"}ඔලිව් කොළ පාටින් හෝ දුඹුරු පාටින් යුක්තය .( දුඹුරු ඇල්ගී)
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les3Sub6;
