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

const Les4Sub7 = () => {
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
            ද්වීබීජ පත්‍රී ශාක මුලෙහි දර්ශීය ව්‍යුහය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ප්‍රාථමික මුල් එහි පිටතින් ඇති සෛල ස්ථරය අපි චර්ම යයි.{"\n"}
            {"\n"}ඇතැම් අපිචර්මීය ශාක වල පිටතට වැඩෙන ඇඟිලි ආකාර ප්‍රසර මූල කේශ
            නම් වේ.{"\n"}
            {"\n"}අපිචර්මය මගින් මුල් එහි අභ්‍යන්තර කොටස් ආරක්ෂා වෙයි.{"\n"}
            {"\n"}
            මූලකේශ ජලය හා ඛනිජ අවශෝෂණයට දායක වේ.{"\n"}
            {"\n"}අපිචර්මය හා සනාල සිලින්ඩරය අතර බාහිකය ලෙස හඳුන්වන පූරක පටකය
            දක්නට ලැබේ.{"\n"}
            {"\n"}එය ප්‍රධාන වශයෙන් ම අන්තර් සෛලීය අවකාශ සහිත මෘදුස්තර සෛල වලින්
            සෑදී ඇත.{"\n"}
            {"\n"}බාහිකය ප්‍රධාන වශයෙන් කාබෝහයිඩ්‍රේට සංචිත කරයි.{"\n"}
            {"\n"}ජලය හා ඛනිජ අයන ශාකය අන්තස්චර්මය දෙසට පරිවරනය කරයි.{"\n"}
            {"\n"}
            බාහිකයේ ඇතුළතම ස්තරය අන්තශ්චර්මය යි.{"\n"}
            {"\n"}එය තනි ශෛල ස්තරයකි.{"\n"}
            {"\n"}අන්තශ්චර්මය casparian පටිය නම් සුභෙරිනීභවනය වූ පටයක් දරයි.
            {"\n"}
            {"\n"}අන්තර් සෛලීය අවකාශ නොදරයි.{"\n"}
            {"\n"}අන්තශ්චර්මය මගින් බාහික ඇපෝප්ලාස්ටය සනාල ඇපෝප්ලාස්ටයෙන් වෙන්
            කරයි.{"\n"}
            {"\n"}අන්තශ්චර්මය ට ඇතුලතින් පරිචක්‍රය පිහිටයි.{"\n"}
            {"\n"}සෛල මෘදුස්තර සෛල ස්තර දෙකකින් හෝ තුනකින් සෑදී ඇත.
            {"\n"}
            {"\n"}ද්වීබීජපත්‍රී ශාක මුල් වල මේ සෛලවලට විභාජනය වීමේ හැකියාවක් ඇත.
            {"\n"}
            {"\n"}ශාක මුලෙහි පාර්ශික මුල් හට ගැනීමටත්,ද්විතීක වර්ධනය සිදු
            කිරීමටත් දායක වේ.{"\n"}
            {"\n"}පරිචක්‍රයටඇතුළතින් සනාල පටකය ඝන මධ්‍ය හරයක් ලෙස දක්නට ලැබේ.
            {"\n"}
            {"\n"}ද්වීබීජ පත්‍රී ශාක මුලක හරස්කඩ මධ්‍යයෙහි ශෛලම තරුවක හැඩයට
            දක්නට ලැබේ.{"\n"}
            {"\n"}ශෛලම පටකයේ බහු අතර,ඇලියක් බඳු ප්‍රදේශයේ ප්ලෝයම පටකය පිහිටයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ඒක බීජ පත්‍රී ශාක මුලෙහි ව්‍යුහය ඉන් වෙනස් වන්නේ කවර ලක්ෂණ හේතුවෙන්
            ද?
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සනාල පටක මධ්‍යයෙහි මෘදුස්තර සෛල වලින් සැදුණු හරයක් ඇත.{"\n"}
            {"\n"}එය වට කරමින් සනාල පටක වලයක් ලෙස පිහිටයි.{"\n"}
            {"\n"}ශෛලම හා ප්ලෝයම පටක මාරුවෙන් මාරුවට පිහිටයි.{"\n"}
            {"\n"}මෙහි පරිචක්‍රයට විභාජනය වීමේ හැකියාවක් නැත.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub7;
