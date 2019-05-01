import React from 'react';

import { 
    StyleSheet,
    Text,
    View,
    ImageBackground,         
    Image,
    Dimensions,
    TextInput,
    TouchableOpacity,
    Alert
} from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';


import bgImage from './images/background3.jpg' //importing the images 
import logo from './images/logo.jpg'
import Icon from 'react-native-vector-icons/Ionicons';
import {Actions} from 'react-native-router-flux';

const {width : WIDTH}= Dimensions.get('window')

// Initialize Firebase
var config = {
  apiKey: "AIzaSyA78pqHKGnND4fn_c2S1RV95pvakMGifuQ",
  authDomain: "mumasterapp.firebaseapp.com",
  databaseURL: "https://mumasterapp.firebaseio.com",
  projectId: "mumasterapp",
  storageBucket: "mumasterapp.appspot.com",
  //messagingSenderId: "136990159059"
};
firebase.initializeApp(config);

export default class Register extends React.Component {

  constructor(props){
    super(props);
    this.state={

      firstName:'',
      lastName:'',
      email:'',
      userName:'',
      password:''
    };

  }

    loginpage(){
        Actions.login() //method to get another page via routing
    }

    handleRegisterUser= ()=>{
      const {firstName, lastName,email,userName,password} = this.state;
      console.log(firstName);
      console.log(lastName);
      console.log(email);
      console.log(userName);
      console.log(password);

      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((user)=>{
        
        const fbRootRefFS= firebase.firestore();
        const userID = user.user.uid;
        console.log(userID);
        const userRef = fbRootRefFS.collection('users').doc(userID);
        userRef.set({
          email,
          firstName,
          lastName,
          userName,
          password
        });
        Alert.alert("Registration Successfull!");
        Actions.mumain()
        
      }).catch((error)=>{
        console.log('can not create registered user');
        console.log(error);
        Alert.alert(error.message);
      });
    
    }

    handleSetFirstNameLocalState=(firstName)=>{
     
      let s =this.state;
      s.firstName = firstName;
      this.setState(s);
      console.log(firstName);
    }

    handleSetLastNameLocalState=(lastName)=>{
     
      let x =this.state;
      x.lastName = lastName;
      this.setState(x);
      console.log(lastName);
    }

    handleSetEmailLocalState=(email)=>{
     
      let y =this.state;
      y.email = email;
      this.setState(y);
      console.log(email);
    }

    handleSetUserNameLocalState=(userName)=>{
     
      let z =this.state;
      z.userName = userName;
      this.setState(z);
      console.log(userName);
    }

    handleSetPasswordLocalState=(password)=>{
     
      let a =this.state;
      a.password = password;
      this.setState(a);
      console.log(password);
    }
  render() {
    //console.log('Hello Console World!');
    


    return (

        //adding the image backgrounds and views to the app
        //adding the text inputs to user to input the details
        <ImageBackground source={bgImage} style={styles.container}> 
      <View style= {styles.overlayContainer}>

        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}   />
          <Text style={styles.logoText}> M U - M A S T E R </Text>
        </View>

        
      
        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={30} color={'rgba(255,255,255,0.9)'} 
          style={styles.inputIcon}
          />
      <TextInput
        style={styles.input}
        placeholder={'First Name'}
        placeholderTextColor={'rgba(255,255,255,0.7)'}
        underlineColorAndroid='transparent'
        onChangeText={this.handleSetFirstNameLocalState}
       
        
       />
        </View>



        <View style={styles.inputContainer}>
          <Icon name={'ios-person'} size={30} color={'rgba(255,255,255,0.9)'} 
          style={styles.inputIcon}
          />
      <TextInput
         style={styles.input}
         placeholder={'Last Name'}
         placeholderTextColor={'rgba(255,255,255,0.7)'}
         underlineColorAndroid='transparent'
         onChangeText={this.handleSetLastNameLocalState}
         
         
       />
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
          <Icon name={'ios-people'} size={30} color={'rgba(255,255,255,0.9)'} 
          style={styles.inputIcon}
          />
      <TextInput
         style={styles.input}
         placeholder={'User Name'}
         placeholderTextColor={'rgba(255,255,255,0.7)'}
         underlineColorAndroid='transparent'
         onChangeText={this.handleSetUserNameLocalState}
         
         
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

       <TouchableOpacity  style={styles.btnEye}>
       
         
         </TouchableOpacity>
        </View>

        


<View style={styles.register}>
        <TouchableOpacity  style={styles.btnReg}
        onPress={this.handleRegisterUser}  
        >
         <Text style={styles.text}> Register</Text>
         </TouchableOpacity>
         </View>


         <View style={styles.logintxt}>

          <Text style={styles.txt}>
          Already Registered? 
          
          </Text>

         <TouchableOpacity onPress={this.loginpage} ><Text
         
          style={styles.txt1}> Log in</Text></TouchableOpacity> 
           

         </View>
         

         </View>
         </ImageBackground>


        
    );
    }
}

//creating a stylesheet to adjust and add styles to the ui

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

  btnEye: {
    position: 'absolute',
    top: 8,
    right:37
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

 
  
  inputIcon:{
    position: 'absolute',
    top: 8,
    left:37
  },

});

