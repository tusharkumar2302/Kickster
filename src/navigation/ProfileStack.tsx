import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../features/profile/screens/ProfileScreen';
import EditProfileScreen from '../features/profile/screens/EditProfileScreen';
import SettingsScreen from '../features/profile/screens/SettingsScreen';


const Stack = createNativeStackNavigator();

function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default ProfileStack;
