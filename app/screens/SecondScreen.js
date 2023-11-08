import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colour from '../config/Colour';

function SecondScreen(props) {
    return (
        <View style={styles.container}>
             <TouchableOpacity style={styles.closeIcon}>
          <Ionicons name="close" size={30} color="white" onPress={() => console.log('Close button clicked')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteIcon}>
          <Ionicons name="trash-outline" size={30} color="white" onPress={() => console.log('Delete button clicked')}/>
        </TouchableOpacity>
        <Image resizeMode="contain" style={styles.image} source={require('../assets/oldChair.jpg')} />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        backgroundColor: Colour.black,
        flex: 1
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colour.primary,
        position: 'absolute',
        top: 60,
        left: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },    
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: Colour.secondary,
        position: 'absolute',
        top: 60,
        right: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    }    
})

export default SecondScreen;