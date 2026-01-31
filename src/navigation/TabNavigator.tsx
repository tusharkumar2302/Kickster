import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from './HomeStack';
import MatchesStack from './MatchesStack';
import ScheduleStack from './ScheduleStack';
import NewsStack from './NewsStack';
import ProfileStack from './ProfileStack';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="HomeTab" component={HomeStack} />
      <Tab.Screen name="MatchesTab" component={MatchesStack} />
      <Tab.Screen name="ScheduleTab" component={ScheduleStack} />
      <Tab.Screen name="NewsTab" component={NewsStack} />
      <Tab.Screen name="ProfileTab" component={ProfileStack} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
