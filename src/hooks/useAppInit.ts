import { useCallback, useEffect, useState } from 'react';

import { loadFont } from '@utils/loadFont';
import * as SplashScreen from 'expo-splash-screen';

const useAppInit = () => {
  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    const initApp = async () => {
      try {
        await loadFont();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppReady(true);
      }
    };

    initApp();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appReady) {
      await SplashScreen.hideAsync();
    }
  }, [appReady]);

  return {
    onLayoutRootView,
    appReady,
  };
};

export default useAppInit;
