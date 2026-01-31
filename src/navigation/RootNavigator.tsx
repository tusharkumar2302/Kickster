import AuthNavigator from './AuthNavigator';
import MainNavigator from './MainNavigator';

const RootNavigator = () => {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <MainNavigator />;
  } else {
    return <AuthNavigator />;
  }
};

export default RootNavigator;
