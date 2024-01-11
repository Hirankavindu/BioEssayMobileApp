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

const Les3Sub12 = () => {
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
            ප්‍රධාන දිලීර වංශවල වර්ධක දේහ හා ප්‍රජනක ව්‍යුහ සම්බන්ධව පවතින
            විවිධත්වය පැහැදිලි කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            Phylum Chythtriomycota
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ජලජ හා භෞමික වේ.{"\n"}
            {"\n"}ඇතැම් ආකාර මෘතෝපජීවී හා අනෙක් ආකාර පරපෝෂී වේ.
            {"\n"}
            {"\n"}ඒකසෛලික හා බහු සෛලික වේ.{"\n"}
            {"\n"}බහුසෛලික වූ විට එය සංසෛලික වේ.{"\n"}
            {"\n"}ප්‍රජනනය සදහා කශිකාධර චල බීජාණු නිපදවයි.{"\n"}
            {"\n"}සෛල බිත්තිය කයිටීන් වලින් සෑදී ඇත{"\n"}
            {"\n"}සමහරුන් දිලීර සූත්‍රිකාවලින් ගණාවාස සාදන අතර සමහරු ගෝලාකාර තනි
            සෛල ලෙස පවතී.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            Phylum Zygomycota
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            බොහෝ ජීවීන් මෘතෝපජීවීන්ය.{"\n"}
            {"\n"}සමහරු පරපෝෂී හෝ සහභෝගී වේ.{"\n"}
            {"\n"}දිලීර ජාලය සංසෛලික හා නිරාවාර අතර ප්‍රජනක සෛල සෑදෙන ස්ථානවල
            පමණක් ආවාර ඇති වේ.{"\n"}
            {"\n"}අලිංගික ප්‍රජනනය - ප්‍රවේණිකව සමාන ඒකගුණ බීජාණු නිපදවන
            බීජාණුධානි නිපදවයි.{"\n"}
            {"\n"}ඒවා තුළ අන්තර්ජන්‍යතාව ද බීජාණු නිපදවයි.එම බීජාණු බීජාණුධානි
            බීජාණු නම් වේ.{"\n"}
            {"\n"}ලිංගික ප්‍රජනනය - න්‍යෂ්ටියෝගය හා ප්ලාස්මයෝගය මගින් සෑදෙන දෘඩ
            ව්‍යුහයක් වන සං‍යෝගාණුව නිපදවයි.{"\n"}
            {"\n"}සං‍යෝගාණුව අහිතකර පරිසර තත්ත්ව වලට ප්‍රතිරෝධී වේ.{"\n"}
            {"\n"}
            සං‍යෝගාණුව වියළීම හා අධික සීතලට / මිදීමට ඔරොත්තු දෙන බහුන්‍යෂ්ටික
            ව්‍යුහයකි.{"\n"}
            {"\n"}සං‍යෝගාණුව අහිතකර කාළගුණික තත්ත්ව වලදී පරිවෘත්තීය වශයෙන්
            නිෂ්ක්‍රීය වේ.{"\n"}
            {"\n"}පරිසර තත්ත්ව හිතකර වන විට සං‍යෝගාණුව ප්‍රවේණිකව වෙනස් ඒකගුණ
            බීජාණු නිප්වදවයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            Phylum Ascomycota
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            කරදිය , මිරිදිය හෝ භෞමික ,පරපෝෂී හෝ සහජීවී වේ.{"\n"}
            {"\n"}බොහෝ ආකාර වියෝජකයන්ය.{"\n"}
            {"\n"}ඒකසෛලික හෝ සූත්‍රිකාකාර බහුසෛලිකය වේ.{"\n"}
            {"\n"}අලිංගික ප්‍රජනනයේදී විශේෂිත දිලීර සූත්‍රිකා වර්ගයක්වන කොනිඩිධර
            කෙළෙවර කොනිඩියා නිපදවයි.{"\n"}
            {"\n"}ලිංගික ප්‍රජනනයේදී ලිංගිකව විශේෂිත ජන්මාණුධානි හාවීම හා මඩියක්
            වැනි ව්‍යුහයක් වන අස්කස සෑදේ.{"\n"}
            {"\n"}අස්කස තුළ අස්ක බීජාණු නිපදවයි.{"\n"}
            {"\n"}සාමාන්‍යයෙන් අස්කස තුළ අස්ක බීජාණු 08 ක් ඇත.{"\n"}
            {"\n"}බොහෝ ඇස්කොමයිකොටාවම් විසින් අස්කස සහිත අස්කඵල නිපදවයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            Phylum Basidiomycota
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            භෞමිකය{"\n"}
            {"\n"}ප්‍රධාන වශයෙන් වියෝජකයන්ය.{"\n"}
            {"\n"}සමහරු සහජීවී වේ.{"\n"}
            {"\n"}ආවාර සහිත සූත්‍රිකාමය ද්වීන්‍යෂ්ටික වේ.{"\n"}
            {"\n"}දිලීර ජාලය ජීවන චක්‍රයේ ප්‍රමුඛ වේ.{"\n"}
            {"\n"}ලිංහික ප්‍රජනනයේදී බැසිඩිඵල යන ඵලාවරණ නිපදවයි.{"\n"}
            {"\n"}බැසිඩි ඵලයේ තැලි මත බැසිඩි බීජාණු නිපදවයි.{"\n"}
            {"\n"}බැසිඩි බීජාණු බහිර්ජන්‍යයි.{"\n"}
            {"\n"}අලිංගික ප්‍රජනක ව්‍යුහ සුලභ නොවේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            දිලීරවල පාරිසරික හා ආර්ථිකමය වැදගත්කම පැහැදිලි කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 my-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ප්‍රධාන වියෝජක කාණ්ඩයක් වශයෙන් ක්‍රියාකිරීම.{"\n"}
            {"\n"}මිනිසාගේ ආහාර ලෙස බිම්මල් යොදාගැනීම.{"\n"}
            {"\n"}Saccharomyces විශේෂ මධ්‍යසාර හා බේකරි කර්මාන්ත වලදී යොදා
            ගැනීම.{"\n"}
            {"\n"}ප්‍රතිජීවක , එන්සයිම, විටමින හා කාබනික අම්ල ආදිය නිෂ්පාදනයට
            යොදාගැනීම.{"\n"}
            {"\n"}දිලීරවල ශීඝ්‍ර අවශෝෂණ හැකියාව නිසා ඒවා ජෛව ප්‍රතිකර්මණයට යොදා
            ගැනීම.{"\n"}
            {"\n"}ආහාර නරක්වීමට දායක වීම.{"\n"}
            {"\n"}මිනිසාට ප්‍රයෝජනවත් ශාකවලට රෝග ඇති කිරීම.{"\n"}
            {"\n"}මිනිසාට චර්ම රෝග ඇති කිරීම.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les3Sub12;
