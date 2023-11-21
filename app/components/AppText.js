import React from 'react';
import { Text, StyleSheet, Platform } from 'react-native';

function AppText({children, style}) {
    return (
        <Text style={[styles.text, style]}>
            {/* passed into an array and add style (above) in order to import; also add style to be passed into the function */}
            {children} 
        </Text>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Chalkboard SE',
    }
    
})

export default AppText;