import { FC } from 'react';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Main from '../pages/Main';
import IconSvgTabHome from '../../assets/bottomTabs/IconTabHome';
import IconTabPerson from '../../assets/bottomTabs/IconTabPerson';
import Profile from '../pages/Profile';

const PageLayout: FC = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: 'black', tabBarLabelStyle: {fontWeight: 'bold', fontSize: 11}}}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return <IconSvgTabHome />
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: () => {
            return <IconTabPerson />
          },
        }}
      />
    </Tab.Navigator>
  )
};

export default PageLayout;
