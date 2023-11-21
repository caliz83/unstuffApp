import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Colour from '../config/Colour';

function SecondScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}><MaterialCommunityIcons name="close" size={44} color="white" /></View>
            <View style={styles.deleteIcon}><MaterialCommunityIcons name="trash-can-outline" size={44} color="white" /></View>
             {/* <TouchableOpacity style={styles.closeIcon}>
          <Ionicons name="close" size={30} color="white" onPress={() => console.log('Close button clicked')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteIcon}>
          <Ionicons name="trash-outline" size={30} color="white" onPress={() => console.log('Delete button clicked')}/>
        </TouchableOpacity> */}
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
        backgroundColor: Colour.primary,
        flex: 1
    },
    closeIcon: {
        position: 'absolute',
        top: 60,
        left: 30
    },    
    deleteIcon: {
        position: 'absolute',
        top: 60,
        right: 30
    }    
})

export default SecondScreen;