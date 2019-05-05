import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image,Dimensions } from 'react-native';

import bgImage from './images/background1.jpg'
import logo from './images/logo.jpg'


const {width : WIDTH}= Dimensions.get('window')

import Register from './Register';
import LoginPage from './Login';
import SettingsPage from '/SettingsPage';
import Routes from './Routes';
import MUMain from './MUMain';
import Main from './Main';

export default class App extends React.Component {
  render() {
    return (

    /*  <ImageBackground source={bgImage} style={styles.container}>
     

        <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}   />
          <Text style={styles.logoText}> M U - M A S T E R </Text>
        </View>*/
        <View style= {styles.overlayContainer}>
        <MUMain/>




        </View>
       // </ImageBackground>


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
});
