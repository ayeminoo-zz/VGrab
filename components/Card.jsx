import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native'

const Card = (props) => {
  const newStyles = props.styles || {};
  return (
    <View style={[styles.container, styles.card, newStyles.card]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    margin: 5
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 2,
    shadowColor: "#000000",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 0.3,
    }
  }
});

export default Card;