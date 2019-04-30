import React,{Component} from 'react';

import{Router,Stack,Scene} from 'react-native-router-flux';


import Register from './Register';
import LoginPage from './Login';
import Main from './Main';

export default class Routes extends Component {
    render() {

        return (

            <Router>

                <Stack key="root" hideNavBar={true}>
                <Scene key="main" component={Main} title="Main" initial={true}></Scene>
                <Scene key="register" component={Register} title="Register" ></Scene>
                <Scene key="login" component={LoginPage} title="LoginPage"></Scene>

                </Stack>
</Router>



        );




    }

}