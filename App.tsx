import { StatusBar } from 'expo-status-bar';

import Root from './src/navigation';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <SafeAreaView />
        <Root />
      </NavigationContainer>
    </>
  );
};

export default App;
