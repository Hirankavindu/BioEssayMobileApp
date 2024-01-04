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

const Les4Sub12 = () => {
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
            ශාක දේහ තුළ ද්‍රව්‍ය පරිවහනයේ අවශ්‍යතාවය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            භෞමික ශාක පරිණාමයත්,ශාක සංඛ්‍යාව වැඩි වීමත් සමග ආලෝකය, ජලය හා පෝෂක
            සඳහා වන තරගය ද වැඩි විය.{"\n"}
            {"\n"}මෙහි ප්‍රතිඵලයක් ලෙස ශාක දේහයේ ප්‍රමාණය හා සංකීර්ණ භාවය වැඩි
            විය.{"\n"}
            {"\n"}ශාකය තුළ ජලය හා ඛනිජ පරිවහනයට තිබූ සරල පරිවහන ක්‍රම ප්‍රමාණවත්
            නොවීය.{"\n"}
            {"\n"}ශෛලම හා ප්ලෝයම සහිත සනාල පටක පරිණාමය ශාක දේහය තුළ ද්‍රව්‍ය
            දිගුදුර පරිවහනයට ආධාර විය.{"\n"}
            {"\n"}උදාහරණ- ශෛලම මගින් ජලය හා ඛනිජ මුල් වල සිට ප්‍රරෝහය දක්වා
            පරිවහනය.{"\n"}
            {"\n"}ප්ලෝයම මගින් ප්‍රභාසංස්ලේෂණයේ ඵල ඒවා නිපදවන හෝ සංචිත ස්ථානයේ
            සිට ඒවා අවශ්‍ය ස්ථානය දක්වා පරිවහනය.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ශාක දේහ තුළින් ද්‍රව්‍ය පරිවහනය සිදුවන ප්‍රධාන ක්‍රම සංසන්දනය කරමින්
            විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ශාක ද්‍රව්‍ය පරිවහනයට සක්‍රීය මෙන්ම අක්‍රීය පරිවහන ක්‍රම භාවිතා
            කරයි.{"\n"}
            {"\n"}සක්‍රීය පරිවහනය: සමහර ද්‍රව්‍ය පටල හරහා පරිවහනය ATP භාවිතයෙන්
            සිදුකරයි.{"\n"}
            {"\n"}අක්‍රිය පරිවහනය: පරිවෘත්තීය ශක්තිය අවශ්‍ය නොවේ. ස්වයංසිද්ධව
            සිදුවේ.{"\n"}
            {"\n"}විසරණය: අණු නිරතුරුවම චලනය වෙමින් පවතී.මේ නිසා අනණුවලට තාප
            ශක්තිය නම් ශක්තියක් පවතී.මේ චලනයේ ප්‍රතිඵලයක් ලෙස අනුව විසරණය
            සිදුවේ.වෙනත් කිසිදු බාහිර බලයක් භාවිතා නොකරමින්, ද්‍රව්‍ය අණුවල
            සිදුවන අහඹු ජනනය හේතුවෙනි,එහි සාන්ද්‍රනය වැඩි ස්ථානයක සිට සාන්ද්‍රනය
            අඩු ස්ථානයක් හරහා අනුචලනය වීම විසරණයයි. අනු අහඹු ලෙස චලනය වුවද
            විසරණය මගින් අනු සමූහයක චලනය දිශානතියක් ඇතිව සිදු වේ.විසරණය
            ස්වයංසිද්ධව, පරිවෘත්තිය ශක්තිය භාවිත නොකරමින් සාන්ද්‍රණ අනුක්‍රමණයක්
            ඔස්සේ සිදුවේ.විසරණය පටල හරහා ද සිදුවිය හැක.එසේ වන්නේ ගමන්කරන අණු
            සඳහා එම පටලය පාරගම්‍ය වන්නේ නම් පමණි.{"\n"}උදාහරණ -ජලය හා ජල
            ද්‍රාව්‍ය සංයෝග cellulose සෛල බිත්ති හරහා විසරණය.ඔක්සිජන් හා
            කාබන්ඩයොක්සයිඩ් ප්ලාස්ම පටලය හරහා විසරණය.{"\n"}
            {"\n"}ආසෘතිය: ආස්‍රතිය විශේෂ විසරණ ක්‍රමයකි.වරණීය පාරගම්‍ය පටලයක්
            හරහා නිදහස් ජල අණු විසරණය වීම ආස්‍රැතියයි.නිදහස් ජල අණු යනු ද්‍රව්‍ය
            අනුවලට හෝ පෘෂ්ඨවලට බැඳී නැති ජල අණුය.{"\n"}
            {"\n"}නිපානය: ජලකාමී ද්‍රව්‍ය මඟින් ජල අණු භෞතිකව අධිශෝෂණය කර
            ගැනීමයි.{"\n"}
            උදාහරණ -ජල අණු සෙලියුලෝස් සෛල බිත්ති මගින් අධිශෝෂණය.{"\n"}
            {"\n"}පහසු කල විසරණය: ජලය හා ජලකාමී ද්‍රව්‍ය පටලයක් හරහා ඇති පරිවාරක
            ප්‍රයෝජන අනුව ආධාරයෙන්,අක්රීයව පටලය හරහා ගමන් කිරීම පහසුකල
            විසරණයයි.එම පරිවාරක ප්‍රෝටීන ඉතා විශේෂයි.ඒවා මගින් ඇතැම් ද්‍රව්‍ය
            පරිවහනය කරනු ලබන අතර ඇතැම් ද්‍රව්‍ය පරිවහනය නොකරයි. මෙහිදී සිදුවන
            පරිවහනය සාන්ද්‍රණ අනුක්‍රමණය ඔස්සේ සිදු වෙයි. මෙය අක්‍රීය පරිවහනයකි.
            {"\n"}
            {"\n"}තොග ප්‍රවාහය: පීඩන අනුක්‍රමණයක් ඔස්සේ ද්‍රව හා
            ද්‍රව්‍ය අංශුද සමඟ ගමන් කිරීම තොග ප්‍රවාහයයි.සැමවිටම පීඩනය වැඩි
            ස්ථානයක සිට පීඩනය අඩු ස්ථානයකට ද්‍රව්‍ය පරිවහනය වේ.මෙය දිග
            දුරකට ද්‍රව්‍ය පරිවහනය වන ක්‍රමයකි.මෙයපටලයක් හරහා සිදු නොවේ.
            මේ පරිවහනය විසරණය ට වඩා වැඩි වේගයෙන් සිදුවේ.මෙය සාන්ද්‍රණ
            අනුක්‍රමයෙන් ස්වාධීනව සිදුවේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub12;
