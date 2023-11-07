import React from 'react';
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native';
//import LivingRoom from '../assets/LivingRoom.jpg'

//rsf, tab
function WelcomeScreen(props) {

    // const bgImage = require('../assets/LivingRoom.jpg');

    return (
        
            <ImageBackground source={require('../assets/LivingRoom.jpg')} style={styles.background} >
            <Image style={styles.logo} source={require('../assets/UnstuffLogo.png')} />
            <Text style={styles.text}>Unstuff Your Life</Text>
            <View style={styles.loginButton} />
            <View style={styles.registerButton} />
            </ImageBackground>
           
            
       
    );
}

//rnss, tab
const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    loginButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'blue'
    } ,
    registerButton: {
        width: '100%',
        height: 70,
        backgroundColor: 'hotpink'
    },
    logo: {
        width: 200,
        height: 200,
        position: 'absolute',
        top: 80
    },
    text: {
        bottom: 400
    }
})

export default WelcomeScreen;