import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AppText from './AppText';
import { StyleSheet } from 'react-native';

const PickerItem = ({ label, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <AppText style={styles.text}>{label}</AppText>     
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    padding: 20
  }
})

export default PickerItem
