import { Octicons } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import style from './style';
import { RouteParams, Routes } from './types';
import HomeStack from '../screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginStack from '../screens/Login';
import { View } from 'react-native';
import useAppInit from '@hooks/useAppInit';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface RootParamList extends RouteParams {}
  }
}

const NativeStack = createNativeStackNavigator<RouteParams>();
const Tabs = createBottomTabNavigator<RouteParams>();

const RootTabs = () => {
  return (
    <>
      <Tabs.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name={Routes.HomeStack}
          component={HomeStack}
          options={{
            tabBarIcon: ({ size, focused }) => {
              return (
                <Octicons
                  name="home"
                  size={size}
                  color={focused ? 'red' : '#c2c2c2'}
                />
              );
            },
          }}
        />
      </Tabs.Navigator>
    </>
  );
};

export default () => {
  const { onLayoutRootView, appReady } = useAppInit();

  const isAuthenticated = true; //@TODO Create Context and Authentication Logic

  if (!appReady) {
    return <></>;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <NativeStack.Navigator
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: 'transparent' },
        }}
      >
        {isAuthenticated ? (
          <>
            <NativeStack.Screen name={Routes.RootTabs} component={RootTabs} />
          </>
        ) : (
          <NativeStack.Screen
            options={{ presentation: 'fullScreenModal' }}
            name={Routes.LoginStack}
            component={LoginStack}
          />
        )}
      </NativeStack.Navigator>
    </View>
  );
};
