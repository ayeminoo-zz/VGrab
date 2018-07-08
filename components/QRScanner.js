import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';
import { Constants,Linking, BarCodeScanner, Permissions } from 'expo';

  
import { View, Button,StyleSheet, Alert, Image } from 'react-native';
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
});

export default class QRScanner extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Scan',
    drawerIcon:  ({ tintColor }) => (
      <Image
        source={require('../images/qr.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  regex = /^exp.*?\?id=/

  state = {
    hasCameraPermission: null
  };

  render() {

    return (

      <View style={{flex:1, backgroundColor: 'grey'}}>
          <Toolbar>
            <ToolbarBackAction
              onPress={() => this.props.navigation.goBack()}
            />
            <ToolbarContent
              title="Scan QR"
            />
          </Toolbar>
          <Paper style={{padding:10, alignItems:'center'}}>
            <Text style={{fontSize: 20, color:'grey'}}> Scan the item you want to buy </Text>
          </Paper>
          <View style={{flex:1, justifyContent: 'center', alignItems:'center'}}>
            {this.state.hasCameraPermission === null ?
              <Text>Requesting for camera permission</Text> :
              this.state.hasCameraPermission === false ?
                <Text>Camera permission is not granted</Text> :
                <BarCodeScanner
                  onBarcodeRead={this._handleBarCodeRead}
                  style={{ height: 200, width: 200 }}
                />
            }
          </View>
      </View>
      
    );
  }

  componentDidMount() {
    this._requestCameraPermission();
    // Alert.alert("ok", JSON.stringify(this.props.navigation.state.params.name));
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {

    data = Linking.parse(data.data);
    console.log("data", data)
    if(!data.queryParams || !data.queryParams.id)
    this.props.navigation.navigate('Home', {id: data.queryParams.id});


    // console.log(data);
    // console.log("regex", this.regex);
    // if(!data || !data.data) return;
    // console.log(data.data);
    // let found = this.regex.test(data.data);
    // console.log("found", found)
    // if(!found) return;
    // let id = data.data.replace(this.regex, "");
    // console.log("id", id);
    // this.props.navigation.navigate('Home', {id: id});
  };
}