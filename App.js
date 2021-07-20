import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Signup from './components/Signup';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './components/Navigation';
import Tabnavigator from './components/Tabnavigator';

import Drawernavigator from './components/Drawernavigator';
export default function App() {
  return (
    <NavigationContainer>
      <Drawernavigator>
        
         </Drawernavigator>
    {/* <Navigation/> */}
    {/* <Tabnavigator/> */}
  </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
