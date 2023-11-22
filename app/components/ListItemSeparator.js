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
        width: '150%',
        height: 2,
        backgroundColor: Colour.secondary
    }
    
})

export default ListItemSeparator
