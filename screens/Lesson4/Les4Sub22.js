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

const Les4Sub22 = () => {
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
            තුලාෂ්ම කල්පිතය (කෙටි සටහන).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            මුලාග්‍ර කොපුවේ පහළම කොටසේ තුලාශ්ම ඒකරාශීවී Ca2+ ප්‍රතිසංවිධානය
            සිදුවී මුල්වල ඔක්සීනවල පාර්ශ්වික පරිවහනය සිදුවේ.{"\n"}
            {"\n"}එහි ප්‍රතිඵල ලෙස මුලේ සෛලදික්වන කලාපයේ යටිපැත්තේ Ca2+ හා
            ඔක්සීන් ඒකරාශී වීම සිදුවේ.{"\n"}
            {"\n"}අධික ඔක්සීන සාන්ද්‍රනය මගින් මුලේ සෛල දික්වීම නිශේධනය කරයි.
            {"\n"}
            {"\n"}
            මෙහි ප්‍රතිඵල ලෙස යටි පැත්තේ සෙමෙන් වර්ධනයක්ද උඩුපැත්තෙ වඩා සීඝ්‍ර
            දිගු වීමක්ද සිදුවේ.{"\n"}
            {"\n"}ඒ අනුව මුල පහලට වර්ධනය වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ශාක යාන්ත්‍රික උත්තේජන වලට ප්‍රතිචාර දැක්වීම (කෙටි සටහන).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සුළඟ අධික පරිසරය වර්ධනය වන ශාකවල කඳන්, සාමාන්‍ය පරිසරයේ වර්ධනය වන එම
            විශේෂයේ ශාක කඳන් වලට වඩා කෙටි හා මහතය.{"\n"}
            {"\n"}මෙමගින් ශාකයට අධික සුළං තත්ත්ව වලට එරෙහිව නැගී සිටිය හැක.
            {"\n"}
            {"\n"}
            මින් යාන්ත්‍රික පීඩාවන් මෙරට ශාක දක්වන සංවේදීතාව විදහා දක්වයි.{"\n"}
            {"\n"}
            යාන්ත්‍රික බාධා නිසා ශාක ආකාර වල ඇතිවන වෙනස්වීම ස්පර්ශරූපජනණයයි.
            {"\n"}
            {"\n"}
            ශාක පරිණාමයේ දී සමහර ශාක විශේෂ ``ස්පර්ශ විද්‍යාඥයන්´´ බවට පත්වේ.
            {"\n"}
            {"\n"}
            ආරෝහක ශාකවල ඇති පහුරු ආධාරක වටා සීඝ්‍රයෙන් දගර ගැසෙමින් එතේ.{"\n"}
            {"\n"}
            සාමාන්‍යයෙන් ආධාරකයක් ස්පර්ශ වන තෙක් පහුරු සෘජුව වර්ධනය වේ.{"\n"}
            {"\n"}
            ස්පර්ශය හේතුවෙන් පහුරේ ප්‍රතිවිරුද්ධ පැතිවල විෂමාකාර වර්ධනයක්
            උත්තේජනය වේ.{"\n"}
            {"\n"}ආධාරකයක් දෙසට පහුරක් දක්වන දිශානත වර්ධනය ස්පර්ශාවර්තනයයි.
            {"\n"}
            {"\n"}
            අනෙක් ස්පර්ශ විද්‍යාඥයන් ස්පර්ශයට ප්‍රතිචාර දක්වන්නේ වේගවත් පත්‍ර
            චලනයකිනි.{"\n"}උදා :- Mimosa pudica ස්පර්ශ කළ විට එහි පත්‍රිකා
            හැකිළේ.{"\n"}
            {"\n"}ස්පර්ශය නිසා උපාධානය නම් විශේෂණය ඌ චාලක අවයවයේ ශුනතාවය ක්ෂණිකව
            නැතිවී නැති වීමෙන් (විශුන වී) පත්‍රිකා හැකිළේ.{"\n"}
            {"\n"}මෙය ස්පර්ශසන්නමනය නම් වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ජෛවය ආතති (කෙටි සටහන).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ශාක පළිබෝධයන් හා ව්‍යාධිජනකයින් ගෙන් ආරක්ෂා වන ආකාරය.{"\n"}
            {"\n"}ශාක ආරක්ෂණ යාන්ත්‍රණවලදී සමහර සංයෝග හා ව්‍යුහ ශාකයේ පවතින අතර,
            {"\n"}
            {"\n"}සමහර ඒවා ආසාදනය වූ පසුව හා පලිබෝධකයන් ගේ ආක්‍රමණ වලට පසුව
            ඇතිවේ. එම නිසා ආරක්ෂකයන් ආරක්ෂක යන්ත්‍රණ වර්ග දෙකකට බෙදිය හැකිය. පෙර
            සිට පැවති යන්ත්‍රණ හා ප්‍රේරිත යන්ත්‍රණ ලෙසය.{"\n"}
            {"\n"}පෙර සිට පැවති ව්‍යුහමහ හා රසායනික ආරක්ෂක යාන්ත්‍රණ.{"\n"}
            {"\n"}
            අපිචර්මීය සෛල ආවරණය කරන ඉටි හා උච්චර්මයේ ප්‍රමාණය හා තත්ත්වය.{"\n"}
            {"\n"}
            අපිචර්මීය සෛල බිත්තිවල ව්‍යුහය හා ඝනකම.{"\n"}
            {"\n"}පූටිකාවල ප්‍රමාණය, ස්ථානය හා හැඩය {"\n"}
            {"\n"}ද්විතීක පරිවෘත්තිජ කාණ්ඩ
            {"\n"}උදා :- නිකොටින්{"\n"}
            {"\n"}පීනෝල් ( ෆ්ලැවනොයිඩ, ලිග්නීන් හා ටැනීන්){"\n"}
            {"\n"}ටර්ෆිනොයිඩ (ඇසිඩිරැක්ටින් හා ලෙක්ටීන්){"\n"}
            {"\n"}කටු, තුණ්ඩ, ට්‍රිකෝම.{"\n"}
            {"\n"}ප්‍රේරිත ව්‍යුහමය හා රසායනික ආරක්ෂක යාන්ත්‍රණ.{"\n"}
            {"\n"}සෛල බිත්තිය රූප විද්‍යාත්මක වෙනස්වීම.{"\n"}
            {"\n"}වල්කය හා ඡේදස්ථරය සෑදීම.{"\n"}
            {"\n"}පිනෝලික සංයෝග{"\n"}
            {"\n"}විෂ සංයෝග{"\n"}
            {"\n"}දිලීර සෛල බිත්ති බිඳහෙලන හෝ කෘමී අවයව වලට හානි කරන එන්සයිම.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub22;
