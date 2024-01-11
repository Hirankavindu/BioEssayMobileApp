import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Back, BackBox, BackBox2, Hero1, Hero2 } from "../../assets";

const Les2Sub3 = () => {
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
            ලිපිඩවල මූලික රසායනික ස්වභාවය හා එක් එක් ලිපිඩ වර්ගවල ලාක්ෂණික ලක්ෂණ
            විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            ජලභීතික අණු සහිත විවිධාකාර කාණ්ඩයකි.{"\n"}
            {"\n"}විශාල ජෛව අණු නමුත් බහුඅවයවික හෝ මහා අණු නොවේ.{"\n"}
            {"\n"}C ,H , හා O වලින් සෑදී ඇත .{"\n"}
            {"\n"}H : O අනුපාතය 2:1 නොවේ /සාපේක්ෂව H ඔක්සිජන් වලට වඩා වැඩියෙන්
            පවතී.{"\n"}
            {"\n"}ජෛවීය ලෙස වැදගත් වන ලිපිඩ වර්ග : මේද ,පොස්පොලිපිඩ, ස්ටෙරොයිඩ.
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            මේදය
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            මේද අම්ල සහ ග්ලිසරෝල් වලින් තැනේ.{"\n"}
            {"\n"}ග්ලිසරෝල් ඇල්කොහොල් කාණ්ඩයට අයත්ය.{"\n"}
            {"\n"}එහි C පරමාණු 3 කි.{"\n"}
            {"\n"}එක් එක් C පරමාණුව තනි OH කාණ්ඩයක් බැගින් දරයි.{"\n"}
            {"\n"}එක් කෙළෙවරක කාබොනිල් කාණ්ඩයක් සහිත දිග කාබන් සැකිල්ලක්
            (සාමාන්‍යයෙන් 16 – 18 ) ඇති හයිඩ්‍රොකාබන් දාම මේද අම්ල වේ.{"\n"}
            {"\n"}
            ග්ලිසරෝල් අණුවේ ඇති එක් එක් හයිඩ්‍රොක්සිල් කාණ්ඩයට මේද අම්ල එස්ටර්
            බන්ධන මගින් බැදේ.{"\n"}
            {"\n"}එමගින් සෑදෙන මේද අණුව ට්‍රයිඒසයිල්ග්ලිසරෝල් ලෙස හදුන්වයි.
            (ට්‍රයිග්ලිසරයිඩ).{"\n"}
            {"\n"}මේද අම්ලවල ජලභීතික ස්වභාවයට දායක වන්නේ මේද අම්ලවල
            හයිඩ්‍රොකාබන් දාමයයි.{"\n"}
            {"\n"}මේද අම්ලවල හයිඩ්‍රොකාබන් දාමයේ ස්වභාවය මත පදනම්ව ඒවා වර්ග කර
            ඇත.
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            සංතෘප්ත මේදය
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            සංතෘප්ත මේද අම්ලවලින් සෑදුණු මේදයයි.{"\n"}
            {"\n"}ද්විත්ව බන්ධන කිසිවක් නැති හයිඩ්‍රොකාබන සහිත මේද අම්ල වේ.
            {"\n"}
            {"\n"}
            සාමාන්‍යයෙන් සත්ත්ව මේද මේ වර්ගයට අයත්ය.{"\n"}
            {"\n"}බොහෝවිට කාමර උෂ්ණත්වයේ ඝන ලෙස පවති.{"\n"}
            උදා - බටර්
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            අසංතෘප්ත මේද
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            අසංතෘප්‍ත මේද අම්ලවලින් සෑදුණු මේදයයි.{"\n"}
            {"\n"}ද්විත්ව බන්ධන එකක් හෝ වැඩි ගණනක් ඇති හයිඩ්‍රොකාබන් සහිත මේද
            අම්ල වේ.{"\n"}
            {"\n"}සාමාන්‍යයෙන් ශාකවල පවතින මේදයයි.{"\n"}
            {"\n"}බොහෝ විට මේවා කාමර උෂ්ණත්වයේදී ද්‍රව ලෙස පවතී.{"\n"}
            උදා -එළවළු තෙල්{"\n"}
            {"\n"}ද්විත්ව බන්ධනයේ ස්වභාවය මත පදනම්ව අසංතෘප්ත මේද වර්ග කරණු ලබයි.
            {"\n"}
            {"\n"}සිස් (Cis) අසංතෘප්ත මේද{"\n"}
            {"\n"}ට්‍රාන්ස් (Trans) අසංතෘප්ත මේද{"\n"}
            {"\n"}සංතෘප්ත මේද සහ අසංතෘප්ත මේදය අධික ලෙස පරිභෝජනය ධමනි බිත්ති
            ඝනවීමට (Atherosclerosis) දායක වේ.
          </Text>
          <Text className="px-3 pt-10 pb-3 text-lg font-bold text-justify text-gray-800">
            පොස්පොලිපිඩ
          </Text>
          <Text className="px-3 text-base font-semibold text-justify text-gray-800">
            සෛලපටලවල ප්‍රධාන සංඝටකයයි.{"\n"}
            {"\n"}එක් ග්ලිසරෝල් අණුවකට මේද අම්ල අණු දෙකක් හා පොස්පේට් කාණ්ඩයක්
            බැදී ඇත.{"\n"}
            {"\n"}පොස්පේට් කාණ්ඩය මගින් පොස්පොලිපිඩ අණුවලට සෘණ විද්‍යුත්
            ආරෝපණයක් ලබා දෙයි.{"\n"}
            {"\n"}අමතර ධ්‍රැවීය අණුවක් හෝ කුඩා ආරෝපිත අණුවක්ද පොස්පේට් කාණ්ඩයට
            බැදී ඇත .{"\n"}
            උදා -කෝලීන්{"\n"}
            {"\n"}පොස්පොලිපිඩවල අන්ත දෙක එකිනෙකට වෙනස් හැසිරීමක් පෙන්වයි.එහි
            හයිඩ්‍රොකාබන් වල්ග ජලභීතික වේ.පොස්පේට් කාණ්ඩය හා එයට සම්බන්ධ වී ඇති
            අණු (හිස) ජලකාමීය.{"\n"}
            {"\n"}ස්ටෙරොයිඩද ජෛවීය ලෙස වැදගත් වන ලිපිඩ වර්ගයකි.
          </Text>

          {/* Lesson Categories Start */}
          <View className="px-3 mt-10 bg-gray-300">
            <Text className="py-3 text-base font-bold text-gray-800">
              උදාහරණ සහිතව ලිපිඩ මගින් ඉටුකරන කෘත්‍ය ලියන්න .
            </Text>
          </View>
          {/* Lesson Category end */}
          <Text className="px-3 mt-4 text-base font-semibold text-justify text-gray-800">
            ආහාරවල ශක්ති ප්‍රභවයක් ලෙස .{"\n"}
            {"\n"}ට්‍රයිග්ලිසරයිඩ (ට්‍රයිඒසයිල්ග්ලිසරෝල්) වන මේද හා තෙල්.
            {"\n"}
            {"\n"}ප්ලාස්ම පටලයේ තරලමය ස්වභාවය පවත්වා ගනී.{"\n"}
            {"\n"}පොස්පොලිපිඩ කොලෙස්ටරෝල් දේහය තුළ පරිවහනය වන සංගදා අණු ලෙස
            ක්‍රියාකරයි.{"\n"}
            {"\n"}හෝර්මෝන සෛල පටලයේ සංඝටක ලෙස කොලෙස්ටරෝල් සහ පොස්පොලිපිඩ
          </Text>
        </View>
        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les2Sub3;
