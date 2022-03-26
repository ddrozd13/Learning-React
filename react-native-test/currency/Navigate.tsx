import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FC } from 'react';
import Main from './components/pages/Main';

const Stack = createStackNavigator();

const Navigate: FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          component={Main}
          name="Main"
          options={{ title: 'Main', headerTitleAlign: 'center'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigate;
