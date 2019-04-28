import React,{Component} from 'react';

import{Router,Stack,Scene} from 'react-native-router-flux';


import Register from './Register';
import LoginPage from './Login';

export default class Routes extends Component {
    render() {

        return (

            <Router>

                <Stack key="root" hideNavBar={true}>

                <Scene key="register" component={Register} title="Register" initial={true}></Scene>
                <Scene key="login" component={LoginPage} title="LoginPage"></Scene>

                </Stack>
</Router>



        );




    }

}