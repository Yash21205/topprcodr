import React from 'react';
import { Text,Button, View  } from 'react-native';
import Login from './Login';

export default function Landing({navigation}){
    return(
        <View>
            <Text> Landing </Text>
            <Button title="Login" onPress={()=>navigation.navigate("Home")}>

            </Button>
            <Button title="Sign up " onPress={()=>navigation.navigate("Details")}> </Button>
        </View>
        
        
        );
}