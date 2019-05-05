import React from 'react';
import { 
    StyleSheet,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
    ImageBackground,
    Image,
    
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import bgImage from './images/background5.jpg'
import logo from './images/logo.jpg'
import mainpic from './images/background4.jpg'

const {width : WIDTH}= Dimensions.get('window')
export default class Main extends React.Component {

    registerpage(){
        Actions.register()
    }

    loginpage(){
        Actions.login() //method to get another page via routing
    }

    render(){


        return(

            <ImageBackground source={bgImage} style={styles.container}>
           <View style= {styles.overlayContainer}>
      
      
           <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}   />
          <Text style={styles.logoText}> M U - M A S T E R </Text>
        </View>
      
      <View style={styles.mainpicContainer}>
      <Image source={mainpic} style={styles.mainpic}/>

      </View>


        <View style={styles.button1}>
        <TouchableOpacity  style={styles.btnGo}
         onPress={this.registerpage}
        >
         <Text style={styles.text}>Go to Register Page</Text>
         </TouchableOpacity>
         </View>


         <View style={styles.button1}>
        <TouchableOpacity  style={styles.btnGo}
         onPress={this.loginpage}
        >
         <Text style={styles.text}>Go to Login Page</Text>
         </TouchableOpacity>
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

      mainpicContainer:{
        alignItems: 'center',
        marginBottom: 30,
        padding: 10
      },
      mainpic:{

        width: 300,
        height:200

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
      button1:{
        alignItems: 'center',
        justifyContent: 'center'
      },
    
      btnGo:{
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