import React from 'react';
import { StyleSheet, Text, View, ScrollView,TextInput,ActivityIndicator,Button} from 'react-native';
import BasicButton from './Basicbutton';
import LoginSignUpBtn from './LoginSignupbtn';
import ORDivider from './Ordivider';
import {Picker} from '@react-native-picker/picker';
import ValidationComponent from 'react-native-form-validator';
import SnackBar from './Snackbar';
import{Audio }from 'expo-av';

export default class Signup extends ValidationComponent{
    constructor(props){
        super(props);
        this.state={
            name:'',
            email:'',
            agegroup:'',
            password:'',
            confirmpassword:'',
            snackbarvisible:false,
            snackbartype:"",
            snackbartext:"",
            isLoading:false,

        }
    }
    hidesnackbar=()=>{
        this.setState({
            "snackbarvisible":false
        });
    }
    playaudio=async()=>{
        try{
            const soundobj=new Audio.Sound();
            await soundobj.loadAsync(require('../assets/ding2.mp3'));
            await soundobj.playAsync();
        }
        catch(e){
            console.log(e.message)
        }
    }
    displayLoader=()=>{
        this.setState({
            isLoader:true,
        });
    }
    hideLoader=()=>{
        this.setState({
            isLoader:false,
        });
    }
    handleRegbtnclick=()=>{
        this.displayLoader();
        this.validate({
            name: {minlength:3, maxlength:7, required: true},
            email: {email: true,required:true},
            agegroup:{required:true},
            password:{required:true},
            confirmpassword:{equalPassword:this.state.password,required:true},

          });
          if(this.getErrorMessages()){
              this.displaySnackbar("error",this.getErrorMessages())
          }
          else{
            this.playaudio();
              this.hidesnackbar();
              
              this.displaySnackbar("success","Login clicked")
          }
            setTimeout(()=>{this.hideLoader()},1000)
    }
    displaySnackbar=(type,text)=>{ 
        this.setState({
            "snackbartype":type,
            "snackbartext":text,
            "snackbarvisible":true
        });
         }
    handlesignin=()=>{


    }

  render(){
    return( 
        <>
      <ScrollView style={styles.container}>
      < Button title="Menu" onPress={()=>{this.props.navigation.openDrawer()}} ></Button>
         <Text style={styles.title}>Signup</Text>
            <View style={styles.form}>
                <Text style={styles.label}>Name</Text>
                <TextInput
                    style={styles.inputField}
                    
                    placeholder="Enter your Name"
                    value={this.state.name}
                    onChangeText={(name) =>this.setState({name}) }
                />
                 <View style={styles.divider}></View>
                  <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.inputField}
                    keyboardType="email-address"
                    placeholder="Enter Email"
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email})}
                />

               
                <View style={styles.divider}></View>
                <Text style={styles.label}>Agegroup</Text>
                <Picker
                    style={styles.inputField}
                    selectedValue={this.state.agegroup}
                    onValueChange={(agegroup, itemIndex) =>
                       this.setState({agegroup})
                    }>
                    <Picker.Item label="" value="" />
                    <Picker.Item label="1-4" value="1-4" />
                    <Picker.Item label="5-12" value="5-12" />
                    <Picker.Item label="13-18" value="13-18" />
                    </Picker>
                    <View style={styles.divider}></View>

                <Text style={styles.label}>Password</Text>
                <TextInput
                style={styles.inputField}
                secureTextEntry
                placeholder="Enter password"
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
            />
                <View style={styles.divider}></View>
                <Text style={styles.label}>ConfirmPassword</Text>
                <TextInput
                style={styles.inputField}
                secureTextEntry
                placeholder="Confirm Password"
                value={this.state.confirmpassword}
                onChangeText={(confirmpassword) => this.setState({ confirmpassword })}
            />

            <BasicButton text="Register" onPress={this.handleRegbtnclick}>  </BasicButton>  
            {
                this.state.isLoading?<ActivityIndicator style={styles.loader}/>:null
            }

           

            <ORDivider>  </ORDivider>

            <LoginSignUpBtn
            customStyle={styles.signin}
            text="Already have an account"
            btnText="signin"
            onPress={this.handlesignin}

            />

            
              </View>
      </ScrollView>
      {
          this.state.snackbarvisible?
          <SnackBar 
          isVisible={this.state.snackbarvisible}
          type={this.state.snackbartype}
          text={this.state.snackbartext}
          onClose={this.hidesnackbar}
          > </SnackBar>
          :null
      }
      </>
    );
  }
}

const styles=StyleSheet.create({
signin:{
    marginVertical:40,
},
container:{
  flex:1,
  marginTop:60,
  paddingHorizontal:30
},
title: {
    fontWeight: '500',
    fontSize: 20,
    letterSpacing: 0.1,
    color: '#2E2E2E',
},
form: {
    marginVertical: 35,
},
label: {
    fontSize: 16,
    lineHeight: 18,
    color: '#666666',
    marginBottom: 3,
},

inputField: {
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#BFBFBF',
    paddingVertical: 6,
},

divider: {
    paddingVertical: 12,
},

log: {
    textAlign: "center",
    marginVertical: 2,
},

signup: {
    marginTop: 40,
}
,
buttoncontainer: {
    backgroundColor: '#2B35E0',
    borderRadius: 8,
    padding: 10,
},

buttontext: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#FFFFFF',
    textAlign: "center",
},
loader:{
    width:20,
    height:20,
},


  
});