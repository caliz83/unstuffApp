import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const Screen = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
        {/* in an array to add style, which makes the list items show as white on a light gray background */}
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1
    }    
})

export default Screen
