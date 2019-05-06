import React, { Component } from 'react';

import { Text, View, Alert, ImageBackground, Share } from 'react-native';
import SettingsList from 'react-native-settings-list';
import { AirbnbRating } from 'react-native-ratings';
import { Actions } from 'react-native-router-flux';

const shareOptions = {
    title: 'Title',
    message: 'Message to share', // Note that according to the documentation at least one of "message" or "url" fields is required
    url: 'www.example.com',
    subject: 'Subject'
};

export default class SettingsPage extends React.Component {
    main() {
        Actions.main() //method to get another page via routing
    }

    mumain(){
        Actions.mumain()
    }
    constructor() {
        super();
        this.onValueChangeA = this.onValueChangeA.bind(this);
        this.state = { switchValueA: false };

        this.onValueChangeB = this.onValueChangeB.bind(this);
        this.state = { switchValueB: false };

    }

    ratingCompleted(rating) {
        console.log("Rating is: " + rating)
    }

    onSharePress = () => Share.share(shareOptions);

    render() {
        return (

            <ImageBackground source={require('./images/back2.gif')} style={{ width: '100%', height: '100%' }}>
                <View style={{ flex: 1 }}>

                    <View style={{ borderBottomWidth: 1, backgroundColor: '#FFE4B5', borderColor: '#c8c7cc' }}>
                        <Text style={{ alignSelf: 'center', marginTop: 30, marginBottom: 10, fontWeight: 'bold', fontSize: 20 }}>Settings</Text>
                    </View>

                    <SettingsList borderColor='brown'>
                        <SettingsList.Header headerText='Notifications' headerStyle={{ color: '#FF1493', fontSize: 18 }} />
                        <SettingsList.Item

                            titleStyle={{ color: 'red', fontSize: 15 }}
                            title='App allow to access to your photo, media, file on device'
                            backgroundColor='background'
                            hasSwitch={true}
                            switchState={this.state.switchValueA}
                            switchOnValueChange={this.onValueChangeA}
                            hasNavArrow={false}

                        />

                        <SettingsList.Item
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            onPress={this.onSharePress}
                            backgroundColor='background'
                            titleInfo='Share'
                            // hasSwitch={true}
                            // switchState={this.state.switchValueB}
                            // switchOnValueChange={this.onValueChangeB}
                            // hasNavArrow={false}
                            title='Share with Friends'

                        />



                        <SettingsList.Item
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            backgroundColor='background'
                            title='Clean History'
                            titleInfo='Delete permanently'
                            onPress={() => Alert.alert('History deleted Successfully')}
                        />

                        <SettingsList.Header headerText='Version' headerStyle={{ color: '#FF1493', fontSize: 18 }} />
                        <SettingsList.Item
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            backgroundColor='background'
                            hasNavArrow={false}
                            title='Current MU - MASTER Version:1.0'
                        />

                        <SettingsList.Header headerText='More' headerStyle={{ color: '#FF1493', fontSize: 18 }} />
                        <SettingsList.Item
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            backgroundColor='background'
                            hasNavArrow={false}
                            titleInfo='Select'
                            title='Rate our app'
                        />
                        <AirbnbRating
                            count={11}
                            reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
                            defaultRating={11}
                            size={20}

                        />

                        <SettingsList.Item
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            backgroundColor='background'
                            title='Log out'
                            titleInfo='LOG OUT'
                            onPress={this.main}
                        />

                        <SettingsList.Item
                            titleStyle={{ color: 'red', fontSize: 15 }}
                            backgroundColor='background'
                            title='Go to Main Page'
                            titleInfo='Go to Main Page'
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

    onValueChangeA(value) {
        this.setState({ switchValueA: value });

    }

    onValueChangeB(value) {
        this.setState({ switchValueB: value });
    }
}
