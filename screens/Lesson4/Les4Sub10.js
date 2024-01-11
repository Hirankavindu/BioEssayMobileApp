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

const Les4Sub10 = () => {
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
            දර්ශීය ද්වී බීජ පත්‍රී ශාක පත්‍රයක ව්‍යුහය එමඟින් ඉටුකරන කෘත්‍යට
            අදාළව හැඩගැසී ඇති ආකාරය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            බොහෝ සනාල ශාක වල ප්‍රධාන ප්‍රභාසංස්ලේෂක ව්‍යුහය ශාක පත්‍රයයි.{"\n"}
            {"\n"}
            උඩු හා යටි අපි චර්මයේ පූටිකා ඇත.{"\n"}
            {"\n"}එමගින් වායු හුවමාරුව සිදු වේ.{"\n"}
            {"\n"}apicharmaya සාමාන්‍යයෙන් තනි සෛල ස්ථරය කි.{"\n"}
            {"\n"}උඩු හා යටි අපි චර්ම අතර පත්‍ර මධ්‍යය ලෙස හඳුන්වනු ලබන පූරක
            පටකයක් පිහිටයි.{"\n"}
            {"\n"}මෙය මෘදුස්තර සෛල වලින් යුක්තය.{"\n"}
            {"\n"}මෙය ප්‍රභාසංස්ලේෂණයට විශේෂණය වී ඇත.{"\n"}
            {"\n"}ද්වීබීජපත්‍රී ශාක පත්‍ර වල පුටිකා ප්‍රධාන වශයෙන් යටි අපිචර්මය
            තුළ පවතී.{"\n"}
            {"\n"}පත්‍ර මධ්‍ය සෛල ස්ථරය ඉනි මෘදුස්තර හා සවිවර මෘදුස්ථර ලෙස කැපී
            පෙනෙන ස්තර දෙකකි.{"\n"}
            {"\n"}ඉනි මෘදුස්තර සෛල දිගැටි හැඩයක් ගනියි.{"\n"}
            {"\n"}සෛල ස්තර එකක් හෝ කිහිපයක් හෝ පවතී.{"\n"}
            {"\n"}මේ ස්ථරය පත්‍රයේ ඉහළ කොටසේ උඩුඅපිචර්මයට වහාම පහලින් පිහිටයි.
            {"\n"}
            {"\n"}සවිවර මෘදුස්ථරය ඉනි මෘදුස්තරය හා යටි අපිචර්මය අතර පිහිටයි.
            {"\n"}
            {"\n"}එය අන්තර් සෛලීය අවකාශ රාශියක් සහිතව ලිහිල්ව සැකසී ඇත.
            {"\n"}
            {"\n"}සවිවර මෘදුස්තර සෛල ඉනි මෘදුස්තර සෛලවලට වඩා අඩු හරිතලව
            ප්‍රමාණයක් දරයි.{"\n"}
            {"\n"}පත්‍රයේ සනාල පටක කදේ සනාල පටක සමඟ අඛණ්ඩ ව බැඳී ඇත.{"\n"}
            {"\n"}
            ජාලාකාර නාරටි වින්‍යාසයක් පවතී.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ඒක බීජ පත්‍රී ශාක පත්‍රයක ව්‍යුහය ඉන් වෙනස් වන අයුරු විස්තර කරන්න.
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
            පත්‍රයේ ඇති නාරටි පත්‍ර මධ්‍ය සෛල ස්ථරය තුළ දී දැකිය හැක.{"\n"}
            {"\n"}ඒවා හොඳින් ශාඛනය වී තිබේ.{"\n"}
            {"\n"}සෑම නාරටියක් ම කලාප කොපුවක් මගින් ආරක්ෂා වී තිබේ.{"\n"}
            {"\n"}පූටිකා උඩු හා යටි අපි චර්ම දෙකෙහිම ඇත.{"\n"}
            {"\n"}පත්‍ර මධ්‍ය ඉනි හා සවිවර මෘදුස්ථර වලට විභේදනය වී නැත.
            {"\n"}
            {"\n"}සියලු පත්‍ර මධ්‍ය සෛලවල හරිතලව බහුලය.{"\n"}
            {"\n"}නාරටි සමාන්තරව සැකසී ඇත.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub10;
