/**********************************************************************************************************************************
 * Author: A.A.D.M. Gunawardana
 * UOW ID: w1673610
 * Last Edit: 10/5/2019
 * 
 * Settings page link with firebase database.This page has several options those are Account Details, Chage Account, Delete  Account, Version, Rate Our App, Share With Friends, LOG OUT, Go To Main Page  
 * 
 * Page Contain: fuctions that user can view user name and password, function that delete user account, fuctions that Rate App,
 *               Function that can navigate to ChangeUserAccount, Login, Main pages
 * 
 ********************************************************************************************************************************/
import React, { Component } from 'react';

import { Text, View, Alert, ImageBackground, Share } from 'react-native';
import SettingsList from 'react-native-settings-list';
import { AirbnbRating } from 'react-native-ratings';
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

const shareOptions = {
    title: 'Title',
    message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
    url: 'www.example.com',
    subject: 'Subject'
};

export default class SettingsPage extends React.Component {

    //method to navigate chage user account page
    chageUserAccount() {
        Actions.chageUserAccount()
    }
    //method to navigate login page
    main() {
        Actions.main()
    }
    //method to navigate main page
    mumain() {
        Actions.mumain()
    }
    // method to rating the app
    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }
    //method to share option
    onSharePress = () => Share.share(shareOptions);
    //method to delete the account
    deleteAccount = () => {
        const iduser = firebase.auth().currentUser;
        var user = firebase.auth().currentUser;
        const userID = iduser.uid;
        console.log(userID);
        user.delete().then(function () { //delete user id in database function
            Alert.alert('Account Deleted Successfully...')
            Actions.main();// to navigate login page
        }).catch(function (error) {
            Alert.alert('Please Try Again Later...')
        });
    }
    //method to retrieve data from database to the app
    //this method to user to show account user name and password
    onDetailsPress = () => {
        const user = firebase.auth().currentUser;
        const db = firebase.firestore();
        const userID = user.uid;

        var ref = (db.collection("users").doc(userID));

        ref.get().then(function (doc) {//get user details from the database function
            if (doc.exists) {
                Alert.alert("Account Name is " + doc.data().userName + " " + "Account Password is " + doc.data().password);
            }
        });
    }


    render() {
        return (
            <ImageBackground source={require('./images/back2.gif')} style={{ width: '100%', height: '100%' }}>
                <View style={{ flex: 1 }}>

                    <View style={{ borderBottomWidth: 1, backgroundColor: '#FFE4B5', borderColor: '#c8c7cc' }}>
                        <Text style={{ alignSelf: 'center', marginTop: 30, marginBottom: 10, fontWeight: 'bold', fontSize: 20 }}>Settings</Text>
                    </View>

                    <SettingsList borderColor='brown'>
                        <SettingsList.Header headerText='Account' headerStyle={{ color: '#FF1493', fontSize: 18 }} />
                        <SettingsList.Item //Account Details
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            title='Account Details'
                            onPress={this.onDetailsPress}
                            backgroundColor='background'
                        />
                        <SettingsList.Item //Chage Account
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            backgroundColor='background'
                            title='Chage Account'
                            titleInfo='chage user name'
                            onPress={this.chageUserAccount}
                        />
                        <SettingsList.Item //Delete Account
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            backgroundColor='background'
                            title='Delete Account'
                            titleInfo='permanently delete'
                            onPress={this.deleteAccount}
                        />

                        <SettingsList.Header headerText='Version' headerStyle={{ color: '#FF1493', fontSize: 18 }} />
                        <SettingsList.Item //Version
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            backgroundColor='background'
                            hasNavArrow={false}
                            title='Current MU - MASTER Version:1.0'
                        />

                        <SettingsList.Header headerText='More' headerStyle={{ color: '#FF1493', fontSize: 18 }} />
                        <SettingsList.Item //Share With Friends
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            onPress={this.onSharePress}
                            backgroundColor='background'
                            titleInfo='Share'
                            title='Share With Friends'
                        />
                        <SettingsList.Item //Rate Our App
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            backgroundColor='background'
                            hasNavArrow={false}
                            titleInfo='Select'
                            title='Rate Our App'
                        />
                        <AirbnbRating
                            count={11}
                            reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                            defaultRating={11}
                            size={20}

                        />

                        <SettingsList.Item //LOG OUT
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            backgroundColor='background'
                            title='Log out'
                            titleInfo='LOG OUT'
                            onPress={this.main}
                        />
                        <SettingsList.Item //Go To Main Page
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            backgroundColor='background'
                            title='Go to Main Page'
                            titleInfo='Go To Main Page'
                            onPress={this.mumain}
                        />

                    </SettingsList>

                    <Text style={{
                        color: '#4B0082',
                        fontSize: 28,
                        borderColor: '#fff',
                        borderWidth: 2, alignSelf: 'center'
                    }}> M U - M A S T E R </Text>

                </View>

            </ImageBackground>
        );
    }
}
