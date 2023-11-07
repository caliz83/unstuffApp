import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function SecondScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}/>
            <View style={styles.deleteIcon}/>
            <Image resizeMode='contain' source={require('../assets/oldChair.jpg')} style={styles.image} />

        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%'
    },
    container: {
        backgroundColor: '#000',
        flex: 1
    },
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'blue',
        position: 'absolute',
        top: 60,
        left: 30
    },    
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: 'hotpink',
        position: 'absolute',
        top: 60,
        right: 30
    }    
})

export default SecondScreen;