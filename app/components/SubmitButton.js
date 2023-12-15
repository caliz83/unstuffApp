import React from "react";
import AppButton from "./AppButton";
import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      style={styles.button}
      title={title}
      onPress={handleSubmit}
    ></AppButton>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: "center",
    marginVertical: 300,
    width: "80%",
  },
});

export default SubmitButton;
