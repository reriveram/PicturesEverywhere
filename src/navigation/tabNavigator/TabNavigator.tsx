import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {GalleryIcon, PictureIcon} from '../../components/TabIcons';
import {Capture} from '../../screens';
import {StackNavigator} from '../stackNavigator';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={() => ({
        headerShown: false,
        tabBarStyle: {
          display: 'flex',
          justifyContent: 'space-between',
          alignSelf: 'center',
          height: 60,
          width: '100%',
          paddingHorizontal: 10,
          paddingTop: 0,
          backgroundColor: 'white',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen
        name="Pictures"
        component={StackNavigator}
        options={{
          tabBarIcon: GalleryIcon,
          title: 'Gallery',
        }}
      />
      <Tab.Screen
        name="Capture"
        component={Capture}
        options={{tabBarIcon: PictureIcon}}
      />
    </Tab.Navigator>
  );
}
