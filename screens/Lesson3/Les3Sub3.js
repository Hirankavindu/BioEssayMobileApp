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

const Les3Sub3 = () => {
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
            කෙටිගෙල ජිරාෆයන් ගහණයකින් දිගු ගෙල ජිරාෆයන් ගහණයක් ඇතිවන අයුරු
            ලැමාක්වාදය ඇසුරින් සහ ඩාවින්වාදය ඇසුරින් වෙන් වෙනම විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ලැමාක්වාදයේදී වහර- අවහර සහ පරිචිත ලක්ෂණ ආවේණිගත විම යන ලක්ෂණ මත
            පදනම්ව විසතර කිරීම සිදු කරයි.{"\n"}
            {"\n"}ජිරාෆයින්ගේ පූර්වජයන්ට තිබී ඇත්තේ කෙටි ගෙලකි.{"\n"}
            {"\n"}ඔවුන් පහළ මට්ටමේ ඇති ශාකවලින් ආහාර ලබා ගත්හ.{"\n"}
            {"\n"}ආහාර හිග වූ අවස්ථාවලදී ,ගෙල දිගු කරමින් ඉහළ ශාකවලින් ආහාර
            ලබාගැනීමට සිදුවිය.{"\n"}
            {"\n"}මෙසේ නිරන්තරයෙන් ගෙල දිගු කිරීමේ ප්‍රථිපලයක් ලෙස ජීවිත කාලය
            තුලදීම ගෙලෙහි දිග ප්‍රමාණය වැඩි විය.{"\n"}
            {"\n"}මෙම පරිචිත ලක්ෂණය ප්‍රජනනයේදී ජනිතයන්ට උරුම වේ.{"\n"}
            {"\n"}මෙම සිදුවීම පරම්පරා ගණනාවක් තිස්සේ සිදුවීමේ ප්‍රථිපලයක් ලෙස
            වර්තමානයේ දක්නට ලැබෙන දිගු ගෙල ජිරාෆයන් ඇති විය.{"\n"}
            {"\n"}ඩාවින් - වොලස් වාදයේදී / ස්වාභාවික වරණ වාදයේදී නිරීක්ෂණ දෙකක්
            සහ ඒ ආශ්‍රයෙන් ගොඩනැගූ උපකල්පන දෙකක් මත පදනම් වේ.{"\n"}
            {"\n"}
            අධිජනනය සහ ප්‍රභේදන නිරීක්ෂණ වන අතර තරගය හා උචිතෝන්නතියත් හිතකර
            ලක්ෂණ ස්වාභාවික වරණයට ලක්වීමත් උප්කල්පන වේ.{"\n"}
            {"\n"}අතීතයේ ජිරාෆ්‍යන් ගහණ අතර දිගුගෙලක් සහිත සත්ත්වයන් හා කෙටි
            ගෙලක් සහිත සත්ත්වයන් ලෙස ප්‍රභේදන 02 ක් පැවතුණි.{"\n"}
            {"\n"}පරිසරය තුළ ආහාර හිගවන කාලයන්හිදී, ආහාර ලබාගැනීම සදහා මෙම
            ජීවින් අතර තරගයක් ඇතිවිය.{"\n"}
            {"\n"}මෙම් ජීවන සටනේදී කුඩා පදුරුහා පැළෑටි පමණක් ආහාරයට ගත හැකි කෙට්
            ගෙල ජිරාෆයන් මිය ගිය අතර උස ගස්වලින් ද ආහාර ගතහැකි දිගු ගෙල ජිරාෆයන්
            නොනැසී පැවතුණි.{"\n"}
            {"\n"}ව්සේ ඉතිරිවන දිගුගෙල ජිරාෆයන් ප්‍රජනනයෙන් තවත් දිගුගෙල
            ජිරාෆයන් ගහණයක් ඇතිකරගන්නා ලදි.{"\n"}
            {"\n"}මෙම ක්‍රියාවලිය පරම්පරා කිහිපයක් සිදුවීමෙන් වර්තමානයේ
            පවතින දිගුගෙල ජිරාෆයන් ගහණය ඇති විය.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="pt-3 text-lg font-bold text-gray-800">
            ආකියන් ඉයෝනය
          </Text>
        </View>
        {/* Lesson Category end */}
        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            පෘථිවි පෘෂ්ඨයේ ආදිතම පාෂාණය.{"\n"}ආදිතම සෛලවල පොසිල
            (ප්‍රාග්න්‍යෂ්ටික) ඇතිවීම.{"\n"}වායුගෝලීය ඔක්සිජන් සාන්ද්‍රණය ඉහළ
            නැගීම ආරම්භ වීම.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="pt-3 text-lg font-bold text-gray-800">
            ප්‍රොටෙරොසොයික් ඉයෝනය
          </Text>
        </View>
        {/* Lesson Category end */}
        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ඇල්ගී විවිධත්වය හා මෘදුදේහ සහිත අපෘෂ්ඨවංශී සතුන් ඇති වීම.{"\n"}
            සූන්‍යෂ්ටික සෛලවල පැරණිතම පොසිලය ඇති වීම.{"\n"}
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="pt-3 text-lg font-bold text-gray-800">
            ෆැනරොසොයික් ඉයෝනය
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="pt-3 text-lg font-bold text-gray-800">
            පේලියෝසොයික යුගය
          </Text>
        </View>
        {/* Lesson Category end */}
        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-left text-gray-800">
          <Text className="text-base font-semibold ">
            බොහෝ සත්ත්ව වංශවල විවිධත්වය ශීඝ්‍ර වැඩිවීම.{"\n"}
            {"\n"}කරදිය ඇල්ගාවන් සුලබ වීම.{"\n"}
            {"\n"}විවිධ දිලීර , ශාක හා සතුන්ගේ භෞමික ගණාවාසීකරණය{"\n"}
            {"\n"}සනාල ශාක විවිධාංගීකරණය{"\n"}
            {"\n"}අස්ථික මත්ස්‍යන්ගේ විවිධාංගීකරණය
            {"\n"}
            {"\n"}මුල්ම සිවුපාවුන් හා කෘමීන් බිහිවීම.
            {"\n"}
            {"\n"}උභයජීවීන් ප්‍රමුඛ වීම.{"\n"}
            {"\n"}සනාල ශාක සහිත වනාන්තර බහුල වීම.
            {"\n"}
            {"\n"}ප්‍රථම බීජ ශාක බිහිවීම.{"\n"}
            {"\n"}උරගයන් බිහිවීම හා විකිරණය{"\n"}
            {"\n"}
            බොහෝ වර්ථමාන කෘමි කාණ්ඩ බිහිවීම.{"\n"}
            {"\n"}බොහෝ කරදිය හා භෞමික ජීවීන්ගේ න්‍යෂ්ට වීම.{"\n"}
            {"\n"}ආදි සනාල ශාක විවිධාංගීකරණය.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="pt-3 text-lg font-bold text-gray-800">
            මීසොසොයික යුගය
          </Text>
        </View>
        {/* Lesson Category end */}
        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            කේතුධර ශාක (විවෘත බීජක) ප්‍රමුඛ වීම.{"\n"}
            {"\n"}ඩයිනෝසරයන් පරිණාමය සහ විකිරණය.{"\n"}
            {"\n"}ක්ෂීරපායීන්ගේ සම්භවය.{"\n"}
            {"\n"}ප්‍රමුඛ ශාක ලෙස අඛණ්ඩවම විවෘත බීජ ශාක පැවතීම.{"\n"}
            {"\n"}ඩයිනෝසරයන් ප්‍රමුඛ වීම , බහුල වීම හා විවිධත්වය ඇතිවීම.{"\n"}
            {"\n"}
            සපුෂ්ක ශාක බිහිවීම හා විවිධාංගීකරණය {"\n"}
            {"\n"}ඩයිනෝසරයන් ඇතුළු බොහෝ ජීවී විශේෂ නෂ්ට වීම .
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="pt-3 text-lg font-bold text-gray-800">
            සීනෝසොයික යුගය
          </Text>
        </View>
        {/* Lesson Category end */}
        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ක්ෂීරපායීන් , පක්ෂීන් හා පරාගණකාරක කෘමීන්ගේ ප්‍රධාන විකිරණය.{"\n"}
            {"\n"}
            සපුෂ්ප ශාකවල ප්‍රමුඛ වීම , ඉහළ යෑම හා විකිරණය තවදුරටත් සිදුවීම.
            {"\n"}
            {"\n"}
            බොහෝ වර්තමාන ක්ෂීරපායි ගෝත්‍ර විකිරණය.{"\n"}
            {"\n"}බොහෝ ප්‍රයිමේටා කාණ්ඩවල සම්භවය.{"\n"}
            {"\n"}ක්ෂීරපායි හා සපුෂ්ක ශාකවල විකිරණය තවදුරටත් සිදුවීම.{"\n"}
            {"\n"}ආදිතම මානව පූර්වජයා බිහි වීම.{"\n"}
            {"\n"}ද්වීපාද මානව පූර්වජයා බිහිවීම.{"\n"}
            {"\n"}හෝමෝ ගණය බිහිවීම. (Genus Homo)
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les3Sub3;
