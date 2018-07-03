import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text,StatusBar, TouchableHighlight, Platform, ToolbarAndroid, Image, Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Cart from './components/Cart';
import History from './components/History';
import Profile from './components/Profile';

class MyHomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={{flex:1}}>
        <View style={{backgroundColor:'#0039cb', flexDirection: 'row', height: 20}}/>
        <View
          style={{
            backgroundColor: '#2962ff',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 37
          }}>

          <Icon.Button size={25} backgroundColor='transparent' name="menu" onPress={() => this.props.navigation.toggleDrawer()} />
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
            <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>VGrab</Text>
          </View>
          
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
          />

          <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title="Menu"
          />
        </View>
      </View>    
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Notifications Screen</Text>
        <Button
        onPress={() => this.props.navigation.goBack()}
        title="Go back home"
        />
      </View>
      
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default createDrawerNavigator({
  Home: {
    screen: MyHomeScreen,
  },
  Cart:{
    screen: Cart
  },

  History:{
    screen: History
  },

  Profile:{
    screen: Profile
  },

  Notifications: {
    screen: MyNotificationsScreen,
  }

});