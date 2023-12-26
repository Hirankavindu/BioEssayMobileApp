import { View, Text, SafeAreaView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const Lesson1 = () => {

    const navigation = useNavigation();

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown: false,
        });
    },[])
  return (
    <SafeAreaView className="relative flex-1 pt-12">
      <Text>Lesson1</Text>
    </SafeAreaView>
  )
}

export default Lesson1