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

const Les3Sub1 = () => {
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
            ජීවය ආරම්භ වීමට පෙර පෘථිවියේ පැවති තත්ත්වය විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            අවු. බිලියන 4.6 කට පමණ පෙර පෘථිවිය හා සෞරග්‍රහ මණ්ඩලයේ ඇති අනෙක්
            ග්‍රහලෝක බිහිවී ඇත. {"\n"}
            {"\n"}සෞරග්‍රහ මණ්ඩලයේ ආරම්භයේදී පෘථිවියේ විශාල පාෂාණ හා අයිස්
            කුට්ටි ගැටෙමින් පැවතිනි. {"\n"}
            {"\n"}මුල්ම පෘථිවි වායුගෝලය ජලවාෂ්ප වලින් ගහන වූ අතර ,ඔක්සිජන්
            ස්වල්ප ප්‍රමාණයකින්ද,ගිනි කදු පිපිරීමෙන් නිදහස් වූ නයිට්‍රජන් හා
            නයිට්‍රජන්වල ඔක්සයිඩ ,කාබන්ඩයොක්සයිඩ් ,මීනේත්,ඇමෝනියා හා හයිඩ්‍රජන්
            යන වායූන් ගෙන්ද සමන්විත විය . {"\n"}
            {"\n"}ඉන්පසු උදාසීන වායුගෝලය ඔක්සිහාරක වායුගෝලයක් බවට පත් විය .{" "}
            {"\n"}
            {"\n"}පසුව පෘථිවිය සිසිල් වීමේදී ජලවාෂ්ප ඝනීභවනය වී සාගර සෑදිණි.{" "}
            {"\n"}
            {"\n"}හයිඩ්‍රජන් වලින් විශාල කොටසක් අභ්‍යවකාශයට නිදහස් විය. {"\n"}
            {"\n"}ගිනිකදු පිපිරීම. {"\n"}
            {"\n"}අකුණු ගැසීම {"\n"}
            {"\n"}අධික පාරජම්බූල කිරණ {"\n"}
            {"\n"}ජලතාප මංකඩ විවර {"\n"}
            {"\n"}ක්ෂාරීය තාප මංකඩ විවර සමග {"\n"}
            {"\n"}පෘථිවියේ පැවති ඔක්සිහාරක වායුගෝලය පෘථිවිය මත ජීවයේ සම්භවය සදහා
            අත්‍යවශ්‍ය වූ සරල කාබනික අණු සංස්ලේෂණයට හිතකර විය . {"\n"}
            {"\n"}සරල කාබනික අණු බහුඅවයවීකරණයෙන් ප්‍රෝටීන , නියුක්ලෙයික් අම්ල
            වැනි මහා අණු සෑදිණි. {"\n"}
            {"\n"}සවයං ප්‍රතිවලිත වන කාබනික අණු සෑදීම නිසා පෘථිවිය මත ජීවය
            සම්භවයට හැකිවිය .
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 bg-gray-300">
          <Text className="py-3 text-base font-bold text-gray-800">
            ජෛව රසායනික පරිණාමයට අනුව, ජීවයේ සම්භවය සිදුවීම හා වර්ථමානයේ පවතින
            ජෛව විවිධත්වය දක්වා ක්‍රමිකව පරිණාමය වූ ආකාරය සැකවින් විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mt-2 mb-3 text-base font-semibold text-justify text-gray-800">
            ආදි පෘථිවියේ පැවති වායුගෝලීය ස්වභාවය මගින් අකාබනික අණුවලින් ඇමයිනෝ
            අම්ල නයිට්‍රජනීය භෂ්ම වැනි කුඩා කාබනික අණුවල අජෛව සංස්ලේෂණය සදහා
            පහසුකම් සැලසීම.{"\n"}
            {"\n"}කුඩා කාබනික අණු බහුඅවයවීකරණය වීම මගින් කාබනික මහා අණු නිපදවීම.
            {"\n"}
            {"\n"}කාබනික මහා අණු පටල තුළ ඇසිරීමෙන් ප්‍රාක් සෛලය බිහි වීම.{"\n"}
            {"\n"}
            නියුක්ලෙයික් අම්ල ස්වයං ප්‍රතිවලිත වීමේ හැකියාව අත්කර ගැනීම නිසා /
            සෛලවලට ප්‍රවේණිගත වීමේ හැකියාව ලැබීම.{"\n"}
            {"\n"}ප්‍රාක් සෛලය බිහිවීම.{"\n"}
            {"\n"}කාබනික අණුවලින් සමන්විත ද්‍රාවණයක් ලෙස පැවති ආදි සාගර “ආදී
            සූපයක්” ලෙස තිබී ඇති අතර ඉන් ජීවය බිහිවන්නට ඇතැයි යන මතය හැල්ඩේන්
            විසින් යෝජනා කරන ලදි.{"\n"}
            {"\n"}ගිනි කදු ආශ්‍රිත වායුගෝලය හා ක්ෂාරීය මංකඩ විවරවලට අදළාව මෑත
            කාලයේ සිදුකළ අධ්‍යයන මගින් කාබනික අණු අජෛව ලෙස සංස්ලේෂණය විය හැකි බව
            පෙන්වා දී ඇත.{"\n"}
            {"\n"}කාබනික අණුවල අනෙක් ප්‍රභවයක් ලෙස උල්කාපාත සදහන් කළ හැකිය.
            {"\n"}
            {"\n"}
            ලිපිඩවලින් වටවූ ආශයිකා තුලට RNA ගොනු වීමෙන් “ප්‍රාක් සෛලය “ බිහි වී
            ඇත.{"\n"}
            {"\n"}ප්‍රාක් සෛලයේ එන්සයිම උත්ප්‍රේරිත ක්‍රියාවලි, වර්ධනය ,
            ප්‍රතිවලිතය හා පරිණාමය යන හැකියා දක්නට ලැබිණි.{"\n"}
            {"\n"}මුල්ම ජාන හා එන්සයිම ලෙස ක්‍රියාකර ඇත්තේ RNA ය .{"\n"}
            {"\n"}එබැවින් RNA අණුවලට ප්‍රතිවලිත වීමට හැකිවිය.{"\n"}
            {"\n"}ආදි සූපයේ තිබූ වෙනත් අණුද ප්‍රාක් සෛලයට එක් වී ඇත.{"\n"}
            {"\n"}ආශයිකා සංඝට්ටනය වී පටලයට ලිපිඩ ඒකරාශී වීමෙන් සෛලය වර්ධනය වී
            තිබේ.{"\n"}
            {"\n"}සෛලය ප්‍රමාණයට වඩා විශාල වූ විට RNA අඩංගු ප්‍රාක් සෛල දෙකක්
            බවට බෙදී ඇත.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-5">
          <Text className="py-3 text-lg font-bold text-gray-800">
            ප්‍රාභාසංස්ලේෂක ජීවීන්ගේ බිහිවීම
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-3 text-base font-semibold text-justify text-gray-800">
            වර්ථමානයේ සයනොබැක්ටීරියා නමින් හදුන්වනු ලබන පළමු ප්‍රභාසංස්ලේෂක
            ජීවීන්ගේ පොසිල වසර බිලියන 2.7 කට පෙර බිහි වූ ඒවා වේ.{"\n"}
            {"\n"}
            ප්‍රභාසංස්ලේෂණයේ ප්‍රතිඵලයක් ලෙස යකඩ අයන (Fe2+) ඔක්සිකරණයය විය.
            {"\n"}
            {"\n"}
            දිය වී ඇති සියලුම යකඩ මෙසේ අවක්ෂේප වූ පසු ජල පද්ධති ඔක්සිජන් වලින්
            සංතෘප්ත වන තුරු අතිරේකව එකතුවන ඔක්සිජන් වායුව ජලයේ දියවිණි.{"\n"}
            {"\n"}
            ප්‍රභාසංස්ලේෂක බැක්ටීරියා ගහණයන් ඉහළ යාම , වායුගෝලීය ඔක්සිජන්
            ප්‍රමාණයේ ඉහළ යෑමට දායක් විය .{"\n"}
            {"\n"}එය හරිතලවයේ සම්භවය වේගවත් කර තිබේ.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-5">
          <Text className="py-3 text-lg font-bold text-gray-800">
            ප්‍රථම සූන්‍යෂ්ටිකයන්ගේ බිහි වීම
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-3 text-base font-semibold text-justify text-gray-800">
            ප්‍රථම සූන්‍යෂ්ටික ඉයුකැරියෝටා ෆොසිල වසර බිලියන 1.8 ක් පමණ පැරණි බව
            ඇස්තමේන්තු කර ඇත.{"\n"}
            {"\n"}පසුකාලීනව බහුසෛලික ජීවීන් බවට පරිණාමය වූයේ මේ ඒකසෛලික
            සූන්‍යෂ්ටිකයෝය.{"\n"}
            {"\n"}සරල ප්‍රාග්න්‍යෂ්ටික සෛලයකින් අරඹා පුළුල් රූපීය විවිධත්වයක්
            ගොඩනැගීමට ඇති හැකියාවට වඩා වැඩි හැකියාවකින් පරිණාමය වීමට ව්‍යුහාත්මක
            ලෙස සංකීර්ණ සූන්‍යෂ්ටික සෛලවලට තිබී ඇත.{"\n"}
            {"\n"}ප්‍රථම සූන්‍යෂ්ටිකයන් බිහිවීමෙන් පසු විශාල පරාසයක ඒකසෛලික
            ජීවීන්ගේ පරිණාමය සිදු විය .{"\n"}
            {"\n"}එයින් ඒකසෛලික සූන්‍යෂ්ටිකයන්ගේ විවිධත්වයක් ඇතිවී ඇල්ගී , ශාක ,
            දිලීර හා සතුන් වැනි බහුසෛලික ආකාර පරිණාමය සිදු විය.{"\n"}
            {"\n"}රතු ඇල්ගාවන්ට සමාන දැනට දන්නා පැරණිම ප්‍රොටිස්ටාවන්ගේ පොසිල
            වසර බිලියන 1.2 පමණ පැරණිය.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-5">
          <Text className="py-3 text-lg font-bold text-gray-800">
            සූන්‍යෂ්ටිකයන්ගේ විවිධාංගීරණය
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="py-3">
          <Text className="px-3 mb-3 text-base font-semibold text-justify text-gray-800">
            වර්තමාන සත්ත්ව වංශ බහුතරය බිහි වී ඇත්තේ පේලියෝසොයික යුගයේ මුල්
            කාලයේදීය.{"\n"}
            {"\n"}පොරිෆෙරා , ස්පොන්ජින් , නිඩාරියා ( මුහුදු ඇනිමනි හා බන්ධූන් )
            හා මොලුස්කා ඇතුලත් බොහෝ සත්ත්ව කාණ්ඩ බිහිවන්නේ පසු -ප්‍රොටෙරොසොයික්
            අවධියේදීය.{"\n"}
            {"\n"}DNA විශ්ලේෂනයට අනුව ස්පොන්ජීන් පරිණාමය වී ඇත්තේ වසර මිලියන 700
            කට පමණ පෙරදීය.{"\n"}
            {"\n"}ආත්‍රපෝඩාවන්ගේ පූර්වජයන් , කෝඩේටාවන් හා වෙනත් සත්ත්ව වංශ බිහිව
            ඇත්තේ වසර මිලියන 670 කට පමණ පෙරදීය.{"\n"}
            {"\n"}සතුන් පාරිභෝජකයන් ලෙස ඇල්ගී හෝ ශාක මත යැපීම ආරම්භයත් සමග මුල්ම
            ආහාර දාම ආරම්භ වූ අතර බොහෝ සත්ත්ව කාණ්ඩ බිහිවීම , ක්‍රියාකාරී ආහාර
            ජාලවල ආරම්භයද විය.{"\n"}
            {"\n"}වසර මිලියන 500 කට පමණ පෙර දිලීර , ශාක සතුන් භෞමික ගණාවාසීකරණය
            ඇරඹී ඇත.{"\n"}
            {"\n"}භෞමික ගණාවාසීකරණය වූ ශාක ජලය හා ඛනිජ පරිවහනයට සනාල පටකද
            ජලහානිය වැළැක්වීමට ජලයට අපාරගම්‍ය ඉටිමය ආවරණයක්ද ඇතිකර ගන්නා ලදි.
            {"\n"}
            {"\n"}
            විශාල ශාක බිහිවීමත් සමගම ඒවා කද, මුල් හා පත්‍ර ලෙස විභේදනය වීම ඇරඹීම
            හා විවිධාංගීකරණය වීම වසර මිලියන 380 කට පමණ පෙර සිට සිදු විය.{"\n"}
            {"\n"}
            ශාක හා දිලීර භෞමිකව ගණාවාසීකරණය වූයේ එක්ව එකිනෙක සමග අන්තර්ක්‍රියා
            කිරීමෙනි.{"\n"}
            {"\n"}භෞමිකව ජීවිතය ආරම්භ කළ මුල්ම සත්ත්ව කාණ්ඩය ආත්‍රපෝඩා ( කෘමීන්
            හා මකුළුවෝ) විය.{"\n"}
            {"\n"}දැනට වසර මිලියන 365 කට පෙර බිහි වූ මුල්ම සිවුපාවා පරිණමාය වී
            ඇත්තේ කණ්ඩිකා වරල් සහිත මත්ස්‍යන්ගෙනි.{"\n"}
            {"\n"}වෙනත් ප්‍රයිමේටාවන්ගෙන් වෙන්වී මානව පෙළපත ආරම්භ වූයේ වසර
            මිලියන 6-7 කට පමණ පෙර සිටය .{"\n"}
            {"\n"}මානව විශේෂයේ සම්භවය වසර 195,000 කට පෙර සිදු විය.
          </Text>
        </View>
        {/* Lesson Note End */}
        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les3Sub1;
