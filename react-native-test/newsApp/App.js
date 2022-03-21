import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import {useState} from 'react';
import MainStack from './navigate';
import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';

const  fonts = () => Font.loadAsync({
  'mt-bold': require('./assets/fonts/Montserrat-SemiBold.ttf'),
  'mt-light': require('./assets/fonts/Montserrat-Light.ttf'),
});

const App = () => {
  const [font, setFont] = useState(false);

  if(font){
    return (
      <NativeBaseProvider>
        <MainStack />
      </NativeBaseProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setFont(true)}
        onError={console.warn()}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
