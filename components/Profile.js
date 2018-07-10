import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';
import App from './App'
import {View,StyleSheet, Image, TextInput } from 'react-native';

import Button from '../pureComponents/Button';
import InMemoryData from '../services/InMemoryData';

import {
  Paper,
  Text,
  FAB
} from 'react-native-paper';


const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  text:{
      marginTop:20,
      color:'grey'
    }
});

export default class Profile extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <Ionicons name={'face-profile'} size={25} color={tintColor} />
    ),
  };

  componentDidMount(){
    this.setState(InMemoryData.profile)
  }

  state = {
    name:'',
    email:'',
    address: ''
  }

  render() {
    return (
      <App style={{backgroundColor:'#f4f5f7'}} navigation = {this.props.navigation} showFab={false}>
      
      <Paper style={{elevation:1, padding:30, justifyContent:'center', marginTop:100, marginLeft:20, marginRight:20}}>
          <Text style={styles.text}>Name </Text>    
          <TextInput
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
          />  

          <Text style={styles.text}> Email </Text>
          <TextInput 
            onChangeText={(text) => this.setState({email: text})}
            value={this.state.email}
          />  

          <Text style={styles.text}> Address </Text>
          <TextInput 
            onChangeText={(text) => this.setState({address: text})}
            value={this.state.address}
          />  

          <View style={{alignItems:'center', marginTop: 20}}>
            <Button onPress={()=>{
              InMemoryData.profile = this.state;
              this.props.navigation.goBack();
            }} style={{borderColor: '#2962ff'}}> Save </Button>
          </View>
      </Paper>
      </App> 
    );
  }
}