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

export default class Home extends React.Component {

  async componentDidMount(){
    if(!InMemoryData.appLoaded){
      Linking.getInitialURL().then(url => {
        console.log("url", url);
        this._navigate(url);
        InMemoryData.appLoaded = true;
      });  
    }
    
    Linking.addEventListener('url', this._handleRedirect);
    this.state.cartId = InMemoryData.activeCartId;
    if(this.props.navigation.state.params && this.props.navigation.state.params.id){
      InMemoryData.carts[InMemoryData.activeCartId].items.push(products[this.props.navigation.state.params.id]);
      this.props.navigation.state.params = null;
    }else if(this.props.navigation.state.params && this.props.navigation.state.params.cartId){
      this.state.cartId = this.props.navigation.state.params.cartId;
      this.props.navigation.state.params = null
    }

    this.state.name = InMemoryData.carts[this.state.cartId].name
    this.state.items = InMemoryData.carts[this.state.cartId].items;
    await Font.loadAsync({
      'DroidSerif-Bold': require('../fonts/DroidSerif-Bold.ttf'),
      'DroidSerif-Regular': require('../fonts/DroidSerif-Regular.ttf'),
      'changa-one-regular': require('../fonts/changa-one.regular.ttf')
    });
    this.setState({loaded: true})
  }

  componentWillUnmount() {
    Linking.removeEventListener('url', this._handleRedirect);
  }

  state = {
    name: "",
    redirectData: null,
    loaded: false,
    items: [],
  };

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../images/chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    if(!this.state.loaded) return <View/>;
  
    let items =  Array.from(this.state.items, item => 
                    <ItemView key={item.id}
                      imageSource={{uri: item.image}}
                      cost={item.price}
                      quantity={item.quantity}
                      name={item.name}
                      
                      onDelete={()=>{
                        this._removeFromCart(item.id, true);
                        this.setState({ items: InMemoryData.carts[this.state.cartId].items});
                      }}

                      onAdd={()=> {
                        this._addToCart(item.id);
                        this.setState({ items: InMemoryData.carts[this.state.cartId].items});
                      }}

                      onRemove={()=>{
                        this._removeFromCart(item.id);
                        this.setState({ items: InMemoryData.carts[this.state.cartId].items});
                      }}
                    />);
    let totalCost = 0;
    this.state.items.forEach(item=>{
      totalCost += item.price * item.quantity;
    });
    return (
      <App navigation = {this.props.navigation} showFab={true} onFabClick={()=>this.props.navigation.navigate('QRScanner', {name: 'just testing'})}>
      
      <Paper style={{elevation:1, justifyContent:'center', alignItems:'center', flexDirection: 'row', width:'100%', height: 40}}>
          <TextInput 
            textAlign={'center'}
            style={{flex:1}}
            onChangeText={(text) => this.setState({name: text})}
            value={this.state.name}
          />        
      </Paper>

      <ScrollView >
          {items}

      </ScrollView>

        <Paper style={{elevation:3, justifyContent:'center', alignItems:'center', flexDirection: 'row', width:'100%', height: 50, flex:1, position:'absolute', bottom:0}}>
          <View style={{paddingLeft:10, paddingRight:10, position:'absolute', left:0}}>
            <Text style={{fontSize:16, color:'#545456'}}> Total </Text>
            <Text style={{paddingLeft:8, fontFamily:'changa-one-regular', fontSize: 16}}>$ {totalCost}</Text>
          </View>
          <Button style={{alignItems:'center', backgroundColor:'#2962ff', borderColor:'#2962ff', width:150}} color='white' title='Checkout'/> 
        
        </Paper>
      </App>
    );
  }

  _navigate = (url) => {
    console.log(url);
    let data = Linking.parse(url);
    console.log("navigate data", data);
    if(!data.queryParams || !data.queryParams.id) return;
    this._addToCart(data.queryParams.id);
  }

  _maybeRenderRedirectData = () => {
    if (!this.state.redirectData) {
      return;
    }

    return <Text>{JSON.stringify(this.state.redirectData)}</Text>;
  };

  _handleRedirect = event => {
    console.log(event.url);
    WebBrowser.dismissBrowser();
    let data = Linking.parse(event.url);
    console.log("redirectData", data);
    if(!data.queryParams || !data.queryParams.id) return;
    this._addToCart(data.queryParams.id);
    this.setState({ items: InMemoryData.carts[InMemoryData.activeCartId].items});

  };

  _removeFromCart = function(id, remove){
    console.log('remove')
    id = typeof id === 'string'? parseInt(id) : id;
    let items = InMemoryData.carts[InMemoryData.activeCartId].items;
    let found = false;
    items.forEach(item => {
      console.log(id + " " + item.id, id === item.id)
      if(id === item.id) {
        item.quantity = remove? 0: item.quantity - 1; 
        found = true;
        console.log("found", found);
      }
    });

    if(found){
      InMemoryData.carts[InMemoryData.activeCartId].items = items.filter((item)=>item.quantity > 0);
    }
  }

  _addToCart = function(id){
    id = typeof id === 'string'? parseInt(id) : id;
    let items = InMemoryData.carts[InMemoryData.activeCartId].items;
    let found = false;
    items.forEach(item => {
      console.log(id + " " + item.id, id === item.id)
      if(id === item.id) {
        item.quantity += 1; 
        found = true;
        console.log("found", found);
      }
    });
    
    if(!found){
      console.log("still")
      products[id].quantity = 1;
      items.push(products[id]);
    }
    
  }
}