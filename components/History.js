import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

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
      <View>
        <Toolbar>
          <ToolbarBackAction
            onPress={this._goBack}
          />
          <ToolbarContent
            title="Title"
            subtitle="Subtitle"
          />
          <ToolbarAction icon="search" onPress={this._onSearch} />
          <ToolbarAction icon="more-vert" onPress={this._onMore} />
        </Toolbar> 
        <Text> ok ok</Text>
      </View>
      
    );
  }
}