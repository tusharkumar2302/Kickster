import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LiveMatchesScreen from "../features/matches/screens/LiveMatchesScreen";
import UpcomingMatchesScreen from "../features/matches/screens/UpcomingMatchesScreen";
import StandingsScreen from "../features/matches/screens/StandingsScreen";


const Stack = createNativeStackNavigator();

const MatchesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="LiveMatches" component={LiveMatchesScreen}></Stack.Screen>
      <Stack.Screen name="UpcomingMatches" component={UpcomingMatchesScreen}></Stack.Screen>
      <Stack.Screen name="Standings" component={StandingsScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default MatchesStack