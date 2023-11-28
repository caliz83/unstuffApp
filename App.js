import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SecondScreen from "./app/screens/SecondScreen";
import SaleScreen from "./app/screens/SaleScreen";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import "react-native-gesture-handler"; //npx expo install react-native-gesture-handler
import { GestureHandlerRootView } from "react-native-gesture-handler"; //npm install --save react-native-gesture-handler
import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountsScreen from "./app/screens/AccountsScreen";


export default function App() {
  return (
    // <WelcomeScreen />
    // <SecondScreen />
    // <SaleScreen />

    // <View style={{ backgroundColor: "#f8f4f4", padding: 20, paddingTop: 100 }}>
    //   <Card
    //     title="Jean Jacket for Sale"
    //     subTitle="$100"
    //     image={require("./app/assets/jeanJacket.jpg")}
    //   />
    // </View>

    // <ListingDetailScreen />
    <GestureHandlerRootView style={{ flex: 1 }}>
      {/* <MessagesScreen /> */}
      {/* <Screen> */}
        {/* <Icon name="email" size={50} backgroundColor="red" iconColor="white" /> */}
        {/* <ListItem title='My title 1' subTitle='My subtitle 1' imageComponent={<Icon name='email' />} />
      </Screen> */}
      <AccountsScreen />
    </GestureHandlerRootView>
  );
}
