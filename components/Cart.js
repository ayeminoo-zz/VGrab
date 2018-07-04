import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  Paper,
  Text,
  FAB
} from 'react-native-paper';


import App from './App'
import { TouchableOpacity, View,StyleSheet, Image } from 'react-native';

import Button from './Button';

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
  static navigationOptions = {
    drawerLabel: 'My Carts',
    drawerIcon: ({ tintColor }) => (
      <Icon name={'shopping-cart'} size={25} color={tintColor} />
    ),
  };

  render() {
    return (
    	<App navigation = {this.props.navigation}>
			<View style={{ height: '100%', padding: 10}}>
				<Paper style={styles.paper}>
				     <Image style={styles.stretch} source={require('../images/shirt.jpg')} />
				     <View style={styles.rightContainer}>
				     	<Text style={{fontSize:20, fontWeight:'bold'}}> FDay Cart </Text>
				     	<View style={{flexDirection:'row'}}>
					     	<Icon name={'shopping-cart'} size={20} style={{color:'#a8adb5'}}/> 
					     	<Text style={{color:'#a8adb5'}}>  4 items </Text>
				     	</View>
				     	<View style={{flexDirection: 'row-reverse'}}> 
				     		<Text style={{fontFamily:'changa-one-regular', fontSize: 16}}>$ 323</Text>
				     	</View>
				     	<View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end'}}>
				     		<Button title="Default" style={{borderColor: 'grey'}}/>
				     		<Button title="Delete" /> 
				     	</View>
				     </View>
				  </Paper>

				  <Paper style={styles.paper}>
				     <Image style={styles.stretch} source={require('../images/shirt.jpg')} />
				     <View style={styles.rightContainer}>
				     	<Text style={{fontSize:20, fontWeight:'bold'}}> FDay Cart </Text>
				     	<View style={{flexDirection:'row'}}>
					     	<Icon name={'shopping-cart'} size={20} style={{color:'#a8adb5'}}/> 
					     	<Text style={{color:'#a8adb5'}}>  4 items </Text>
				     	</View>
				     	<View style={{flexDirection: 'row-reverse'}}> 
				     		<Text style={{fontFamily:'changa-one-regular', fontSize: 16}}>$ 323</Text>
				     	</View>
				     	<View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end'}}>
				     		<Button title="Default" style={{borderColor: 'grey'}}/>
				     		<Button title="Delete" /> 
				     	</View>
				     </View>
				  </Paper>


				  <Paper style={styles.paper}>
				     <Image style={styles.stretch} source={require('../images/shirt.jpg')} />
				     <View style={styles.rightContainer}>
				     	<Text style={{fontSize:20, fontWeight:'bold'}}> FDay Cart </Text>
				     	<View style={{flexDirection:'row'}}>
					     	<Icon name={'shopping-cart'} size={20} style={{color:'#a8adb5'}}/> 
					     	<Text style={{color:'#a8adb5'}}>  4 items </Text>
				     	</View>
				     	<View style={{flexDirection: 'row-reverse'}}> 
				     		<Text style={{fontFamily:'changa-one-regular', fontSize: 16}}>$ 323</Text>
				     	</View>
				     	<View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end'}}>
				     		<Button title="Default" style={{borderColor: 'grey'}}/>
				     		<Button title="Delete" /> 
				     	</View>
				     </View>
				  </Paper>

				  <Paper style={styles.paper}>
				     <Image style={styles.stretch} source={require('../images/shirt.jpg')} />
				     <View style={styles.rightContainer}>
				     	<Text style={{fontSize:20, fontWeight:'bold'}}> FDay Cart </Text>
				     	<View style={{flexDirection:'row'}}>
					     	<Icon name={'shopping-cart'} size={20} style={{color:'#a8adb5'}}/> 
					     	<Text style={{color:'#a8adb5'}}>  4 items </Text>
				     	</View>
				     	<View style={{flexDirection: 'row-reverse'}}> 
				     		<Text style={{fontFamily:'changa-one-regular', fontSize: 16}}>$ 323</Text>
				     	</View>
				     	<View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end'}}>
				     		<Button title="Default" style={{borderColor: 'grey'}}/>
				     		<Button title="Delete" /> 
				     	</View>
				     </View>
				  </Paper>


			</View>
    	</App>
      
    );
  }
}