import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import Colour from "../config/Colour";
import ListItem from "../components/ListItem";

const ListingDetailScreen = (props) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jeanJacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText style={ styles.title }>Great-looking Jean Jacket For Sale!</AppText>
        <AppText style={ styles.price }>$100</AppText>

        <ListItem image={require('../assets/fella.jpg')} title='Liz Garcia' subTitle='12 Listings' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
  },
  detailsContainer: {
    padding: 20
  },
  title: {
    fontSize: 21,
    fontWeight: '500'
  },
  price: {
    fontSize: 30,
    color: Colour.secondary,
    marginVertical: 10
  }
});

export default ListingDetailScreen;
