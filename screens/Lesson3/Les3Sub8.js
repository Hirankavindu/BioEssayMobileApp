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

const Les3Sub8 = () => {
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
            බීජ රහිත සනාල ශාකවල මූලික ලාක්ෂණික ලක්ෂණ විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ශෛලම හා ෆ්ලෝයම ඔස්සේ ද්‍රව්‍ය පරිවහනය .{"\n"}
            {"\n"}ශෛලම හා ෆ්ලෝයම ලෙස සනාල පටක දෙවර්ගයකි.{"\n"}
            {"\n"}ශෛලම , වාහකාභ , තන්තු හා මෘදුස්තර සෛලවලින් සමන්විතය.{"\n"}
            {"\n"}ජලය හා ඛනිජ පරිවහනය සිදුකරයි.{"\n"}
            {"\n"}වාහකාභ හා ශෛලමීය තන්තුවල සෛල බිත්ති ලිග්නීන් යන බහු අවයවිකයෙන්
            ශක්තිමත් වී ඇත.{"\n"}
            {"\n"}මේ පටක , ශාකවලට උසට වැඩීමට අවස්ථාව සලසයි.{"\n"}
            {"\n"}මෙමගින් ප්‍රභාසංස්ලේෂණය සදහා වැඩි ආලෝක ප්‍රමාණයක් ලබා ගැනීමට
            ශාකවලට හැකියාවක් ලැබී ඇත.{"\n"}
            {"\n"}ඊට අමතරව බීජාණු පහසුවෙන් ව්‍යාප්ත කිරීමට ද මෙය දායක වේ.{"\n"}
            {"\n"}
            ෆ්ලෝයම නාළ ලෙස සංවිධානය වූ සෛල දරන පටකයකි.{"\n"}
            {"\n"}මෙමගින් සීනි වර්ග , ඇමයිනෝ අම්ල හා අනෙකුත් කාබනික නිෂ්පාදන
            ශාකයේ විවිධ කොටස් වෙත බෙදා හරියි.
          </Text>
        </View>
        {/* Lesson Note End */}

        <View className="px-3">
          <Text className="py-3 mt-5 text-lg font-bold text-gray-800">
            මුල්වල පරිණාමය
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            මුල් යනු ජලය හා ඛනිජ පසෙන් අවශෝෂණය කරන හා ප්‍රරෝහ පද්ධතිය උසින්
            වර්ධනය වීමට අවස්ථාව සලසමින් ශාක පසට සවිකර තබන අවයවයයි.{"\n"}
            {"\n"}
            බ්‍රයෝෆයිටාවන්හි තිබුණු මූලාභ මුල් මගින් ප්‍රතිස්ථාපනය වී ඇත.{"\n"}
            {"\n"}
            ෆොසිල ලෙස සං‍රක්ෂණය වී ඇති ආදී සනාල ශාක කදන්වල පටක සැකැස්ම වර්ථමාන
            ශාක මුල්වල පටක සැකැස්මට සමාන වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        <View className="px-3">
          <Text className="py-3 mt-5 text-lg font-bold text-gray-800">
            පත්‍රවල පරිණාමය
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ශාකවල ආකාර දෙකක පත්‍ර ඇත.
          </Text>
        </View>
        {/* Lesson Note End */}

        <View className="px-3">
          <Text className="py-3 mt-5 text-lg font-bold text-gray-800">
            ක්ෂ්ද්‍ර පත්‍ර
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            තනි නාරටියක් දරයි. {"\n"}ප්‍රමාණයෙන් කුඩා වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        <View className="px-3">
          <Text className="py-3 mt-5 text-lg font-bold text-gray-800">
            මහා පත්‍ර
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            විශාල , පැතලි පත්‍ර වේ.{"\n"}
            {"\n"}අතු බෙදුණු සනාල පටක සහිත පත්‍ර ( මහා පත්‍ර) කාර්යක්ෂම
            ප්‍රභාසංස්ලේෂණයක් සදහා අවශ්‍ය පෘෂ්ඪීය වර්ගඵලය වැඩිකර දෙයි.{"\n"}
            {"\n"}
            බීජාණු වල හා බීජානුපත්‍ර ප්‍රභේදන {"\n"}
            {"\n"}බීජනුධානි දැරීමට විකරණය වූ පත්‍ර බීජානුපත්‍ර නම් වේ.{"\n"}
            {"\n"}බොහෝ බීජ රහිත සනාල ශාක විශේෂ එක් වර්ගයක බීජණු නිපදවන එක්
            වර්ගයක බීජනුධනිවලින් සමන්විත බැවින් එය සමබීජණුකතාවය ලෙස හදුන්වයි.
            {"\n"}
            {"\n"}සමහර ශාක විශේෂ දෙවර්ගයක බීජාණුධානි , ක්ෂුද්‍ර බීජාණු හා ,මහා
            බීජාණු ලෙස දෙවර්ගයක බීජාණු නිපදවන බැවින් එම තත්ත්වය විෂබීජණුකතාවය
            ලෙස හදුන්වයි.{"\n"}
            {"\n"}සමහර ශාක විශේෂ දෙවර්ගයක බීජාණුධානි , ක්ෂුද්‍ර බීජාණු හා මහා
            බීජාණු ලෙස දෙවර්ගයක බීජාණු නිපදවන බැවින් එම තත්ත්වය විෂමබීජාණුකතාවය
            ලෙස හදුන්වයි.{"\n"}
            {"\n"}මහා බීජාණු ජායා ජන්මාණු ශාකය බවටත් • ක්ෂුද්‍ර බීජාණු පුං
            ජන්මාණු ශාකය බවටත් විකසනය වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            Nephrolepis ජීවන චක්‍රය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ප්‍රමුඛ ශාකය බීජාණු ශාකයයි{"\n"}
            {"\n"}ජන්මාණු ශාකය ක්ෂීණය{"\n"}
            {"\n"}පැවැත්ම කෙටිකාලීනයයි.{"\n"}
            {"\n"}බීජාණු ශාකයත්, ජන්මාණු ශාකයත් යන දෙකම ප්‍රභාසංස්ලේෂණක ස්වාධීන
            ශාක වේ.{"\n"}
            {"\n"}බීජාණු ශාකයේ වඩාත් සංකීර්ණ ව්‍යුහය සංවිධානයක් ඇත.{"\n"}
            {"\n"}බීජාණු ශාක දේහ මුල , කද , පත්‍රවලට විභේදනය වී ඇත.{"\n"}
            {"\n"}වායව කොටස් උච්චර්මයකින් ආවරණය වී ඇත.{"\n"}
            {"\n"}වායව කොටස්වල වායු හුවමාරුව සදහා පූටිකා විකසනය වී ඇත.{"\n"}
            {"\n"}ශෛලම හා ප්ලෝයම යන සනාල පටක දෙවර්ගයම විකසනය වී ඇත.{"\n"}
            {"\n"}ළපටි පත්‍ර කුණ්ඩලාකාර ප්‍රාග් පත්‍රනය දක්වයි.{"\n"}
            {"\n"}කද භූහත රයිසෝමයකි.{"\n"}
            {"\n"}පත්‍ර පත්‍රිකාවලින් සමන්විත සං‍යුත්ක්ත පක්ෂමවත් පත්‍රයකි.
            {"\n"}
            {"\n"}
            රයිසෝමයෙන් පැනනගින ශාඛා වන භූගත භූගත ධාවකවලින් නව පැළෑටි හටගනියි.
            {"\n"}
            {"\n"}
            පරිණත පත්‍රිකාවලින් යටි පැත්තේ සෝරස ලෙස හදුන්වන බීජාණුධානි සමූහ
            ඇතිවේ.{"\n"}
            {"\n"}ඒවා වියළීමෙන් ආරක්ෂා කරගැනීමට කසුව නැමැති ව්‍යුහය පවතී.{"\n"}
            {"\n"}
            බීජාණුධානියක් තුල ඌනන විභාජනයෙන් ඒකගුණ බීජාණු හටගනී.{"\n"}
            {"\n"}ඒවා සමබීජාණුකයි.{"\n"}
            {"\n"}‘සෝරස’ පරිණත වූ විට කසුව වියළී හැකිලීමට ලක් වේ.{"\n"}
            {"\n"}එවිට පරිණත බීජාණුධානි පිටතට විවෘත වෙයි.{"\n"}
            {"\n"}වියළි පරිසර තත්ත්ව යටතේ බීජානුධානිධානිය පුපුරා බීජාණු පිටතට
            නිදහස් වේ.{"\n"}
            {"\n"}ඉන්පසු බීජාණු සුළගෙන් ව්‍යාප්ත වේ.{"\n"}
            {"\n"}උචිත ස්ථානයක බීජාණු පතිත වූ පසු එම බීජාණු ප්‍රරෝහණයයෙන්
            ජන්මාණු ශාකය හට ගනී.{"\n"}
            {"\n"}ජන්මාණු ශාකය කුඩා , හෘදාකාර , පියවි ඇසට පෙනෙන කොළ පැහැති
            ප්‍රභාසංස්ලේෂක තලසකි.{"\n"}
            {"\n"}උදරීය පැත්තේ මූලාභ විකසනය වේ.{"\n"}
            {"\n"}ජන්මාණු ශාකය ඒකගෘහී / ද්වීලිංගික ශාකයකි.{"\n"}
            {"\n"}උදරීය පැත්තේ ශුක්‍රාණුධානි හා අණ්ඩාණුධානි හටගනී.{"\n"}
            {"\n"}
            ශුක්‍රාණුධානි තුළ හටගන්නා කශිකාධර ශුක්‍රාණු බාහිර පරිසරයට නිදහස් වේ.
            {"\n"}
            {"\n"}අණ්ඩානුධානිය තුල හටගන්නා අණ්ඩ සෛලය එහි රැදී පවතී.{"\n"}
            {"\n"}
            ශුක්‍රාණු බාහිර ජලයේ පිහිනයි.{"\n"}
            {"\n"}අණ්ඩානුධානියෙන් නිකුත් වන රසායනික ද්‍රව්‍ය ආකර්ෂණයෙන් එය තුල
            ඇති අණ්ඩ සෛල කරා ගමන් කරයි.{"\n"}
            {"\n"}අණ්ඩානුධානිය තුලදී අණ්ඩය හා ශුක්‍රාණුව එකිනෙක සම්බන්ධ වී
            ද්වීගුණ යුක්තාණුව සාදයි.{"\n"}
            {"\n"}ජන්මාණු ශාකය තුළ රැදී පවතින අතරමදී යුක්තාණුව කළලයක් බවට විකසනය
            වේ.{"\n"}
            {"\n"}කළලයෙන් බීජාණු ශාකය විකසනය වේ.{"\n"}
            {"\n"}ළපටි බීජාණු ශාකය ජන්මාණු ශාකය මත රැදී පවතී.{"\n"}
            {"\n"}සියලු විකසන අවස්ථා සදහා පෝෂණය සපයන්නේ ජන්මාණු ශාකයයි .{"\n"}
            {"\n"}
            ප්‍රභාසංස්ලේෂක පටක විකසනය සිදු වූ පසු ළපටි බීජාණු ශාකය ස්වාධීන
            ශාකයක් බවට පත් වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les3Sub8;
