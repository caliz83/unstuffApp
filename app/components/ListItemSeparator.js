import React from 'react';
import { StyleSheet, View } from 'react-native';
import Colour from '../config/Colour';


const ListItemSeparator = () => {
  return (
    <View style={styles.separator} />
  )
}

const styles = StyleSheet.create({
    separator: {
        width: '100%',
        height: 2,
        backgroundColor: Colour.light
    }
    
})

export default ListItemSeparator
