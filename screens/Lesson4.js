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
import { Back, BackBox, Hero1, Hero2 } from "../assets";

const Lesson4 = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="relative flex-1">
      <ScrollView vertical={true} showsVerticalScrollIndicator={false}>
        {/* Banner Start */}
        <View className="h-96 bg-[#BBAB8C] flex-col">
          {/* Back Button start */}
          <View className="px-3 pt-12 h-96">
            <View className="flex-row">
              <TouchableOpacity
                className="items-center"
                onPress={() => navigation.navigate("Home")}
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
        <View className="h-20 bg-[#755a25] flex-col justify-center">
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
        <View className="px-3">
          {/* Sub Lesson 1 start */}
          <TouchableOpacity
            className="justify-center w-full h-36 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub1")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ශාක කඳෙහි ප්‍රරෝහාග්‍රයේ ව්‍යුහය සහ එහි ප්‍රාථමික වර්ධනය
                  සිදුවන ආකාරයත් මුලෙහි ප්‍රාථමික වර්ධනය සිදුවන ආකාරයත් විස්තර
                  කරන්න.{"\n"}මුල් අග්‍රස්ථයේ ව්‍යුහය ප්‍රරෝහ අග්‍රස්ථයෙන් වෙනස්
                  වන ලක්ෂණ මොනවාද.?
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
            className="justify-center w-full h-20 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub2")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ශාක දේහයක දක්නට ලැබෙන පූර්ක පටක පද්ධතියේ සංරචක වල මූලික ලක්ෂණ
                  විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub3")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ශාක දේහයක දක්නට ලැබෙන සනාල පටක පද්ධතියේ සංරචක වල ව්‍යුහය, ඒවා
                  මගින් ඉටු කරන කෘත්‍යට අදාළව සැකසී ඇති අයුරු විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub4")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ද්වීබීජ පත්‍රී ශාක මුලෙහි දර්ශීය ව්‍යුහය විස්තර කරන්න.{"\n"}ඒක
                  බීජ පත්‍රී ශාක මුලෙහි ව්‍යුහය ඉන් වෙනස් වන්නේ කවර ලක්ෂණ
                  හේතුවෙන් ද.?
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub5")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  දිවීබීජපත්‍රී ශාක කද ඒ දර්ශීය ව්‍යුහය විස්තර කරන්න.{"\n"}ඒක
                  බීජ පත්‍රී ශාක කදෙහි ව්‍යුහය ඉන් වෙනස් වන්නේ කවර ලක්ෂණ
                  හේතුවෙන් ද.?
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub6")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ශාක දේහයක දක්නට ලැබෙන සනාල පටක පද්ධතියේ සංරචක වල ව්‍යුහය, ඒවා
                  මගින් ඉටු කරන කෘත්‍යට අදාළව සැකසී ඇති අයුරු විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub7")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ද්වීබීජ පත්‍රී ශාක මුලෙහි දර්ශීය ව්‍යුහය විස්තර කරන්න.{"\n"}ඒක
                  බීජ පත්‍රී ශාක මුලෙහි ව්‍යුහය ඉන් වෙනස් වන්නේ කවර ලක්ෂණ
                  හේතුවෙන් ද?
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-16 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub8")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ද්විබීජ පත්‍රී ශාක කදෙහි ද්විතීක වර්ධනය මගින් පරිණත අවධිය ට
                  එළඹෙන අයුරු විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-56 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub9")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  මූල පද්ධතිය හා ප්‍රරෝහ පද්ධතිය (කෙටි සටහන්).{"\n"}විභාජක පටක
                  වල මූලික ලක්ෂණ (කෙටි සටහන්).{"\n"}
                  මූලික විබාජක පටක වර්ග (කෙටි සටහන්).{"\n"}ප්‍රරෝහ අග්‍රයේ හා
                  මූලාග්‍රයේ වෙනස්කම් (කෙටි සටහන්).{"\n"}චර්මීය පටක පද්ධතිය
                  (කෙටි සටහන්).{"\n"}අරටුව සහ එලය (කෙටි සටහන්).{"\n"}වර්ධක වලයන්
                  (කෙටි සටහන්).{"\n"}ආලෝක ප්‍රතිග්‍රහණය සඳහා ප්‍රරෝහ නිර්මාණය වී
                  ඇති ආකාරය (කෙටි සටහන්).
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-32 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub10")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  දර්ශීය ද්වී බීජ පත්‍රී ශාක පත්‍රයක ව්‍යුහය එමඟින් ඉටුකරන
                  කෘත්‍යට අදාළව හැඩගැසී ඇති ආකාරය විස්තර කරන්න.{"\n"}
                  ඒක බීජ පත්‍රී ශාක පත්‍රයක ව්‍යුහය ඉන් වෙනස් වන අයුරු විස්තර
                  කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub11")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  පූටිකා වල ව්‍යුහය එමඟින් ඉටු කරන්න කෘතියට අදාළව හැඩගැසී ඇති
                  ආකාරය විස්තර කරන්න.{"\n"}
                  දැනට පිළිගන්නා මතයට අනුව පූටිකා චලන යාන්ත්‍රණය සිදුවන අයුරු
                  විස්තරකරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub12")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ශාක දේහ තුළ ද්‍රව්‍ය පරිවහනයේ අවශ්‍යතාවය විස්තර කරන්න.{"\n"}
                  ශාක දේහ තුළින් ද්‍රව්‍ය පරිවහනය සිදුවන ප්‍රධාන ක්‍රම සංසන්දනය
                  කරමින් විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-36 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub13")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ජල විභවය යනු කුමක්දැයි හඳුන්වා එහි සංරචක සහ ඒවා විචලනයට හේතු
                  වන සාධක විස්තර කරන්න.{"\n"}
                  විශුනශාක සෛලයක් සංශුද්ධ ජලයේ ගිල්වා ඇති විට ජලවිභව සමීකරණයේ
                  සංඝටක වල සිදුවන වෙනස්කම් විස්සර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-20 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub14")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  පාංශු ද්‍රාවණයේ සිට ජලය අවශෝෂණය වීම්ත්, එම ජලය මුලෙහි ශෛලම
                  දක්වා පරිවහනය වීමත් සිදුවන අයුරු විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub15")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ශෛලම පටකයේ ව්‍යුහය විස්තර කරන්න.{"\n"}ශාකයේ ජලය සහ ඛනිජ ලවණ
                  උඩුකුරු සන්නයනය හෙවත් රසෝද්ගමනය සිදුවන යාන්ත්‍රණය විස්තර
                  කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-20 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub16")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ප්ලෝයම පටකයේ ව්‍යුහය විස්තර කරන්න.{"\n"}ප්ලෝයම පරිසංක්‍රමණය
                  යාන්ත්‍රණය විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-28 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub17")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  පූටිකා ක්‍රියාකාරීත්වයට බලපාන සාධක (කෙටි සටහන).{"\n"}ප්ලෝයම
                  පරිවහනයේ මූලික ලක්ෂණ (කෙටි සටහන).{"\n"} බිංදුදය (කෙටි සටහන).
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-16 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub18")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ශාකවල පෝෂණ ක්‍රියාවලි වල පවතින විවිධත්වය උදාහරණ ඇසුරෙන් විස්තර
                  කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-20 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub19")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ප්‍රභාරූපජනනය මගින් ආලෝක උත්තේජ වලට අනුව ශාක දේහයක් විවිධ
                  ප්‍රතිචාර දක්වන අයුරු විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-20 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub20")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  විවිධ උත්තේජන වලට ප්‍රතිචාර දැක්වීමේදී ශාක වර්ධක ද්‍රව්‍ය /
                  ශාක හෝමෝන වල දායකත්වය විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#3a301c] mt-3"
            onPress={() => navigation.navigate("Les4Sub21")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  නියං ආතතිය, ශීත ආතතිය, ලවණ ආතතිය සහ ජෛවීය ආතතිය යන තත්වයන් ඇති
                  වන ආකාරය සහ ඒවා අවම කර ගැනීමට ශාක දරන අනුවර්තන විස්තර කරන්න.
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}

          {/* Sub Lesson 2 start */}
          <TouchableOpacity
            className="justify-center w-full h-24 rounded-lg bg-[#3a301c] mt-3 mb-5"
            onPress={() => navigation.navigate("Les4Sub22")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  තුලාෂ්ම කල්පිතය (කෙටි සටහන).{"\n"}ශාක යාන්ත්‍රික උත්තේජන වලට
                  ප්‍රතිචාර දැක්වීම (කෙටි සටහන).{"\n"}ජෛවය ආතති (කෙටි සටහන).
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson4;
