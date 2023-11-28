import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight, ImageComponent } from 'react-native';
import AppText from './AppText';
import Colour from '../config/Colour';
import Swipeable from 'react-native-gesture-handler/Swipeable';

const ListItem = ({ title, subTitle, image, iPress, renderRightActions, imageComponent }) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={Colour.light} onPress={iPress}>
        {/* TouchableHighlight won't work without an onPress in it */}
    <View style={styles.container}>
        {ImageComponent}
        {Image && <Image source={image} style={styles.image} /> }
        <View style={styles.detailsContainer}>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>     
    </View>
    </TouchableHighlight>
    </Swipeable>
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
    },
    detailsContainer: {
        marginLeft: 10
    }
})

export default ListItem
