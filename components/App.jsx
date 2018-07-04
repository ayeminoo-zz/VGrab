import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';

const App = (props) =>{
  return (
    <View style={{flex:1}}>
        <View style={{backgroundColor:'#0039cb', flexDirection: 'row', height: 20}}/>
        <View
          style={{
            backgroundColor: '#2962ff',
            flexDirection: 'row',
            justifyContent: 'space-between',
            height: 37
          }}>

          <Icon.Button size={25} backgroundColor='transparent' name="menu" onPress={() => props.navigation.toggleDrawer()} />
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
            <Text style={{color:'white', fontWeight:'bold', fontSize:18}}>VGrab</Text>
          </View>
          
        </View>
          {props.children}
      </View> 
  )
}

export default App;