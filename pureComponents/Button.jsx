import React from 'react';

import { View, TouchableOpacity, Text } from 'react-native';

const Button = (props) =>  {
	const newStyles = props.style || {};	
	return (
		    <TouchableOpacity
         style={[{padding: 5, borderRadius:3, borderColor: 'red', borderStyle:'solid', borderWidth:1}, newStyles]}
         onPress={props.onPress}
       	>
       	{props.title && <Text style={{color: props.color}}> {props.title} </Text>}
        
        <Text style={{color:props.color}}>{props.children}</Text>
       </TouchableOpacity>
	)
}

export default Button;