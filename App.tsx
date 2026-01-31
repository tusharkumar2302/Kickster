import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';
import { enableScreens } from 'react-native-screens';

import RootNavigator from './src/navigation/RootNavigator';

enableScreens();

function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
