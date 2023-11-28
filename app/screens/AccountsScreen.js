import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { View, StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Colour from "../config/Colour";
import Icon from "../components/Icon";

//dummy data
const menuItems = [
  {
    title: "My Listings",
    icon: { name: "format-list-bulleted", backgroundColor: Colour.primary },
  },
  {
    title: "My Messages",
    icon: { name: "email", backgroundColor: Colour.secondary },
  },
];

const AccountsScreen = () => {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Liz Garcia"
          subTitle="lizg1308@gmail.com"
          image={require("../assets/fella.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              imageComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    backgroundColor: Colour.light
  },
  container: {
    marginVertical: 20
  },
});

export default AccountsScreen;
