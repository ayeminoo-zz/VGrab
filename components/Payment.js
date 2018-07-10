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
Dimensions, ScrollView,ActivityIndicator, View, StyleSheet, Image } from "react-native";
import InMemoryData from '../services/InMemoryData';

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

export default class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.pay = this.pay.bind(this);
    this.getOrder = this.getOrder.bind(this);
  }

  static navigationOptions = {
    drawerLabel: "Pay",
    drawerIcon: ({ tintColor }) => (
      <Icon name={"history"} size={25} color={tintColor} />
    )
  };

  componentDidMount(){
    if(this.props.navigation.state.params && this.props.navigation.state.params.totalCost){
        this.setState({cartId: this.props.navigation.state.params.cartId, totalCost: this.props.navigation.state.params.totalCost});
        this.props.navigation.state.params = null;
    }
  }

  state={
    cartId: null,
    totalCost: 0,
    loading: false
  }

  getOrder =  function(cartId){
      let merchants = {};
      let items = InMemoryData.carts[cartId].items;
      items.forEach(item => {
        if(merchants[item.id]) {
          merchants[item.id].merchant = item.merchId;
          merchants[item.id].total = merchants[item.id].total + (item.price * item.quantity);
        }else{
          merchants[item.id] = {
            merchant: item.merchId,
            toal: item.price * item.quantity
          }
        }

        merchants[item.id].products = merchants[item.id].products || []; 
        for(let i= 0; i < item.quantity; i++){
          merchants[item.id].products.push(item.id);
        }

      });
      return merchants;
  }

  pay = function(){
    let orders = this.getOrder(this.state.cartId);
    let data = [];
    for (var id in orders) {
      if( orders.hasOwnProperty(id) && orders[id] ) {
        data.push(orders[id]);
      } 
    }
    let payjson = {
      to: InMemoryData.profile.email,
      orders: data
    }

    let dataString = JSON.stringify(payjson);
    fetch('https://wt-a55482131682f68f0684b6776a1efad3-0.sandbox.auth0-extend.com/sendMail/trigger', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: dataString
    }).then(function(response) {
      console.log(response)
      return response.json();
    })
    .then(function(myJson) {
      console.log(myJson)
          this.props.navigation.navigate('OrderConfirm', {cartId: this.state.cartId});
    }.bind(this));

    this.setState({loading: true});
  }

  render() {
    return (
      <View style={{flex:1}}>
       <View style={{flex:1, backgroundColor: backgroundColor}}>     
        <View style={{backgroundColor: backgroundColor, flexDirection: 'row', height: 20}}/>                                                
        <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', backgroundColor: backgroundColor, height:50}}>
          <ToolbarBackAction  style={{position:'absolute', left:0}}                                          
          onPress={() => this.props.navigation.goBack()} />
          <Text style={{color:'white', fontSize:18}}> Payment Method</Text>
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
              <Text> {InMemoryData.profile.name} </Text>
              <Text style={styles.text}> {InMemoryData.profile.address}</Text>
              <Text style={styles.text}> {InMemoryData.profile.email} </Text>
          </Paper>

          <Text style={[styles.text, {marginTop:20}]}> Paying With </Text>
          <Paper style={styles.paper}>
              <Text> xxxx xxxx xxxx 4521 </Text>
              <Text style={styles.text}> Card Type </Text>
              <Image source={require('../images/visa.png')} style={styles.visalogo} />
          </Paper>
          {this.state.loading && <ActivityIndicator size="small" color="#2962ff" />}
            <Button
             onPress={this.pay}
             loading={this.state.loading}
             color='white' style={{alignItems:'center', marginTop:10, marginLeft:50, marginRight:50, backgroundColor: backgroundColor, borderColor: backgroundColor}}>
              Pay $ {this.state.totalCost}
              </Button>
        </View>
      </View>
    );
  }
}
