import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from "@react-navigation/native";
import { BackBox2, Logo, NewImage, Update} from '../../assets';



const Notification = () => {
    const navigation = useNavigation();

     useLayoutEffect(() => {
       navigation.setOptions({
         headerShown: false,
       });
     }, []);
  return (
    <SafeAreaView className="relative pt-12">
      {/* Back Button start */}
      <View className="px-3">
        <View className="flex-row">
          <TouchableOpacity
            className="items-center"
            onPress={() => navigation.navigate("Home")}
          >
            <Image source={BackBox2} width={200} height={30} />
          </TouchableOpacity>
        </View>
      </View>
      {/* Back Button End */}
      <View className="flex flex-col items-center justify-center">
        <View className="pt-24">
          <Image source={NewImage} width={200} height={100} />
        </View>
        <View className="flex flex-col items-center justify-center mt-5 bg-[#363062] w-screen">
          <Text className="text-lg font-bold text-[#fdfdfd]">
            ඉදිරි updates වලදී බලාපොරොත්තු වන්න
          </Text>
          <Text className="text-sm font-semibold text-[#efefef]">
            BioEssay Sinhala developer team
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Notification