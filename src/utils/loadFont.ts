import * as Font from 'expo-font';

export const loadFont = async () => {
  try {
    await Font.loadAsync({
      AgeoLight: require('../../assets/fonts/Ageo-Light.ttf'),
      AgeoThin: require('../../assets/fonts/Ageo-Thin.ttf'),
      AgeoRegular: require('../../assets/fonts/Ageo-Regular.ttf'),
      AgeoBold: require('../../assets/fonts/Ageo-Bold.ttf'),
    });
  } catch (error) {
    console.error(error);
  }
};
