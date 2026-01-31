import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ScheduleScreen from '../features/schedule/screens/ScheduleScreen';
import CalendarScreen from '../features/schedule/screens/CalendarScreen';

const Stack = createNativeStackNavigator();

function ScheduleStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen name="Calendar" component={CalendarScreen} />
    </Stack.Navigator>
  );
}

export default ScheduleStack;
