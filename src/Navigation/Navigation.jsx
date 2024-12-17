/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/no-unstable-nested-components */
import {Image} from 'react-native';
import React from 'react';
import {
  HomeImg,
  TaskImg,
  ProfileImg,

} from '../theme/Images';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home/Home';
import Task from '../screens/Task/Task';
import Profile from '../screens/Profile/Profile';

const Tab = createBottomTabNavigator();
const CustomTabIcon = ({source, focused}) => {
  return (
    <Image
      source={source}
      style={{
        width: 24,
        height: 24,
      }}
    />
  );
};
const Navigation = () => {
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#20bf55',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {paddingBottom: 10, height: 60},
          headerShown: false,
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({focused}) => (
              <CustomTabIcon source={HomeImg} focused={focused} />
            ),
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Task"
          component={Task}
          options={{
            tabBarIcon: ({focused}) => (
              <CustomTabIcon source={TaskImg} focused={focused} />
            ),
            tabBarLabel: 'Task',
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({focused}) => (
              <CustomTabIcon source={ProfileImg} focused={focused} />
            ),
            tabBarLabel: 'Profile',
          }}
        />
      </Tab.Navigator>
    </>
  );
};

export default Navigation;


