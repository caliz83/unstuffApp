import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import Colour from '../config/Colour';

function SaleScreen() {
    return (
       <View style={styles.container}>
        <Image resizeMode='contain' style={styles.image} source={require('../assets/fella.jpg')}/>
        <Text style={styles.text}>Fella for sale!</Text>
        <Text style={styles.price}>$2</Text>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colour.black
    },
    image: {
        width: '100%',
        height: '60%'
    },
    text: {
        color: Colour.primary,
        bottom: 40,
        fontSize: 60,

    },
    price: {
        color: 'green',
        fontSize: 60
    }
})

export default SaleScreen;