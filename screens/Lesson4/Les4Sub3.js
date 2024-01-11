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

const Les4Sub3 = () => {
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
            ශාක දේහයක දක්නට ලැබෙන සනාල පටක පද්ධතියේ සංරචක වල ව්‍යුහය, ඒවා මගින්
            ඉටු කරන කෘත්‍යට අදාළව සැකසී ඇති අයුරු විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            ශෛලම පටකය
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ආවෘත බීජක ශාක හා ඇතැම් විවෘත බීජක ශාක වල ඇත.{"\n"}
            {"\n"}ශෛලම වාහිනී ඒකක,වාහකාභ,තන්තු හා මෘදුස්තර සෛල වලින් යුතුය.
            {"\n"}
            {"\n"}ශෛලම වාහිනී ඒකක වාහකාභ ප්‍රධාන වශයෙන් ජලය සන්නයනය කරයි.
            {"\n"}
            {"\n"}කෘත්‍යමය පරිණත අවධියේදීත් අජීවී සෛලය.{"\n"}
            {"\n"}තන්තු සංධාරක ශක්තිය සපයයි.{"\n"}
            {"\n"}මෘදුස්තර සංචිත කෘත්‍යය ද,අරීය ජල පරිවහනය ද කරයි.
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
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            සියලු ආවෘත බීජක ශාක හා සමහර විවෘත බීජක වල වාහිනී ඒකක පවතී.{"\n"}
            {"\n"}
            දිගැටි සිලින්ඩරාකාරය.{"\n"}
            {"\n"}වාහකාභ වලට වඩා කෙටි හා පලල් වන අතර,තුනී බිත්ති දරයි.
            {"\n"}
            {"\n"}ද්විතියික බිත්ති ලිග්නින් වලින් ඝනව ඇත.{"\n"}
            {"\n"}මේ නිසා ආතතියක් යටතේ සිදුවන දළ පරිවහනයේදී සන්ධාරණය සපයමින් බිඳ
            වැටීම වලක්වයි.{"\n"}
            {"\n"}වාහනේ ඒකක එකිනෙක හා බැඳෙන හරස් බිත්ති වල සජිද්‍ර තල පිහිටයි.
            {"\n"}
            {"\n"}සජිද්‍ර තල අගින් එකට පේලියට පිහිටුවමින් ශෛලම වාහිනී සාදයි.
            {"\n"}
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
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            සියලු සනාල ශාකවල දක්නට ලැබේ.{"\n"}
            {"\n"}දිගැටි ,සිහින් , දෙකෙළවර උල් හැඩයක් ගන්නා සෛල වේ.{"\n"}
            {"\n"}
            ද්විතියික සෛල ලිග්නීන් වලින් ඝන ව ඇත.{"\n"}
            {"\n"}ද්විතීක බිත්ති වල කූ පිහිටයි.{"\n"}
            {"\n"}කූ හරහා ජලය සෛලයක සිට සෛලයකට ගමන් කරයි.{"\n"}
            {"\n"}ලිග්නීන් වලින් ඝන ව තිබීම නිසා යාන්ත්‍රික සන්ධාරණය සපයයි.
            {"\n"}
            {"\n"}ආතතියක් යටතේ ජලය ගමන් කිරීමේ දී බිඳ වැටීම වලක්වයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            ප්ලෝයම පටකය
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            ආවෘත බීජක ශාක වල පෙනේර නල ඒකක සහචර සෛල මෘදුස්තර සෛල හා තන්තු වලින්
            යුක්තය.{"\n"}
            {"\n"}තන්තු හැර ප්ලෝයම පටකයේ සියලුම සෛල සජීවී ය.{"\n"}
            {"\n"}බීජ රහිත සනාලශාක වල හා විවෘත බීජක ශාක වල ප්ලෝයමයේ පෙනේර නළ ඒකක
            හා සහචර සෛල නොපිහිටයි.{"\n"}
            {"\n"}ඒ වෙනුවට දිගැටි ,පටු සෛලයක්වන පෙනේර සෛල පිහිටයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            පෙනේර නළ ඒකක
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            න්‍යෂ්ඨිය, රයිබසෝම ,කැපී පෙනන රික්තකයක් හා සෛල සැකිලි කොටස් නැත.
            {"\n"}
            {"\n"}සෛල ප්ලාස්මය පර්යන්ත තුනී ස්ථරයක් බවට ක්ශීණ වී ඇත.{"\n"}
            {"\n"}සෛල ගතකළ ද්‍රව්‍ය නැති නිසා සෛලය තුළින් පෝෂක ද්‍රව්‍ය නිදහසේ
            ගලා යයි.{"\n"}
            {"\n"}පෙනේර නල ඒකක එක මත එක පිහිටීම මගින් පෙනේර නල සාදයි.{"\n"}
            {"\n"}පෙනේර නල ඒකක අතර ,පෙනේර තල පිහිටයි.{"\n"}
            {"\n"}එහි හරස් බිත්ති මත ජිද්‍ර පිහිටයි.{"\n"}
            {"\n"}එක් පෙනේර නල ඒකකයක සිට අනෙක දක්වා ද්‍රව්‍ය ගලා යෑමට එය ඉඩ
            සලස්වයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">සහචර සෛල</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            මේවා තුලින් ද්‍රව්‍ය ගමන් නොකරයි.{"\n"}
            {"\n"}එක් එක් පෙනේර නල ඒකකයට යාබදව පිහිටයි.{"\n"}
            {"\n"}ඒවා සමඟ ප්ලාස්ම බන්ධ විශාල සංඛ්‍යාවකින් සම්බන්ධ වේ.{"\n"}
            {"\n"}සෛලයේ න්‍යෂ්ටිය හා රයිබසෝම පවතී.{"\n"}
            {"\n"}එමගින් යාබද පෙනේර නල ඒකකයේ කෘත්‍යය පාලනයට දායක වේ.{"\n"}
            {"\n"}ශාක පත්‍රයේ ඇති ප්ලෝයමවල අඩංගු සමහර සහචර සෛල සෛල ප්ලෝයම බැර
            කිරීමේ දී දායක වේ.{"\n"}
            {"\n"}සමහර අවයව තුල පිහිටි ඇතැම් සහචර සෛල ප්ලෝයම හර කිරීමට උදව් වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les4Sub3;
