import React from 'react';
import Expo, { Font, Linking, WebBrowser } from 'expo';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text,StatusBar, TouchableHighlight, Platform, ToolbarAndroid, Image, Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Cart from './components/Cart';
import Payment from './components/Payment';
import Profile from './components/Profile';
import App from './components/App';
import Home from './components/Home';
import QRScanner from './components/QRScanner';
import ConfirmPage from './components/ConfirmPage';

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images/chats-icon.png')}
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
    screen: Home,
  },
  Cart:{
    screen: Cart
  },

  QRScanner:{
    screen: QRScanner
  },

  Pay:{
    screen: Payment
  },

  OrderConfirm:{
    screen: ConfirmPage
  },
  Profile:{
    screen: Profile
  },

  Notifications: {
    screen: MyNotificationsScreen,
  }

});