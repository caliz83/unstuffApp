import React from "react";
import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import { View, StyleSheet, Modal } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Colour from "../config/Colour";
import Icon from "../components/Icon";
import ListItemSeparator from "../components/ListItemSeparator";

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
          ItemSeparatorComponent={ListItemSeparator}
        //   not using the alligators to add ListItemComponent unless we need to pass in props
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
      <ListItem title='Log Out' imageComponent={<Icon name='logout' backgroundColor="orange" />} />
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
