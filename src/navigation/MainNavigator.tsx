import { createNativeStackNavigator } from "@react-navigation/native-stack"
import ModalNavigator from "./ModalNavigator"
import TabNavigator from "./TabNavigator"


const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Tabs" component={TabNavigator} />
        <Stack.Screen name="Modals" component={ModalNavigator} />
    </Stack.Navigator>

  )
}

export default MainNavigator