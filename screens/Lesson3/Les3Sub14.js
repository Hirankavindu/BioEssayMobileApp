import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { Back, BackBox, BackBox2, Hero1, Hero2 } from "../../assets";

const Les3Sub14 = () => {
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
            කෝඩේට වංෂයේ සංජානාත්මක් ලක්ෂණ විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            අවම තරමින් කලල විකසනයේදී හෝ පමණක් පූර්ව සිට අපර දිශාවට දේහයට
            සන්ධාරණය සපයමින්.{"\n"}
            {"\n"}ආහාර මාර්ගය හා ස්නායු රජ්ජුව අතර පිහිටන{"\n"}
            {"\n"}
            අන්වායාම{"\n"}
            {"\n"}ප්‍රත්‍යස්ථ , දණ්ඩාකාර ව්‍යුහයක් පවතී.{"\n"}
            {"\n"}එය පෘෂ්ඨරජ්ජුව ලෙස හදුන්වයි.{"\n"}
            {"\n"}පෘෂ්ඨ රජ්ජුවට පෘෂ්ඨීයව පිහිටන{"\n"}
            {"\n"}කුහරමය{"\n"}
            {"\n"}නාලාකාර ස්නායු රජ්ජුවක් ඇත.{"\n"}
            {"\n"}සියලු කෝඩේටාවන්ගේ කලල අවධියේදී ග්‍රසනිකාවේ බාහිරයට විවෘත වන
            {"\n"}
            {"\n"}
            ග්‍රසනික පැළුම් යුගලක් ඇත.{"\n"}
            {"\n"}භෞමික ආකාරවල සුහුඹුල් වන විට මේවා වැසේ.{"\n"}
            {"\n"}ජලජවාසීන්ගේ සුහුඹුල් අවධිවලත්{"\n"}
            {"\n"}භෞමික ආකාරවල කීට අවධිවලත් මේවා ශ්වසන ව්‍යුහ ලෙස ක්‍රියාකරයි.
            {"\n"}
            {"\n"}
            ගුදයෙන් අපරව පිහිටන{"\n"}
            {"\n"}පේෂිමය වලිගයක් කලල අවධියේදී දක්නට ඇත.{"\n"}
            {"\n"}ඇතැම් භෞමික ආකාරවල සුහුඹුල් වන විට එය ක්ෂීණ වී ඇත.{"\n"}
            {"\n"}බොහෝ කෝඩේටාවන් තුළ උදරීය පේෂිමය හෘදයක් දැකිය හැකිය.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            කෝඩේටා වංෂයට අයත් ප්‍රධාන වර්ගවල මූලික ලක්ෂණ කෙටියෙන් විස්තර කරන්න
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            Class – Chondrichthyes
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සියල්ලම ජලජයි.{"\n"}
            {"\n"}චලතාපීය{"\n"}
            {"\n"}සැකිල්ල කාටිලේජීයයි.{"\n"}
            {"\n"}සංචරණය සහ සංතුලනය සදහා වරල් ඇත.{"\n"}
            {"\n"}පෞච්ච වරල විශමාංශපුච්චයි.{"\n"}
            {"\n"}ශ්වසනය සදහා දරන ජලක්ලෝම පිධානයකින් වැසීන් ඇත.{"\n"}
            {"\n"}රළු කොරල්වලින් දේහය වැසී ඇත.{"\n"}
            {"\n"}ඩිම්භ අභ්‍යන්තරව සංසේචනය සිදු කරයි.{"\n"}
            {"\n"}සමහරු අණ්ඩජලාබුජය.{"\n"}
            {"\n"}අනෙක් උදාහරණ අණ්ඩජ හෝ ජලාබුජය.{"\n"}
            {"\n"}ප්‍රජනක ප්‍රනාල , බහිස්‍රාවී ප්‍රනාල හා ආහාර ජීර්ණ මාර්ගය
            ජම්බාලියට විවෘත වේ.{"\n"}
            {"\n"}එය තනි විවරයකින් බාහිර පරිසරයට විවෘත වන පොදු කුටීරයකි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            Class – Osteichthyes
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සියල්ල ජලජය{"\n"}
            {"\n"}චලතාපීය{"\n"}
            {"\n"}අස්ථිවලින් සෑදී සැකිල්ලක් ඇත.{"\n"}
            {"\n"}පිධානය නම් අස්ථිමය කවරයකින් ශ්වසනය සදහා ඇති ජලක්ලෝම ආවරණය වේ.
            {"\n"}
            {"\n"}සංචරණය හා සංතුලනය සදහා වරල් ඇත.{"\n"}
            {"\n"}උත්ප්ලාවකතාව පාලනයට වාතාශයක් ඇත.{"\n"}
            {"\n"}පෞච්ච වරල සමාංශපුච්චය.{"\n"}
            {"\n"}පැතලි අස්ථිමය කංකතාභ හා චක්‍රාකාර කොරල්වලින් දේහය ආවරණය වී ඇත.
            {"\n"}
            {"\n"}සමහරුන්ගේ ජන්මාණු අභ්‍යන්තරවද{"\n"}
            {"\n"}වැඩිදෙනෙකුගේ බාහිරවද සංසේචනය වේ.{"\n"}
            {"\n"}බොහෝ උදාහරණ අණ්ඩජය.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            Class – amphibia
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            භෞමික පරිසරය ආක්‍රමණය කළ පළමු පෘෂ්ඨවංශී සත්ත්ව කාණ්ඩයයි.{"\n"}
            {"\n"}ජීවන චක්‍රය සම්පූර්ණ කිරීමට ජලය අවශ්‍යයි.{"\n"}
            {"\n"}ජලය හා ගොඩබිම යන දෙකෙහිම ජීවත් වේ.{"\n"}
            {"\n"}මිරිදියේ හෝ ගොඩබිම පමණයි.{"\n"}
            {"\n"}කරදියවාසීන් නැත.{"\n"}
            {"\n"}අස්ථිමය සැකිල්ලක් දරයි.{"\n"}
            {"\n"}ගාත්‍රා දරන ප්‍රථම විශේෂයයි.{"\n"}
            {"\n"}භෞමික පරිසරයේ සංචරණය පහසු වන පරිදි ගාත්‍රා මගින් ශරීරය ඉහළට
            ඔසවා ඇත.{"\n"}
            {"\n"}සමහරුන්ට ගාත්‍රා නැත.{"\n"}
            {"\n"}සමහරුන් සිවුපාවෝ වෙති .ඇගිලි සහිත ගාත්‍රා දරයි.{"\n"}
            {"\n"}ඇතැම් කීට අවධි ජලක්ලෝම හරහා ශ්වසනය කරයි.{"\n"}
            {"\n"}ඇතැම් සුහුඹුලන් සම හෝ මුඛ කුහර ආස්ථරණය හරහා ශ්වසනය කරයි.{"\n"}
            {"\n"}
            බොහෝ ඇම්ෆිබියාවන් සම හෝ මුඛ කුහර ආස්තරණය හරහා ශ්වසනය කරයි.{"\n"}
            {"\n"}බොහෝ ඇම්ෆිබියාවන් ශ්වසනය සදහා පෙනහළු යුගලක් දරයි.{"\n"}
            {"\n"}
            චලතාපීය.{"\n"}
            {"\n"}බාහිර පරිසරයේ උෂ්ණත්ව වෙනස්වීම් වලට අනුව ශරීර උෂ්ණත්වය වෙනස්
            කරගනී.{"\n"}
            {"\n"}එම නිසා පරිවෘත්තීය සීමා වේ.{"\n"}
            {"\n"}ශරීරය තුනී තෙත් ග්‍රන්ථිමය සමකින් ආවරණය වී ඇත.{"\n"}
            {"\n"}කොරපොතු නොපිහිටයි.{"\n"}
            {"\n"}පරිසර වෙනස්වීම්වලට සංවේදී වේ.{"\n"}
            {"\n"}ඇස ආවරණය කරමින් නිමීලන පටලයක් ඇත.{"\n"}
            {"\n"}ඇසට පිටුපසින් කර්නපටහ පටලයක් ඇත.{"\n"}
            {"\n"}බොහෝ ඇම්ෆිබියාවන් භාහිර සංසේචනය කරයි.{"\n"}
            {"\n"}බිත්තරවලට කවචයක් නැත.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            Class – reptilia
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            බහුතරය භෞමික වන අතර සමහරක් ජලජය .{"\n"}
            {"\n"}සම්පූරණ භෞමික ජීවිතයට අනුවර්ථනය වූ ප්‍රථම සත්ත්වයෝය.{"\n"}
            {"\n"}
            අස්ථිමය සැකිල්ලක් දරයි.{"\n"}
            {"\n"}සංචරනය සදහා ඇගිලි සහිත ගාත්‍රා දරයි.{"\n"}
            {"\n"}ජල සං‍රක්ෂණයට හා ඇතිල්ලීමට ඔරොත්තු දෙන කෙරටිනීමය ශල්කවලින්
            ආවරණය වී ඇත.{"\n"}
            {"\n"}සමෙහි ග්‍රන්ථි නොමැත.{"\n"}
            {"\n"}වායව ශ්වසනය සදහා පෙණහලු ඇත.{"\n"}
            {"\n"}චලතාපීය.{"\n"}
            {"\n"}අභ්‍යන්තර සංසේචනය සිදු වේ.{"\n"}
            {"\n"}කැල්සීභවනය වූ කවච සහිත බිත්තර ගොඩබිම දරයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            Class -Aves
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            භෞමික හා ජලජ වාසස්ථාන්වල ජීවත් වේ.{"\n"}
            {"\n"}කෙරටිනීභවනය වූ පිහාටු මගින් ශරීරය ආවරණය වේ.{"\n"}
            {"\n"}ගාත්‍රාවල ශල්ක හමුවේ.{"\n"}
            {"\n"}පූර්ව ගාත්‍රා පියාසැරියට පියාපත් බවට පත් වේ.වාත කුටීර සහිත
            සැහැල්ලු ශක්තිමත් අස්ථිමය සැකිල්ලක් ඇත. වායු හුවමාරුව සදහා පෙනහළු
            ඇත.{"\n"}
            {"\n"}සැහැල්ලු ශරීරය / පියාපත් / වාත කුටීර සහිත අස්ථි / අධික
            පරිවෘත්තීය / ශරීර ප්‍රමාණය කුඩා වීම පියාසැරිය සදහා අනුවර්ථනය වේ.
            {"\n"}
            {"\n"}
            දත් රහිත හොට ඇත.{"\n"}
            {"\n"}අචලතාපීය.{"\n"}
            {"\n"}පක්ෂීන්ට වර්ණ දෘෂ්ටිය ඇති අතර , දියුණු දෘෂ්ටියක් සහිතය.{"\n"}
            {"\n"}
            අභ්‍යන්තර සංසේචනය .{"\n"}
            {"\n"}කවචය සහිත බිත්තර දමයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            Class-Mammalia
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            බහුතරයක් භෞමික වාසස්ථාන වල ජීවත් වේ.ඇතෙමෙක් ජලජ වේ.{"\n"}
            {"\n"}ළපැටියෝ ස්ථන ග්‍රන්ථිවලින් නිපදවන කිරි මත යැපේ.{"\n"}
            {"\n"}කාටිලේජ සන්ධාන පෘෂ්ඨ වලින් සමන්විත අස්ථි වලින් සෑදී සැකිල්ලක්
            ඇත.{"\n"}
            {"\n"}දේහය රෝමවලින් ආවරණය වී ඇති අතර ඒවා තාප පරිවරණයට දායක වේ.{"\n"}
            {"\n"}
            සමෙහි ග්‍රන්ථි ඇත.{"\n"}
            {"\n"}අචලතාපීය.{"\n"}
            {"\n"}බොහෝ සාමාජිකයන් ඉහළ පරිවෘත්තීය ශීඝ්‍රතා පෙන්වයි.{"\n"}
            {"\n"}විභේදිත වූ දත් වර්ග ඇත./විෂමදන්තිය.{"\n"}
            {"\n"}කුටීර හතරක හෘදයක් සහිත සම්පූර්ණ රුධිර සංසරණ පද්ධතියක් ඇත.
            {"\n"}
            {"\n"}
            පෙණහැලි සහිත කාර්යක්ෂම ශ්වසන පද්ධතියක් ඇත.{"\n"}
            {"\n"}පෙණහැලි සහිත කාර්යක්ෂම ශ්වසන පද්ධතියක් ඇත.{"\n"}
            {"\n"}පෙනහළු වාතනයට පේශිමය මහාප්‍රාචීරය වැදගත්ය.{"\n"}
            {"\n"}අනෙක් පෘෂ්ඨවංශීන්ට වඩා විශාලව වැඩුණු මොළයක් ඇත.{"\n"}
            {"\n"}
            බුද්ධිමත්ය. ඉගෙනීමේ කුසලතාව හා මතකය ඇත.{"\n"}
            {"\n"}විවිධ සන්නිවේදන ක්‍රම භාවිතා කරයි.{"\n"}
            {"\n"}අභ්‍යන්තර සංසේචනය දක්වයි.{"\n"}
            {"\n"}ළපැටියන් දීර්ඝ කාලයක් මවු-පිය ආරක්ෂාව යටතේ වර්ධනය වේ.{"\n"}
            {"\n"}
            බහුතරයක් සංචරණය සදහා ගාත්‍රා භාවිතා කරන අතර ඇතෙමෙක් පියාසැරීමට ද
            ඇතෙමෙක් ජලජ පරිසර වලටද අනුවර්තනය වී ඇත.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};

export default Les3Sub14;
