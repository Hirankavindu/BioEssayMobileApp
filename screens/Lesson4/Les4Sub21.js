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

const Les4Sub21 = () => {
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
            නියං ආතතිය, ශීත ආතතිය, ලවණ ආතතිය සහ ජෛවීය ආතතිය යන තත්වයන් ඇති වන
            ආකාරය සහ ඒවා අවම කර ගැනීමට ශාක දරන අනුවර්තන විස්තර කරන්න.
          </Text>
        </View>
        {/* Lesson Category end */}
        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            අජෛවීය ආතති ,නියං ආතති
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            ශාකයකට ජලය අවශෝෂණය කෙරෙන ශීඝ්‍රතාවයට වඩා උත්ස්වේදනය මගින් ජලය බැහැර
            වන ශීඝ්‍රතාවය වැඩිනම් ශාක මැලවීම සිදුවේ.{"\n"}
            {"\n"}දිගු කාලයක් නියග පවතින විට ශාක මිය යයි.{"\n"}
            {"\n"}ජලය හිඟ / නියග තත්ත්ව යටතේ ශාකවල පැවැත්ම තහවුරු කරගැනීමට අදාළ
            පාලන පද්ධති ශාක සතුය.{"\n"}
            {"\n"}ජලය හිඟ වූ විට ඇබිසිසික් අම්ල නිපදවීම හා නිදහස් වීම උත්තේජනය
            වේ.{"\n"}
            {"\n"}ABA පාලක සෛලවල පටල මත ක්‍රියාකරමින් පූටිකා වැසීයයි.{"\n"}
            {"\n"}
            එමඟින් උත්ස්වේදනය අඩු කරයි.{"\n"}
            {"\n"}තෘණ පත්‍ර රෝල් වී, බටයක් ආකාරයට සෑදීමෙන් පෘෂ්ඨ වර්ගඵලය අඩුවී
            උත්සවය අඩු වේ.{"\n"}
            {"\n"}නියං කාල වලදී සමහර ශාක පත්‍ර හලයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">
            සීතල ආතති.
          </Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 pb-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            සෛලයක පටලයේ උෂ්ණත්වය යම් අවධි උෂ්ණත්ව මට්ටමකට වඩා අඩුවන විට එහි
            තරලමය ස්වභාවය නැතිවේ.{"\n"}
            {"\n"}එයට හේතුව පටලයේ ඇති ලිපිඩ අණු ස්ඵටික ව්‍යුහයක් බවට පත්වෙමින්
            අවහිර වීමයි.{"\n"}
            {"\n"}එවිට පටලය හරහා ද්‍රව්‍ය පරිවහනය වීම වැළකී.{"\n"}
            {"\n"}සෛලීය ක්‍රියා කෙරේ බලපෑම් ඇති කරයි.{"\n"}
            {"\n"}සීතලට ප්‍රතිචාරයක් ලෙස ශාක සෛලවල ප්ලාස්ම පටලයේ ලිපිඩ සංයුතිය
            වෙනස් කරයි.{"\n"}
            {"\n"}අසංතෘප්ත මේද අම්ල අනුපාතය වැඩි කරයි.{"\n"}
            {"\n"}අඩු උෂ්ණත්වවලදී පටලය වැඩිතරල බවකින් තබාගනී.{"\n"}
            {"\n"}ජලය මිදීමද සීතල ආතතියකි.{"\n"}
            {"\n"}ද්‍රව්‍යවලින් සරු සයිටොසෝලයේ ජලය මිදීමට පෙර සෛල බිත්තියේ හා
            අන්තර් සෛලීය අවකාශවල ජලය මිදෙයි.{"\n"}
            {"\n"}සෛල බිත්ති තුළ ද්‍රව ජලය අඩුවීම මගින් බහිස්සෛලීය ජල විභවය අඩු
            කරයි.{"\n"}
            {"\n"}සයිටොසොලයෙන් ජලය පිට වීමටහේතු වේ.{"\n"}
            {"\n"}එහි ප්‍රතිඵලය ලෙස සෛලප්ලාස්මයේ අධික ද්‍රව්‍ය සාන්ද්‍රණයක්
            ඇතිවේ.{"\n"}
            {"\n"}මේ තත්ත්වය හානිකර වී සෛල මිය යාමට හේතු වේ.{"\n"}
            {"\n"}මිදීමට ඔරොත්තුදෙන ශාකවල, ශීත සෘතුවේ ආරම්භයට පෙර සීනි වැනි
            විශේෂිත ද්‍රව්‍යවල සෛල ප්ලාස්මීය මට්ටම ඉහළ නංවයි.{"\n"}
            {"\n"}එමගින් ජල හානිය අඩුකර සෛල විජලනය වීම වළක්වයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Categories Start */}
        <View className="px-3 pt-3">
          <Text className="py-3 text-lg font-bold text-gray-800">ලවණ ආතති</Text>
        </View>
        {/* Lesson Category end */}

        {/* Lesson Note Start */}
        <View className="px-3 py-3 mt-2 mb-3 text-justify text-gray-800">
          <Text className="text-base font-semibold ">
            පස තුළ වැඩිපුර ලවණ ඇති විට (ඉහළ ලවණතාව) පාංශු ද්‍රාවණයේ ජල විභවය
            අඩුවේ.{"\n"}
            {"\n"}මේ නිසා පසේ සිට මුල් දක්වා ජලවිභව අනුක්‍රමණය අඩුවේ.{"\n"}
            {"\n"}මෙය මුල් මඟින් ජලය අවශෝෂණය අඩුවීමට මඟ පාදයි.{"\n"}
            {"\n"}සාමාන්‍යයෙන් පස තුළ ඉතා වැඩි ලවණතාව ශාකයකට විෂ වේ.{"\n"}
            {"\n"}බොහෝ ශාක ඉහළ සාන්ද්‍රන හොඳින් දරාගත හැකි ද්‍රව්‍ය නිපදවයි.
            {"\n"}
            {"\n"}
            එමගින් මධ්‍යස්ථ පාංශු ලවණතාවයට ප්‍රතිචාර දක්වයි.{"\n"}
            {"\n"}ඒවා කාබනික සංයෝග වේ.{"\n"}
            {"\n"}එමගින් සෛලයේ ජල විභවය,පාංශු ද්‍රාවණයේ ජල විභවය ට වඩා වැඩි ඍණ
            අගයක් පවතී.{"\n"}
            {"\n"}ඇතැම් ශාකවල ලවණ ග්‍රන්ථි හරහා වැඩිපුර ඇති ලවණ පත්‍ර පෘෂ්ඨය
            හරහා බැහැර කරයි.{"\n"}
            {"\n"}මේවා ලවණ දරාගන්නා ශාකවල පවතී. (ලවණ ශාක){"\n"}උදා:- කඩොලාන ශාක
            වැඩි ප්‍රමාණයක් ශාක පළිබෝධයන් හා ව්‍යාධිජනකයන්ගෙන් ආරක්ෂා වන ආකාරය
            {"\n"}
            {"\n"}ශාක ආරක්ෂණ යාන්ත්‍රණවලදී සමහර සංයෝග හා ව්‍යුහ ශාකයක පවතින අතර
            {"\n"}
            {"\n"}සමහර ඒවා ආසාදනය වූ පසුව හා පලිබෝධකයන්ගේ ආක්‍රමණ වලට පසුව
            ඇතිවේ.{"\n"}
            {"\n"}ඒ නිසා ආරක්ෂක යාන්ත්‍රණ වර්ග දෙකකට බෙදිය හැකිය.{"\n"}
            {"\n"}පෙර සිට පැවති යාන්ත්‍රණ හා ප්‍රේරිත යාන්ත්‍රණ ලෙසය.{"\n"}
            {"\n"}පෙර සිට පැවති ව්‍යුහමය හා රසායනික ආරක්ෂක යාන්ත්‍රණ අපිචර්මීය
            සෛල ආවරණය කරන ඉටි හා උච්චර්මයේ ප්‍රමාණය හා තත්ත්වය.{"\n"}
            {"\n"}
            අපිචර්මීය සෛල බිත්තිවල ව්‍යුහය හා ඝනකම පූටිකාවල ප්‍රමාණය, ස්ථානය හා
            හැඩය.{"\n"}
            {"\n"}ද්විතීයික පරිවෘත්තීජ කාණ්ඩ{"\n"}(උදා:- නිකොටීන්) ,පීනෝල
            (ෆ්ලැවනොයිඩ, ලිග්නීන් හා ටැනීන්),ටයිෆිනොයිඩ (ඇසඩිරැක්ටින් හා
            ලෙක්ටීන්),කටු, තුණ්ඩ, ට්‍රිකෝම,ප්‍රේරිත ව්‍යුහමය හා රසායනික ආරක්ෂක
            යාන්ත්‍රණ{"\n"}
            {"\n"}සෛල බිත්තිය රූප විද්‍යාත්මක වෙනස්වීම.{"\n"}
            {"\n"}වල්කය හා ඡේදස්තරය සෑදීම.{"\n"}
            {"\n"}ෆීනෝලික සංයෝග නිපදවීම.{"\n"}
            {"\n"}විෂ සංයෝග නිපදවීම.{"\n"}
            {"\n"}දිලීර සෛල බිත්ති බිඳහෙලන හෝ කෘමී අවයව වලට හානි කරන එන්සයිම.
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
            {"\n"}එනම්,කද දික්වීම නිශේධනය පාර්ශ්වික,වර්ධනය දිරිගන්වයි, ,තිරස්
            වර්ධනය දිරිගන්වයි,වෘද්ධතාව වේගවත් කරයි,මුල් හා මූලකේශ වර්ධනය
            දිරිගන්වයි,අන්නාසි කුලයේ ශාකවල මල්හට ගැනීම ප්‍රේරණය කරවයි.
          </Text>
        </View>
        {/* Lesson Note End */}

        {/* Lesson Note End */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Les4Sub21;
