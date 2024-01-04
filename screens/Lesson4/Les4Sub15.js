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

const Les4Sub15 = () => {
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
            ශෛලම පටකයේ ව්‍යුහය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ආවෘත බීජක ශාක හා ඇතැම් විවෘත බීජක ශාකවල ශෛලම වාහිනී ඒකක 4. වාහකාභ
            ,තන්තු හා මෘදුස්තර වලින් සමන්විත වේ.{"\n"}
            {"\n"}ශෛලම වාහිනී ඒකක හා වාහකාභ ප්‍රධාන වශයෙන් ජලය සන්නයනය කරයි.
            {"\n"}
            {"\n"}
            ඒවා කෘත්‍යමය පරිණත අවධියේ දී අජීවී සෛල වේ.{"\n"}
            {"\n"}තන්තු සන්ධාරක ශක්තිය සපයයි.{"\n"}
            {"\n"}මෘදුස්තර සංචිත කෘත්‍යය ද අරීය ජල පරිවහනය ද සිදු කරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            වාහිනී ඒකක
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සියලු ආවෘත බීජක ශාක හා සමහර විවෘත බීජක ශාකවල වාහිනී ඒකක දැකිය හැක.
            {"\n"}
            {"\n"}මේවා දිගටි සිලින්ඩරාකාරය.{"\n"}
            {"\n"}වහකාභ වලට වඩා කෙටි හා පළල්ය.{"\n"}
            {"\n"}තුනේ බිත්ති දරයි.{"\n"}
            {"\n"}ද්විතීක බිත්ති ලිග්නීය වලින් ඝන වී ඇත.{"\n"}
            {"\n"}මේ නිසා ආතතියක් යටතේ සිදුවන ජල පරිවහනයෙදී සන්ධාරණය සපයමින් බිඳ
            වැටීම වලක්වයි.{"\n"}
            {"\n"}වාහිනී ඒකක එකිනෙක හා බැඳෙන හරස් බිත්තවල සජිද්‍ර තල පිහිටයි.
            {"\n"}
            {"\n"}අනෙක් බිත්ති මත කූ පිහිටයි.{"\n"}
            {"\n"}හරස් බිත්ති වල ඇති සජිද්‍ර තල අගින් අග පේලියට පිහිටමින් ශෛලම
            වාහිනී සාදයි.{"\n"}
            {"\n"}සජිද්‍ර තල ඔස්සේ ජලය නිදහසේ ගලා යයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">වාහකාභ</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සියලු සනාල ශාක වල දක්නට ලැබේ.{"\n"}
            {"\n"}දිගැටි, සිහින්, දෙකෙළවර උල් වූ හැඩයක් ගන්නා සෛල වෙයි.{"\n"}
            {"\n"}
            ද්විතීයික බිත්ති ලිග්නීන් වලින් ඝන වී ඇත.{"\n"}
            {"\n"}ද්විතීයික බිත්තිවල කූ පිහිටයි.{"\n"}
            {"\n"}කූ හරහා ජලය එක් සෛලයක සිට අනෙක් සෛලයට ගමන් කරයි.{"\n"}
            {"\n"}ලිග්නීන් වලින් ඝන වී තිබීම නිසා යාන්ත්‍රික සන්ධාරණය සපයයි.
            {"\n"}
            {"\n"}
            ආතතියක් යටතේ ජලය ගමන් කිරීමේදී බිදවැටීම වලක්වයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ශාකයේ ජලය සහ ඛනිජ ලවණ උඩුකුරු සන්නයනය හෙවත් රසෝද්ගමනය සිදුවන
            යාන්ත්‍රණය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සනාල සිලින්ඩරය තුලට ඇතුළු වූ විට ජලය හා ඛනිජ ශාකයේ ඉහළ කොටසට පරිවහනය
            වන අතර මෙය පරිවහන රසෝද්ගමනය ලෙස හඳුන්වයි.{"\n"}
            {"\n"}ශෛලම තුළ ශෛලම යුෂය, ජලය හා ද්‍රාවණය ය වූ ඛනිජ තොග ප්‍රවාහය
            මගින් පරිවහනය වේ.{"\n"}
            {"\n"}එය විසරණයට වඩා සීඝ්‍රයෙන් සිදුවේ.{"\n"}
            {"\n"}රසෝද්ගමනය හා අදාළ ක්‍රියාවලිය පහදාදීමට සංසක්තිය ආතති කල්පිතය
            යෝජනා කර ඇත.{"\n"}
            {"\n"}එම කල්පිතයට අනුව රසෝද්ගමනය ට අවශ්‍ය චූෂණය උත්ස්වේදනය මගින්
            සපයයි.{"\n"}
            {"\n"}ප්‍රරෝහවල සිට මුල් දක්වා ශෛලයේ සම්පූර්ණ දිග ප්‍රමාණය ඔස්සේ
            චූෂණය සම්ප්‍රේෂණය වෙයි.{"\n"}
            {"\n"}ඊට ජල අණුවල සංසක්තිය උපකාරී වේ.{"\n"}
            {"\n"}ශෛලම යුෂය සාමාන්‍යයෙන් ආතතියක් යටතේ පවතී.(සෘණ පීඩනය){"\n"}
            {"\n"}ශෛලම තුලින් ජලය ඉහලට ගමන් කිරීමට සෘණ පීඩනය උදවු වේ.{"\n"}
            {"\n"}ජලය ගමන් කරන්නේ ජල විභව අනුක්‍රමණයට අනුව ය.{"\n"}
            {"\n"}තොග ප්‍රවාහය මගින් ජල පරිවහනය සංසක්තිය හා ආසක්තිය මගින් පහසු
            කරයි.{"\n"}
            {"\n"}ඉහළ ආසක්තිය හේතුවෙන් ජලඅණු ශෛලම බිත්ති තුළ සෙලියුලෝස් අණුවලට
            ආකර්ෂණය වේ.{"\n"}
            {"\n"}ජල අණුවල සංසක්තිය අසාමාන්‍ය ලෙස අධික වන්නේ ජල අණු අතර
            හයිඩ්‍රජන් බන්ධන තිබීම නිසාය.{"\n"}
            {"\n"}ඒ නිසා ශෛලම වාහිනී හා වාහකාභ තුළ අඛණ්ඩ ජල කතක් සෑදෙයි.{"\n"}
            {"\n"}
            උත්ස්වේදනය චූෂණය මුල් දක්වා පහළට විහිදිය හැකි වන්නේ අඛණ්ඩ ජල කඳක්
            ඔස්සේ පමණි.{"\n"}
            {"\n"}පත්‍ර මධ්‍ය සෛලවලින් ජලය වාෂ්ප වේ.{"\n"}
            {"\n"}එවිට ඒවායේ ජල විභවය අඩුවෙයි.{"\n"}
            {"\n"}පත්‍ර වෘන්ත සෛලවල සිට පත්‍රමධ්‍ය සෛල කරා ජලය පැමිණෙයි.{"\n"}
            {"\n"}
            එමගින් වෘන්ත සෛලවල ජලවිභවය අඩුවේ.{"\n"}
            {"\n"}මෙම උත්ස්වේදන චූෂණය හේතුවෙන් ජලය ඉහලට ඇදීමට ලක්වේ.{"\n"}
            {"\n"}ශාක පත්‍රයේ ජලය ඉවත්වීම නිසා පත්‍ර මධ්‍ය සෛලවල සෘණ පීඩනය
            විභවයක් ඇති වේ.{"\n"}
            {"\n"}මේ හේතුව නිසා මුල මුලෙහි සෛලම හා පත්‍ර මධ්‍ය සෛල අතර සෘණ පීඩන
            අනුක්‍රමණයක් හටගනී.{"\n"}
            {"\n"}මෙය මුලෙහි සෛලම වල සිට පත්‍ර මධ්‍ය සෛල දක්වා ශෛලම යුෂ පරිවහනය
            මෙහෙයවයි.{"\n"}
            {"\n"}ශෛලම යුෂයට බලපාන ආතතිබල පත්‍රයේ සිට මුල දක්වා සහ පස තුළට පවා
            සම්ප්‍රේෂණය වේ.{"\n"}
            {"\n"}ශාක දේහය හරහා පාංශු ද්‍රාවණය හා වායුගෝලය අතර, ඇති ජලවිභව
            අනුක්‍රමණය ගුරුත්වයට එරෙහිව රසෝද්ගමනයට උපකාරී වේ.{"\n"}
            {"\n"}ශෛලම usa ඉහල නැගීමට ශාකයේ ශක්තිය වැය නොකෙරේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub15;
