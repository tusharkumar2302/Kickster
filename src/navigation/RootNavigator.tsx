import React from 'react';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';

const RootNavigator = () => {
  const isLoggedIn = false;

  if (isLoggedIn) {
    return <TabNavigator />;
  } else {
    return <AuthNavigator />;
  }
};

export default RootNavigator;
