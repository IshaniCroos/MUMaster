import React from 'react';
import { StyleSheet, Text, View,ImageBackground,Image,Dimensions, TouchableOpacity } from 'react-native';
import * as firebase from 'firebase';
import 'firebase/firestore';

import bgImage from './images/background1.jpg'
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

import { Actions } from 'react-native-router-flux';

export default class App extends React.Component {

    constructor(props){
        super(props);
        this.state={
            results:null
        };
    }


  readUserData1() { //method to retrieve data from database

    const db = firebase.firestore();
     db.collection("dataCol").get().then((snapshot)=>{

        snapshot.docs.forEach(doc=>{
            console.log(doc.data());
            

            const result = doc.data();
            const keys = Object.keys(result);
            console.log(keys);

            for(var i=0; i<keys.length; i++){
              var k = keys[i];
              
              var product = result[k];
              console.log(product);

              setState = product.toString();
              console.log(setState);

            }

                  
        })

        
    })

    

    
}

readUserData=()=>{  //method to retrieve data from database to the app

  this.setState({ 
    results: setState});
  console.log(this.state.results);

  
  }



deleteData=()=>{

  const db = firebase.firestore();
  var proRef = db.collection('dataCol').doc('results');

// Remove the 'product' field from the document
  var remove = proRef.update({
    product: firebase.firestore.FieldValue.delete()
});

Actions.mumain() //method to get another page via routing

}


render(){

return(


    <ImageBackground source={bgImage} style={styles.container}>
    <View style= {styles.overlayContainer}>


    <View style={styles.logoContainer}>
          <Image source={logo} style={styles.logo}   />
          <Text style={styles.logoText}> M U - M A S T E R </Text>
        </View>


        <View style={styles.button1}>
        <TouchableOpacity  style={styles.btnGo}
         onPress={this.readUserData1}
        >
         <Text style={styles.text}>View Recommendations</Text>
         </TouchableOpacity>
         </View>


         <View>
         <Text style={styles.text}
         onPress={this.readUserData}
         >
             Results: {this.state.results}    
         </Text>
         </View>



         <View style={styles.button1}>
        <TouchableOpacity  style={styles.btnGo}
         onPress={this.deleteData}
        >
         <Text style={styles.text}>Ok</Text>

         
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
        marginTop:100,
        marginBottom:5

      },
    
      text:{
        color: 'rgba(255,255,255,0.7)',
        fontSize: 18,
        textAlign: 'center'
      },

    });