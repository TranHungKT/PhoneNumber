import React, {Component} from "react";
import { Button, View, StyleSheet,
   Text, ImageBackground, Image,
   Dimensions,TouchableOpacity,
  } from "react-native";

  import { AntDesign,
    MaterialCommunityIcons } from '@expo/vector-icons';


import bgImage from '../image/background.jpg'

import { TextInput } from "react-native-gesture-handler";
import reducer from "../Redux/reducer";

// // import firebase from 'firebase'  
import * as Google from "expo-google-app-auth"
import * as GoogleSignIn from 'expo-google-sign-in';

const {width: WIDTH} = Dimensions.get('window')



export default class LoginScreen extends React.Component {
  state = {
    showPass: true,
  }

  // componentDidMount(){
  //   this._login();
  // }

  signInWithGoogleAsync = async () => {
    try {
      const result = await  Google.logInAsync({
        behavior: 'web', 
        androidClientId: '697359142959-f08oqg0v9fgdthfbrs55687qf9q9sfmc.apps.googleusercontent.com',
        
        // iosClientId: YOUR_CLIENT_ID_HERE,
        scopes: ['profile', 'email'],
      });
  
      if (result.type === 'success') {
        return result.accessToken;
      } else {
        return { cancelled: true };
      }
    } catch (e) {
      return { error: true };
    }
  }
  // _login = () => {
  //  firebase.auth().onAuthStateChanged(function(user) {
  //    if (user){
  //      this.props.navigation.navigate('Main');
  //    }else{
  //      this.props.navigation.navigate('SignUp')
  //    }
  //  }.bind(this)) 
  // };
  togglePass = () => {
    this.setState(prevState => ({showPass: !prevState.showPass}));
  }

  render() {
    return (
      <ImageBackground source = {bgImage} style ={styles.BackgroundContainer}>
            <View style = {styles.inputContainer}>
             <AntDesign name="user" size={32} color="pink" style = {styles.inputIcon} />
                <TextInput
                  style = {styles.input}
                  placeholder = {'Username'}
                  placeholderTextColor = {'(rgba(255,255,255,0.7))'}
                  underlineColorAndroid = 'transparent'
                >
            </TextInput>
            </View>
            <View style = {styles.inputContainer}>
                <MaterialCommunityIcons name="lock" size={32} color="pink" style = {styles.inputIcon} />
                
                <TextInput
                  style = {styles.input}
                  placeholder = {'Password'}
                  placeholderTextColor = {'(rgba(255,255,255,0.7))'}
                  secureTextEntry = {this.state.showPass}
                  underlineColorAndroid = 'transparent'
                >
              </TextInput>
              <TouchableOpacity style = {styles.btnEye} onPress = {this.togglePass}>
                  <MaterialCommunityIcons name = {this.setState.press == false ? "eye-off-outline" : "eye-outline" } size = {26} color = "pink"  />
              </TouchableOpacity>
            </View>
            {/* <TouchableOpacity style = {styles.btnLogin} onPress={this._login}>
              <Text style={styles.text}>Login</Text>
            </TouchableOpacity> */}
            <Button title = "Sign Up" onPress = {()=> this.signInWithGoogleAsync()} />
     </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  BackgroundContainer: {
    flex : 1,
    width : null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom : 50,
  },
  logo: {
    width: 125,
    height: 125,
  },
  inputContainer:{
    marginTop : 10,
  },
  input:
  {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal: 25,
  },
  inputIcon: {
    position: 'absolute',
    top: 5,
    left: 37,
  },
  btnEye:{
    position: 'absolute',
    top: 5,
    right : 37,
  },
  btnLogin: {
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
  },
  btnSignUp:{
    width: WIDTH - 55,
    height: 45,
    borderRadius: 25,
    backgroundColor: '#432577',
    justifyContent: 'center',
    marginTop: 20,
  },
  text:{
    color: 'red',
    textAlign :'center',
    fontSize: 20,
  }
});
