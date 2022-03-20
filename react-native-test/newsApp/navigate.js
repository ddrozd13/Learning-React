import Main from './components/Main';
import FullInfo from './components/FullInfo';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Главная',
            headerStyle: {backgroundColor: 'yellow', height: 90},
            headerTitleStyle: {color: 'purple', flex: 1, justifyContent: 'center', alignItems: 'center'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{
            title: 'Подробно',
            headerStyle: {backgroundColor: 'yellow', height: 90},
            headerTitleStyle: {color: 'purple', flex: 1, justifyContent: 'center', alignItems: 'center'},
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
