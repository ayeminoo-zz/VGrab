import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';

import { ScrollView, View,StyleSheet, Image } from 'react-native';

import {
  Paper,
  Text,
  FAB,
  TextInput,
  Button,
  Card,
  CardActions,
  CardContent,
  CardCover,
  Title,
  Paragraph
} from 'react-native-paper';

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

            <ScrollView horizontal= {true} >
            <Card>
    <CardContent>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </CardContent>
    <CardCover source={{ uri: 'https://picsum.photos/700' }} />
    <CardActions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </CardActions>
  </Card>

  <Card>
    <CardContent>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </CardContent>
    <CardCover source={{ uri: 'https://picsum.photos/700' }} />
    <CardActions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </CardActions>
  </Card>

  <Card>
    <CardContent>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </CardContent>
    <CardCover source={{ uri: 'https://picsum.photos/700' }} />
    <CardActions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </CardActions>
  </Card>

  <Card>
    <CardContent>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </CardContent>
    <CardCover source={{ uri: 'https://picsum.photos/700' }} />
    <CardActions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </CardActions>
  </Card>
        </ScrollView>
      
        
      </View>
      
    );
  }
}