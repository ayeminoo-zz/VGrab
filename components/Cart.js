import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Paper,
  Text,
  FAB
} from 'react-native-paper';

import InputAlert from '../pureComponents/InputAlert';
import App from './App'
import { ScrollView, TouchableOpacity, View,StyleSheet, Image } from 'react-native';

import Button from '../pureComponents/Button';
import CartView from '../pureComponents/CartView';
import InMemoryData from '../services/InMemoryData';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  paper: {
    flexDirection:'row',
    padding: 8,
    height: 140,

    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    marginBottom: 10,
  },
  rightContainer: {
    flexGrow: 5, 
    height:'100%', 
    flex: 1,
    padding:4, 
    paddingLeft:30,
    paddingRight:10,
    justifyContent:'space-between', 
    alignItems:'stretch',
  },
  stretch: {
    width: 120,
    height: 120
  }
});


export default class Cart extends React.Component {

  constructor(props) {
    super(props);
    this.sendCampaignNotification = this.sendCampaignNotification.bind(this);
    this._addNewCard = this._addNewCard.bind(this);
    this._deleteCart = this._deleteCart.bind(this);
  }

  static navigationOptions = {
    drawerLabel: 'My Carts',
    drawerIcon: ({ tintColor }) => (
      <Icon name={'shopping-cart'} size={25} color={tintColor} />
    ),
  };

  sendCampaignNotification= function(){
    fetch(`https://wt-a55482131682f68f0684b6776a1efad3-0.sandbox.auth0-extend.com/sendMail/campaign?name=${this.state.newCartName}&email=${InMemoryData.profile.email}`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }
    })
  }

  componentDidMount(){
    this.state.activeCartId = InMemoryData.activeCartId;
    this.setState({carts: this.getCarts()})
  }

  state = {
    carts:{},
    newCartName:'',
    dialogVisiable: false,
    activeCartId: null
  }

  getCarts = function(){
    let carts = [];
    for (var id in InMemoryData.carts) {
      if( InMemoryData.carts.hasOwnProperty(id) && InMemoryData.carts[id] ) {
        InMemoryData.carts[id].id = id;
        InMemoryData.carts[id].total = this._getTotalCost(InMemoryData.carts[id].items);
        carts.push(InMemoryData.carts[id]);
      } 
    }   
    return carts;
  }

  _getTotalCost = function(items){
    let total = 0;
    items.map((item)=>{total += item.price * item.quantity})
    return total;
  }

  _addNewCard = function(campaign){
    if(campaign === true){
      this.sendCampaignNotification();
    }
    InMemoryData.carts[new Date().getTime()] = {name: this.state.newCartName, items:[]};
    this.state.newCartName = '';
    this.state.dialogVisiable = false;
    this.setState({carts: this.getCarts()})
  }

  _deleteCart = function(id){
    InMemoryData.carts[id] = null;
    this.setState({carts: this.getCarts()})
  }

  render() {
    let carts = Array.from(this.state.carts, cart => 
      <CartView 
        key = {cart.id}
        active = {cart.id === this.state.activeCartId}
        imageSource={require('../images/shirt.jpg')}   
        name = {cart.name}
        numberOfItem = {cart.items.length}
        totalCost = {cart.total}
        onDelete = {()=> {this._deleteCart(cart.id)}}
        onPress = {()=> this.props.navigation.navigate('Home', {cartId: cart.id})}
        onClickActive = {()=> {InMemoryData.activeCartId = cart.id; this.setState({activeCartId: cart.id})}}
      />
    );
    return (
      <App navigation = {this.props.navigation}
        onFabClick={()=>this.setState({dialogVisiable: true})}
        showFab={true}>
      
        {this.state.dialogVisiable && 
          <InputAlert 
          title='Enter your cart name'
          value={this.state.newCartName}
          onOk = {this._addNewCard}
          onCancle = {()=>{this.state.newCartName=''; this.setState({dialogVisiable: false})}}
          onChangeText = {(text) => {this.setState({newCartName: text})}}
          ok = 'OK'
          cancle = 'Cancel'
          />
        }
      
      <ScrollView style={{backgroundColor:'#f4f5f7', paddingTop:20}}>
        {carts}
      </ScrollView>
      </App>
    );
  }
}