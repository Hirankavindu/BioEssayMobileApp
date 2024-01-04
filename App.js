import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from './screens/HomeScreen';
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

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
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
        <Stack.Screen name="Lesson4" component={Lesson4}/>
        <Stack.Screen name="Les4Sub1" component={Les4Sub1}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

