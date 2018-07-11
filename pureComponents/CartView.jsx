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
    marginLeft:5,
    marginRight:5,
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 2,
    marginBottom: 10,
  },
  rightContainer: {
  	flexGrow: 5, 
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
  },
  triangleCorner: {
    width:0,
    height:0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 50,
    borderTopWidth: 50,
    borderRightColor: 'transparent',
    transform: [
      {rotate: '90deg'}
    ]
  }
});

const CartView = (props) =>  {
	const newStyles = props.style || {};
	let {camp, onClickActive, active, onPress, onDelete, onDefault, imageSource, name, numberOfItem, totalCost} = props;

	return (
    <TouchableOpacity
         onPress={props.onPress}
        >
		  <Paper style={styles.paper}>

          <TouchableOpacity style={{zIndex:5, position:'absolute',right:0,top:0}} onPress={onClickActive}>
            <View style={[styles.triangleCorner, {borderTopColor: active ?'#2962ff': 'grey'}]} />
          </TouchableOpacity>

		     <Image style={styles.stretch} source={imageSource} />
		     <View style={styles.rightContainer}>
		     	<Text style={{fontSize:20, fontWeight:'bold'}}> {name} </Text>
		     	<View style={{flexDirection:'row'}}>
			     	<Icon name={'shopping-cart'} size={20} style={{color:'#a8adb5'}}/> 
			     	<Text style={{color:'#a8adb5'}}>  {numberOfItem} items </Text>
		     	</View>
		     	<View style={{flexDirection: 'row-reverse'}}> 
		     		<Text style={{fontFamily:'changa-one-regular', fontSize: 16}}>$ {totalCost}</Text>
            {camp && <Image source={require('../images/campaign.png')} style={{height:20, width:20, position:'absolute', right: 5}} />}
		     	</View>
		     	<View style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'flex-end'}}>
		     		<Button onPress={onDelete}> Delete </Button> 
		     	</View>
		     </View>
		  </Paper>
    </TouchableOpacity>
	)
}

export default CartView;



