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

const Les4Sub2 = () => {
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
            ශාක දේහයක දක්නට ලැබෙන පූර්ක පටක පද්ධතියේ සංරචක වල මූලික ලක්ෂණ විස්තර
            කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            චර්මීය පටකය හා සනාල පටකය අතර පිහිටයි.{"\n"}
            {"\n"}පිරවුමක් ලෙස ඇත.{"\n"}
            {"\n"}බාහිකය (සනාල පටකයට පිටතින් පිහිටි) හා මජ්ජාව(සනාල පටක ඇතුලතින්
            පිහිටි)යන කොටස් වලින් යුක්තය.{"\n"}
            {"\n"}සංචිත කිරීම ,‍රභාසංස්ලේෂණය,සන්ධාරණය හා කෙටිදුරකට සිදු කරන
            ද්‍රව්‍ය පරිවහනය වැනි කෘත්‍යය කිරීමට විශේෂණය වූ සෛල අඩංගුය.
            {"\n"}
            {"\n"}මෘදුස්තර සෛල,ස්ථුලකෝණාස්තර සෛල,දෘඩස්තර සෛල පූරක පටකය ප්‍රධාන
            සෛල වර්ග තුන වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            මෘදුස්තර සෛල
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            කෘත්‍යමය පරිණත අවධියේ දී සජීවී ය.{"\n"}
            {"\n"}පරිණත සෛලවල ප්‍රාථමික සෛල බිත්තියක් පමණක් ඇත.{"\n"}
            {"\n"}ප්‍රාථමික සෛල බිත්ති සාපේක්ෂව තුනී හා නම්‍යශීලීය.{"\n"}
            {"\n"}බොහෝ සෛලවල ද්විතියික බිත්තිය දැකිය නොහැක.{"\n"}
            {"\n"}විශාල මධ්‍ය රික්තකයක් දක්නට ඇත.{"\n"}
            {"\n"}ශාක තුල සිදුවන බොහෝ පරිවෘත්තිය ක්‍රියා මේ සෛලය තුළ සිදු කරයි.
            18.උදා-විවිධ කාබනික ද්‍රව්‍ය සංස්ලේෂණය.{"\n"}
            {"\n"}ශාක මුල් හා කඳන් තුළ දක්නට ලැබෙන සමහර සෛල තුළ ලව (ශ්වේත ලව)
            අඩංගු වේ.{"\n"}
            {"\n"}ඒවායේ පිෂ්ටය සංචිත කරයි.{"\n"}
            {"\n"}බොහෝම මෘදුස්තර සෛලවලට සුදුසු තත්ත්ව සපයා දුන් විට සෛල විභාජනය
            හා විභේදනය වීමේ හැකියාව ඇත.{"\n"}
            {"\n"}ශාකවල ඇතිවන තුවාල සුව වීමේදී මේ දායක වේ.{"\n"}
            {"\n"}පටක රෝපණයේ දී තනි මෘදුස්තර සෛලයක් මගින් ගුණනය හා විභේදනය විය
            හැකි සෛල ගොනුවක් සෑදීමට ද මේ හැකියාව වැදගත් වේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            ස්ථුලකෝණාස්තර සෛල
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            සාමාන්‍යයෙන් දිගට සෛල වේ.{"\n"}
            {"\n"}මෘදුස්තර සෛලවලට වඩා ඝනකමින් යුතු සෛල බිත්තිය ඇත.{"\n"}
            {"\n"}සෛල බිත්ති අසමාකාර ව ඝන වී ඇත.{"\n"}
            {"\n"}ළපටි ශාක කඳන් හා වෘන්ත වල අපිචර්මයට යටින් බොහෝවිට මෙම සෛල
            රැහැන ආකාරයට පිහිටා ඇත.{"\n"}
            {"\n"}කෘත්‍යමය පරිණත අවධියේ දී ද සජීවී සෛල වේ.{"\n"}
            {"\n"}නම්‍යශීලී වෙයි.{"\n"}
            {"\n"}ඒවා මගින් සන්ධාරණය සැපයන කඳන් හා මුල් සමඟ දික් වීම සිදුවේ.
            {"\n"}
            {"\n"}වර්ධනයට අවහිර නොකර ශාක කඳන් හා පත්‍ර වලට යාන්ත්‍රික සන්ධානය
            සපයයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            දෘඩස්තර සෛල
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            සෛල දික් වීමෙන් පසුව ද්විතීයික සෛල බිත්තිය ඇති වේ.{"\n"}
            {"\n"}ලිග්නින් විශාල ප්‍රමාණයකින් ඝනකම් වූ ද්විතීයික සෛල බිත්ති
            දරයි.{"\n"}
            {"\n"}පරිණත අවධියේ දී මේ සෛල අජීවී ය.{"\n"}
            {"\n"}දෘඩස්තර සෛල වර්ග දෙකක් පවතී ඒවා උපල සෛල හා දෘඩස්ථර තන්තුවේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">උපල සෛල</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            තන්තු වලට වඩා කෙටි හා මහතින් වැඩිය.{"\n"}
            {"\n"}අක්‍රමවත් හැඩයක් දරයි.{"\n"}
            {"\n"}ඒවාට බෙහෙවින් ඝනකම් වූ ලිග්නිභවනය වූ ද්විතීක බිත්ති ඇත.{"\n"}
            {"\n"}වර්ධනය සම්පූර්ණයෙන් නතර වූ ශාක කොටස් වල දැකිය හැක.{"\n"}
            {"\n"}උදා -කටු ලෙස පවතින පලාවරණ වල,බීජාවරණවල ඇතැම් ඵලවල (පෙයාස්
            )මංසලයේ
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">තන්තු</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            සාමාන්‍යයෙන් රැහැන් වැනි සමූහ වශයෙන් පිහිටයි.{"\n"}
            {"\n"}දිගටි ,සිහින්, දෙකෙළවර උල් හැඩයක් ඇත.{"\n"}
            {"\n"}වානිජ වශයෙන් කෙඳි ලබා ගැනීමට ප්‍රයෝජනවත්ය.{"\n"}
            {"\n"}උදා- හන කෙදි,පොල් කෙඳි{"\n"}
            {"\n"}තන්තු හා උපල සෛල ශාකයට සංධාරණය හා ශක්තිය ලබාදීමට විශේෂණය වී
            ඇත.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub2;
