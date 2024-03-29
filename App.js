import React, { useLayoutEffect } from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import Lesson1 from "./screens/Lesson1";
import Lesson2 from "./screens/Lesson2";
import Lesson3 from "./screens/Lesson3";
import Les1Sub1 from "./screens/Lesson1/Les1Sub1";
import Les2Sub1 from "./screens/Lesson2/Les2Sub1";
import Les2Sub2 from "./screens/Lesson2/Les2Sub2";
import Les2Sub3 from "./screens/Lesson2/Les2Sub3";
import Les2Sub4 from "./screens/Lesson2/Les2Sub4";
import Les2Sub5 from "./screens/Lesson2/Les2Sub5";
import Les2Sub6 from "./screens/Lesson2/Les2Sub6";
import Les2Sub7 from "./screens/Lesson2/Les2Sub7";
import Les2Sub8 from "./screens/Lesson2/Les2Sub8";
import Les2Sub9 from "./screens/Lesson2/Les2Sub9";
import Les2Sub10 from "./screens/Lesson2/Les2Sub10";
import Les2Sub11 from "./screens/Lesson2/Les2Sub11";
import Les2Sub12 from "./screens/Lesson2/Les2Sub12";
import Les2Sub13 from "./screens/Lesson2/Les2Sub13";
import Les2Sub14 from "./screens/Lesson2/Les2Sub14";
import Les2Sub15 from "./screens/Lesson2/Les2Sub15";
import Les2Sub16 from "./screens/Lesson2/Les2Sub16";
import Les2Sub17 from "./screens/Lesson2/Les2Sub17";
import Les2Sub18 from "./screens/Lesson2/Les2Sub18";
import Les2Sub19 from "./screens/Lesson2/Les2Sub19";
import Les2Sub20 from "./screens/Lesson2/Les2Sub20.";
import Les2Sub21 from "./screens/Lesson2/Les2Sub21";
import Les2Sub22 from "./screens/Lesson2/Les2Sub22";
import Les2Sub23 from "./screens/Lesson2/Les2Sub23";
import Les2Sub24 from "./screens/Lesson2/Les2Sub24";
import Les2Sub25 from "./screens/Lesson2/Les2Sub25";
import Les2Sub26 from "./screens/Lesson2/Les2Sub26";
import Les3Sub1 from "./screens/Lesson3/Les3Sub1";
import Les3Sub2 from "./screens/Lesson3/Les3Sub2";
import Les3Sub3 from "./screens/Lesson3/Les3Sub3";
import Les3Sub4 from "./screens/Lesson3/Les3Sub4";
import Les3Sub5 from "./screens/Lesson3/Les3Sub5";
import Les3Sub6 from "./screens/Lesson3/Les3Sub6";
import Les3Sub7 from "./screens/Lesson3/Les3Sub7";
import Les3Sub8 from "./screens/Lesson3/Les3Sub8";
import Les3Sub9 from "./screens/Lesson3/Les3Sub9";
import Les3Sub10 from "./screens/Lesson3/Les3Sub10";
import Les3Sub11 from "./screens/Lesson3/Les3Subs11";
import Les3Sub12 from "./screens/Lesson3/Les3Sub12";
import Les3Sub13 from "./screens/Lesson3/Les3Sub13";
import Les3Sub14 from "./screens/Lesson3/Les3Sub14";
import Les3Sub15 from "./screens/Lesson3/Les3Sub15";
import Les3Sub16 from "./screens/Lesson3/Les3Sub16";
import Lesson4 from "./screens/Lesson4";
import Les4Sub1 from "./screens/Lesson4/Les4Sub1";
import Les4Sub2 from "./screens/Lesson4/Les4Sub2";
import Les4Sub3 from "./screens/Lesson4/Les4Sub3";
import Les4Sub4 from "./screens/Lesson4/Les4Sub4";
import Les4Sub5 from "./screens/Lesson4/Les4Sub5";
import Les4Sub6 from "./screens/Lesson4/Les4Sub6";
import Les4Sub7 from "./screens/Lesson4/Les4Sub7";
import Les4Sub8 from "./screens/Lesson4/Les4Sub8";
import Les4Sub9 from "./screens/Lesson4/Les4Sub9";
import Les4Sub10 from "./screens/Lesson4/Les4Sub10";
import Les4Sub11 from "./screens/Lesson4/Les4Sub11";
import Les4Sub12 from "./screens/Lesson4/Les4Sub12";
import Les4Sub13 from "./screens/Lesson4/Les4Sub13";
import Les4Sub14 from "./screens/Lesson4/Les4Sub14";
import Les4Sub15 from "./screens/Lesson4/Les4Sub15";
import Les4Sub16 from "./screens/Lesson4/Les4Sub16";
import Les4Sub17 from "./screens/Lesson4/Les4Sub17";
import Les4Sub18 from "./screens/Lesson4/Les4Sub18";
import Les4Sub19 from "./screens/Lesson4/Les4Sub19";
import Les4Sub20 from "./screens/Lesson4/Les4Sub20";
import Les4Sub21 from "./screens/Lesson4/Les4Sub21";
import Les4Sub22 from "./screens/Lesson4/Les4Sub22";
import Menu from "./screens/Menu/Menu";
import Notification from "./screens/Notification/Notification";
import AiChat from "./screens/AiChat/AiChat";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const LessonList = () => (
  <Stack.Navigator>
    <Stack.Screen name="Home1" component={HomeScreen} />
    <Stack.Screen name="Notification" component={Notification} />
    <Stack.Screen name="Lesson1" component={Lesson1} />
    <Stack.Screen name="Lesson2" component={Lesson2} />
    <Stack.Screen name="Lesson3" component={Lesson3} />
    <Stack.Screen name="Les1Sub1" component={Les1Sub1} />
    <Stack.Screen name="Les2Sub1" component={Les2Sub1} />
    <Stack.Screen name="Les2Sub2" component={Les2Sub2} />
    <Stack.Screen name="Les2Sub3" component={Les2Sub3} />
    <Stack.Screen name="Les2Sub4" component={Les2Sub4} />
    <Stack.Screen name="Les2Sub5" component={Les2Sub5} />
    <Stack.Screen name="Les2Sub6" component={Les2Sub6} />
    <Stack.Screen name="Les2Sub7" component={Les2Sub7} />
    <Stack.Screen name="Les2Sub8" component={Les2Sub8} />
    <Stack.Screen name="Les2Sub9" component={Les2Sub9} />
    <Stack.Screen name="Les2Sub10" component={Les2Sub10} />
    <Stack.Screen name="Les2Sub11" component={Les2Sub11} />
    <Stack.Screen name="Les2Sub12" component={Les2Sub12} />
    <Stack.Screen name="Les2Sub13" component={Les2Sub13} />
    <Stack.Screen name="Les2Sub14" component={Les2Sub14} />
    <Stack.Screen name="Les2Sub15" component={Les2Sub15} />
    <Stack.Screen name="Les2Sub16" component={Les2Sub16} />
    <Stack.Screen name="Les2Sub17" component={Les2Sub17} />
    <Stack.Screen name="Les2Sub18" component={Les2Sub18} />
    <Stack.Screen name="Les2Sub19" component={Les2Sub19} />
    <Stack.Screen name="Les2Sub20" component={Les2Sub20} />
    <Stack.Screen name="Les2Sub21" component={Les2Sub21} />
    <Stack.Screen name="Les2Sub22" component={Les2Sub22} />
    <Stack.Screen name="Les2Sub23" component={Les2Sub23} />
    <Stack.Screen name="Les2Sub24" component={Les2Sub24} />
    <Stack.Screen name="Les2Sub25" component={Les2Sub25} />
    <Stack.Screen name="Les2Sub26" component={Les2Sub26} />
    <Stack.Screen name="Les3Sub1" component={Les3Sub1} />
    <Stack.Screen name="Les3Sub2" component={Les3Sub2} />
    <Stack.Screen name="Les3Sub3" component={Les3Sub3} />
    <Stack.Screen name="Les3Sub4" component={Les3Sub4} />
    <Stack.Screen name="Les3Sub5" component={Les3Sub5} />
    <Stack.Screen name="Les3Sub6" component={Les3Sub6} />
    <Stack.Screen name="Les3Sub7" component={Les3Sub7} />
    <Stack.Screen name="Les3Sub8" component={Les3Sub8} />
    <Stack.Screen name="Les3Sub9" component={Les3Sub9} />
    <Stack.Screen name="Les3Sub10" component={Les3Sub10} />
    <Stack.Screen name="Les3Sub11" component={Les3Sub11} />
    <Stack.Screen name="Les3Sub12" component={Les3Sub12} />
    <Stack.Screen name="Les3Sub13" component={Les3Sub13} />
    <Stack.Screen name="Les3Sub14" component={Les3Sub14} />
    <Stack.Screen name="Les3Sub15" component={Les3Sub15} />
    <Stack.Screen name="Les3Sub16" component={Les3Sub16} />
    <Stack.Screen name="Lesson4" component={Lesson4} />
    <Stack.Screen name="Les4Sub1" component={Les4Sub1} />
    <Stack.Screen name="Les4Sub2" component={Les4Sub2} />
    <Stack.Screen name="Les4Sub3" component={Les4Sub3} />
    <Stack.Screen name="Les4Sub4" component={Les4Sub4} />
    <Stack.Screen name="Les4Sub5" component={Les4Sub5} />
    <Stack.Screen name="Les4Sub6" component={Les4Sub6} />
    <Stack.Screen name="Les4Sub7" component={Les4Sub7} />
    <Stack.Screen name="Les4Sub8" component={Les4Sub8} />
    <Stack.Screen name="Les4Sub9" component={Les4Sub9} />
    <Stack.Screen name="Les4Sub10" component={Les4Sub10} />
    <Stack.Screen name="Les4Sub11" component={Les4Sub11} />
    <Stack.Screen name="Les4Sub12" component={Les4Sub12} />
    <Stack.Screen name="Les4Sub13" component={Les4Sub13} />
    <Stack.Screen name="Les4Sub14" component={Les4Sub14} />
    <Stack.Screen name="Les4Sub15" component={Les4Sub15} />
    <Stack.Screen name="Les4Sub16" component={Les4Sub16} />
    <Stack.Screen name="Les4Sub17" component={Les4Sub17} />
    <Stack.Screen name="Les4Sub18" component={Les4Sub18} />
    <Stack.Screen name="Les4Sub19" component={Les4Sub19} />
    <Stack.Screen name="Les4Sub20" component={Les4Sub20} />
    <Stack.Screen name="Les4Sub21" component={Les4Sub21} />
    <Stack.Screen name="Les4Sub22" component={Les4Sub22} />
  </Stack.Navigator>
);

