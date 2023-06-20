export enum Routes {
  //ROOT
  Root = 'Root',
  BottomTabNavigator = 'BottomTabNavigator',
  RootTabs = 'RootTabs',
  //LOGIN
  LoginStack = 'LoginStack',
  Login = 'Login',
  Verify = 'Verify',
  Register = 'Register',
  //HOME
  HomeStack = 'HomeStack',
  Home = 'Home',
}

export type RouteParams = {
  //ROOT
  [Routes.Root]: undefined;
  [Routes.RootTabs]: undefined;
  [Routes.BottomTabNavigator]: undefined;
  //LOGIN
  [Routes.LoginStack]: undefined;
  [Routes.Login]: undefined;
  [Routes.Verify]: undefined;
  [Routes.Register]: { firebaseId: string };
  //HOME
  [Routes.HomeStack]: undefined;
  [Routes.Home]: undefined;
};
