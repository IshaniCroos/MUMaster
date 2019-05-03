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

import bgImage from './images/background7.jpg'
import logo from './images/logo.jpg'
import { Actions } from 'react-native-router-flux';
const { width: WIDTH } = Dimensions.get('window')

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

export default class MUMain extends React.Component {

  constructor(props){
    super(props);
    this.state={
      H:'',
      S:'',
      V:'',
      L:'',
      group:'',
      brand:'' 
    };
  }

  SettingsPage() {
    Actions.settingsPage() //method to get another page via routing
  }

  handleShadeDetails=()=>{
    const { 
      H="31",
      S="0.44",               //adding the shade details for each and every shade
      V="0.98",
      L="80",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();  //adding the shades info to the database
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Successfully Added Your Shade');
      Alert.alert('Shade Added Successfully!');
      
  }

  handleShadeDetails1=()=>{
    const {
      H="28",
      S="0.65",
      V="0.98",
      L="79",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
  console.log('Successfully Added Your Shade');
  Alert.alert('Shade Added Successfully!');
      
  }


  handleShadeDetails2=()=>{
    const {
      H="30",
      S="0.62",
      V="0.96",
      L="79",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
  console.log('Successfully Added Your Shade');
  Alert.alert('Shade Added Successfully!');
      
  }


  handleShadeDetails3=()=>{
    const {
      
      H="32",
      S="0.58",
      V="0.98",
      L="76",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
  console.log('Successfully Added Your Shade');
  Alert.alert('Shade Added Successfully!');
      
  }
  
  handleShadeDetails4=()=>{
    const {
      
      H="30",
      S="0.69",
      V="0.97",
      L="75",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
  console.log('Successfully Added Your Shade');
  Alert.alert('Shade Added Successfully!');
      
  }



  handleShadeDetails5=()=>{
    const {
      H="20",
      S="0.29",
      V="0.87",
      L="75",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({ 
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
  console.log('Successfully Added Your Shade');
  Alert.alert('Shade Added Successfully!');
      
  }



  handleShadeDetails6=()=>{
    const {
      H="31",
      S="0.54",
      V="0.88",
      L="80",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
  console.log('Successfully Added Your Shade');
  Alert.alert('Shade Added Successfully!');
      
  }


  handleShadeDetails7=()=>{
    const {
      
      
      H="30",
      S="0.46",
      V="0.94",
      L="69",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
  console.log('Successfully Added Your Shade');
  Alert.alert('Shade Added Successfully!');
      
  }


  handleShadeDetails8=()=>{
    const {
      
      H="29",
      S="0.44",
      V="0.97",
      L="67",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
  console.log('Successfully Added Your Shade');
  Alert.alert('Shade Added Successfully!');
      
  }


  handleShadeDetails9=()=>{
    const {
      H="28",
      S="0.44",
      V="0.92",
      L="68",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
      
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
  console.log('Successfully Added Your Shade');
  Alert.alert('Shade Added Successfully!');
      
  }


  handleShadeDetails10=()=>{
    const {
      H="27",
      S="0.49",
      V="0.92",
      L="68",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }


  handleShadeDetails11=()=>{
    const {
      H="28",
      S="0.46",
      V="0.91",
      L="63",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }



  handleShadeDetails12=()=>{
    const {
      H="33",
      S="0.67",
      V="0.95",
      L="65",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }



  handleShadeDetails13=()=>{
    const {
      H="30",
      S="0.5",
      V="0.86",
      L="64",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }



  handleShadeDetails14=()=>{
    const {
      H="32",
      S="0.46",
      V="0.89",
      L="61",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }



  handleShadeDetails15=()=>{
    const {
      H="29",
      S="0.41",
      V="0.85",
      L="57",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }




  handleShadeDetails16=()=>{
    const {
      H="30",
      S="0.43",
      V="0.85",
      L="55",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }



  handleShadeDetails17=()=>{
    const {
      H="28",
      S="0.4",
      V="0.87",
      L="53",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }



  handleShadeDetails18=()=>{
    const {
      H="30",
      S="0.46",
      V="0.89",
      L="53",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }



  handleShadeDetails19=()=>{
    const {
      H="30",
      S="0.42",
      V="0.89",
      L="50",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }



  handleShadeDetails20=()=>{
    const {
      H="31",
      S="0.48",
      V="0.86",
      L="46",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({ 
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }


  handleShadeDetails21=()=>{
    const {
      H="28",
      S="0.43",
      V="0.84",
      L="47",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }


  handleShadeDetails22=()=>{
    const {
      H="30",
      S="0.39",
      V="0.85",
      L="50",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }



  handleShadeDetails23=()=>{
    const {
      H="29",
      S="0.41",
      V="0.82",
      L="43",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }




  handleShadeDetails24=()=>{
    const {
      H="28",
      S="0.39",
      V="0.91",
      L="40",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }



  handleShadeDetails25=()=>{
    const {
      H="30",
      S="0.43",
      V="0.83",
      L="48",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }




  handleShadeDetails26=()=>{
    const {
      H="25",
      S="0.46",
      V="0.84",
      L="40",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }



  handleShadeDetails27=()=>{
    const {
      H="21",
      S="0.41",
      V="0.84",
      L="33",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }



  handleShadeDetails28=()=>{
    const {
      H="25",
      S="0.41",
      V="0.79",
      L="29",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
  }




  handleShadeDetails29=()=>{
    const {
      H="29",
      S="0.54",
      V="0.79",
      L="23",
      group="8",
      brand="HudaBeauty"
      } = this.setState;

      const db = firebase.firestore();
     const userRef = db.collection("shade").add({
    H: H,
    S:S,
    V:V,
    L:L,
    group:group,
    brand: brand
  });  
      console.log('Brand name is',brand);
      console.log('Product name is',product);
      
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

          
          

          <Text style={styles.text}>Please Select Your Foundation Shade Color</Text>

           <View style={styles.allContainer}>


          <View style={styles.btnContainer1}>

        <TouchableOpacity  style={{ backgroundColor : 'rgb(231,204,175)', flex: 1}}
         onPress={this.handleShadeDetails}> 
         <Text style={styles.text}> Milk Shake</Text>
         </TouchableOpacity>
         
        <TouchableOpacity  style={{ backgroundColor: 'rgb(236,198,164)', flex: 1}}
         onPress={this.handleShadeDetails1}>
         <Text style={styles.text}>Angel Food</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(232,195,157)', flex: 1}}
         onPress={this.handleShadeDetails2}>
         <Text style={styles.text}>Vanilla</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(230,197,160)', flex: 1}}
          onPress={this.handleShadeDetails3}>
         <Text style={styles.text}>Panna Cotta</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(228,182,136)', flex: 1}}
         onPress={this.handleShadeDetails4}>
         <Text style={styles.text}>Cashew</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(212,171,124)', flex: 1}}
         onPress={this.handleShadeDetails5}>
         <Text style={styles.text}>Creme Brulee</Text>
         </TouchableOpacity>

         </View>




         <View style={styles.btnContainer2}>

        <TouchableOpacity  style={{ backgroundColor : 'rgb(212,175,138)', flex: 1}}
         onPress={this.handleShadeDetails6}>
         <Text style={styles.text}> Short Bread</Text>
         </TouchableOpacity>
         
        <TouchableOpacity  style={{ backgroundColor: 'rgb(218,174,135)', flex: 1}}
         onPress={this.handleShadeDetails7}>
         <Text style={styles.text}>Chai</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(208,170,134)', flex: 1}}
         onPress={this.handleShadeDetails8}>
         <Text style={styles.text}>CheeseCake</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(209,171,137)', flex: 1}}
         onPress={this.handleShadeDetails9}>
         <Text style={styles.text}>Macaroon</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(213,169,132)', flex: 1}}
         onPress={this.handleShadeDetails10}>
         <Text style={styles.text}>Toasted Coconut</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(204,157,117)', flex: 1}}
         onPress={this.handleShadeDetails11}>
         <Text style={styles.text}>Custard</Text>
         </TouchableOpacity>

         </View>



         <View style={styles.btnContainer3}>

        <TouchableOpacity  style={{ backgroundColor : 'rgb(200,170,134)', flex: 1}}
         onPress={this.handleShadeDetails12}>
         <Text style={styles.text}> Latte</Text>
         </TouchableOpacity>
         
        <TouchableOpacity  style={{ backgroundColor: 'rgb(209,162,116)', flex: 1}}
         onPress={this.handleShadeDetails13}>
         <Text style={styles.text}>Amaratte</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(201,157,108)', flex: 1}}
         onPress={this.handleShadeDetails14}>
         <Text style={styles.text}>Tres Leches</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(191,144,101)', flex: 1}}
         onPress={this.handleShadeDetails15}>
         <Text style={styles.text}>Butter Pecan</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(190,141,92)', flex: 1}}
         onPress={this.handleShadeDetails16}>
         <Text style={styles.text}>Baklava</Text>
         </TouchableOpacity>

         <TouchableOpacity  style={{ backgroundColor: 'rgb(184,132,88)', flex: 1}}
         onPress={this.handleShadeDetails17}>
         <Text style={styles.text}>Duice De Leche</Text>
         </TouchableOpacity>

         </View>





         <View style={styles.btnContainer4}>

<TouchableOpacity  style={{ backgroundColor : 'rgb(190,136,81)', flex: 1}}
 onPress={this.handleShadeDetails18}>
 <Text style={styles.text}> Brown Sugar</Text>
 </TouchableOpacity>
 
<TouchableOpacity  style={{ backgroundColor: 'rgb(182,128,75)', flex: 1}}
 onPress={this.handleShadeDetails19}>
 <Text style={styles.text}>Macchiato</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(175,120,61)', flex: 1}}
 onPress={this.handleShadeDetails20}>
 <Text style={styles.text}>Ginger Bread</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(171,116,69)', flex: 1}}
 onPress={this.handleShadeDetails21}>
 <Text style={styles.text}>Cinnamon</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(177,128,78)', flex: 1}}
 onPress={this.handleShadeDetails22}>
 <Text style={styles.text}>Toffe</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(156,109,65)', flex: 1}}
 onPress={this.handleShadeDetails23}>
 <Text style={styles.text}>Chocolate Mousse</Text>
 </TouchableOpacity>

 </View>



 <View style={styles.btnContainer5}>

<TouchableOpacity  style={{ backgroundColor : 'rgb(140,99,62)', flex: 1}}
 onPress={this.handleShadeDetails24}>
 <Text style={styles.text}> Nutmeg</Text>
 </TouchableOpacity>
 
<TouchableOpacity  style={{ backgroundColor: 'rgb(140,98,56)', flex: 1}}
 onPress={this.handleShadeDetails25}>
 <Text style={styles.text}>Cocoa</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(148,94,55)', flex: 1}}
 onPress={this.handleShadeDetails26}>
 <Text style={styles.text}>Mocha</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(118,73,49)', flex: 1}}
 onPress={this.handleShadeDetails27}>
 <Text style={styles.text}>Coffe Bean</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(104,69,44)', flex: 1}}
 onPress={this.handleShadeDetails28}>
 <Text style={styles.text}>Hot Fudge</Text>
 </TouchableOpacity>

 <TouchableOpacity  style={{ backgroundColor: 'rgb(95,57,21)', flex: 1}}
 onPress={this.handleShadeDetails29}>
 <Text style={styles.text}>Chocolate Truffle</Text>
 </TouchableOpacity>

 </View>


 </View>


 <View style={styles.settings}>
        <TouchableOpacity  style={styles.btnSettings}
        onPress={this.SettingsPage}  
        >
         <Text style={styles.text}> Go to Settings Page</Text>
         </TouchableOpacity>
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

   // marginBottom: 400,
    marginTop:10
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
    textAlign: 'center',
    marginTop:10
  },

  settings:{
    alignItems: 'center',
    justifyContent: 'center'
  },

  btnSettings:{
    width: 150,
    height:45,
    borderRadius:25,
    backgroundColor: '#432577',
    justifyContent:'center',
    marginTop:20
  },

  


});
