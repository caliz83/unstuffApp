import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AppText from './AppText';
import Colour from '../config/Colour';

const ListItem = ({ title, subTitle, image }) => {
  return (
    <View style={styles.container}>
        <Image source={image} style={styles.image} /> 
        <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 20
    }    ,
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: '500',
        fontSize: 21
    },
    subTitle: {
        color: Colour.medium,
        fontSize: 19
    }
})

export default ListItem
