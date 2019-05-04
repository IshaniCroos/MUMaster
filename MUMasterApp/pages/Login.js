import React from 'react';

import { 
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Image,
    Alert
} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

import bgImage from './images/background7.jpg'
import logo from './images/logo.jpg'

const {width : WIDTH}= Dimensions.get('window')

// Initialize Firebase
const config={
  apiKey: "AIzaSyA78pqHKGnND4fn_c2S1RV95pvakMGifuQ",
  authDomain: "mumasterapp.firebaseapp.com",
  databaseURL: "https://mumasterapp.firebaseio.com",
  projectId: "mumasterapp",
  storageBucket: "mumasterapp.appspot.com",
  //messagingSenderId: "136990159059"
};
 !firebase.apps.length
? firebase.initializeApp(config).firestore()
: firebase.app().firestore();


export default class Login extends React.Component {

  constructor(props){
    super(props);
    this.state={
      email:'',
      password: ''
    };
  }

    registerpage(){
        Actions.register()
    }

   

    handleLoginUser= ()=>{
      const{

        email,
        password
      }= this.state;

      firebase.auth().signInWithEmailAndPassword(email,password)
      .then((user)=>{

        console.log("Log in Successfully!");
        Alert.alert('Log in Successful');
        Actions.mumain()

        
      }).catch((error)=>{

        console.log('can not create log in');
        console.log(error);
        Alert.alert(error.message);
      });
    }

    handleSetEmailLocalState=(email)=>{
     
      let y =this.state;
      y.email = email;
      this.setState(y);
      console.log(email);
    }

    handleSetPasswordLocalState=(password)=>{
     
      let a =this.state;
      a.password = password;
      this.setState(a);
      console.log(password);
    }


  render() {
   // console.log('Hello Console World!');


    return (


        <ImageBackground source={bgImage} style={styles.container}>
      <View style= {styles.overlayContainer}>

        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}   />
          <Text style={styles.logoText}> M U - M A S T E R </Text>
        </View>


      
        <View style={styles.inputContainer}>
          <Icon name={'ios-mail'} size={30} color={'rgba(255,255,255,0.9)'} 
          style={styles.inputIcon}
          />
      <TextInput
         style={styles.input}
         placeholder={'Email Address'}
         placeholderTextColor={'rgba(255,255,255,0.7)'}
         underlineColorAndroid='transparent'
         onChangeText={this.handleSetEmailLocalState}
         
        
       />
        </View>



        <View style={styles.inputContainer}>
          <Icon name={'ios-lock'} size={30} color={'rgba(255,255,255,0.9)'} 
          style={styles.inputIcon}
          />

      <TextInput
        style={styles.input}
        placeholder={'Password'}
       secureTextEntry={true}
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        underlineColorAndroid='transparent'
        onChangeText={this.handleSetPasswordLocalState}
        
        
       
       />
       </View>


       <View style={styles.register}>
        <TouchableOpacity  style={styles.btnReg}
         onPress={this.handleLoginUser}
        >
         <Text style={styles.text}> Login</Text>
         </TouchableOpacity>
         </View>



         <View style={styles.logintxt}>

          <Text style={styles.txt}>
          Don't Have an Account? 
          
          </Text>

         <TouchableOpacity onPress={this.registerpage} ><Text
         
          style={styles.txt1}> Register</Text></TouchableOpacity> 
           

         </View>
         

         </View>
         </ImageBackground>
     


        
    );
    }
}


const styles = StyleSheet.create({
  
    container: {
        flex: 1,
        width: null,
        height: null,
        //backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
      },
  overlayContainer:{

    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%'
  },
  logoContainer:{ 
    alignItems: 'center',
    marginBottom: 50,
    padding: 20
  },

  logo: {
    width: 120,
    height:120
  },

  logoText: {
    width: WIDTH -55,
    color: '#4B0082',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft:40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .5)',
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.8

  },


  
  logintxt:{

    flexGrow:1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },

  txt:{
    color: 'white',
    fontSize: 18,
    //textAlign: 'center',
    //marginTop: 25,
    

  },
  txt1:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'

  },

  input: {
    width: WIDTH -55,
    height:45,
    borderRadius:25,
    fontSize: 16,
    paddingLeft: 45,
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgba(255,255,255,0.7)',
    marginHorizontal:25
  },

  inputContainer: {
    marginTop:10
  },

  inputIcon:{
    position: 'absolute',
    top: 8,
    left:37
  },

  register:{
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnReg:{
    width: WIDTH -55,
    height:45,
    borderRadius:25,
    backgroundColor: '#432577',
    justifyContent:'center',
    marginTop:20
  },

  text:{
    color: 'rgba(255,255,255,0.7)',
    fontSize: 18,
    textAlign: 'center'
  },


 

});

