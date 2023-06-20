import React from 'react';

import { RouteParams, Routes } from '../../navigation/types';

import Home from './Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RouteParams>();

const HomeStack: React.FunctionComponent = () => {
  return (
    <>
      <Stack.Navigator>
        <Stack.Screen component={Home} name={Routes.Home} />
      </Stack.Navigator>
    </>
  );
};

export default HomeStack;
