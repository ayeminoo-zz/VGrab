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
  icon: {
    width: 24,
    height: 24,
  },
  
  paper: {
    flexDirection:'row',
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
    paddingRight:5,
    justifyContent:'space-between', 
    alignItems:'stretch',
  },
  stretch: {
    width: 100,
    height: 100
  }
});


const ItemView = (props) =>  {
  const newStyles = props.style || {};
  let {name2, readOnly, imageSource, name, quantity, cost, onAdd, onRemove, onDelete} = props;

  return (
          <Paper style={styles.paper}>
             <Image style={styles.stretch} source={imageSource} />
             <View style={styles.rightContainer}>
              <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                  <Text style={{fontSize:18, color:'#545456'}}> {name}</Text>
                  {!readOnly && <Button onPress={onDelete} style={{position:'absolute', right:0, padding:0, borderColor: 'transparent'}}><Icon name="clear" size={18}  color='#a8adb5'/> </Button> }
              </View>
              <Text style={{paddingLeft: 5, color:'#a8adb5'}}> {name2} </Text>
              <Text style={{paddingLeft: 5, color:'#a8adb5'}}> $ {cost} / per  </Text>
              <View style={{flex:1, paddingTop: 8, flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{paddingLeft:8, fontFamily:'changa-one-regular', fontSize: 16}}>$ {quantity * cost}</Text>

                <View style={{flexDirection:'row',  alignItems:'center'}}>
                    {!readOnly && <Button onPress={onRemove} style={{padding:0, borderColor: 'transparent'}}><Icon name="remove" size={25} color='#a8adb5'/> </Button> }
                    
                    <View style={{justifyContent:'center', alignItems:'center', width:30, height:30, borderColor: 'grey', borderStyle:'solid', borderWidth: 1, marginLeft:7, marginRight: 7}}>
                      <Text style={{fontSize:14}}> {quantity} </Text>
                    </View>
                    
                    {!readOnly && <Button onPress={onAdd} style={{padding:0, borderColor: 'transparent'}}><Icon name="add" size={25}  color='#a8adb5'/> </Button> }
                </View>
              </View>
             </View>
          </Paper>
  )
}

export default ItemView;








