import React from 'react';
import {
  Paper,
  Text,
  FAB
} from 'react-native-paper';
import { View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Button from './Button';
import Icon from 'react-native-vector-icons/MaterialIcons';


const styles = StyleSheet.create({
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

const CartView = (props) =>  {
	const newStyles = props.style || {};
	let {imageSource, name, numberOfItem, totalCost} = props;

	return (
		<Paper style={styles.paper}>
		     <Image style={styles.stretch} source={imageSource} />
		     <View style={styles.rightContainer}>
		     	<Text style={{fontSize:20, fontWeight:'bold'}}> {name} </Text>
		     	<View style={{flexDirection:'row'}}>
			     	<Icon name={'shopping-cart'} size={20} style={{color:'#a8adb5'}}/> 
			     	<Text style={{color:'#a8adb5'}}>  {numberOfItem} items </Text>
		     	</View>
		     	<View style={{flexDirection: 'row-reverse'}}> 
		     		<Text style={{fontFamily:'changa-one-regular', fontSize: 16}}>$ {totalCost}</Text>
		     	</View>
		     	<View style={{flex:1, flexDirection:'row', justifyContent:'space-between', alignItems:'flex-end'}}>
		     		<Button title="Default" style={{borderColor: 'grey'}}/>
		     		<Button title="Delete" /> 
		     	</View>
		     </View>
		  </Paper>
	)
}

export default CartView;



