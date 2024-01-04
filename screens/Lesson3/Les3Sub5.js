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

const Les3Sub5 = () => {
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
              onPress={() => navigation.navigate("Lesson3")}
            >
              <Image source={BackBox2} width={200} height={30} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Back Button End */}
        {/* Lesson name banner start */}
        <View className="h-20 bg-[#6a1b3b] flex-col justify-center">
          <View className="flex-row px-3">
            <View className="w-2 bg-white h-14"></View>
            <View className="flex-col px-2">
              <Text className="flex flex-col justify-center text-lg font-bold text-white">
                පරිණාමය හා ජීවීන්ගේ විවිධත්වය
              </Text>
              <Text className="flex flex-col justify-center mt-1 text-sm font-semibold text-slate-100">
                පාඩම් අංක 03
              </Text>
            </View>
          </View>
        </View>
        {/* Lesson Banner end */}
        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ස්වාභාවික වර්ගීකරණය සහ කෘතීම වර්ගීකරණය (කෙටි සටහන්)
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            ස්වාභාවික වර්ගීකරණය
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ජීවින් අතර පවතින සත්‍ය බන්ධුතා පදනම් කරගෙන ජීවීන් කාණ්ඩ කිරීම.{"\n"}
            {"\n"}
            වංශ ප්‍රවේණිය (විශේෂයේ හෝ විශේෂය අයත් කණ්ඩායම්වල පරිණාමික ඉතිහාසය)
            මත පදනම් වූ පරිණාමික (ස්වාභාවික) බන්ධුතා විදහා දක්වයි.{"\n"}
            {"\n"}පරිණාමය පිළිබදව අධ්‍යනයෙන් පසු සකස් වූ වර්ගීකරණ පද්ධති වේ.
            {"\n"}
            {"\n"}
            ලක්ෂණ ගණනාවක් මත පදනම් වේ.{"\n"}
            {"\n"}ජීවීන්ගේ රූප විද්‍යාත්මක{"\n"}ව්‍යුහ විද්‍යාත්මක{"\n"}සෛල
            විද්‍යාත්මක{"\n"}DNA/RNA භෂ්ම අනුපිළිවෙල වැනි අණුක ජීව විද්‍යාත්මක
            ලක්ෂණ භාවිතා කරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            කෘතීම වර්ගීකරණය
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            මෙහිදී ජීවීන් කාණ්ඩ කිරීම කලින් තීරණය කරන ලද තෝරාගත් ඒකාබද්ධ ලක්ෂණ
            කීපයක් මත පදනම් වේ.{"\n"}
            {"\n"}මෙහිදී ලක්ෂණ තෝරා ගැනෙනුයේ අධ්‍යනයේ පහසුව සදහා වේ.{"\n"}
            {"\n"}
            තෝරාගත් නිර්ණායක පදනම් කරගනිමින් ජීවීහූ කාණ්ඩවලට වෙන් කරනු ලැබේ.
            {"\n"}
            {"\n"}
            මෙහිදී පරිණාමික බන්ධුතා නොසැලකේ .{"\n"}
            {"\n"}මෙය 18 වන ශතවර්ෂයට ප්‍රථම භාවිතා කර ඇති එකම වර්ගීකරණ පද්ධතිය
            වේ.{"\n"}
            {"\n"}භාවිතා කිරීම පහසු වේ.{"\n"}
            {"\n"}තවත් ජීවීන් කාණ්ඩ එකතු කර පුළුල් කිරීමට යැකිය.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ද්විපද නාමකරණයේ ජාත්‍යන්තර සංකේත (කෙටි සටහන්)
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ජීව විද්‍යාගදයන් විසින් නාමකරණයට අදාළ නීති හා සංකේත හදුන්වා දී ඇත .
            {"\n"}
            {"\n"}මෙම සංකේත ශාක , සතුන් , දිලීර , බැක්ටීරියා හා වයිරස සදහා
            එකිනෙකින් සුළු වශයෙන් වෙනස්ය. එම වැදගත් නීති ලෙස .{"\n"}
            {"\n"}ජිවි විශේෂ දෙකකට එකම නාමය තිබිය නොහැකිය.{"\n"}
            {"\n"}සෑම විශේෂයකටම ගණ නාමයක් හා සුළු නාමයක් ඇති අතර මෙම නාම දෙකෙහි
            එකතුව් විශේෂයේ නාමය / විද්‍යාත්මක් නාමය සාදයි.{"\n"}
            {"\n"}නාමය ලතින් හුරුවක් ඇති වචන වන අතර එය රෝමන් අකුරු භාවිතයෙන්
            ලිවිය යුතුය .{"\n"}
            {"\n"}අත් අකුරින් ලියන විට යටින් ඉරි ඇදිය යුතුවන අතර මුද්‍රණය කරන
            විට ඇල අකුරු (italics) ලිවිය යුතුය.{"\n"}
            {"\n"}ගණ නාමයේ මුල් අකුර ඉංග්‍රීසි කැපිටල් අකුරක් විය යුතු අතර විශේෂ
            නාමය ඉංග්‍රීසි සිම්පල් අකුරින් ලිවිය යුතුය,{"\n"}
            {"\n"}විද්‍යාත්මක කාර්යවලදී නාමය හදුන්වාදුන් විද්‍යාගදයාගේ නම
            ඉංග්‍රීසි කැපිටල් අකුරකින් කෙටිකර දැක්වීමකින් හෝ සම්පූර්ණ නම ලෙසින්
            නාමය අගින් දක්වයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            බැක්ටීරියා අධිරාජධානියේ මූලික ලක්ෂණ (කෙටි සටහන්)
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ප්‍රාග්න්‍යෂ්ටිකයෝ වෙති.{"\n"}
            {"\n"}ඒකසෛලිකය, ගණාවාසීය , සූත්‍රිකාමය{"\n"}
            {"\n"}බහුතරය 1මයික්‍රොමීටර් සිට 5 මයික්‍රොමීටර් තරමින් යුක්තය .
            {"\n"}
            {"\n"}
            සාමාන්‍ය වාසස්ථාන (භෞමික හා ජලජ) සදහා හොදින් අනුවර්තනය වී ඇත.{"\n"}
            {"\n"}
            බොහෝ අයගේ සෛල බිත්තිවල පෙප්ටයිඩොග්ලයිකෑන් සංඝටකයක් ලෙස පවතී.{"\n"}
            {"\n"}
            වැඩිදෙනෙකුගේ සෛල බිත්තිය ඇලෙන සුළු පොලිසැකරයිඩ ස්ථරයකින් හා ප්‍රෝටීන
            ප්‍රාවරයකින් ආවරණය වී ඇත.{"\n"}
            {"\n"}බොහෝ දෙනෙක් චලනය සදහා කෂිකා දරති.{"\n"}
            {"\n"}ප්ලාස්ම පටලයකින් ආවරණය වී නොමැති වීම හා ක්ෂුද්‍ර නාලිකා(9+2)
            ව්‍යුහය නොමැතිවීම නිසා බැක්ටීරියා කෂිකාව සූන්‍යෂ්ටික කශිකාවෙන් වෙනස්
            වේ.{"\n"}
            {"\n"}විවිධ පෝෂණ විලාශ අනුගමනය කරයි.{"\n"}
            {"\n"}ස්වයංපෝෂී , විෂමපෝෂී විවිධ පරිවෘත්තීය ආකාර දරයි.{"\n"}
            {"\n"}අනිවාර්ය ස්වායු , අනිවාරය නිර්වායු, වෛකල්පිත නිර්වායු ලෙස ඇත.
            {"\n"}
            {"\n"}සමහරුන්ට නයිට්‍රජන් තිරකිර්‍රිමේ හැකියාව පවතී.{"\n"}
            උදා-Rhizobium විශේෂ , සමහර සයනොබැක්ටීරියා{"\n"}
            {"\n"}ද්විකණ්ඩනය මගින් සිදුවන වේගවත් ප්‍රජනනය හා සමහරුන්ට ලිංගික
            ප්‍රජනන ක්‍රමයක් ලෙස සං‍යුග්මනය සිදුකළ හැකිය .{"\n"}
            {"\n"}සමහර බැක්ටීරියාවෝ බැක්ටීරියා හරිතප්‍රද (බැක්ටීරියෝ ක්ලෝරෆයිල්)
            ප්‍රභාසංස්ලේෂක වර්ණක ලෙස යොදා ගනියි.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les3Sub5;
