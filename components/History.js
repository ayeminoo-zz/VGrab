import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { Text, View, Button,StyleSheet, Image } from 'react-native';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default class History extends React.Component {
  static navigationOptions = {
    drawerLabel: 'History',
    drawerIcon: ({ tintColor }) => (
      <Icon name={'history'} size={25} color={tintColor} />
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