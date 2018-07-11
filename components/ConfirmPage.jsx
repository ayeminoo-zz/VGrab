import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Paper,
  Text,
  FAB,
  TextInput 
} from 'react-native-paper';
import Expo, { Font, Linking, WebBrowser } from 'expo';



import App from './App'
import { ScrollView, TouchableOpacity, View,StyleSheet, Image } from 'react-native';

import Button from '../pureComponents/Button';
import CartView from '../pureComponents/CartView';
import ItemView from '../pureComponents/ItemView';
import products from '../services/products';
import InMemoryData from '../services/InMemoryData';

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
  paper: {
    flexDirection:'row',
    padding: 5,
    height: 120,

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
    width: 100,
    height: 100
  }
});

export default class ConfirmPage extends React.Component {

  async componentDidMount(){
   if(this.props.navigation.state.params && this.props.navigation.state.params.cartId){
      this.state.cartId = this.props.navigation.state.params.cartId;
      this.props.navigation.state.params = null
    }
    this.state.items = InMemoryData.carts[this.state.cartId].items;
    this.setState(this.state);
  }

  state = {
    cartId: null,
    items: [],
  };

  static navigationOptions = {
    drawerLabel: 'confirm',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {  
    let items =  Array.from(this.state.items, item => 
                    <ItemView key={item.id}
                      imageSource={{uri: item.image}}
                      cost={item.price}
                      quantity={item.quantity}
                      name={item.name}
                      name2={InMemoryData.merchants[item.merchId].name}

                      readOnly={true}

                    />);
    let totalCost = 0;
    this.state.items.forEach(item=>{
      totalCost += item.price * item.quantity;
    });
    return (
      <App navigation = {this.props.navigation} showFab={false}>
      
      <Paper style={{elevation:1, marginTop:2, marginLeft:5, marginRight:5, justifyContent:'center', alignItems:'center', flexDirection: 'row', height: 100}}>
          <Icon name='check-circle' size={40} color='green' />
          <Text style={{fontSize:18, paddingLeft:10}}> Your order is confirmed </Text>      
      </Paper>

      <ScrollView style={{paddingTop:10, backgroundColor:'#f4f5f7'}}>
          {items}
      </ScrollView>

        <Paper style={{elevation:3, justifyContent:'center', alignItems:'center', flexDirection: 'row', width:'100%', height: 50, flex:1, position:'absolute', bottom:0}}>
          <View style={{paddingLeft:10, paddingRight:10, position:'absolute', left:0}}>
            <Text style={{fontSize:16, color:'#545456'}}> Total </Text>
            <Text style={{paddingLeft:8, fontFamily:'changa-one-regular', fontSize: 16}}>$ {totalCost}</Text>
          </View>
          <Button onPress={()=>{
            InMemoryData.carts[this.state.cartId] = null;
            this.props.navigation.navigate('Cart')
          }} style={{alignItems:'center', backgroundColor:'#2962ff', borderColor:'#2962ff', width:150}} color='white'>  OK </Button>
        </Paper>
      </App>
    );
  }
}