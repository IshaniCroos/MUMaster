import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';
 
import Screen1 from './pages/Login.js';
import Screen2 from './pages/Register.js';
import Screen3 from './pages/MUMain.js';
import Screen4 from './pages/Main.js';
import Screen5 from './pages/Settings.js';


 
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
            source={require('./image/drawer.png')}
            style={{ width: 25, height: 25, marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
 

const FirstActivity_StackNavigator = createStackNavigator({
 
  First: {
    screen: Screen1,
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
    screen: Screen2,
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
    screen: Screen3,
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
    screen: Screen4,
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
    screen: Screen5,
    navigationOptions: ({ navigation }) => ({
      title: 'Settings',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#e4b38e',
      },
      headerTintColor: '#fff',
    }),
  },
});
 
 
const DrawerNavigatorExample = createDrawerNavigator({
  Screen1: {
  
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Login',
    },
  },
    
  Screen2: {
    
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Register',
    },
  },
  Screen3: {
    
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Main',
    },
  },
      Screen4: {
    
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Shades',
    },
  },
      Screen5: {
    
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Settings',
    },
  },
});
 

export default createAppContainer(DrawerNavigatorExample);