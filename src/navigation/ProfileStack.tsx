import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../features/profile/screens/ProfileScreen';
import ProfileInfoScreen from '../features/profile/screens/ProfileInfoScreen';
import ChangePasswordScreen from '../features/profile/screens/ChangePasswordScreen';
import ForgotPasswordScreen from '../features/profile/screens/ForgotPasswordScreen';
import LegalPoliciesScreen from '../features/profile/screens/LegalPoliciesScreen';
import LanguageScreen from '../features/profile/screens/LanguageScreen';
import NotificationsScreen from '../features/profile/screens/NotificationsScreen';
import SecurityScreen from '../features/profile/screens/SecurityScreen';
import HelpSupportScreen from '../features/profile/screens/HelpSupportScreen';


const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileInfo" component={ProfileInfoScreen} />
      <Stack.Screen name="ChangePassword" component={ChangePasswordScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="LegalPolicies" component={LegalPoliciesScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Security" component={SecurityScreen} />
      <Stack.Screen name="HelpSupport" component={HelpSupportScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
