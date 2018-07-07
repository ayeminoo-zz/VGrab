import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Toolbar, ToolbarBackAction, ToolbarContent, ToolbarAction } from 'react-native-paper';
import { Constants, BarCodeScanner, Permissions } from 'expo';
  
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
                  onBarCodeRead={this._handleBarCodeRead}
                  style={{ height: 200, width: 200 }}
                />
            }
          </View>
      </View>
      
    );
  }

  componentDidMount() {
    this._requestCameraPermission();
  }

  _requestCameraPermission = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
      hasCameraPermission: status === 'granted',
    });
  };

  _handleBarCodeRead = data => {
    Alert.alert(
      'Scan successful!',
      JSON.stringify(data)
    );
  };


}