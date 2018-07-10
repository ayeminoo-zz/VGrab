import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Toolbar,
  ToolbarBackAction,
  ToolbarContent,
  ToolbarAction
} from "react-native-paper";

import {   
Dimensions, ScrollView, View, StyleSheet, Image } from "react-native";

import {
  Paper,
  Text,
  FAB,
  TextInput,
} from "react-native-paper";

import Button from '../pureComponents/Button';

const {width} = Dimensions.get('window');
const backgroundColor = '#2962ff';

const styles = StyleSheet.create({
    visalogo: {
      position:'absolute',
      right:20,
      width: 32,
      height: 10,
    },
    card:{
      width:width - 20, 
      height:200
    },
    paper: {
      justifyContent:'center',
      borderRadius:5,
      padding: 8,
      elevation: 2,
      marginTop:10,
      marginBottom: 10,
    },
    text:{
      fontSize:12, 
      color:'grey'
    }
});

export default class History extends React.Component {
  static navigationOptions = {
    drawerLabel: "History",
    drawerIcon: ({ tintColor }) => (
      <Icon name={"history"} size={25} color={tintColor} />
    )
  };

  

  render() {
    return (
      <View style={{flex:1}}>
       <View style={{flex:1, backgroundColor: backgroundColor}}>     
        <View style={{backgroundColor: backgroundColor, flexDirection: 'row', height: 20}}/>                                                
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor: backgroundColor, height:50}}>
          <ToolbarBackAction  style={{position:'absolute', left:0}}                                          
          onPress={this._goBack} />
          <Text style={{color:'white'}}> Payment Method</Text>
        </View>
        <ScrollView style={{backgroundColor: backgroundColor}} horizontal={true}>
          <Paper style={{padding:10, backgroundColor: backgroundColor}}>
            <Image source={require('../images/cd-1.png')} style={styles.card} />
          </Paper>

          <Paper style={{padding:10, backgroundColor: backgroundColor}}>
            <Image source={require('../images/cd-2.png')} style={styles.card} />
          </Paper>

          <Paper style={{padding:10, backgroundColor: backgroundColor}}>
            <Image source={require('../images/cd-1.png')} style={styles.card} />
          </Paper>

          <Paper style={{padding:10, backgroundColor: backgroundColor}}>
            <Image source={require('../images/cd-2.png')} style={styles.card} />
          </Paper>
        </ScrollView>
        </View>

        <View style={{flex:1, padding:20, backgroundColor: '#f4f5f7'}}>
          <Text style={styles.text}> Shipping To </Text>
          <Paper style={styles.paper}>
              <Text> Aye Min </Text>
              <Text style={styles.text}> 22 lor 35 geyland </Text>
              <Text style={styles.text}> ayeminoosc@gmail.com </Text>
          </Paper>

          <Text style={[styles.text, {marginTop:20}]}> Paying With </Text>
          <Paper style={styles.paper}>
              <Text> xxxx xxxx xxxx 4521 </Text>
              <Text style={styles.text}> Card Type </Text>
              <Image source={require('../images/visa.png')} style={styles.visalogo} />
          </Paper>
            <Button color='white' style={{alignItems:'center', marginTop:10, marginLeft:50, marginRight:50, backgroundColor: backgroundColor, borderColor: backgroundColor}}> Pay $200 </Button>
        </View>
      </View>
    );
  }
}
