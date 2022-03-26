import { StatusBar } from 'expo-status-bar';
import { Text } from 'native-base';
import { FC } from 'react';
import { SafeAreaView } from 'react-native';

const Main: FC = () => {
  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <Text>Hello world</Text>
    </SafeAreaView>
  )
};

export default Main;
