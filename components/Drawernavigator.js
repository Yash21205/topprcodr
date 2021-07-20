import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './Signup';
import Login from './Login';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, NavigationContext } from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/Drawer'
const Drawer=createDrawerNavigator();
export default function Drawernavigator(){
    return(
   <Drawer.Navigator> 
       <Drawer.Screen name="login" component= {Login} />  
       <Drawer.Screen name="Sign up" component= {Signup} />  
   </Drawer.Navigator>
    );
}