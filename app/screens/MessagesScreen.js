import React from "react";
import { FlatList, SafeAreaView, StyleSheet, StatusBar, Platform, View } from "react-native";
import ListItem from "../components/ListItem";
import Constants from 'expo-constants'; //npx expo install expo-constants
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";

console.log(Constants);

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/fella.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/fella.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/fella.jpg"),
  },
];

const MessagesScreen = () => {
  return (
    <Screen>
    {/* <SafeAreaView style={styles.screen}>    replaced by reusable component Screen     */}
        <FlatList
      data={messages}
      keyExtractor={(message) => message.id.toString()}
      renderItem={({item}) => (
        <ListItem title={item.title} subTitle={item.description} image={item.image} />
      )}
      ItemSeparatorComponent={ListItemSeparator}
    />
     {/* </SafeAreaView> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
    // screen: {
    //     // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    //     paddingTop: Constants.statusBarHeight //using Constants instead of all the code!
    // }
})

export default MessagesScreen;
