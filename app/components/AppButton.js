import React from 'react';
import Colour from '../config/Colour';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function AppButton({title, color="primary", onPress}) {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: Colour[color]}]} onPress={onPress}> 
        <Text style={styles.text}>{title}</Text>

        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: Colour.primary,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        width: '100%',
        marginVertical: 10
    },
    text: {
        color: Colour.white,
        fontSize: 24,
        textTransform: "uppercase",
        fontWeight: "bold"
    } 
})

export default AppButton;