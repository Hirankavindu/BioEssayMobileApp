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

const Les4Sub17 = () => {
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
            පූටිකා ක්‍රියාකාරීත්වයට බලපාන සාධක (කෙටි සටහන).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            දිවා කාලයේ කාලයේදි පුටිකා විවෘත වේ.{"\n"}
            {"\n"}බොහෝවිට රාත්‍රී කාලයට වැසී යයි.{"\n"}
            {"\n"}ආලෝකය පාලක සෛල තුළ K+ එක්රැස් වීම උත්තේජනය කරයි.{"\n"}
            {"\n"}
            අධංපුටිකා කුටීර තුල CO2 සාන්ද්‍රණය අඩු වීම නිසා පූටිකා විවෘත වේ.
            {"\n"}
            {"\n"}
            පාලක සෛලවල අභ්‍යන්තර ඝටිකාව මගින් පූටිකා සිදුරු විවෘත වීම හා වැසීමේ
            දෛනික රිද්මය පාලනය කරයි.{"\n"}
            {"\n"}නියගය, අධික උෂ්ණත්වය හා සුළං වැනි පාරිසරික ආතති තත්ත්ව මගින්
            දිවා කාලය තුළ පූටිකා වැසෙයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ප්ලෝයම පරිවහනයේ මූලික ලක්ෂණ (කෙටි සටහන).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ප්‍රභාසංස්ලේෂණයේදී නිපදවන ඵල පරිවහනය ප්ලෝයම පටකය මගින් සිදුවේ.{"\n"}
            {"\n"}
            එය ප්ලෝයම පරිසංක්‍රමණයයි.{"\n"}
            {"\n"}ආවෘත බීජක ශාකවල ප්ලෝයම පෙනේර නල ඒකක පරිසංක්‍රමණයට විශේෂණය වී
            ඇත.{"\n"}
            {"\n"}ප්ලෝයම යුෂය පෙනේර නල තුළින් ගලා යන ජලීය ද්‍රාවණයකි.{"\n"}
            {"\n"}එය ශෛලම යුෂයට වඩා වෙනස්ය.{"\n"}
            {"\n"}මෙහි ප්‍රධානතම වෙනස මේ යුෂයේ බරෙන් 30% ක් සුක්රෝස් ය.{"\n"}
            {"\n"}
            ඇමයිනෝ අම්ල ,හෝර්මෝන හා ඛනිජ ද අඩංගුය.{"\n"}
            {"\n"}ප්ලෝයම යුෂය ගමන් කරන්නේ සීනි නිපදවන ස්ථානය සිට සීනි භාවිතයට
            ගන්නා හෝ සංචිත කරන ස්ථාන වෙතටය.{"\n"}
            {"\n"}පරිසංක්‍රමණය වනුයේ සීනි ප්‍රභවයේ සිට සීනි අපායනය දක්වාය.{"\n"}
            {"\n"}
            ප්‍රභාසංස්ලේෂණය මගින් හෝ පිෂ්ඨය බිඳහෙළීම මගින් ශුද්ධ සීනි නිෂ්පාදකයා
            ලෙස ක්‍රියාකරන අවයව සීනි ප්‍රභවයයි.{"\n"}
            {"\n"}ශාක පත්‍ර ප්‍රභවය වේ.{"\n"}
            {"\n"}වර්ධනය වන මුල්, අංකුර, කඳන් හා ඵල අපායනය වේ.{"\n"}
            {"\n"}පිෂ්ටය සංචිත කරන ආකන්ධ හා බල්බ වැනි දේ කෘතිය මත ප්‍රභවය හෝ
            අපායනය ලෙස ක්‍රියා කරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            බිංදුදය (කෙටි සටහන).
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ඇතැම් ආකාෂ්ඨය ශාකවල පත්‍ර දාරයෙන් හෝ පත්‍ර තුඩුවලින් ජලය බිංදු ලෙස
            බැහැර කරවීමේ සංසිද්ධිය බිංදුදයයි.{"\n"}
            {"\n"}බිංදුදය නිසා බැහැරවන ද්‍රව ජල බින්දු පිනි බිංදු වලින් වෙනස්ය.
            {"\n"}
            {"\n"}පිනි බිංදු වායුගෝලයේ ඇති ජලවාෂ්ප ඝනීභවනයෙන් සෑදෙයි.{"\n"}
            {"\n"}බොහෝ ශාකවල මූල පීඩනයක් ඇති නොවන නිසා බිංදුදය නොවේ.{"\n"}
            {"\n"}
            උත්ස්වේදනය මගින් ශෛලම යුෂ ඉහලට අදියි. තල්ලු කිරීමක් සිදු නොවේ.{"\n"}
            {"\n"}
            මේ නිසා දහවල් කාලයේ දී බිංදුදය දැකිය නොහැක. ශාක තුල මීටර ගණනක් දුරට
            ජලය ගෙනයාමට මූල පීඩනය ප්‍රමාණවත් නොවෙයි.{"\n"}
            {"\n"}බිංදුදය සිදුවන්නේ කුඩා ශාඛා නාරටි අසල දක්නට ලැබෙන විශේෂිත සෛල
            කාණ්ඩ වලින් සෑදුනු ජල ජිද්‍ර නම් විශේෂ සිදුරු තුළිනි.{"\n"}
            {"\n"}එය පූටිකා හරහා සිදු නොවේ.{"\n"}උදා:- Alocasia , Colacasia
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub17;
