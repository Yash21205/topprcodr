import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Signup from './Signup';
import Landing from './Landing';

const Stack = createStackNavigator();
export default function Navigation() {
  return (
    
      <Stack.Navigator>
          <Stack.Screen name="Landing" component={Landing}/>
        <Stack.Screen name="Home" component={Login} />
            <Stack.Screen name="Details" component={Signup} />
      </Stack.Navigator>
    
  );
}

