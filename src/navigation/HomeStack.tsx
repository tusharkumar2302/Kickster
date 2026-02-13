import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../features/home/screen/HomeScreen";
import HighlightViewerScreen from "../features/home/screen/HighlightViewerScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
      <Stack.Screen name='HighlightViewer' component={HighlightViewerScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeStack