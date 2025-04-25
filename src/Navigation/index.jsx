import React from 'react';
import BottomTab from './BottomTabNav';
import { NavigationContainer } from '@react-navigation/native';

export default function index() {
  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
}
