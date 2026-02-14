import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideoPlayerScreen from '../features/video/screens/VideoPlayerScreen';
import SubscriptionScreen from '../features/subscription/screens/SubscriptionScreen';

const Stack = createNativeStackNavigator();

const ModalNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false, presentation: 'modal' }}
    >
      <Stack.Screen name="VideoPlayer" component={VideoPlayerScreen} />
      <Stack.Screen name="Subscription" component={SubscriptionScreen} />
    </Stack.Navigator>
  );
};

export default ModalNavigator;