const MenuPage = () => (
  <Stack.Navigator>
    <Stack.Screen name="Menu" component={Menu} />
    <Stack.Screen name="Notification1" component={AiChat} />
  </Stack.Navigator>
);

const AiChatPage = () => (
  <Stack.Navigator>
    <Stack.Screen name="AiChat" component={AiChat} />
    {/* <Stack.Screen name="Menu" component={Menu} /> */}
  </Stack.Navigator>
);

const NotificationPage = () => (
  <Stack.Navigator>
    <Stack.Screen name="Notification" component={Notification} />
  </Stack.Navigator>
);


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: "#CE5700",
          tabBarStyle: [
            {
              display: "flex",
            },
            null,
          ],
        })}
      >
        <Tab.Screen
          name="Home"
          component={LessonList}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" size={30} color={color} />
            ),
            tabBarIconStyle: {
              marginTop: 5, // Adjust the value according to your needs
            },
          }}
        />
        <Tab.Screen
          name="Chatbot"
          component={AiChatPage}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="message-text"
                size={30}
                color={color}
              />
            ),
            tabBarIconStyle: {
              marginTop: 5, // Adjust the value according to your needs
            },
          }}
        />
        <Tab.Screen
          name="Menu"
          component={NotificationPage}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="notifications" size={30} color={color} />
            ),
            tabBarIconStyle: {
              marginTop: 5, // Adjust the value according to your needs
            },
          }}
        />
        <Tab.Screen
          name="Notification"
          component={MenuPage}
          options={{
            headerShown: false,
            tabBarLabel: "",
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="grid" size={30} color={color} />
            ),
            tabBarIconStyle: {
              marginTop: 5, // Adjust the value according to your needs
            },
          }}
        />
        {/* Add more tabs with corresponding screens here */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}
