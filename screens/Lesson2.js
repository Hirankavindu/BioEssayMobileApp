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
import { Back, BackBox, Hero1, Hero2 } from "../assets";

const Lesson2 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="relative flex-1">
      <ScrollView verticle={true} showsVerticalScrollIndicator={false}>
        {/* Banner Start */}
        <View className="h-96 bg-[#FFD099] flex-col">
          {/* Back Button start */}
          <View className="px-3 pt-5 h-96">
            <View className="flex-row">
              <TouchableOpacity
                className="items-center"
                onPress={() => navigation.navigate("Home1")}
              >
                <Image source={BackBox} width={200} height={30} />
              </TouchableOpacity>
            </View>
          </View>
          {/* Back Button End */}

          {/* Hero Image Start */}
          <View className="absolute inset-y-0 right-0 justify-end ">
            <Image source={Hero2} className="w-[328] h-[350] " />
          </View>
          {/* Heo Image end */}
        </View>
        {/* banner end */}

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
        <View className="px-3">
          {/* Sub Lesson 1 start */}
          <TouchableOpacity
            className="justify-center w-full h-16 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub1")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  කාබෝහයිඩ්‍රේට වල මූලික රසායනික ස්වභාවය හා විවිධත්වය විස්තර
                  කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 1 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-16 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub2")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  කාබෝහයිඩ්‍රේට වල ප්‍රධාන කෘත්‍යය මොනවාදැයි උදාහරණ සහිතව
                  දක්වන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 3 start */}
          <TouchableOpacity
            className="justify-center w-full h-32 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub3")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ලිපිඩවල මූලික රසායනික ස්වභාවය හා එක් එක් ලිපිඩ වර්ග වල
                  ලාක්ෂණික ලක්ෂණ විස්තර කරන්න.{"\n"}උදාහරණ සහිතව ලිපිඩ මඟින්
                  ඉටුකරන කෘත්‍යය ලියන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 3 end */}

          {/* Sub Lesson 5 start */}
          <TouchableOpacity
            className="justify-center w-full h-32 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub4")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ප්‍රෝටීන වල මූලික රසායනික ස්වභාවය සහ ප්‍රෝටීන වල ව්‍යුහ මට්ටම්
                  සැකැසුම විස්තර කරන්න.{"\n"}උදාහරණ සහිතව ප්‍රෝටීන වල කෘත්‍යය
                  විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 5 end */}

          {/* Sub Lesson 7 start */}
          <TouchableOpacity
            className="justify-center w-full h-32 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Lesson1")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  නියුක්ලියෝසයිඩ, නියුක්ලියෝටයිඩ හා පොලිනියුක්ලියෝටයිඩ පිළිබඳව
                  විස්තර කරන්න.{"\n"}
                  DNA අණුවේ හා RNA අණුවේ ව්‍යූහය විස්තර කරමින් ඒවා එකිනෙක වෙනස්
                  වන අයුරු පැහැදිලි කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 7 end */}

          {/* Sub Lesson 9 start */}
          <TouchableOpacity
            className="justify-center w-full h-20 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub6")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  සංයුක්ත ආලෝක අන්වීක්ෂයේ ව්‍යූහය එහි එක් එක් කොටස මඟින් ඉටුකරන
                  කෘත්‍යයට අදාළව විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 9 end */}

          {/* Sub Lesson 10 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub7")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  පොකුණු ජලය ස්වල්පයක් ගෙන එහි ක්ෂුද්‍ර ජීවීන් සිටීදැයි සෙවීම
                  සඳහා අන්වීක්ෂය යොදාගත හැකි පරීක්ෂණාත්මක ක්‍රමයක පියවර
                  අනුපිළිවෙළින් ලියන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 10 end */}

          {/* Sub Lesson 11 start */}
          <TouchableOpacity
            className="justify-center w-full h-32 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub8")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ජීවී ද්‍රව්‍ය වල මූලද්‍රව්‍ය සංයුතිය (කෙටි සටහන්).{"\n"}
                  ප්‍රෝටීන වල දුස්වාභාවීකරණය (කෙටි සටහන්).{"\n"}
                  RNA වර්ග හා කෘත්‍ය (කෙටි සටහන්).{"\n"}නියුක්ලෙයික් අම්ල වලට
                  අමතරව ජීවීන් තුල අඩංගු වන නියුක්ලියෝටයිඩ (කෙටි සටහන්).
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 11 end */}

          {/* Sub Lesson 15 start */}
          <TouchableOpacity
            className="justify-center w-full h-28 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub9")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ප්ලාස්ම පටලයේ ව්‍යූහය පිලිබඳව දැනට පිලිගන්නා ආකෘතිය විස්තර
                  කරන්න.{"\n"}ප්ලාස්ම පටලය මඟින් ඉටුකරන ප්‍රධාන කෘත්‍යන් මොනවද?
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 15 end */}

          {/* Sub Lesson 17 start */}
          <TouchableOpacity
            className="justify-center w-full h-32 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub10")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  දර්ශීය ප්‍රාග්න්‍යෂ්ටික සෛලයක ව්‍යූහය, එම එක් එක් කොටස මඟින්
                  ඉටුකරන කෘත්‍යන්ට අදාළව විස්තර කරන්න.{"\n"}ප්‍රාග්න්‍යෂ්ටික සෛල
                  හා සූන්‍යෂ්ටික සෛල අතර ඇති සමාන- අසමානතා සංසන්දනය කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 17 end */}

          {/* Sub Lesson 19 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub11")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  න්‍යෂ්ටිය පිළිබඳ කෙටි සටහන්.{"\n"}අන්තඃපටල පද්ධතිය පිළිබඳ කෙටි
                  සටහන්.{"\n"}ශාක සෛල බිත්තිය පිළිබඳ කෙටි සටහන්.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 19 end */}

          {/* Sub Lesson 21 start */}
          <TouchableOpacity
            className="justify-center w-full h-28 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub12")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ඉලෙක්ට්‍රෝන අන්වීක්ෂයේ පෙනෙන අයුරු මයිට්‍රොකොන්ඩියාවේ සූක්ෂම
                  ව්‍යූහය විස්තර කරන්න. එම ව්‍යූහයෙන් හරිතලවයේ ව්‍යූහය වෙනස් වන
                  අයුරු විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 21 end */}

          {/* Sub Lesson 22 start */}
          <TouchableOpacity
            className="justify-center w-full h-20 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub13")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  සත්ත්ව සෛල වල බහිස් සෛලීය පූරකය(ECM) පිළිබඳ කෙටිසටහන්.{"\n"}
                  සෛල සන්ධි පිලිබඳ කෙටි සටහන්.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 22 end */}

          {/* Sub Lesson 25 start */}
          <TouchableOpacity
            className="justify-center w-full h-32 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub14")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  සෛල චක්‍රය යනු කුමක්ද?{"\n"}සූන්‍යෂ්ටික සෛල චක්‍රයේ පියවර
                  අනුපිළිවෙළින් විස්තර කරමින් මාතෘ සෛලයේ විභාජනයෙන් දුහිතෘ සෛල
                  දෙකක් ඇති වන අයුරු විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 25 end */}

          {/* Sub Lesson 26 start */}
          <TouchableOpacity
            className="justify-center w-full h-28 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub15")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  පිළිකා අර්බුද හා ගඩු වල ලක්ෂණ විස්තර කරමින් ඒවා ඇතිකිරීම සඳහා
                  පාලනයකින් තොරව සිදුවන වේගවත් නූතන විභාජනයට දායක වන අයුරු
                  විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 26 end */}

          {/* Sub Lesson 27 start */}
          <TouchableOpacity
            className="justify-center w-full h-28 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub16")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ඌනනය යනු කුමක්ද?{"\n"}ඌනනයේ පළමු විභාජනය මඟින් මාතෘ සෛලයේ
                  වර්ණදේහ සංඛ්‍යාවෙන් අඩක් දරණ න්‍යෂ්ටි යුගලක් නිර්මාණය වන අයුරු
                  විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 27 end */}

          {/* Sub Lesson 28 start */}
          <TouchableOpacity
            className="justify-center w-full h-36 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub17")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ජීවී පද්ධති සඳහා ශක්තියේ අවශ්‍යතාවය විස්තර කරන්න.{"\n"}
                  සංවෘත්තිය ප්‍රතික්‍රියා හා අපවෘත්තිය ප්‍රතික්‍රියා යනු
                  මොනවාදැයි උදාහරණ සහිතව විස්තර කරන්න.{"\n"}සර්වත්‍ර ශක්ති
                  හුවමාරු ඒකකය ලෙස ATP හි කාර්යයභාරය විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 28 end */}

          {/* Sub Lesson 29 start */}
          <TouchableOpacity
            className="justify-center w-full h-28 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub18")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  එන්සයිම වල සාමාන්‍ය ලාක්ෂණික ගුණ විස්තර කරන්න.{"\n"}එන්සයිම
                  ප්‍රතික්‍රියා සඳහා බලපාන සාධක විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 29 end */}

          {/* Sub Lesson 30 start */}
          <TouchableOpacity
            className="justify-center w-full h-28 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub19")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ප්‍රභාසංස්ලේෂක වර්ණක, ප්‍රභා පද්ධති ලෙස සැකසී ඇති ආකාරය විස්තර
                  කරන්න.{"\n"}ප‍රභාසංස්ලේෂණයේ ආලෝකය මත රඳා පවතින ප්‍රතික්‍රියාව
                  විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 30 end */}

          {/* Sub Lesson 31 start */}
          <TouchableOpacity
            className="justify-center w-full h-32 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub20")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  අනූනන විභාජනය හා ඌනන විභාජනය අතර වෙනස්කම් (කෙටි සටහන්).{"\n"}
                  සූන්‍යෂ්ටික වර්ණදේහක මූලික ව්‍යූහය (කෙටි සටහන්).{'\n'}එන්සයිම
                  ක්‍රියාකාරිත්වය සඳහා සහසාධක වල වැදගත්කම(කෙටි සටහන්).
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 31 end */}

          {/* Sub Lesson 32 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub21")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  C3 ශාකයක ශාක පත්‍රයක පූටිකවක් තුලින් ඇතුළු වූ Co2 අණුවක්
                  ග්ලූකෝස් බවට පරිවර්තනය වීම දක්වා ක්‍රියාපිළිවෙල විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 32 end */}

          {/* Sub Lesson 33 start */}
          <TouchableOpacity
            className="justify-center w-full h-28 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub22")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ප්‍රභා ශ්වසනයේ අහිතකර බලපෑම් සහ එය අවම කරගැනීම සඳහා ශාක විසින්
                  ඇතිකරගත් අනුවර්තනයක් ලෙස C4 පථයේ දායකත්වය විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 33 end */}

          {/* Sub Lesson 34 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub23")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ප්ප්‍රභාසංස්ලේෂණයේ C4 පථයේ පියවර අනුපිළිවෙළ විස්තර කරන්න.
                  {"\n"}C4 පථයේ වැදගත්කම විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 34 end */}

          {/* Sub Lesson 35 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub24")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  එක් ග්ලූකෝස් අණුවක් ස්වායු ශ්වසනයට ලක්වීමට අදාළව
                  මයිට්‍රොකොන්ඩියාක් තුල සිදුවන ප්‍රතික්‍රියා විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 35 end */}

          {/* Sub Lesson 36 start */}
          <TouchableOpacity
            className="justify-center w-full h-32 rounded-lg bg-[#744e1f] mt-3"
            onPress={() => navigation.navigate("Les2Sub25")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ප්‍රභාසංස්ලේෂක වර්ණක පිලිබඳ කෙටි සටහන්{"\n"}C4 පථය හා C3 පථය
                  අතර ඇති වෙනස්කම් පිළිබඳ කෙටි සටහන්.{"\n"}ප්‍රභාසංස්ලේෂණයට
                  බලපාන සාධක පිලිබඳ කෙටි සටහන්
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 36 end */}

          {/* Sub Lesson 37 start */}
          <TouchableOpacity
            className="justify-center w-full h-32 rounded-lg bg-[#744e1f] mt-3 mb-10"
            onPress={() => navigation.navigate("Les2Sub26")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ග්ලයිකොලිසිය පිලිබඳ කෙටි සටහන්.{"\n"}එතිල් මධ්‍යසාර පැසීම සහ
                  ලැක්ටික් අම්ල පැසීම පිලිබඳ කෙටි සටහන්.{"\n"}සෛලීය ශ්වසනයේදී
                  වෙනත් උපස්තර භාවිතය පිලිබඳ කෙටි සටහන්.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 37 end */}
        </View>
        {/* Lesson Category end */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson2;
