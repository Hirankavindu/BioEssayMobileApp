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

const Les4Sub16 = () => {
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
            ප්ලෝයම පටකයේ ව්‍යුහය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ආවෘත බීජක ශාකවල පෙනේර නළ ඒකක,සහචර සෛල,මෘදුස්තර සෛල හා තන්තුවලින්
            යුක්තය.{"\n"}
            {"\n"}තන්තු හැර ප්ලෝයම පටකයේ සියලු සෛල සජීවීය.{"\n"}
            {"\n"}බීජ රහිත සනාල ශාකවල හා විවෘත බීජක ශාකවල ප්ලෝයමයේ පෙනේර නල ඒකක
            හා සහචර සෛල නොපිහිටයි.{"\n"}
            {"\n"}පෙනේර නල ඒකක වෙනුවට ඒ ශාකවල දිගැටි පටු සෛල වර්ගයක් වන පෙනේර
            සෛල පිහිටයි
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            පෙනේර නල ඒකක
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            මේවා තුළ නෂ්ටිය, රයිබසෝම, කැපී පෙනෙන රික්තකයක් හා සෛල සැකිලි කොටස්
            නැත.{"\n"}
            {"\n"}සෛල ප්ලාස්මය පර්යන්තය තුනී ස්තරයක් බවට ක්ෂීණ වී ඇත.{"\n"}
            {"\n"}
            මෙවැනි සෛල ගත ද්‍රව්‍ය නැති නිසා මේ සෛල තුළින් පෝෂක ද්‍රව්‍ය නිදහසේ
            ගලා යාමට ඉඩ සලසයි.{"\n"}
            {"\n"}පෙනේර නල ඒකක එක මත එක පිහිටීම මගින් පෙනේර නල සාදයි.{"\n"}
            {"\n"}පෙනේර නල ඒකක අතර, ඇති හරස් බිත්ති මත ජිද්‍ර සහිත තලයක්
            පිහිටයි.{"\n"}
            {"\n"}එය පෙනේර තලයේ නම් වේ.{"\n"}
            {"\n"}පෙනේර නල ඒකකයක සිට අනෙක දක්වා ද්‍රව්‍ය ගලා යෑමට පෙනේර තල ඉඩ
            සලසයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">සහචර සෛල</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            මේවා තුලින් ද්‍රව්‍ය ගමන් නොකරයි.{"\n"}
            {"\n"}එකෙක් පෙනේර නළ ඒකකයකට යාබදව පිහිටමින්, ඒවා සමග ප්ලාස්ම බන්ධ
            විශාල සංඛ්‍යාවක් මගින් සම්බන්ධ වේ.{"\n"}
            {"\n"}සෛල තුළ පවත්නා නෂ්ටිය හා රයිබොසෝම යාබද පෙනේර නළ ඒකකයේ කෘත්‍ය
            පාලනයට සහභාගී වේ.{"\n"}
            {"\n"}ශාක පත්‍රයේ ඇති ප්ලෝයම වල අඩංගු සමහර සහචර සෛල ප්ලෝයම බැර
            කිරීමේදී දායක වේ.{"\n"}
            {"\n"}සමහර අවයව තුළ පිහිටි ඇතැම් සහචර සෛල ප්ලෝයම හර කිරීම උදව් වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ප්ලෝයම පරිසංක්‍රමණය යාන්ත්‍රණය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සාමාන්‍යයෙන්, අපායනය තමාට ආසන්නතම ප්‍රභවයෙන් සීනි ලබාගනී.{"\n"}
            {"\n"}සෑම පෙනේර නළයක ම සීනි ගලා යන දිශාව, පෙනේර නළය මගින් බැඳුණු
            සීනි ප්‍රභවය හා සීනිඅපායනය පිහිටන ස්ථානය මත රදා පවතී.{"\n"}
            {"\n"}විවිධ ස්ථාන වලින් සම්භවය වූ හා අවසන් වන පෙනේර නළ යාබදව පවතී
            නම් එම යාබද පෙනේර නල දෙකක යුෂය පරිවහනය වීම ප්‍රතිවිරුද්ධ දිශාවට
            සිදුවිය හැකිය.{"\n"}
            {"\n"}පළමු පියවර ලෙස සීනි, පෙනේරනළ ඒකක තුළට පරිවහනය / බැරකිරීම සිදු
            කරයි.{"\n"}
            {"\n"}සමහර විශේෂවල පත්‍ර මධ්‍යසෛල වල සිට පෙනේර නල ඒකකතුළට
            සිම්ප්ලාස්ටය ඔස්සේ ප්ලාස්මබන්ධ හරහා සීනී ඇතුළු වේ.{"\n"}
            {"\n"}බොහෝ ශාකවල සීනි ප්ලෝයම තුළට පරිවහනය සක්‍රිය සිදුවෙයි.{"\n"}
            {"\n"}ඊට හේතුව සීනි පත්‍ර මධ්‍ය සෛලවලට වඩා වැඩි සාන්ද්‍රණයකින් පෙනේර
            නල ඒකකයේ හෝ සහචර සෛලයේ අඩංගු වීමයි.{"\n"}
            {"\n"}සුක්රෝස්, පෙනේර නළය අවසානයේ පිහිටි අපායනයේ දී හර කරයි.{"\n"}
            {"\n"}මේ ක්‍රියාවලිය විශේෂය හෝ අවයවය අනුව වෙනස් වෙයි.{"\n"}
            {"\n"}අපායනයේ නිදහස් සීනි සාන්ද්‍රණය සෑමවිටම පෙනේර නලයේ ඇති
            සාන්ද්‍රණයට වඩා අඩුය.{"\n"}
            {"\n"}මීට හේතුව හර කරනු ලබන සීනි අපායනයේදී සෛලවල වර්ධනය හෝ
            පරිවෘත්තීය සදහා පරිභෝජනය කිරීම හෝ පිෂ්ඨය වැනි අද්‍රාව්‍ය බහුඅවයවක
            බවට පත් කිරීම නිසයි.{"\n"}
            {"\n"}මේ නිසා සාන්ද්‍රණ අනුක්රමණය ඔස්සේ සීනි අණු ප්ලෝයමයේ සිට
            අපායනයට විසරණය වේ.{"\n"}
            {"\n"}ජලය ද ආස්‍රැතියෙන් එලෙස ගමන් කරයි.{"\n"}
            {"\n"}ප්ලෝයමයේ යුෂය ප්‍රභවයේ සිට අපායනයට 1m/hour වේගයෙන් තොග
            ප්‍රවාහයක් ලෙස ධන පීඩනයක් යටතේ ගමන් කරයි.{"\n"}
            {"\n"}මෙය පීඩන ප්‍රවාහය ලෙස හඳුන්වයි.{"\n"}
            {"\n"}ආවෘත බීජක ශාකවල ප්ලෝයම පරිසංක්‍රමණය පීඩන ප්‍රවාහ කල්පිතය මගින්
            පැහැදිලි කරයි.{"\n"}
            {"\n"}පෙනේර නල තුළට සීනි බැරිවීම නිසා ප්‍රභවය අසල පෙනේර නළ ඒකක තුල
            ජල විභවය අඩුවේ.{"\n"}
            {"\n"}මෙය පෙනේර නළ තුළට ශෛලමයේ සිට ආස්‍රැතිය මගින් ජලය ඇතුළුවීමට
            ඇතුළු වීමට හේතු වේ.{"\n"}
            {"\n"}ජලය ඇතුළු වීමෙන් ධන පීඩනයක් ඇතිවේ.{"\n"}
            {"\n"}එමගින් යුෂය පෙනේර නළය ඔස්සේ තල්ලු වී ගලා යයි.{"\n"}
            {"\n"}අපායනයේදි සීනි හරකිරීම(ප්ලෝයම හර කිරීම) හා ඒ සමඟ ජලය
            ප්ලෝයමයේ සිට ශෛලමය වෙත ඉවත්වීම නිසා පීඩනය අඩුවේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub16;
