/***********************************************************************************************************
 * Author: A.A.D.M. Gunawardana
 * UOW ID: w1673610
 * Last Edit: 10/5/2019
 * 
 * ChageUserAccount page link with firebase database.This page is use for change user account name 
 * So user can change user name if she wants else she can navigate to Settings page 
 * 
 * Page Contain: fuctions that user can update user name, navigate to settings page, handle user inputs
 **********************************************************************************************************/
import React, { Component } from 'react';

import { StyleSheet, Alert, TextInput, TouchableOpacity, Text, View, ImageBackground } from 'react-native';

import { Actions } from 'react-native-router-flux';
import * as firebase from 'firebase';
import 'firebase/firestore';

// Initialize Firebase
const config = {
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


export default class ChageUserAccount extends React.Component {
    state = {
        userName: ''
    }
    // method to update user name 
    updateUserName = (userName) => {
        const user = firebase.auth().currentUser;
        const fbRootRefFS = firebase.firestore();
        const userID = user.uid;
        const ref = fbRootRefFS.collection('users').doc(userID);

        console.log(userID);

        ref.update({ //update to database function
            userName,
        });
        console.log("user name is" + userName);
        Alert.alert("Account Update Successfull!");
        Actions.settingsPage()//method to navigate settings page
    }
    // method to handle user input
    handleSetUserNameLocalState = (text) => {
        this.setState({ userName: text })
        console.log("text is" + text)
    }
    //method to navigate Settings page
    settingsPage() {
        Actions.settingsPage()
    }
    render() {
        return (
            <ImageBackground source={require('./images/back2.gif')} style={{ width: '100%', height: '100%' }}>
                <View View style={styles.container}>

                    <TextInput style={styles.input} //User Name text input
                        underlineColorAndroid="transparent"
                        placeholder={'User Name'}
                        placeholderTextColor="#9a73ef"
                        autoCapitalize="none"
                        onChangeText={this.handleSetUserNameLocalState}
                    />

                    <TouchableOpacity //Submit
                        style={styles.submitButton}
                        onPress={
                            () => this.updateUserName(this.state.userName)}
                    >
                        <Text style={styles.textAppear}> Submit </Text>
                    </TouchableOpacity>

                    <TouchableOpacity //Cancel
                        style={styles.submitButton}
                        onPress={this.settingsPage}
                    >
                        <Text style={styles.textAppear}> Cancel </Text>
                    </TouchableOpacity>

                </View>

            </ImageBackground>
        );
    }
}
// Style sheet
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFE4B5',
        paddingTop: 25
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1
    },
    submitButton: {
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    textAppear: {

        alignSelf: 'center',
        fontWeight: 'bold',
        fontSize: 20
    }

})
