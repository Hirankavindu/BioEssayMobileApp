import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Back, BackBox, BackBox2, Hero1, Hero2 } from "../../assets";

const Les1Sub1 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="relative flex-1 pt-5">
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        {/* Back Button start */}
        <View className="px-3 h-14">
          <View className="flex-row">
            <TouchableOpacity
              className="items-center"
              onPress={() => navigation.navigate("Lesson1")}
            >
              <Image source={BackBox2} width={200} height={30} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Back Button End */}

        {/* Lesson name banner start */}
        <View className="h-20 bg-[#0D6A6E] flex-col justify-center">
          <View className="flex-row px-3">
            <View className="w-2 bg-white h-14"></View>
            <View className="flex-col px-2">
              <Text className="flex flex-col justify-center text-lg font-bold text-white">
                ජීව විද්‍යාව හැඳින්වීම
              </Text>
              <Text className="flex flex-col justify-center mt-1 text-sm font-semibold text-slate-100">
                පාඩම් අංක 01
              </Text>
            </View>
          </View>
        </View>
        {/* Lesson Banner end */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ජීව දේහය තුල ඉටු කරන කෘත්‍යන්ට අදාළව ජීවය සඳහා වැදගත් වන ජලයේ භෞතික
            හා රසායනික ගුණ සැකසී ඇති ආකාරය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 text-base text-justify text-gray-800">
            ජලය ඉතා වැදගත් අකාබනික අණුවකි.{"\n"}
            {"\n"}ජලය නොමැතිව මේ ග්‍රහලෝකය තුල ජීවයක් නොමැත.{"\n"}
            {"\n"}ජීව සෛල වල වැදගත් රසායනික ස‍ංඝටකයක් වීම.{"\n"}
            {"\n"}
            සියලු ජීවීන්ට ජෛව විද්‍යාත්මක මාධ්‍යය සැපයීම.{"\n"}
            {"\n"}ජල අණුවේ භෞතික හා රසායනික ගුණ ජීවීභාවය පවත්වාගෙන යාමට හැකියාව
            ලබා දෙයි.{"\n"}
            {"\n"}ජල අණුවක රසායනික ස්වභාවය.{"\n"}
            {"\n"}ජල අණුවක කුඩා ධ්‍රැවීය, කෝණික අණුවකි.
            {"\n"}
            {"\n"}ධ්‍රැවීයතාවය යනු අණුවක් තුළ අසමාන ලෙස ආරෝපණය ව්‍යාප්ත වීමයි.
            {"\n"}
            {"\n"}ජල අණුවක ඇති ඔක්සිජන් පරමාණුව සුළු වශයෙන් සෘණ ලෙස ආරෝපිත වන
            අතර හයිඩ්‍රජන් පරමාණුව සුළු වශයෙන් ධන ආරෝපිත වේ.{"\n"}
            {"\n"}එක් ජල අණුවක සුළු වශයෙන් ධ්‍රැවීය හයිඩ්‍රජන් බන්ධන මඟින්
            ප්‍රධාන කාර්යයක් ඉටු කරයි.
            {"\n"}
            {"\n"}විවිධ ජල අණු අතර පවතින හයිඩ්‍රජන් බන්ධන හේතුවෙන් ජලයේ ගුණ ඇති
            වේ.{"\n"}
            {"\n"}ජලය එහි ද්‍රව අවස්ථාවේ පවතින විට එහි ඇති හයිඩ්‍රජන් බන්ධන ඉතා
            භංගූර වේ.{"\n"}
            {"\n"}හයිඩ්‍රජන් බන්ධන සෑදීම, බිඳ වැටීම හා නැවත සෑදීම ඉහළ
            සංඛ්‍යාතයකින් සිදුවේ.
          </Text>
          {/* Subtopic start */}
          <View className="px-3 mt-10 mb-2 bg-slate-300">
            <Text className="py-3 text-base font-bold text-gray-800">
              ජලයේ භෞතික ගුණ
            </Text>
          </View>
          {/* Subtopic end */}
          <Text className="px-3 pt-3 text-base font-bold text-gray-800">
            සංශක්ති හැසිරීම
          </Text>
          {/* Content Start */}
          <Text className="px-3 text-base text-justify text-gray-800">
            හයිඩ්‍රජන් බන්ධන නිසා ජල අණු අතර ඇති ආකර්ෂණය සංශක්තියයි.{"\n"}
            {"\n"}ජල අණු හා වෙනත් ද්‍රව්‍ය අතර ඇතිවන ආකර්ෂණය ආශක්තියයි.{"\n"}
            {"\n"}ඉහත ගුණ දෙක නිසා පරිවහන මාධ්‍යයක් ලෙස ක්‍රියාකිරීමට හැකියාව
            ජලයට ලැබේ.
            {"\n"}
            {"\n"}ජල අණු අතර සංශක්තිය නිසා ජලය හා ජලයේ දියවූ ද්‍රව්‍යය(ඛනිජ ළවණ
            වැනි) ශෛලම තුලින් ගුරුත්වයට එරෙහිව අඛණ්ඩ ජල කදක් ලෙස පරිවහනය වේ.
            {"\n"}
            {"\n"}ජලය හා ජලයේ දියවූ ද්‍රව්‍යය පරිවහනයේදී ජල අණු සහ සෛල බිත්ති
            අතර, ඇතිවන ආශක්තියද ආධාර වේ.{"\n"}
            {"\n"}ජලයට ඉහල පෘෂ්ඪික ආතතියක් ඇත.{"\n"}
            {"\n"}ජල අණු අතර සංශක්තිය නිසා එම හැකියාව ලැබේ.{"\n"}
            {"\n"}එම නිසා ජලජ පද්ධතියක් තුල ඉහළ පෘෂ්ඪයේ ජල අණු පහළ පෘෂ්ඨයේ ජල
            අණු මගින් ආකර්ශනය කර ජල පටලයක් සාදයි.{"\n"}
            {"\n"}එනිසා කුඩා කෘමීන්ට පොකුණක ජල පෘෂ්ඪිය මත ඇවිදීමට හැකිය. උදා-දිය
            ලිස්සන්නා
          </Text>
          {/* Content End */}
          {/* Subtopic start */}
          <View className="px-3 mt-10 mb-2 bg-slate-300">
            <Text className="py-3 text-base font-bold text-gray-800">
              උෂ්ණත්වය මධ්‍යස්ත කිරීමට ඇති හැකියාව
            </Text>
          </View>
          {/* Subtopic end */}
          {/* Content Start */}
          <Text className="px-3 text-base text-justify text-gray-800">
            සාපේක්ෂව අධික තාප ශක්ති ප්‍රමාණයක් ජලයට අවශෝෂණය කිරීම හෝ නිදහස්
            කිරීම මගින් ජලයේ උෂ්ණතවය වෙනස් වීම අවම වේ.{"\n"}
            {"\n"}ජලයේ අධික විශිෂ්ඨ තාපය නිසා පෘථිවිය මත උෂ්ණත්වය උච්චාවචනය
            සිදුවන විට ජීවී පද්ධති සහ ජල ස්කන්ධ තුළ ජලය තාප ස්වාරක්ෂකයක් ලෙස
            ක්‍රියා කරයි.{"\n"}
            {"\n"}ජලයේ අධික වාෂ්පීකරණ තාපයක් ඇති නිසා ජීවියෙකු තුළ අවම ජල
            හානියක් , සිදුකරමින් වැඩි තාප ශක්තියක් නිදහස් කල හැකිය.{"\n"}
            {"\n"}මෙය ජීවියාගේ දේහ පෘෂ්ඨය සිසිල් කර ගැනීමට උපකාරී වේ.{"\n"}
            {"\n"}උදා - අධික උණුසුම් වීම වැළැක්වීමට මිනිස් සමෙන් ස්වේදය වාෂ්ප
            වීම දේහ උෂ්ණත්වය නියත මට්ටමක පවත්වා ගැනීමට ආධාර වේ.{"\n"}
            {"\n"}ශාක තුල සිදුවන උත්ස්වේදනය ශාක දේහ පෘෂ්ඨය සිසිල් ලෙස තබා ගැනීමට
            උපකාරී වේ.{"\n"}
            {"\n"}සූර්යාලෝකය නිසා අධිකව උණුසුම් වීම වළක්වයි.
          </Text>
          {/* Content End */}
          {/* Subtopic start */}
          <View className="px-3 mt-10 mb-2 bg-slate-300">
            <Text className="py-3 text-base font-bold text-gray-800">
              හිමායනයේදී සිදුවන ප්‍රසාරණය
            </Text>
          </View>
          {/* Subtopic end */}
          {/* Content Start */}
          <Text className="px-3 text-base text-justify text-gray-800">
            සාමන්‍යයෙන් ද්‍රවයක උෂ්ණත්වය වැඩිවන විට ඝනත්වය අඩු වේ.{"\n"}
            {"\n"}උෂ්ණත්වය අඩුවීමේදී ඝනත්වය වැඩි වේ.{"\n"}
            {"\n"}ජලය උෂ්ණත්වය 4 සෙල්සියස් අංශක ට වඩා අඩුවන විට හිමායනය ආරම්භ වී
            අයිස් ඝනක (කුට්ටි) ලෙස හදුන්වන ස්ඵටික දැලිසක් සාදයි.{"\n"}
            {"\n"}ජලයට 4 සෙල්සියස් අංශ වලදී උපරිම ඝනත්වයක් ඇත.{"\n"}
            {"\n"}එනිසා ජල ස්කන්ධවල මතුපිට පෘෂ්ඨයේ අයිස් පාවේ.{"\n"}
            {"\n"}මෙය ධ්‍රැව ප්‍රදේශවල ජල ස්කන්ධ තුළ සිටින ජීවීන්ට ශීත සෘතුවේදී
            නොනැසී පැවතීමට හැකිවන ජලයෙර් ගුණාංගයකි.
          </Text>
          {/* Content End */}
          {/* Subtopic start */}
          <View className="px-3 mt-10 mb-2 bg-slate-300">
            <Text className="py-3 text-base font-bold text-gray-800">
              ද්‍රාවකයක් ලෙස ඇති සර්ව නිපුණත්වය
            </Text>
          </View>
          {/* Subtopic end */}
          {/* Content Start */}
          <Text className="px-3 text-base text-justify text-gray-800">
            ජලයේ ධ්‍රැවීයතාව නිසා ජලයට ලැබී ඇති ගුණයකි.{"\n"}
            {"\n"}ධ්‍රැවීය අණු - ග්ලූකෝස් අයනික සංයෝග -( NaCl) සෝඩියම් ක්ලෝරයිඩ්
            .{"\n"}
            {"\n"}ධ්‍රැවීය හා අයනික යන ප්‍රදේශ දෙකම සහිත ලයිසොසයිම යන ඒවා ජලයේ
            දිය වේ.{"\n"}
            {"\n"}ජල අණු එක් එක් ද්‍රාව්‍ය අණු වට කර ඒවා සමග හයිඩ්‍රජන් බන්ධන
            සාදයි.{"\n"}
            {"\n"}එම නිසා ද්‍රාව්‍යතාව අයනික ස්වභාවය මත නොව ද්‍රව්‍යයක
            ධ්‍රැවීයතාවය මත රදා පවතී.{"\n"}
            {"\n"}
          </Text>
          {/* Content End */}
        </View>
        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les1Sub1;
