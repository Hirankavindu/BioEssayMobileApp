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

const Les2Sub18 = () => {
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
            එන්සයිමවල සාමාන්‍ය ලාක්ෂණික ගුණ විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-5 text-base font-semibold text-left text-gray-800">
            බොහෝ එන්සයිම ගෝලීය ප්‍රෝටීන වේ.{"\n"}
            {"\n"}එන්සයිම ජෛව උත්ප්‍රේරක වේ.{"\n"}
            {"\n"}ඒවා මගින් උත්ප්‍රේරණය වන ප්‍රතික්‍රියාවක සක්‍රීයන ශක්තිය
            අඩුකරයි.{"\n"}
            {"\n"}ප්‍රතික්‍රියා ශීඝ්‍රතාවය වැඩි කරයි.{"\n"}
            {"\n"}බොහෝ එන්සයිම තාප අස්ථායි වේ/ තාප සංවේදී වේ.{"\n"}
            {"\n"}ඕනෑම ප්‍රතික්‍රියාවක අන්තඵලවල ගුණ හෝ ස්වභාවය,එන්සයිම මගින්
            වෙනස් නොකරයි.{"\n"}
            {"\n"}එන්සයිම උපස්තරයට අධිකව විශිෂ්ටය (උපස්තර විශිෂ්ටයි).{"\n"}
            {"\n"}බොහෝ එන්සයිම උත්ප්‍රේරක ප්‍රතික්‍රියා ප්‍රතිවර්ත්‍ය වේ.{"\n"}
            {"\n"}
            එන්සයිම ක්‍රියාකාරිත්වය ශීඝ්‍රතාවයට PH,උෂ්ණත්වය,උපස්තර සාන්ද්‍රණය හා
            නිශේධක බලපායි.{"\n"}
            {"\n"}ප්‍රතික්‍රියාව තුළදී ප්‍රතික්‍රියාවට වැය නොවේ .(
            ප්‍රතික්‍රියාව අවසානයේදී නොවෙනස්ව පවතී){"\n"}
            {"\n"}එන්සයිමවල ප්‍රතික්‍රියාව සිදුවන සක්‍රීය ස්ථාන ඇත.{"\n"}
            {"\n"}
            ප්‍රතික්‍රියාව උත්ප්‍රේරණය සදහා සමහර එන්සයිමවල සහසාධක නමින් හදුන්වන
            ප්‍රෝටීන නොවන සාධක අවශ්‍යයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            එන්සයිම ප්‍රතික්‍රියා සදහා බලපාන සාධක විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}
        <View className="py-3">
          <Text className="px-3 text-lg font-bold text-left text-gray-800">
            උෂ්ණත්වය
          </Text>
        </View>
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-justify text-gray-800">
            උෂ්ණත්වය වැඩිවීමේදී අණුවල චලිතය වැඩි වේ.{"\n"}
            {"\n"}ඒ නිසා එන්සයිම අණුවල හා උපස්තර අණුවල චලිතයේ වේගය වැඩි වේ.
            {"\n"}
            {"\n"}ඒ නිසා එන්සයිමයේ සක්‍රීය ස්ථාන හා උපස්තර අණුවල සංඝට්ටනය වීමේ
            සම්භාවිතාවය වැඩි වේ.{"\n"}
            {"\n"}ඒනිසා එන්සයිමයේ සක්‍රීය ස්ථාන හා උපස්තර අණුවල වැඩි සංඝට්ටන
            හේතුවෙන්.{"\n"}
            {"\n"}ප්‍රතික්‍රියාව සිදුවීමේ අවස්ථාව වැඩි වේ.{"\n"}
            {"\n"}මෙය යම් කිසි අගයක් දක්වා වැඩි වේ.{"\n"}
            {"\n"}මෙයින් පසුව ඉතා ශීඝ්‍රයෙන් එන්සයිමයේ ක්‍රියාකාරීත්වය අඩු වේ.
            {"\n"}
            {"\n"}
            මේ උෂ්ණත්වය ප්‍රශස්ත උෂ්ණත්වය ලෙස හැදින්වේ.{"\n"}
            {"\n"}මෙය ජීවින්ගෙන් ජීවියාට වෙනස් වේ.{"\n"}උදා- බොහෝ මානව එන්සයිමවල
            ප්‍රශස්ත උෂ්ණත්වය දේහ උෂ්ණතවයට සමාන වේ. (35 – 40) C0{"\n"}
            {"\n"}උණුදිය උල්පත්වල සිටින බැක්ටීරියාවන්ගේ ප්‍රශස්ත උෂ්ණතවය 70 c0 ට
            වඩා වැඩිවේ.{"\n"}
            {"\n"}ප්‍රශස්ත උෂ්ණත්වය ඉක්මවා උෂ්ණත්වය වැඩි වන විට එන්සයිමයේ
            සක්‍රීය ස්ථානයේ හයිඩ්‍රජන් බන්ධන අයනික බන්ධන සහ දුර්වල රසායනික බන්ධන
            බිද වැටේ.{"\n"}
            {"\n"}එන්සයිමයේ සක්‍රීය ස්ථානයේ හැඩය වෙනස් වීමෙන්{"\n"}
            {"\n"}මේ හේතුවෙන් එන්සයිමයේ සක්‍රීය ස්ථානයේ අනුපූරක ස්වභාවය වෙනස්
            වේ.{"\n"}
            {"\n"}ඒ නිසා එන්සයිමයේ සක්‍රීය ස්ථානය හා උපස්ථර අණුවල අනුපූරකව බැදීම
            බිද වැටේ.{"\n"}
            {"\n"}ඉහත අවස්ථාව එන්සයිම අණුවල දුස්වාභාවීකරණය ලෙස හදුන්වයි.{"\n"}
            {"\n"}
            උෂ්ණත්වය වැඩි කිරීමේදී අණුවල සංඝට්ටන ශීඝ්‍රතාව වැඩිවෙමින් පැවතුණත්
            ප්‍රශස්ත උෂ්ණත්වය ඉක්මවා උෂ්ණත්වය වැඩි වූ විට එන්සයිම මගින්
            උත්ප්‍රේරණය කරන ප්‍රතික්‍රියාවේ ශීඝ්‍රතාවය අඩු වීම ඇරඹේ.කිසියම්
            (නිශ්චිත) උෂ්ණත්වයකදී එය සම්පූර්ණයෙන්ම නවතී.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Category end */}
        <View className="py-3">
          <Text className="px-3 text-lg font-bold text-left text-gray-800">
            PH
          </Text>
        </View>
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-left text-gray-800">
            පරිසරයේ උෂ්ණත්වය නොවෙනස්ව පැවතියත්,එන්සයිමය යම් PH තුළ ඉතා කාර්යක්ෂම
            වේ.{"\n"}
            {"\n"}යම් එන්සයිමයක් මගින් උත්ප්‍රේරිත ප්‍රතික්‍රියාවක් සිදුවන පටු
            PH පරාසය එහි PH පරාසය නම් වේ.{"\n"}
            {"\n"}ඉහළම ප්‍රතික්‍රියා ශීඝ්‍රතාවයක් ඇති PH අගය එම එන්සයිමයේ PH
            අගයයි. {"\n"}
            {"\n"}‍රශස්ත PH අගයට වඩා PH අඩුකිරීම හෝ වැඩි කිරීම හේතුවෙන්
            එන්සයිමයේ ක්‍රියාකාරීත්වය අඩු වේ.{"\n"}
            {"\n"}එන්සයිමයේ උපස්තර සංකීර්ණය ඇතිවීමට හේතුවන රසායනික බන්ධන වෙනස්
            වීම මීට හේතු වේ.{"\n"}
            {"\n"}බොහෝ එන්සයිමවල ප්‍රශස්ත PH පරාසය 6 – 8 වන නමුත් මෙයින් අපගමනය
            වන අවස්ථා ද ඇත.{"\n"}
            {"\n"}පෙප්සීන් PH 2 දී ඉතා හොදින් ක්‍රියාකරයි.{"\n"}
            {"\n"}ට්‍රිප්සීන් සදහා ප්‍රශස්ත PH අගය 8 වේ.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Category end */}
        <View className="py-3">
          <Text className="px-3 text-lg font-bold text-left text-gray-800">
            එන්සයිම නිශේධක
          </Text>
        </View>
        <View className="py-3">
          <Text className="px-3 mb-5 text-base font-semibold text-left text-gray-800">
            සමහර අණු හෝ අයන එන්සයිමයට ස්ථිර ලෙස හෝ තාවකාලිකව හෝ බැදී එන්සයිම
            උපස්තර සංකීර්ණය සෑදීම වැළැක්වේ.{"\n"}
            {"\n"}මේවා දුර්වල බන්ධන මගින් අප්‍රතිවර්ත්‍ය ලෙස බැදේ.{"\n"}
            {"\n"}
            අප්‍රතිවර්ත්‍ය නිශේධක - විෂ (Toxins , Poisons){"\n"}
            {"\n"}ප්‍රතිවර්ත්‍ය නිශේධක - ක්ෂුද්‍ර ජීවීන්ට එරෙහිව භාවිතා කරන ඖෂධ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub18;
