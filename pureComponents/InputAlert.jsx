import React from 'react';

import { View } from 'react-native';
import {
  Paper,
  Text,
  TextInput
} from 'react-native-paper';
import Button from './Button';

const style = {
	fullScreenView: {
		position: 'absolute', 
		top: 0, left: 0, right: 0, bottom: 0, 
		justifyContent: 'center', 
		alignItems: 'center',
		zIndex:10
	},
	paper: {
        width:350, 
        elevation:6,
        padding: 10, 
        alignItems:'center'
    }
}

const InputAlert = (props) =>  {
	let {onChangeText, onCancle, onOk, cancle, ok, title, value} = props;
	const newStyles = props.style || {};	
	return (
		<View style={style.fullScreenView}>
        	<Paper style={style.paper}>
		     	<Text style={{fontSize:18, fontWeight:'bold'}}> {title} </Text>
		     	<TextInput 
		     		autoFocus={true}
		     		style={{width: style.paper.width}}
		            textAlign={'center'}
		            value={value}
		            onChangeText={onChangeText}

		          />  
		         <View style={{width:style.paper.width, padding:5, flexDirection:'row', justifyContent:'flex-end'}}>
		         	<Button onPress={onCancle} style={{marginRight:30}}> {cancle} </Button>
		         	<Button onPress={() => onOk(true)} style={{borderColor:'green', marginRight:20}}> {"Create Campaign"} </Button>
		         	<Button onPress={onOk} style={{borderColor:'green', marginRight:20}}> {ok} </Button>
		         </View>
      		</Paper>
      	</View>
	)
}
export default InputAlert;


