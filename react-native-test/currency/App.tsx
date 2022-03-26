import { NativeBaseProvider } from 'native-base';
import { FC } from 'react';
import Navigate from './Navigate';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

const App: FC = () => {
  return (
    <NativeBaseProvider>
      <Navigate />
    </NativeBaseProvider>
  );
};

export default App;
