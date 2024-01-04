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

const Les2Sub23 = () => {
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
              onPress={() => navigation.navigate("Lesson2")}
            >
              <Image source={BackBox2} width={200} height={30} />
            </TouchableOpacity>
          </View>
        </View>
        {/* Back Button End */}

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
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ප්‍රභාසංස්ලේෂණයේ C4 පථයේ පියවර අනුපිළිවෙල විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            C4 ශාකවල පත්‍ර මධ්‍ය සෛලවලදී පළමුවෙන්ම CO2 ප්‍රතිග්‍රාහජයා වන
            පොස්පොඊනෝල් පයිරුවේට් මගින් PEP කාබොක්සිලේස් එන්සයිමය උපකාරී කරගෙන
            CO2 තිර කිරීම සිදු වේ.{"\n"}
            {"\n"}PEP මගින් (පොස්පො ඊනෝල් පයිරුවේට් ) මගින් ආරම්භක වශයෙන්
            ප්‍රතිග්‍රහණය කර කාබන් 4 ක සං‍යුතියෙන් යුතු ඔක්සලෝ ඇසිටේට් (OAA) බවට
            පරිවර්තනය කරයි.{"\n"}
            {"\n"}මෙම OAA , C4 සං‍යෝගයක් වන නිසා මෙම ප්‍රභාසංස්ලේෂණ පථය C4 පථය
            ලෙස නම් කරයි.{"\n"}
            {"\n"}OAA ඉක්මනින් වඩාත් ස්ථායි C4 සං‍යෝගයක් වන මැලේට් බවට පරිවර්තනය
            වී කලාප කොපු සෛල තුළට විසරණය වේ.{"\n"}
            {"\n"}මැලේට් , CO2 නිදහස් කරමින් C තුනක් සහිත පයිරුවේට් බවට පත් වේ.
            පයිරුවේට් නැවත පත්‍ර මධ්‍ය සෛල තුළට විසරණය වේ.{"\n"}
            {"\n"}ඉන්පසු ATP ජල විච්ඡේදයෙන් පොස්ෆේට් කාණ්ඩයක් ලබාගෙන PEP
            පුනර්ජනනය කරයි.{"\n"}
            {"\n"}මෙහිදී කාබොක්සිල්හරණ එන්සයිම ක්‍රියාත්මක වී CO2 නිදහස් වන අතර
            එම CO2 රුබිස්කෝ එන්සයිමය මගින් යළිත් තිර කරයි.{"\n"}
            {"\n"}එය C4 ශාකවල කලාප කොපු සෛල තුළට සීමා වූවකි.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            C4 පථයේ වැදගත්කම විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            රුබිස්කෝ එනසයිමය අවකාශමය වශයෙන් වෙන් වීම හේතුවෙන් ප්‍රභා ශ්වසනයට ඇති
            මාර්ග වැසී යයි.{"\n"}
            {"\n"}මේ නිසා අඩු CO2 සාන්ද්‍රණයකදී වුවද ශාක තුළ CO2 තිරකිරීමේ
            කාර්යක්ෂම තාවය වැඩි වේ.{"\n"}
            {"\n"}උණුසුම් වියළි දේශගුණික තත්තවයන් වලදී ශාක තුළ උත්ස්වේදනයෙන්
            සිදුවන ජල හානිය අවම කරගැනීම සදහා පූටිකා වැසීම අත්‍යවශ්‍ය වෙයි.{"\n"}
            {"\n"}
            මේ තත්ත්ව තුළ ශාකවලට CO2 ලබා ගැනීමේ හැකියාව අඩු වේ.{"\n"}
            {"\n"}මේ නිසා නිවරතන කලාපීය රටවල හෝ උණුසුම් පරිසර තත්ත්ව තුළ වැඩෙන
            ශාකවලට CO2 ඌනතාවක් ඇති වේ.{"\n"}
            {"\n"}කලාප කොපු සෛලවලද CO2 සාන්ද්‍රණය වැඩිකර ගැනීමෙන් C4 ශාකවලට අඩු
            CO2 සාන්ද්‍රණයකදී ප්‍රභාසංස්ලේෂණ කාර්යක්ෂමතාවය වැඩි කරගත හැකිය.
            {"\n"}
            {"\n"}C4 ශාකවල ජලය භාවිතා කිරීමේ කාර්යක්ෂමතාවය C3 ශාකවලට වඩා වැඩිය.
            {"\n"}
            {"\n"}පූටිකා වැසී තිබියදීත් CO2 සාන්ද්‍රණ යාන්ත්‍රණය නිසා ප්‍රමාණවත්
            CO2 ලබාගැනීමට හැකිය.{"\n"}
            {"\n"}උත්ස්වේදනයෙන් සිදුවන ජල හානිය අවම කර ගත හැකිය.{"\n"}
            {"\n"}කලාප කොපු සෛල තුළ වැඩි CO2 සාන්ද්‍රණයකදී රුබිස්කෝ එන්සයිමය
            ක්‍රියාත්මක වන නිසා C3 ශාකවලට වඩා වැඩි කාර්යක්ෂමතාවකින් C4 ශාකවල
            රුබිස්කෝ එන්සයිමය ක්‍රියාත්මක වෙයි.{"\n"}
            {"\n"}එබැවින් C4 ශාකවලට මෙම එන්සයිමයෙන් අඩු ප්‍රමාණයක් අවශ්‍යය වෙයි.
            {"\n"}
            {"\n"}මේ නිසා C4 ශාකවල නයිට්‍ර්ජන් භාවිතා කිරීමේ කාර්යක්ෂමතාව C3 වලට
            වැඩිය.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les2Sub23;
