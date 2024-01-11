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

const Les4Sub9 = () => {
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
            මූල පද්ධතිය හා ප්‍රරෝහ පද්ධතිය (කෙටි සටහන්).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            මූල පද්ධතිය මුල් මගින් නිර්මාණය වේ.{"\n"}
            {"\n"}ශාක උපස්තරය ට සවි කරයි.
            {"\n"}
            {"\n"}ජලය හා ඛනිජ අවශෝෂණය කරයි.{"\n"}
            {"\n"}ශාකයක ප්‍රථමයෙන් ඇතිවන අවයව පද්ධතිය වන්නේ ප්‍රාථමික මුලයි.
            {"\n"}
            {"\n"}ද්වි බීජ පත්‍රී ශාක වල ප්‍රාථමික මුල මුදුන් මුලක් බවට පත්වේ.
            {"\n"}
            {"\n"}එය පොළොව තුළට වැඩෙන තනි ප්‍රධාන සිරස් මුලකි.{"\n"}
            {"\n"}මුදුන් මුලෙන් හටගන්නා පාර්ශ්වික මල් මුල් මගින් ජලය හා ඛනිජ
            අවශෝෂණය කරයි.{"\n"}
            {"\n"}ඒකබීජපත්‍රී කුඩා පැලෑටි වල ඇත්තේ තන්තු මූල පද්ධතියකි.
            {"\n"}
            {"\n"}එමගින් පාංශු ඛාදනය වලක්වා ගනියි.{"\n"}
            {"\n"}ප්‍රරෝහ පද්ධතිය පත්‍ර හා කද මගින් නිර්මාණය වේ.{"\n"}
            {"\n"}පත්‍ර වල ප්‍රධාන කාරය ප්‍රභාසංස්ලේෂණයයි.{"\n"}
            {"\n"}බාහිර වායුගෝලය අතට වායු හුවමාරුව ද පවත්වා ගනියි.{"\n"}
            {"\n"}කන්ද මගින් පත්‍ර හා පුෂ්ප ආදී ප්‍රජනක ව්‍යුහ දරා සිටී.
            {"\n"}
            {"\n"}ඇතැම් ශාක කඳන් වෙනත් කෘත්‍යයන් ඉටු කිරීමට හැඩගැසී ඇත.
            {"\n"}
            {"\n"}රයිසෝමය- කහ,ඉඟුරු ධාවක- ගොටුකොළ ස්කන්ධ ආකන්ධ- අර්තාපල්
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            විභාජක පටක වල මූලික ලක්ෂණ (කෙටි සටහන්).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සියල්ල ජීවී සෛල වේ.{"\n"}
            {"\n"}සියල්ල සමවිශ්කම්භිකය.{"\n"}
            {"\n"}ව්‍යුහමය හා කෘත්‍යමය වශයෙන් විභේදනය වී නැත.{"\n"}
            {"\n"}මධ්‍ය නෂ්ටිය කින් යුක්තය.{"\n"}
            {"\n"}ඝන සෛල ප්ලාස්මයක් සහිතය.{"\n"}
            {"\n"}ගුණනය වීමේ හැකියාව දරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            මූලික විබාජක පටක වර්ග (කෙටි සටහන්).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            අග්‍රස්ත විභාජක ශාක මුල් අග්‍රස්ථය මෙන්ම ප්‍රරෝහ අග්‍රස්ථ වල
            පිහිටයි.{"\n"}
            {"\n"}මේවායෙන් නව සෛල එකතු වීම නිසා ශාක කොටස් වල දිග වැඩි වේ.
            {"\n"}
            {"\n"}අග්‍රස්ත විභාජක නිසා සිදුවන මෙම ක්‍රියාවලිය ශාකයක ප්‍රාථමික
            වර්ධනයයි.{"\n"}
            {"\n"}පාර්ශව විභාජක,කාෂ්ඨික ශාකවල දක්නට ලැබෙන සනාල කැම්බියම හා වල්ක
            කැම්බියම පාර්ශව විභාජක වේ.{"\n"}
            {"\n"}මේවා කාෂ්ඨීය ශාක වල ද්විතීක වර්ධනය ට දායක වේ.{"\n"}
            {"\n"}කාෂ්ඨීය ශාක කඳන් හා මුල් වන පරිදිය වැඩි කරයි.{"\n"}
            {"\n"}සනාල කැම්බියම මගින් ශාක දේහයේ ද්විතීක ශෛලම හා ද්විතියික ප්ලෝයම
            නිපදවයි.{"\n"}
            {"\n"}වල්ක කැම්බියම මගින් ශාකය ඝනකම පරිචර්මයක් සාදයි.{"\n"}
            {"\n"}එමගින් apicharmaya ප්‍රතිස්ථාපනය කරයි.{"\n"}
            {"\n"}අන්තරස්ථ විභාජක තෘණ වැනි ඇතැම් එකබීජ පත්‍රී ශාක වල. ශාක කඳන්
            පාදස්ථයේ හා පත්‍ර පාදස්ථයේ විභාජක පටක පවතී.{"\n"}
            {"\n"}ඒවා මගින් කැඩී බිදී යන පත්‍ර කොටස් නැවත ශීඝ්‍ර වර්ධනයට දායක
            වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ප්‍රරෝහ අග්‍රයේ හා මූලාග්‍රයේ වෙනස්කම් (කෙටි සටහන්).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ප්‍රරෝහාග්‍රාස්තය ප්‍රරෝහ අග්‍රස්තවල දක්නට ලැබේ.{"\n"}
            {"\n"}මුලග්‍රස්ථය මුලේ අග්‍රස්ථය දක්නට ලැබේ.{"\n"}
            {"\n"}ප්‍රරෝහ අග්‍රස්ථය පත්‍ර මූලාකෘති වලින් ආරක්ෂා වේ.{"\n"}
            {"\n"}මුල් අග්‍රස්ථය මූලාග්‍ර කොපුවෙන් ආරක්ෂා වේ.{"\n"}
            {"\n"}ප්‍රරෝහ අග්‍රස්ථය නව සෛල සෑදීම එක් දිශාවකට පමණි.{"\n"}
            {"\n"}මුල් අග්‍රස්ථයේ නව සෛල සෑදීම දිශා දෙකටම සිදුවේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            චර්මීය පටක පද්ධතිය (කෙටි සටහන්).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ශාක දේශය කොටස් වල පිටත ආරක්ෂක වැස්ම ලෙස ක්‍රියා කරයි.{"\n"}
            {"\n"}
            apicharmaya -ප්‍රාථමික ශාක දේහයේ කඳ මුල් හා පත්‍ර වැනි කොටස් වලට
            ආරක්ෂාව සපයයි.{"\n"}
            {"\n"}තදින් ඇසිරුණු තනි සෛල ස්තරයක් ලෙස පවතී.{"\n"}
            {"\n"}සාමාන්‍යයෙන් උච්චර්මය නමැති ඉටිවලින් සෑදී අපිචර්මය වැස්මකින්
            වායව කොටස් ආවරණය වේ.{"\n"}
            {"\n"}පාලක සෛල,අපිචර්මීය කේශර හා මූල කේශ වැනි විශේෂිත සෛල සෛලද
            අපිචර්මයේ දක්නට ලැබේ.{"\n"}
            {"\n"}යාන්ත්‍රික හානි වලින් ආරක්ෂා කරයි.{"\n"}
            {"\n"}ව්‍යාධිජනකයින් ගෙන් සිදුවන හානි වලින් ආරක්ෂා කරයි.
            {"\n"}
            {"\n"}උච්චර්මය ජල හානිය වැළැක්වීමට උදව් වේ.{"\n"}
            {"\n"}මූල කේශ ජලය ඛනිජ අයන අවශෝෂණය කරයි.{"\n"}
            {"\n"}පාලක සෛල මගින් වායු හුවමාරුව සිදු කරයි.{"\n"}
            {"\n"}කේසර වැනි ට්‍රිකෝම මගින් ජලය හානි වීම අඩු කරයි.{"\n"}
            {"\n"}දිලිසෙන සුළු රෝම මගින් වැඩිපුර පතිතවන ආලෝකය පරාවර්තනය කරයි.
            {"\n"}
            {"\n"}ඇතැම් අපිචර්මීය කේශර මගින් ශ්‍රාවය වන රසායනික
            කෘමීන්/ව්‍යාධිජනකයන් හා ශාක භක්ෂකයන් ගෙන් ආරක්ෂාවට දායක වේ.
            {"\n"}
            {"\n"}ද්විතියික වර්ධනයෙන් පසු පරිණත ශාක කඳන් මුල් වැනි කොටස් වල
            අපිචර්මය පසු කලෙක පරිචර්මය නැමැති ආරක්ෂක ස්තරයෙන් ප්‍රතිස්ථාපනය වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            අරටුව සහ එලය (කෙටි සටහන්).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            කාෂ්ඨීය ශාක ක්‍රමයෙන් වයස්ගත වීමේ දී මුලින් ඇති වූ පැරණි ද්විතියික
            ශෛලම පටක තවදුරටත් ජලය හා ඛනිජ පරිවහනය සිදු නොකරයි.{"\n"}
            {"\n"}මේ අක්‍රීය ස්තර අරටුව ලෙස හදුන්වයි.{"\n"}
            {"\n"}ඒවා ශාක කඳ හෝ මුල මධ්‍යයට ආසන්න පිහිටයි.{"\n"}
            {"\n"}මෙයට පිටතින් ඇති නව ද්විතීයික ශෛලම පටකය එලය ලෙස හඳුන්වයි.
            {"\n"}
            {"\n"}ඒවා තවදුරටත් ශෛලමය යුශය පරිවහනය කරයි.{"\n"}
            {"\n"}සාමාන්‍යයෙන් අරටුව එලයට වඩා තද පැහැයෙන් යුක්තය.{"\n"}
            {"\n"}ඊට හේතුව අරටුවේ සෛල අවකාශය පුරා ඇති රෙසින් හා අනිකුත් කාබනික
            සංයෝගයි.{"\n"}
            {"\n"}මේ නිසා ශාකයේ හරය දිලීර ආසාදන හා තැන සිදුරු කරන කෘමීන්ගෙන්
            ආරක්ෂා.{"\n"}
            {"\n"}ප්ලෝයම පරිසංක්‍රමනය ට නව ද්විතීක ප්ලෝයම පමණක් දායක වෙයි.
            {"\n"}
            {"\n"}පැරණි ද්විතීයික ප්ලෝයම කැඩී බිඳී යයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            වර්ධක වලයන් (කෙටි සටහන්).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            වර්ෂයක් තුළ දී සාමාන්‍ය වර්ධක කාලවලට වඩා ද්විතීයික ශෛලමයේ ඝනකම හා
            ශෛලම වාහිනී වල කුහර වල විශාලත්වය තෙත් උණුසුම් වර්ධක කාල තුලදි වැඩිය.
            {"\n"}
            {"\n"}මේ වෙනස ශාක කඳක හරස්කඩක ලා පාට හා තද පාට වලයන් මගින් දැකිය
            හැක.{"\n"}
            {"\n"}මේවා වර්ධක වල ලෙස හඳුන්වයි.{"\n"}
            {"\n"}සෞම්‍ය කලාපික ප්‍රදේශ වල වසන්ත කාලය තුළ දී ඇතිවන කාෂ්ඨය වසන්ත
            කාෂ්ඨ්‍ය ලෙස හඳුන්වයි.{"\n"}
            {"\n"}මෙහි සෛලයේ ඇති ශෛලම වාහිනී විශාල කුහර දරයි.{"\n"}
            {"\n"}තුනී බිත්ති සහිත ය.{"\n"}
            {"\n"}මෙමගින් ශාකයේ හටගන්නා නව පත්‍ර වලට උපරිම ජල ප්‍රමාණයක්
            පරිවහනයට දායක වේ.{"\n"}
            {"\n"}ඉතිරි වර්දක සෘතුව පුරා හටගන්නා කාෂ්ඨය ගිම්හාන කාෂ්ඨය ලෙස
            හඳුන්වයි.{"\n"}
            {"\n"}මෙහි ශෛලම වාහිනී කුහර කුඩාවේ.{"\n"}
            {"\n"}බිත්තියේ ඝනකම ඉතා වැඩිය.{"\n"}
            {"\n"}මේවා තුළින් වැඩිපුර ජලය පරිවහනය නොවේ.{"\n"}
            {"\n"}ශාක තුල වැඩිපුර සන්ධාරක ශක්තියක් සපයයි.{"\n"}
            {"\n"}කාෂ්ඨ දෙක එක්ව ගත් කල කළ වාර්ෂික වල යක් ලෙස හඳුන්වයි.{"\n"}
            {"\n"}ශාක කඳක හෝ මුලක වර්ෂයක් පුරා වර්ධනය හරස් කඩ ඇති පැහැදිලි වල
            යක් ලෙස දැකගත හැකිය.{"\n"}
            {"\n"}සෞම්‍ය කලාපික ප්‍රදේශවල වැවෙන ශාකයක වයස ගණනය වාර්ෂික වල ගණනය
            මගින් කළ හැක.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ආලෝක ප්‍රතිග්‍රහණය සඳහා ප්‍රරෝහ නිර්මාණය වී ඇති ආකාරය (කෙටි සටහන්).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ශාක කඳේ දිග හා ශාක අතු බෙදී ඇති ආකාරය මගින්,උපරිම ආලෝක ප්‍රමාණයක්
            ලබාගැනීමට හැඩගැසී ඇත.{"\n"}
            {"\n"}ශාක යාබද ශාක වලින් ලැබෙන සෙවන මගහරවා ගැනීමට උසට වැඩේ.{"\n"}
            {"\n"}
            බොහෝ උස ශාකවලට ශක්තිමත් ,යාන්ත්‍රික සන්දාරයක් සහිත ඝනකම් කඳක් ඇත.
            {"\n"}
            {"\n"}කාෂ්ඨීය ශාකවල උස කඳන් ද්විතීයික වර්ධනය නිසා ශක්තිමත් වේ.
            {"\n"}
            {"\n"}වැල් ඉහළ ආලෝක ප්‍රමාණයක් අධිග්‍රහණය සඳහා අනෙකුත් වස්තු මත
            යැපෙමින් ඉහළ ස්ථර වලට ලඟා වේ.{"\n"}
            {"\n"}විවිධාකාර ලෙස ශාකවල අතු බැදීමේ රටා ඇත.{"\n"}
            {"\n"}සමහර ශාක අතු බෙදී නැති අතර සමහර ඒවා හොඳින් අතු බෙදී ඇත.
            {"\n"}
            {"\n"}විවිධ ශාක අතු බෙදීම් රට නිසා එම තම පාරිසරික නිකේතන වලට උපරිම
            ආලෝක ප්‍රමාණයක් අවශෝශනය කරගැනීමට හැඩගැසී ඇත.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub9;
