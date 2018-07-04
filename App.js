import React from 'react';
import Expo, { Font, Linking, WebBrowser } from 'expo';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text,StatusBar, TouchableHighlight, Platform, ToolbarAndroid, Image, Button, View, StyleSheet } from 'react-native';
import { createDrawerNavigator } from 'react-navigation';
import Cart from './components/Cart';
import History from './components/History';
import Profile from './components/Profile';
import App from './components/App';


class MyHomeScreen extends React.Component {

  componentDidMount(){
    Linking.getInitialURL().then(url => {
      this._navigate(url);
    });
    Linking.addEventListener('url', this._handleRedirect);

    Font.loadAsync({
      'DroidSerif-Bold': require('./fonts/DroidSerif-Bold.ttf'),
      'DroidSerif-Regular': require('./fonts/DroidSerif-Regular.ttf'),
      'changa-one-regular': require('./fonts/changa-one.regular.ttf')
    });
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleRedirect);
  }

  state = {
    redirectData: null,
  };

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
      <App navigation = {this.props.navigation}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Home Screen</Text>
          <Button
          onPress={() => this.props.navigation.navigate('Notifications')}
          title="Go to notifications"
          />

          <Button
          onPress={() => console.log("just testing")}
          title="Just testing"
          />

          <Button
          onPress={() => this.props.navigation.toggleDrawer()}
          title="Menu"
          />

                  {this._maybeRenderRedirectData()}

        </View>
      </App> 
    );
  }

  _navigate = (url) => {
    let data = Linking.parse(url);
    console.log("data", data);
    this.setState({ redirectData: data }); 
  }

  _maybeRenderRedirectData = () => {
    if (!this.state.redirectData) {
      return;
    }

    return <Text>{JSON.stringify(this.state.redirectData)}</Text>;
  };

  _handleRedirect = event => {
    WebBrowser.dismissBrowser();
    let data = Linking.parse(event.url);
    console.log("data", data);
    this.setState({ redirectData: data });
  };
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