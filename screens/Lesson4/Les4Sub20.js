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

const Les4Sub20 = () => {
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
            විවිධ උත්තේජන වලට ප්‍රතිචාර දැක්වීමේදී ශාක වර්ධක ද්‍රව්‍ය / ශාක
            හෝමෝන වල දායකත්වය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සාමාන්‍යයෙන් ඉතා සුළු ප්‍රමාණවලින් නිපදවන නිපද වූ ස්ථානයෙන් සිට
            ජීවියාගේ වෙනස් කොටසකට පරිවහනය වන ඉලක්ක සෛලවල ප්‍රතිචාරය ප්‍රේරණය කරන
            හෝ සහ ශාකයේ වර්ධනයට හා විකසනයට බලපෑමක් ඇති කරන සංඥා අණු වේ.{"\n"}
            {"\n"}මෙම අර්ථකථනයක් සමඟ, ශාකයෙන් සිදුවුන ඇතැම් කායිකවිද්‍යාත්මක
            ක්‍රියාවලි විස්තර කිරීමට තරමක් අපහසු වේ.{"\n"}
            {"\n"}ශාක හෝමෝන ලෙස සැලකෙන සමහර සංඥා අණු ස්ථානීයව ක්‍රියා කරයි.
            {"\n"}
            {"\n"}ඒ නිසා ශාක වර්ධක යාමක ලෙස පුළුල් පදයක් භාවිතය වඩාත් සුදුසු ලෙස
            පෙනේ.{"\n"}
            {"\n"}ස්වාභාවික හෝ සංස්ලේෂිත අකාබනික සංයෝග වන අතර ශාකයේ විශේෂිත
            කායිකවිද්‍යාත්මක ක්‍රියාවලි විකිරණය කිරීම හෝ පාලනය කිරීම සිදු කරයි.
            {"\n"}
            {"\n"}ශාක හෝර්මෝන ඉතා කුඩාසාන්ද්‍රණයකදී වුව ක්‍රියාකාරී වෙයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">ඔක්සීන</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            අඩු සාන්ද්‍රණයකදී කද දික්වීම උත්තේජනය කරයි.{"\n"}
            {"\n"}පාර්ශ්වික හා ආගන්තුක මුල් සෑදී දිරිගන්වයි.{"\n"}
            {"\n"}ඵල විකසනය යාමනය කරයි.{"\n"}
            {"\n"}ආග්‍රස්ථ ප්‍රමුඛතාව දිරිගන්වයි.{"\n"}
            {"\n"}ප්‍රභාවර්ථනය සිදු කරයි.{"\n"}
            {"\n"}ගුරුත්වාවර්තනය සිදු කරයි.{"\n"}
            {"\n"}සනාල පටක විභේදනය දිරි ගන්වයි.{"\n"}
            {"\n"}පත්‍ර ඡේදනය වළක්වයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">ගිබරිලීන</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            කද දික් වීම උත්තේජනය කරයි.{"\n"}
            {"\n"}පරාග විකසනය උත්තේජනය කරයි.{"\n"}
            {"\n"}පරාග නාළයේ වර්ධනය උත්තේජනය කරයි.{"\n"}
            {"\n"}ඵල වර්ධනය උත්තේජනය කරයි.{"\n"}
            {"\n"}බීජ විකසනය හා ප්‍රරෝහණය උත්තේජනය කරයි.{"\n"}
            {"\n"}ලිංග නිර්ණය හා යොවුන් අවධිවල සිට පරිණත අවධි දක්වා සංක්‍රමණය
            යාමනය කරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            සයිටොකයිනීන
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            කඳන් හා මුල් වල සෛල විභාජනය යාමනය කරයි.{"\n"}
            {"\n"}අග්‍රස්ථ ප්‍රමුඛතාව විකරණය කිරීම හා කක්ෂීය අංකුර වර්ධනය දිරි
            ගන්වයි.{"\n"}
            {"\n"}අපායන පටකවලට පෝෂණ චලනයට දිරි ගන්වයි.{"\n"}
            {"\n"}බීජ ප්‍රරෝහණය උත්තේජනය කරයි.{"\n"}
            {"\n"}පත්‍ර වෘද්ධතාව පමා කරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            ඇබිසිසික් අම්ලය.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            වර්ධනය නිශේධනය කරයි.{"\n"}
            {"\n"}නියං ආතති තත්ත්ව වලදී පූටිකා වැසීයාම දිරි ගන්වයි.{"\n"}
            {"\n"}බීජ සුප්තතාව දිරි ගන්වමින් බීජ ප්‍රරෝහණය කලින් සිදුවීම නිශේධනය
            කරයි.{"\n"}
            {"\n"}පත්‍ර වෘද්ධතාව දිරි ගන්වයි.{"\n"}
            {"\n"}වියලීම දරාගැනීම දිරිගන්වයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">එතිලීන්</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            බොහෝ ඵල වර්ග ඉදීම දිරිගන්වයි.{"\n"}
            {"\n"}පත්‍රවල ඡේදනය දිරි ගන්වයි.{"\n"}
            {"\n"}බීජ පැළවල ත්‍රිත්ව ප්‍රචාරණ දිරිගන්වයි. {"\n"}
            {"\n"}එනම්,කද දික්වීම නිශේධනය පාර්ශ්වික,වර්ධනය දිරිගන්වයි,
            ,තිරස් වර්ධනය දිරිගන්වයි,වෘද්ධතාව වේගවත් කරයි,මුල් හා
            මූලකේශ වර්ධනය දිරිගන්වයි,අන්නාසි කුලයේ ශාකවල මල්හට ගැනීම
            ප්‍රේරණය කරවයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub20;
