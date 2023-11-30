import React from 'react';
import { View, Platform, StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import Colour from '../config/Colour';
import defaultStyles from '../config/Styles';



const AppTextInput = ({icon, ...otherProps}) => {
  return (
    <View style={styles.container}>
        {icon && <MaterialCommunityIcons name={icon} size={30} color={Colour.medium} style={styles.icon} />}
        <TextInput style={defaultStyles.text} {...otherProps} /> 
             {/* otherProps can be used in any React environment; it automatically maps through all properties for TextInput - can be put in proactively in case more will be added in future so don't have to go back and add them all individually  */}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colour.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10
    },
    // textInput: {
    //     fontSize: 18,
    //     fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Chalkboard SE',
    //     color: Colour.dark
    // },
    // textInput now coming from config > Styles.js (text object)
    icon: {
        marginRight: 10
    }
})

export default AppTextInput
