import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LiveMatchesScreen from "../features/matches/screens/LiveMatchesScreen";
import StandingsScreen from "../features/matches/screens/StandingsScreen";
import ClubProfileScreen from "../features/matches/screens/ClubProfileScreen";
import MatchDetailsScreen from "../features/matches/screens/MatchDetailsScreen";
import StreamingScreen from "../features/matches/screens/StreamingScreen";


const Stack = createNativeStackNavigator();

const MatchesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='LiveMatches' component={LiveMatchesScreen}></Stack.Screen>
      <Stack.Screen name='Standings' component={StandingsScreen}></Stack.Screen>
      <Stack.Screen name='ClubProfile' component={ClubProfileScreen}></Stack.Screen>
      <Stack.Screen name='MatchDetails' component={MatchDetailsScreen}></Stack.Screen>
      <Stack.Screen name='Streaming' component={StreamingScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default MatchesStack