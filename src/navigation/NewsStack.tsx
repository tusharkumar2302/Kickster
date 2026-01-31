import { createNativeStackNavigator } from "@react-navigation/native-stack"
import NewsListScreen from "../features/news/screens/NewsListScreen";
import NewsDetailsScreen from "../features/news/screens/NewsDetailsScreen";

const Stack = createNativeStackNavigator();

const NewsStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="NewsList" component={NewsListScreen}></Stack.Screen>
      <Stack.Screen name="NewsDetails" component={NewsDetailsScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}

export default NewsStack