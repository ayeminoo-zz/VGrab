import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Image, Text, View } from 'react-native';
import {
  Paper,
  FAB
} from 'react-native-paper';

const App = (props) =>{
  let fab = props.showFab ? <FAB style={{zIndex:5,  position: 'absolute', bottom: 30, right:30}}
            large
            icon="add"
            onPress={props.onFabClick}
          />: null;
  return (
      <View style={{flex:1}}>
        
        {fab}

        <View style={{backgroundColor:'#0039cb', flexDirection: 'row', height: 20}}/>
        <View
          style={{
            backgroundColor: '#2962ff',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems:'center',
            height: 50
          }}>

          <Icon.Button size={25} backgroundColor='transparent' name="menu" onPress={() => props.navigation.toggleDrawer()} />
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}> 
            <Image source ={require('../images/logo.png')} style={{width:90, height:40}} />
          </View>

          
        </View>
          {props.children}
      </View> 
  )
}

export default App;