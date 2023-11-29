import React from "react";
import { StyleSheet } from "react-native";
import Screen from "../components/Screen";
import { FlatList } from "react-native-gesture-handler";
import Card from "../components/Card";
import Colour from "../config/Colour";

//dummy data
const listing = [
  {
    id: 1,
    title: "Jean Jacket for Sale",
    price: 100,
    image: require("../assets/jeanJacket.jpg"),
  },
  {
    id: 2,
    title: "Good-as-New Chair",
    price: 1000,
    image: require("../assets/oldChair.jpg"),
  },
];

const ListingsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={listing}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            subTitle={"$" + item.price}
            image={item.image}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: Colour.light
    }
});

export default ListingsScreen;
