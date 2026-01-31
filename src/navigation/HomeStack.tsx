import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../features/home/screen/HomeScreen";
import HighlightsScreen from "../features/home/screen/HighlightsScreen";
import StandingsScreen from "../features/home/screen/StandingsScreen";
import LiveMatchesScreen from "../features/matches/screens/LiveMatchesScreen";

const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Home' component={HomeScreen}></Stack.Screen>
      <Stack.Screen name='Highlights' component={HighlightsScreen}></Stack.Screen>
      <Stack.Screen name='Standings' component={StandingsScreen}></Stack.Screen>
      <Stack.Screen name='LiveMatches' component={LiveMatchesScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default HomeStack