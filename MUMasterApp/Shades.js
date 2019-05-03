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

} from 'react-native';

import bgImage from './images/background7.jpg'
import logo from './images/logo.jpg'
import { Actions } from 'react-native-router-flux';
const { width: WIDTH } = Dimensions.get('window')

export default class MUMain extends React.Component {

  SettingsPage() {
    Actions.settingsPage() //method to get another page via routing
  }

  render() {

    return (
      <React.Fragment>

      <ImageBackground source={bgImage} style={styles.container}>
        <View style={styles.overlayContainer}>

          <View style={styles.logoContainer}>

            <Image source={logo} style={styles.logo} />
            <Text style={styles.logoText}> M U - M A S T E R </Text>
          </View>

          <TouchableOpacity onPress={this.SettingsPage}>
            <Text> Settings</Text>
          </TouchableOpacity>

          <Text style={styles.texts}> Hi Welcome To Our Main Page!</Text>

           <View style={styles.allContainer}>


          <View style={styles.btnContainer1}>

        <TouchableOpacity  style={{ backgroundColor : 'rgb(231,204,175)', flex: 1}}
         > 
         <Text style={styles.text}> Milk Shake</Text>
         </TouchableOpacity>
         
        <TouchableOpacity  style={{ backgroundColor: 'rgb(236,198,164)', flex: 1}}
         >
         <Text style={styles.text}>Angel Food</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(232,195,157)', flex: 1}}
         >
         <Text style={styles.text}>Vanilla</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(230,197,160)', flex: 1}}
         >
         <Text style={styles.text}>Panna Cotta</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(228,182,136)', flex: 1}}
         >
         <Text style={styles.text}>Cashew</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(212,171,124)', flex: 1}}
         >
         <Text style={styles.text}>Creme Brulee</Text>
         </TouchableOpacity>

         </View>




         <View style={styles.btnContainer2}>

        <TouchableOpacity  style={{ backgroundColor : 'rgb(212,175,138)', flex: 1}}
         >
         <Text style={styles.text}> Short Bread</Text>
         </TouchableOpacity>
         
        <TouchableOpacity  style={{ backgroundColor: 'rgb(218,174,135)', flex: 1}}
         >
         <Text style={styles.text}>Chai</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(208,170,134)', flex: 1}}
         >
         <Text style={styles.text}>CheeseCake</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(209,171,137)', flex: 1}}
         >
         <Text style={styles.text}>Macaroon</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(213,169,132)', flex: 1}}
         >
         <Text style={styles.text}>Toasted Coconut</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(204,157,117)', flex: 1}}
         >
         <Text style={styles.text}>Custard</Text>
         </TouchableOpacity>

         </View>



         <View style={styles.btnContainer3}>

        <TouchableOpacity  style={{ backgroundColor : 'rgb(200,170,134)', flex: 1}}
         >
         <Text style={styles.text}> Latte</Text>
         </TouchableOpacity>
         
        <TouchableOpacity  style={{ backgroundColor: 'rgb(209,162,116)', flex: 1}}
         >
         <Text style={styles.text}>Amaratte</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(201,157,108)', flex: 1}}
         >
         <Text style={styles.text}>Tres Leches</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(191,144,101)', flex: 1}}
         >
         <Text style={styles.text}>Butter Pecan</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(190,141,92)', flex: 1}}
         >
         <Text style={styles.text}>Baklava</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(184,132,88)', flex: 1}}
         >
         <Text style={styles.text}>Duice De Leche</Text>
         </TouchableOpacity>

         </View>





         <View style={styles.btnContainer4}>

<TouchableOpacity  style={{ backgroundColor : 'rgb(190,136,81)', flex: 1}}
 >
 <Text style={styles.text}> Brown Sugar</Text>
 </TouchableOpacity>
 
<TouchableOpacity  style={{ backgroundColor: 'rgb(182,128,75)', flex: 1}}
 >
 <Text style={styles.text}>Macchiato</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(175,120,61)', flex: 1}}
 >
 <Text style={styles.text}>Ginger Bread</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(171,116,69)', flex: 1}}
 >
 <Text style={styles.text}>Cinnamon</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(177,128,78)', flex: 1}}
 >
 <Text style={styles.text}>Toffe</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(156,109,65)', flex: 1}}
 >
 <Text style={styles.text}>Chocolate Mousse</Text>
 </TouchableOpacity>

 </View>



 <View style={styles.btnContainer5}>

<TouchableOpacity  style={{ backgroundColor : 'rgb(140,99,62)', flex: 1}}
 >
 <Text style={styles.text}> Nutmeg</Text>
 </TouchableOpacity>
 
<TouchableOpacity  style={{ backgroundColor: 'rgb(140,98,56)', flex: 1}}
 >
 <Text style={styles.text}>Cocoa</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(148,94,55)', flex: 1}}
 >
 <Text style={styles.text}>Mocha</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(118,73,49)', flex: 1}}
 >
 <Text style={styles.text}>Coffe Bean</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(104,69,44)', flex: 1}}
 >
 <Text style={styles.text}>Hot Fudge</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(95,57,21)', flex: 1}}
 >
 <Text style={styles.text}>Chocolate Truffle</Text>
 </TouchableOpacity>

 </View>


 </View>









        </View>





      </ImageBackground>

      </React.Fragment>


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
  overlayContainer: {

    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: '100%',
    height: '100%'
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 50,
    padding: 20
  },



  logo: {
    width: 120,
    height: 120
  },

  logoText: {
    width: WIDTH - 55,
    color: '#4B0082',
    fontSize: 28,
    borderColor: '#fff',
    borderWidth: 2,
    padding: 20,
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: 'rgba(255,255,255, .5)',
    fontWeight: '500',
    marginTop: 10,
    opacity: 0.8

  },

  texts: {
    flexGrow: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingVertical: 16,
    flexDirection: 'row'
  },

  allContainer:{

    marginBottom: 400
  },

  btnContainer1:{
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    

  },

  btnContainer2:{
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

  btnContainer3:{
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

  btnContainer4:{
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  
  btnContainer5:{
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },

  text:{
    color: 'rgba(255,255,255,0.7)',
    fontSize: 15,
    textAlign: 'center'
  },



});