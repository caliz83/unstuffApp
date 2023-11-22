import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import SecondScreen from "./app/screens/SecondScreen";
import SaleScreen from "./app/screens/SaleScreen";
import Card from "./app/components/Card";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";




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
    <MessagesScreen />
  );
}
