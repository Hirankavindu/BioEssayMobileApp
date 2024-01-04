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

const Les4Sub18 = () => {
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
            ශාකවල පෝෂණ ක්‍රියාවලි වල පවතින විවිධත්වය උදාහරණ ඇසුරෙන් විස්තර
            කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ජීවීන්ගේ පරිවෘත්තීය ක්‍රියා සදහා අවශ්‍ය ශක්තිය හා අමුද්‍රව්‍ය
            පරිසරයෙන් ලබා ගන්නා ක්‍රියාවලිය පෝෂණයයි.{"\n"}
            {"\n"}ශාකවල වර්ධනය, විකසනය හා ප්‍රජනනයට පෝෂක අවශ්‍ය වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            ස්වයංපෝෂී පෝෂණ ක්‍රමය /ස්වයංපෝෂකතාවය
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ස්වයංපෝෂකතාව දක්වන ජීවීහු ස්වයංපෝෂීන් ලෙස හදුන්වයි.{"\n"}
            {"\n"}ස්වයංපෝෂීන් CO2 හා අකාබනික ද්‍රව්‍ය මගින් කාබනික ආහාර
            සංස්ලේෂණය කරයි.{"\n"}
            {"\n"}ශාක ප්‍රභාස්වයංපෝෂීන් වේ.{"\n"}
            {"\n"}ප්‍රභා ස්වයංපෝෂීහු ආලෝක ශක්තිය හා අකාබනික ද්‍රව්‍ය භාවිතයෙන්
            කාබනික අණු සංස්ලේෂණය කරති.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">සහජීවනය</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            විශේෂ දෙකකට අයත් ජීවීන් දෙදෙනෙකු සමීපව ජීවත් වෙමින් පවත්වා ගන්නා
            පාරිසරික සබඳතාව සහජීවනයයි.සහජීවනයේ ආකාර තුනකි
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            අන්‍යෝන්‍යාධාරය
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ඡීවීන් දෙදෙනාටම වාසි සැලසෙන සහජීවී සබඳතාවකි.{"\n"}උදා:- රනිල
            මූලගැටිති හා ඒවා තුළ වාසය කරන N2 තිර කරන බැක්ටීරියා- Rhizobium{"\n"}
            {"\n"}
            උසස් ශාක මුල් හා දිලීර අතර පවතින දිලීරක මුල සංගමය.{"\n"}
            {"\n"}Cycas කොරල් හැඩ මුල් හා Anabaena අතර පවතින සංගමය.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            සහභෝජීතාව
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            එක් ජීවී විශේෂයකට පමණක් වාසි සැලසෙන ලෙසත් අනෙක් විශේෂයකට බලපෑමක්
            (හානියක් හෝ වාසියක්) ඇති නොවන ලෙසත් ජීවී විශේෂ දෙකක් අතර පවතින
            අන්තර් ක්‍රියාවකි.{"\n"}උදා:- අපිශාකී ඕකිඩ්.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            පරපෝෂීතාවය
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            එක් ජීවී විශේෂයකට පමණක් වාසි සැලසෙන ලෙසත් (පරපෝෂිතයා) අනෙක් විශේෂයට
            හානිවන ලෙසත් ජීවී විශේෂ දෙකක් අතර පවතින සමීප සම්බන්ධතාවයයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            අර්ධ පරපෝෂීහු
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            Loranthus(පිළිල) හා ධාරක ශාක
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            පූර්ණ පරපෝෂීහු
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">Cuscuta හා ධාරක ශාක</Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub18;
