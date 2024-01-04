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

const Les2Sub25 = () => {
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
            ප්‍රභාසංස්ලේෂක වර්ණක පිලිබඳ කෙටි සටහන්
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            ප්‍රභාසංස්ලේෂී වර්ණක දෘශ්‍ය ආලෝකය අවශෝෂණය කරන ද්‍රව්‍ය වේ.{"\n"}
            {"\n"}ශාක පත්‍රයක් කොළ පැහැයෙන් දිස්වන්නේ ක්ලෝරීෆීල් මගින් දම් ,
            නිල් , රතු වර්ණ අවශෝෂණය කර පරාවර්තනය කරන නිසාය.{"\n"}
            {"\n"}කොළ වර්ණය සම්ප්‍රේෂණය කර පරාවර්තනය කරන නිසා ය.{"\n"}
            {"\n"}විවිධ වර්ණක මගින් විවිධ තරංග ආයාමයෙන් යුතු ආලෝකය අවශෝෂණය කරයි.
            {"\n"}
            {"\n"}හරිතලව තුළ වර්ණක වර්ග දෙකක් අඩංගු වේ. ඒවා නම්{"\n"}ක්ලෝරෝෆීල්
            {"\n"}
            කැරටිනොයිඩ යි.{"\n"}
            {"\n"}ක්ලෝරෝෆීල් a ආලෝකය ග්‍රහණය කරන ප්‍රධාන වර්ණකය වන අතර එය සෘජුවම
            ප්‍රභාසංස්ලේෂණයේ ආලෝක ප්‍රතික්‍රියාවට දායක වේ.{"\n"}
            {"\n"}ක්‍රියා වර්ණාවලියට අනුව ක්ලෝරෝෆීල් a නිල් සහ රතු ආලෝකය සදහා
            වඩාත් ඵලදායි වේ .{"\n"}
            {"\n"}ක්ලෝරෝෆීල් b සහ කැරොටිනොයිඩ ( කැරොටීන් සහ සැන්තොෆීල්) වෙනත්
            වර්ණක සදහා අදාළ විශේෂිත පරාසයක ඇති තරංග ආයාම අවශෝෂණයේදී ඵලදායී වේ.
            {"\n"}
            {"\n"}සම්හර කැරොටිනොයිඩවල අනෙකුත් වැදගත් කෘත්‍ය ප්‍රභා ආරක්ෂනයයි.
            {"\n"}
            {"\n"}
            ප්‍රභාආරක්ෂණය යනු අමතර අධික ආලෝක ශක්තිය අවශෝෂණය හා විසිරුවා හැරීමයි.
            {"\n"}
            {"\n"}එසේ නොවුනහොත් අමතර අධික ආලෝකය ක්ලෝරෝෆීල්වලට හානි කරයි.{"\n"}
            {"\n"}
            නැතිනම් එම ආලෝකය ඔක්සිජන් සමග අන්තර්ක්‍රියා කර සෛලයට හානිකර
            ප්‍රතික්‍රියාකාරී ඔක්සිකාරක අණු සාදයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            C4 පථය හා C3 පථය අතර ඇති වෙනස්කම් පිළිබඳ කෙටි සටහන්.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            තිරිගු , වී හා බාර්ලී C3 ශාක සදහා නිදසුන්ය.{"\n"}
            {"\n"}බඩඉරිගු , උක් හා තෘණ C4 ශාක සදහා නිදසුන්ය.{"\n"}
            {"\n"}C3 ශාකවල එක් වරක් පමණක් CO2 තිරකරයි.{"\n"}
            {"\n"}C4 ශාකවල දෙවරක් CO2 තිරකරන අතර පළමුව පත්‍ර මධ්‍ය සෛල තුළදී ද
            දෙවනුව කලාප කොපු සෛල තුළදී ද එය සිදු වේ.{"\n"}
            {"\n"}C3 ශාකවල CO2 ප්‍රතිග්‍රාහකයා 5C සං‍යෝගයක් වන RUBP මගින්ද C4
            ශාකවල පත්‍ර මධ්‍ය සෛල තුළදී 3C සං‍යෝගයක් වන PEP මගින්ද කලාප කොපු සෛල
            වලදී 5C සං‍යෝගයක් වන RUBP මගින්ද එය සිදු වේ.{"\n"}
            {"\n"}C3 ශාකවල රුබිස්කෝ එන්සයිමය CO2 තිරකිරීමට දායක වේ.{"\n"}
            {"\n"}C4 ශාකවල PEP කාබොක්සිලේස් පත්‍ර මධ්‍ය සෛලතුළදී ඉතා කාර්යක්ෂමව
            CO2 තිරකරන අතර,රුබිස්කෝ එන්සයිමය කලාප කොපු සෛල තුළ වැඩි CO2
            සාන්ද්‍රණයකදී උපරිම කාර්යක්ෂමතාවයකින් යුතුව ක්‍රියා කරයි.{"\n"}
            {"\n"}C3 ශාකවල CO2 තිරකිරීමේ ප්‍රථම ඵලය 3C සං‍යෝගයක් වන 3
            පොස්ෆොග්ලිසරේට් ( 3 -PGA) වන අතර C4 ශාකවල එය 4C සං‍යෝගයක් වන ඔක්සලෝ
            ඇසිටේට් ( OAA) වේ.{"\n"}
            {"\n"}C3 ශාකවල කලාප කොපු සෛල තිබුණද ප්‍රභාසංස්ලේෂණය සිදු නොවේ.(කොළ
            පැහැති නොවේ).{"\n"}
            {"\n"}ප්‍රභාසංස්ලේෂණය පත්‍ර මධ්‍ය සෛලවල සිදු වේ.{"\n"}
            {"\n"}C4 ශාකවල ක්‍රාන්ස් ව්‍යුහය පවතින නිසා පත්‍ර මධ්‍ය සෛල තුළත්,
            කලාප කොපු සෛල තුලත් ප්‍රභාසංස්ලේෂණය සිදු වේ.{"\n"}
            {"\n"}C3 ශාකවල ඵලදාව සාමාන්‍යයෙන් අඩුය.{"\n"}
            {"\n"}C4 ශාකවල ඵලදාව සාමාන්‍යයෙන් ඉහළය.
          </Text>
        </View>
        {/* Lesson Note End */}

        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ප්‍රභාසංස්ලේෂණයට බලපාන සාධක පිලිබඳ කෙටි සටහන්
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            බෝග නිෂ්පාදනය සදහා ප්‍රභාසංස්ලේෂණය සීඝ්‍රතාව ඉතා වැදගත් වේ.
            ශීඝ්‍රතාව කරුණු කිහිපයක් මත රදා පවතී.{"\n"}
            {"\n"}ආලෝක තීව්‍රතාවය CO2 සාන්ද්‍රණය ,උෂ්ණත්වය,ජලය,දූෂක, නිෂේධක ඒ
            කෙරෙහි බලපායි.{"\n"}
            {"\n"}ප්‍රභාසංස්ලේෂණය ප්‍රතික්‍රියා ශ්‍රේණියකින් යුක්ත වේ.{"\n"}
            {"\n"}එම නිසා විවිධ සාධක දායක වේ.{"\n"}
            {"\n"}විද්‍යාගදයෙකු වන බ්ලැක්මාන් විසින් සීමාකාරී සාධක මූලධර්මය
            පිළිබද අදහස මුල් වරට ඉදිරිපත් කරන ලදි.{"\n"}
            {"\n"}එකම රසායනික ප්‍රතික්‍රියාවක් කෙරෙහි සාධක එකකට වඩා බලපාන විට
            කිසියම් අවස්ථවකදී ක්‍රියාවලියේ සීඝ්‍රතාව තීරණය වන්නෙ එම අවස්ථාවේදී
            අවම මට්ටමින් ලැබෙන සාධකය මතය .{"\n"}
            {"\n"}ආලෝක තීව්‍රතාවය ක්‍රමයෙන් වැඩි කිරීමෙන් ප්‍රභාසංස්ලේෂණ
            සීඝ්‍රතාවය වැඩි කළ හැකිය.{"\n"}
            {"\n"}එහෙත් යම් අවස්ථාවකදී වෙනත් සාධකයක් සීමාකාරී වන නිසා
            ප්‍රභාසංස්ලේෂණ සීඝ්‍රතාවය අඩු වේ.{"\n"}
            {"\n"}අධික ආලෝක තීව්‍ර්තාව යටතේ හරිතප්‍රද විරංජනයට ලක් වීමට ඉඩ ඇති
            නිසා ප්‍රභාසංස්ලේෂක සීඝ්‍රතාවය අඩු වේ.{"\n"}
            {"\n"}කෙසේ වුවද අධික ආලෝක තීව්‍රතාවලදී ආරක්ෂා වීමට එවැනි ශාකවල ඝන
            උච්චර්ම අපිචර්මීය කේෂර සහිත පත්‍ර වැනි විවිධ උපාංග ඇත.{"\n"}
            {"\n"}සාමාන්‍ය තත්ව යටතේ , CO2 ප්‍රභාසංස්ලේෂණ ක්‍රියාවලිය සදහා
            ප්‍රධාන සීමාකාරී සාධකයක් වේ.{"\n"}
            {"\n"}CO2 සාන්ද්‍රණය ඉහළ යන විට ප්‍රභාසංස්ලේෂණ සීඝ්‍රතාවයද ඉහළ යනු
            ඇත.{"\n"}
            {"\n"}CO2 සාන්ද්‍රණය වැඩි හරිත ගෘහ තුළ තක්කාලි ශාක වගා කිරීමේදී
            ඇතැම් විට මෙය සිදු වේ.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub25;
