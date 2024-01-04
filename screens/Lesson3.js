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

const Lesson3 = () => {
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
        <View className="h-96 bg-[#FFC0D9] flex-col">
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
        <View className="h-20 bg-[#de4c86] flex-col justify-center">
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
        <View className="px-3">
          {/* Sub Lesson 1 start */}
          <TouchableOpacity
            className="justify-center w-full h-36 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub1")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ජීවය ආරම්භ වීමට පෙර පෘථිවියේ පැවති තත්ත්වය විස්තර කරන්න.{"\n"}
                  ජෛව රසායනික පරිණාමයට අනුව, ජීවයේ සම්භවය සිදුවීම හා වර්ථමානයේ
                  පවතින ජෛව විවිධත්වය දක්වා ක්‍රමිකව පරිණාමය වූ ආකාරය සැකවින්
                  විස්තර කරන්න.
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
            className="justify-center w-full h-20 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub2")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ජෛව විවිධත්ව පරිණාමයේදී එක් එක් භූ විද්‍යාත්මක ඉයෝන / කල්ප සහ
                  යුග වලදී සිදුවූ සිදුවීම් විස්තර කරන්න.
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
            className="justify-center w-full h-24 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub3")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  කෙටිගෙල ජිරාෆයන් ගහණයකින් දිගු ගෙල ජිරාෆයන් ගහණයක් ඇතිවන අයුරු
                  ලැමාක්වාදය ඇසුරින් සහ ඩාවින්වාදය ඇසුරින් වෙන් වෙනම විස්තර
                  කරන්න
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
            className="justify-center w-full h-40 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub4")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  නූතන ජීවි වර්ගීකරණ පද්ධතිය පදනම් වී ඇති නිර්ණායක මොනවාද?{"\n"}
                  නූතන ජීවී වර්ගීකරණයට අනුව අධිරාජධානි තුනක් යටතේ ජීවීන් බෙදා
                  දැක්වීමේදී යොදාගන්නා නිර්ණායක සහ එක් එක් අධිරාජධනියට අයත්
                  ජීවීන් තුළ එම ලක්ෂණ පවතින ආකාරය විස්තර කරන්න.
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
            className="justify-center w-full h-36 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub5")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ස්වාභාවික වර්ගීකරණය සහ කෘතීම වර්ගීකරණය (කෙටි සටහන්).{"\n"}
                  ද්විපද නාමකරණයේ ජාත්‍යන්තර සංකේත (කෙටි සටහන්).{"\n"}බැක්ටීරියා
                  අධිරාජධානියේ මූලික ලක්ෂණ (කෙටි සටහන්).
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
            className="justify-center w-full h-20 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub6")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ප්‍රොටිස්ටා රාජධානියට අයත් ප්‍රධාන කාණ්ඩවල මූලික ලක්ෂණ , එම
                  එක් එක් කාණ්ඩයේ දර්ශීය ජීවියාගේ ලක්ෂණ අනුව විස්තර කරන්න.
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
            className="justify-center w-full h-12 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub7")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  Pogonatum ජීවන චක්‍රය විස්තර කරන්න
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
            className="justify-center w-full h-20 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub8")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  බීජ රහිත සනාල ශාකවල මූලික ලාක්ෂණික ලක්ෂණ විස්තර කරන්න.{"\n"}
                  Nephrolepis ජීවන චක්‍රය විස්තර කරන්න.
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
            className="justify-center w-full h-32 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub9")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  Selaginella ජීවන චක්‍රය විස්තර කරන්න.{"\n"}Selaginella ශාකය ,
                  Pogonatum ශාකයට සාපේක්ෂව භෞමික පරිසරයට වඩාත් හොදින් අනුවර්ථනය
                  වී ඇති බවට පවතින සාධක මොනවාද?
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
            className="justify-center w-full h-32 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub10")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  බීජක ශාකවල පවතින මූලික ලක්ෂණ විස්තර කරන්න.{"\n"}Phylum
                  Gentophyta ට අයත්වන ශාක අවෘත බීජක ශාකවලට වඩාත් සමීප විවෘත බීජක
                  ශාක ලෙස හැදින්වීමට හේතු මොනවාද?
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
            className="justify-center w-full h-12 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub11")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  Cycas ජීවන චක්‍රය විස්තර කරන්න
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
            className="justify-center w-full h-32 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub12")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ප්‍රධාන දිලීර වංශවල වර්ධක දේහ හා ප්‍රජනක ව්‍යුහ සම්බන්ධව පවතින
                  විවිධත්වය පැහැදිලි කරන්න.{"\n"}දිලීරවල පාරිසරික හා ආර්ථිකමය
                  වැදගත්කම පැහැදිලි කරන්න.
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
            className="justify-center w-full h-20 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub13")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ප්සීලෙන්ටරේටා වංෂයට අයත් සාමාජිකයන් තම ජීවන විලාසය පවත්වා
                  ගැනීමට දරන ව්‍යුහමය අනුවර්තන විස්තර කරන්න.
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
            className="justify-center w-full h-24 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub14")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  කෝඩේට වංෂයේ සංජානාත්මක් ලක්ෂණ විස්තර කරන්න.{"\n"}කෝඩේටා වංෂයට
                  අයත් ප්‍රධාන වර්ගවල මූලික ලක්ෂණ කෙටියෙන් විස්තර කරන්න
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
            className="justify-center w-full h-20 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub15")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ප්ලැටිහෙල්මින්තස් , නෙමටෝඩා හා ඇනලීඩා වංශවලට අයත් ජීවින්ගේ
                  පවතින සමාන -අසමානතා සන්සන්දනය කරන්න.
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
            className="justify-center w-full mb-8 h-14 rounded-lg bg-[#6a1b3b] mt-3"
            onPress={() => navigation.navigate("Les3Sub16")}
          >
            <View className="flex flex-col items-center">
              <View className="flex-row w-full">
                <Text className="pl-3 pr-10 text-sm font-bold text-white">
                  ඇනිමාලියා රාජධානියේ ශ්වසන ව්‍යුහ (කෙටි සටහන්)
                </Text>
                <View className="absolute inset-y-0 right-0 justify-center pr-3 mr-3">
                  <Image source={Back} className="w-[10] h-[15]" />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          {/* Sub Lesson 2 end */}
        </View>
        {/* Lesson Category end */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Lesson3;
