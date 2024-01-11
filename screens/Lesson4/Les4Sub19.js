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

const Les4Sub19 = () => {
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
            ප්‍රභාරූපජනනය මගින් ආලෝක උත්තේජ වලට අනුව ශාක දේහයක් විවිධ ප්‍රතිචාර
            දක්වන අයුරු විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ශාකයක වර්ධනය හා විකසනය දී ආලෝකය මගින් ක්‍රියාරම්භ වන ප්‍රධාන
            සිදුවීම් සියල්ල ප්‍රභාරූපජනනයයයි.{"\n"}
            {"\n"}ප්‍රභාරූපජනනය නියාමනය කරන වැදගත්ම වර්ණ රතු හා නිල් බව ක්‍රියා
            වර්ණාවලිය මගින් හෙළිදරව්වේ.{"\n"}
            {"\n"}ප්‍රභා රූපජනනය සඳහා ප්‍රකාශ ප්‍රතිග්‍රාහක ප්‍රධාන කාණ්ඩ දෙකක්
            (ක්‍රිප්ටෝක්‍රෝම් හා ෆයිටොක්‍රෝම්) දායක වේ.{"\n"}
            {"\n"}ක්‍රිප්ටෝක්‍රෝම් නිල් ආලෝක ප්‍රභා ප්‍රතිග්‍රාහක වන අතර,
            ෆයිටොක්‍රෝම් රතු ආලෝක ප්‍රභා ප්‍රතිග්‍රාහක වේ.{"\n"}
            {"\n"}ෆයිටොක්‍රෝම් බීජ ප්‍රරෝහණය සඳහා සහභාගීවන ප්‍රධාන ප්‍රකාශ
            ප්‍රතිග්‍රාහක වේ.{"\n"}
            {"\n"}සෙවණ මග හැරීම, පුෂ්පහටගැනීම, ආලෝකය මගින් උත්ප්‍රේරණය වන බීජ
            පැලය පස මතුපිටට පැමිණි පසුව බීජාධරය දික්වීම නිශේධනය ප්‍රභා රූපජනනය
            සඳහා උදාහරණ වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            බීජ ප්‍රයෝජනය කෙරෙහි ආලෝක බලපෑම.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ආහාර සංචිත සීමිත බැවින් ආලෝක පරිසරය හා අනෙක් තත්ත්වය ප්‍රශස්ත පවතී
            නම් පමණක් බොහෝ වර්ග වල බීජ (විශේෂයෙන් කුඩා බීජ වල) ප්‍රරෝහණය ඇරඹේ.
            {"\n"}
            {"\n"}ආලෝක තත්ත්ව වෙනස් වන තුරු එවැනි බීජ ප්‍රරෝහනය නොවේ.{"\n"}
            {"\n"}ඒවා වසර ගණනාවක් සුප්තව පවතියි.{"\n"}උදා:- ක්ෂේත්‍රය සීසෑම
            මගින් හෝ සෙවන දී තිබුණු ශාක මිය යෑම මගින් බීජ ප්‍රරෝහණයට උචිත ආලෝක
            තීව්‍රතාව ළගා වේ.{"\n"}
            {"\n"}රතු ආලෝකය (660nm තරංග ආයාමය) බීජ ප්‍රරෝහන ප්‍රතිශතය වැඩි කරන
            අතර,ධූර රක්ත කිරණ (තරංග ආයාමය 730nm) බීජ ප්‍රරෝහණය නිශේධනය කරයි.
            {"\n"}
            {"\n"}ප්‍රභා ප්‍රතිග්‍රාහක මෙයට බලපානු ලැබේ.{"\n"}
            {"\n"}බීජ ප්‍රරෝහණයයේදී බීජ පැළය පස මතුපිටට පැමිණි පසු බීජධරය
            දික්වීම නිශේධනය නිල් ප්‍රභා ප්‍රතිග්‍රාහක මගින් සිදුවේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            ශාක පරතරය පවත්වා ගැනීමට ආලෝකයේ බලපෑම.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ෆයිටොක්‍රෝම් මගින් ආලෝකයේ තත්ත්වය පිළිබඳ ශාකයට තොරතුරු ලබාදේ.{"\n"}
            {"\n"}
            ඉන් ශාකයට පිටත ඇති ආලෝක තත්වය ඒ වෙනස්වීම් වලට අනුව අනුවර්තනය වේ.
            {"\n"}
            උදා:- වනාන්තරයක වියන් ස්තරයට යටින් ඇති සාපේක්ෂව ඉහළ ආලෝක තීව්‍රතාවක්
            අවශ්‍ය ශාකයක සෙවන මග හැරීමේ ප්‍රතිචාරය දැක්වීම.{"\n"}
            {"\n"}වනාන්තරයෙහි වියන රතු ආලෝකය විශාල වශයෙන් අවශෝෂණය කරයි.{"\n"}
            {"\n"}ඒ නිසා ධූර රක්ත කිරණ පමණක් ඒ හරහා ගමන් කරයි.{"\n"}
            {"\n"}එම ධූර රක්ත කිරණ හේතුවෙන් වියනට යටින් ඇති ශාකය උසින් වර්ධනය
            වීමට වැඩ සම්පත් ප්‍රමාණයක් වෙන් කරයි.{"\n"}
            {"\n"}මීට සාපේක්ෂව ආලෝකයට සෘජුව නිරාවරණය වී ධූර රක්ත කිරණවලට රතු
            ආලෝකය අනුපාතය වැඩි වේ.{"\n"}
            {"\n"}එමගින් අතු බෙදීම උත්තේජනයවේ.{"\n"}
            {"\n"}ශාක උස වැඩිවීම නිෂේධනය වේ.පුෂ්ප හටගැනීමට ආලෝකය බලපෑම.{"\n"}
            {"\n"}පැය 24 ක කාලය තුළ ශාකය ආලෝකයට නිරාවරණය වන කාලය ප්‍රකාශ
            අවධියයි.{"\n"}
            {"\n"}ප්‍රකාශ අවධිය බොහෝ ශාකවල පුෂ්ප හටගැනීම පාලනය කරයි.{"\n"}
            {"\n"}ප්‍රභා ප්‍රතිග්‍රාහක මගින් පාලනය වේ.(ධූර රක්ත කිරණ : රතු ආලෝක
            තරංග ආයාම අනුපාතය)
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            ප්‍රරෝහ දික්වීම හා ප්‍රභාවර්තනය
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ශාක ප්‍රරෝහය ආලෝකය දෙසට (ධන) හෝ ආලෝකයෙන් ඉවතට (සෘණ) හෝ වර්ධනය
            ප්‍රභාවර්තනයයි.{"\n"}
            {"\n"}ධන ප්‍රභාවර්ති ලෙස වර්ධනය වීමෙන් ප්‍රභාසංස්ලේෂණයට වඩා ශක්තිමත්
            කරයි.{"\n"}
            {"\n"}ප්‍රරෝහයේ ප්‍රතිවිරුද්ධ පැතිවල සෛල විෂමාකාර වර්ධනය හේතුවෙන් මේ
            ප්‍රතිචාරය පවත්වා ගනියි.{"\n"}
            {"\n"}ආලෝකය ලැබෙන පැත්තේ සෛල දික්වන වේගයට වඩා ආලෝකය නොලැබෙන පැත්තේ
            සෛල දික්වෙන වේගය වඩා වැඩිය.{"\n"}
            {"\n"}ෆයිටොක්‍රෝම් / නිල් ආලෝක ප්‍රභාප්‍රතිග්‍රාහක සම්බන්ධ වීම.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les4Sub19;
