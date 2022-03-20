import Main from './components/Main';
import FullInfo from './components/FullInfo';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import moment from 'moment';

const Stack = createStackNavigator();

const Navigate = () => {
  const date = new Date();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: `News on ${moment(date).format('DD MMMM')}`,
            headerStyle: {backgroundColor: 'grey', height: 50},
            headerTitleStyle: {color: '#fff'},
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen
          name="FullInfo"
          component={FullInfo}
          options={{
            title: 'Details',
            headerStyle: {backgroundColor: 'grey', height: 50},
            headerTitleStyle: {color: '#fff'},
            headerTitleAlign: 'center',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
