import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Paper,
  Text,
  FAB
} from 'react-native-paper';
import Expo, { Font, Linking, WebBrowser } from 'expo';



import App from './App'
import { ScrollView, TouchableOpacity, View,StyleSheet, Image } from 'react-native';

import Button from '../pureComponents/Button';
import CartView from '../pureComponents/CartView';
import ItemView from '../pureComponents/ItemView';

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
    Linking.getInitialURL().then(url => {
      this._navigate(url);
    });
    Linking.addEventListener('url', this._handleRedirect);

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
    redirectData: null,
    loaded: false,
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
    if(this.state.hasCameraPermission === null || this.state.hasCameraPermission === false) return <Text> Please allow VGrab to use camera </Text>; 
    return (
      <App navigation = {this.props.navigation} showFab={true} onFabClick={()=>this.props.navigation.navigate('QRScanner')}>
      <ScrollView >
          <ItemView
            imageSource={require('../images/shirt.jpg')}
            cost={20}
            quantity={4}
            name="Uno shirt"

          />
          
          <ItemView
            imageSource={require('../images/shirt.jpg')}
            cost={20}
            quantity={4}
            name="Uno shirt"

          />

          <ItemView
            imageSource={require('../images/shirt.jpg')}
            cost={20}
            quantity={4}
            name="Uno shirt"

          />

          <ItemView
            imageSource={require('../images/shirt.jpg')}
            cost={20}
            quantity={4}
            name="Uno shirt"

          />

          <ItemView
            imageSource={require('../images/shirt.jpg')}
            cost={20}
            quantity={4}
            name="Uno shirt"

          />

      </ScrollView>

        <Paper style={{elevation:3, justifyContent:'center', alignItems:'center', flexDirection: 'row', width:'100%', height: 50, flex:1, position:'absolute', bottom:0}}>
          <View style={{paddingLeft:10, paddingRight:10, position:'absolute', left:0}}>
            <Text style={{fontSize:16, color:'#545456'}}> Total </Text>
            <Text style={{paddingLeft:8, fontFamily:'changa-one-regular', fontSize: 16}}>$ 640</Text>
          </View>
          <Button style={{alignItems:'center', backgroundColor:'#2962ff', borderColor:'#2962ff', width:150}} color='white'> Checkout 
          </Button>
        </Paper>
      </App>
    );
  }

  _handleBarCodeRead = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
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