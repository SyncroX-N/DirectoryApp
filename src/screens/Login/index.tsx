import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { RouteParams, Routes } from '../../navigation/types';

import Login from './LoginScreen';
import Register from './RegisterScreen';
import Verify from './VerifyScreen';

const Stack = createNativeStackNavigator<RouteParams>();

const LoginStack: React.FunctionComponent = () => {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen component={Login} name={Routes.Login} />
        <Stack.Screen component={Register} name={Routes.Register} />
        <Stack.Screen component={Verify} name={Routes.Verify} />
      </Stack.Navigator>
    </>
  );
};

export default LoginStack;
