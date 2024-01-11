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

const Les3Sub7 = () => {
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
            Pogonatum ජීවන චක්‍රය විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ජන්මාණු ශාකය ප්‍රමුඛ ශාකයයි.{"\n"}
            {"\n"}බීජාණු ශාකයට වඩා විශාල හා වැඩි කාලයක් ජීවත් වේ.{"\n"}
            {"\n"}ජන්මාණු ශාකය ප්‍රභාසංස්ලේෂකයි.{"\n"}
            {"\n"}“කද “, පත්‍ර හා මූලාභ ජන්මාණු ශාකයේ දක්නට ලැබේ.{"\n"}
            {"\n"}ජන්මාණු ශාකය ද්වීගෘහීය / ඒකලිංගිකය .{"\n"}
            {"\n"}පරිණත වූ විට පුංජන්මාණු ශාකයේ ශුක්‍රාණුධානි හට ගනී.{"\n"}
            {"\n"}ඒවා තුළ ශුක්‍රාණු විශාල ගණනක් නිපදවයි.{"\n"}
            {"\n"}පරිණත ජායා ජන්මාණු ශාකයේ අණ්ඩානුධානි නිපදවයි.{"\n"}
            {"\n"}අණ්ඩානුධානිය තුළ තනි අණ්ඩයක් නිපදවේ.{"\n"}
            {"\n"}එම අණ්ඩය බාහිරයට නිදහස් නොවේ.{"\n"}
            {"\n"}රසායනික ආකර්ශනවලට ප්‍රතිචාරයක් ලෙස කශිකාධර චල ශුක්‍රාණු බාහිර
            ජලයේ පිහිනාවිත් අණ්ඩානුධානිය තුළට ගමන් කර අණ්ඩය සමග එක් වී ද්වීගුණ
            යුක්තාණුව සාදයි .මෙය අණ්ඩානුධානිය තුළ සිදු වේ.{"\n"}
            {"\n"}සංසේචනයට පසුව ද්විගුණ යුක්තාණුව කලලයක් බවට පත් වේ.{"\n"}
            {"\n"}
            අණ්ඩානුධානිය තුළ රැදී තිබෙන මෙම කලලය තවදුරටත් විකසනය වීමේන් ද්වීගුණ
            බීජාණු ශාකය හටගනී.{"\n"}
            {"\n"}එය පෝෂණය ලබාගන්නේ ජන්මාණු ශාකයෙනි.{"\n"}
            {"\n"}බීජාණූ ශාකය ජන්මාණු ශාකයට සම්බන්ධව පවතී.{"\n"}
            {"\n"}බීජාණු ශාකය පාදය , තන්ත්‍රය හා ස්ඵෝටිකාව /(බීජාණුධානිය) යන
            කොටසලින් සමන්විතය.{"\n"}
            {"\n"}පාදය මගින් ජන්මාණු ශාකයෙන් ජලය හා පෝෂක අවශෝෂණය කරයි.{"\n"}
            {"\n"}
            ස්ඵෝටිකාව ඌනනයෙන් රූපාකාරයෙන් සමාන බීජාණු නිපදවයි.(සමබීජණුකතාවය)
            {"\n"}
            {"\n"}
            මෙසේ සෑදෙන බීජාණු විසිරී සුදුසු උපස්තරයක් ( තෙත පස හෝ ශාක පොත්තක්
            වැනි ) මත වැටුණු විට බීජාණු ප්‍රරෝහණය වී කොළ පැහැති ශාඛනය වූ
            සූත්‍රිකාවක් වන ප්‍රාග්තන්ත්‍රය සාදයි.{"\n"}
            {"\n"}මේ ප්‍රාග්තන්ත්‍රයෙන් හටගන්නා අංකුර මගින් ජන්මාණු ශාක සාදයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les3Sub7;
