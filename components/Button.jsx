import React from 'react';

import { TouchableOpacity, Text } from 'react-native';

const Button = (props) =>  {
	const newStyles = props.style || {};
	return (
		<TouchableOpacity
         style={[{padding: 5, borderColor: 'red', borderStyle:'solid', borderWidth:1}, newStyles]}
         onPress={this.onPress}
       	>
         <Text> {props.title} </Text>
       </TouchableOpacity>
	)
}

export default Button;