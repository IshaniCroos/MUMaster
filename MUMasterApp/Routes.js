import React, { Component } from 'react';

import { Router, Stack, Scene } from 'react-native-router-flux';


import Register from '.pages/Register';
import LoginPage from '.pages/Login';
import Main from '.pages/Main';
import MUMain from '.pages/MUMain';
import SettingsPage from '.pages/SettingsPage';

export default class Routes extends Component {
    render() {

        return (

            <Router>

                <Stack key="root" hideNavBar={true}>
                    <Scene key="main" component={Main} title="Main" initial={true}></Scene>
                    <Scene key="register" component={Register} title="Register" ></Scene>
                    <Scene key="login" component={LoginPage} title="LoginPage"></Scene>
                    <Scene key="mumain" component={MUMain} title="MUMainPage"> </Scene>

                    <Scene key="settingsPage" component={SettingsPage} title="SettingsPage"> </Scene>

                </Stack>
            </Router>



        );




    }

}
