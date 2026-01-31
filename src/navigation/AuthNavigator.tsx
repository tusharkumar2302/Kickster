import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../features/auth/screens/LoginScreen';
import SignupScreen from '../features/auth/screens/SignupScreen';
import ForgotPasswordScreen from '../features/auth/screens/ForgotPasswordScreen';
import CompleteProfileScreen from '../features/auth/screens/CompleteProfileScreen';
import SplashScreen from '../features/auth/screens/SplashScreen';
import OnboardingOneScreen from '../features/auth/screens/OnboardingOneScreen';
import OnboardingTwoScreen from '../features/auth/screens/OnboardingTwoScreen';
import OnboardingThreeScreen from '../features/auth/screens/OnboardingThreeScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="OnboardingOne" component={OnboardingOneScreen} />
      <Stack.Screen name="OnboardingTwo" component={OnboardingTwoScreen} />
      <Stack.Screen name="OnboardingThree" component={OnboardingThreeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="CompleteProfile" component={CompleteProfileScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
