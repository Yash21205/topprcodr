import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signup from './Signup';
import Login from './Login';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    
      <Tab.Navigator 
        tabBarOptions={{
            showLabel:false,
            style:{
                position:'absolute',
                backgroundColor:'#006db3',
                bottom:25,
                right:20,
                left:20,
                borderRadius:25,
                shadowColor: '#88ffff',
                
                shadowOffset:{
                    width:10,
                    height:10,
                    
                },
                shadowOpacity:0.3,
                shadowRadius:3.5,

            }
        }}
      >
        <Tab.Screen name="login" component={Login}
        options={{
            tabBarIcon:({focused})=>(
                <View>
                    <Text style={{color:focused?"#26418f":"#7f0000"}}>
                        login
                    </Text>
                </View>
            )
        }}
        />
        <Tab.Screen name="signup" component={Signup}
         options={{
            tabBarIcon:({focused})=>(
                <View>
                    <Text  style={{width:100,color:focused?"#26418f":"#7f0000"}}>
                       Sign up 
                    </Text>
                </View>
            )
        }}
        />

      </Tab.Navigator>
   
  );
}
