import React from "react";
import { View, StyleSheet } from "react-native";
import Colour from "../config/Colour";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const ListItemDeleteAction = ({onPress}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="trash-can"
          size={40}
          color={Colour.white}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colour.danger,
    width: 70,
    height: '100%',
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ListItemDeleteAction;
