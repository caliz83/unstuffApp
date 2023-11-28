import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Platform,
  View,
} from "react-native";
import ListItem from "../components/ListItem";
import Constants from "expo-constants"; //npx expo install expo-constants
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

console.log(Constants);

const initialMessages = [
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

const handlePress = () => {};

const MessagesScreen = () => {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    //function to delete our messages from our array and update our UI
    //we also need to call the server to delete the messages from the backend
    const handleDelete = (message) => {
    //    const newMessages = messages.filter(m => m.id !== message.id);
    //    setMessages(newMessages)
       setMessages(messages.filter(m => m.id !== message.id))
    }

  return (
    <Screen>
      
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            iPress={() => console.log("This is coming from our message screen", item)}
            // item in the onPress is mapping through the list/array via renderItem function
            renderRightActions={() => <ListItemDeleteAction onPress={() => handleDelete(item)} />}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {setMessages([{id: 2, tile: '12', description: 'D2', image: require('../assets/fella.jpg')}])}}
      />
      
    </Screen>
  );
};

// const styles = StyleSheet.create({
  // screen: {
  //     // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  //     paddingTop: Constants.statusBarHeight //using Constants instead of all the code!
  // }
// });

export default MessagesScreen;
