import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';
import PageLayout from './components/PageLayout/PageLayout';

const Stack = createStackNavigator();

const Navigate: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={PageLayout} name="PageLayout" />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigate;
