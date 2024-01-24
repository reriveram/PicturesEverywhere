import React, {FunctionComponent} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Gallery, Picture} from '../../screens';

export default function StackNavigator() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: true,
      }}>
      <Stack.Screen name="Gallery" component={Gallery} />
      <Stack.Screen
        name="Picture"
        component={Picture as FunctionComponent}
        options={{
          presentation: 'card',
        }}
      />
    </Stack.Navigator>
  );
}
