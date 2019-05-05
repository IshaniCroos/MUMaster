import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
 
import Login from './Login.js';
import Register from './Register.js';
import MUMain from './MUMain.js';
import Main from './Main.js';
import SettingsPage from './SettingsPage.js';


 
class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          {}
          <Image
            source={require('./images/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 

const FirstActivity_StackNavigator = createStackNavigator({
 
  First: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({
      title: 'Login',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#e4b38e',
      },
      headerTintColor: '#fff',
    }),
  },
});
 

const Screen2_StackNavigator = createStackNavigator({
  Second: {
    screen: Register,
    navigationOptions: ({ navigation }) => ({
      title: 'Register',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#e4b38e',
      },
      headerTintColor: '#fff',
    }),
  },
});
 

const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: Main,
    navigationOptions: ({ navigation }) => ({
      title: 'Main',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#e4b38e',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: Sahdes,
    navigationOptions: ({ navigation }) => ({
      title: 'Shades',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#e4b38e',
      },
      headerTintColor: '#fff',
    }),
  },
});


const Screen3_StackNavigator = createStackNavigator({
  Third: {
    screen: SettingsPage,
    navigationOptions: ({ navigation }) => ({
      title: 'SettingsPage',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#e4b38e',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
 
const DrawerNavigatorExample = createDrawerNavigator({
  Login: {
  
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Login',
    },
  },
    
  Register: {
    
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Register',
    },
  },
  Main: {
    
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Main',
    },
  },
      Shades: {
    
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Shades',
    },
  },
      SettingsPage: {
    
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'SettingsPage',
    },
  },
});
 

export default createAppContainer(DrawerNavigatorExample);
