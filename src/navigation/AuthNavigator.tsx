import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../features/auth/screens/SplashScreen';
import OnboardingScreen from '../features/auth/screens/OnboardingScreen';
import SignInScreen from '../features/auth/screens/SignInScreen';
import SignInWithEmailScreen from '../features/auth/screens/SignInWithEmailScreen';
import SignupScreen from '../features/auth/screens/SignupScreen';
import SignUpFormScreen from '../features/auth/screens/SignUpFormScreen';
import EnterOtpScreen from '../features/auth/screens/EnterOtpScreen';
import ForgotPasswordScreen from '../features/auth/screens/ForgotPasswordScreen';
import CreateNewPasswordScreen from '../features/auth/screens/CreateNewPassword';
import SelectLanguageScreen from '../features/auth/screens/SelectLanguageScreen';

const Stack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignInWithEmail" component={SignInWithEmailScreen} />
      <Stack.Screen name="SignUp" component={SignupScreen} />
      <Stack.Screen name="SignUpForm" component={SignUpFormScreen} />
      <Stack.Screen name="EnterOtp" component={EnterOtpScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPasswordScreen} />
      <Stack.Screen name="SelectLanguage" component={SelectLanguageScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
