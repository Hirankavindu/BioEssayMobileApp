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

const Les4Sub11 = () => {
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
            පූටිකා වල ව්‍යුහය එමඟින් ඉටු කරන්න කෘතියට අදාළව හැඩගැසී ඇති ආකාරය
            විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            පූටිකා යනු කඳන් හා පත්‍ර අපිචර්මයේ දක්නට ලැබෙන වැසීමට හා විවෘත වීමට
            හැකි සිදුරු විශේෂයකි.{"\n"}
            {"\n"}මේ සිදුරු පාලක සෛල දෙකකින් වටවී ඇත.{"\n"}
            {"\n"}පාලක සෛල යනු විකරණය වූ අපිචර්මීය සෛලදෙකකි.{"\n"}
            {"\n"}පාලක සෛල විශේෂ හැඩයක් දරයි.{"\n"}
            {"\n"}සපුෂ්ප ශාක වල පාලක සෛල දර්ශීය වශයෙන් බෝංචි බීජ හැඩයක් ගනී.
            {"\n"}
            {"\n"}හරිතලව දරන එකම අපිචර්මීය සෛල වර්ගයයි.{"\n"}
            {"\n"}පාලක සෛලවල බිත්ති අසමාකාර ලෙස සෙලියුලෝස් ඝන වී ඇත.{"\n"}
            {"\n"}ඇතුළත cellulose බිත්තිය පිටත බිත්තිය ට වඩා ඝනකමින්,
            ප්‍රත්‍යස්ථ බවින් අඩුය.{"\n"}
            {"\n"}පාලක සෛල වටා සෙලියුලෝස් ක්ෂුද්‍ර කෙඳිති අරිය ආකාරයට සැකසී
            අප්‍රත්‍යස්ථ වළලු සාදයි.{"\n"}
            {"\n"}පාලක සෛල තම හැඩය වෙනස් කරමින් පූටිකා සිදුරේ විෂ්කම්භය පාලනය
            කරයි.{"\n"}
            {"\n"}එනම් පාලක සෛල යුගල අතර පරතරය පළල් හෝ පටු කරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            දැනට පිළිගන්නා මතයට අනුව පූටිකා චලන යාන්ත්‍රණය සිදුවන අයුරු
            විස්තරකරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            දිවා කාලයේදී යාබද අපිචර්මීය සෛලවල සිට පාලක සෛල තුළට සක්‍රීයව
            පොටෑසියම් ධන අයන ඇතුළුවීම හා ඒවා පාලක සෛල තුළට එක්‍රැස් වීම
            සිදුවෙයි.{"\n"}
            {"\n"}සෛල තුළ සාන්ද්‍රනය වැඩි වේ.{"\n"}
            {"\n"}එවිට පාලක සෛලවල ජල විභවය යාබද අපිචර්මීය සෛල වලට වඩා අඩු වෙයි.
            {"\n"}
            {"\n"}එවිට ආසුතිය මගින් යහපත් අපිචර්මීය සෛල වල සිට පාලක සෛල තුලට ජලය
            ගලා යයි.{"\n"}
            {"\n"}එවිට පාලක සෛලවල ශුනතාව වැඩිවේ.{"\n"}
            {"\n"}පූටිකා සිදුරු විවෘත වේ.{"\n"}
            {"\n"}මෙලෙස පාලක සෛලවල පොටෑසියම් ධන අයන එක්තුවීමටබ්ශක්තිය අවශ්‍ය වේ.
            {"\n"}
            {"\n"}පාලක සෛලවල හරිතලව වල ප්‍රභාසංස්ලේෂණයේදී සිදු වන ඉලෙක්ට්‍රෝන
            හුවමාරුව මගින් ශක්තිය සපයයි.{"\n"}
            {"\n"}පාලක සෛල වල සිට යාබද අපිචර්මීය සහිත වලට පොටෑසියම් ධන අයන
            ඉවත්කිරීම මගින් පූටිකා වැසී යාම සිදුවේ.{"\n"}
            {"\n"}එවිට බාහිරාසෘතිය සිදුවී පාලක සෛල වලින් ජලය ඉවත් වේ.{"\n"}
            {"\n"}පාලක සෛලවල ශුනතාව අඩුවෙයි.{"\n"}
            {"\n"}පූටිකා සිදුරු වැසේ.{"\n"}
            {"\n"}ඇබ්සිසික් අම්ලය මගින් ද ද පොටෑසියම් සන්ද්‍ය කල්පිතයේ දී
            කාර්යභාරයක් ඉටු කරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub11;
