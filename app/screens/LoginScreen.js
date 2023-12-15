import React, { useState } from "react";
import Screen from "../components/Screen";
//import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { StyleSheet, Image } from "react-native";
import { Formik } from "formik"; //npm install formik --save
import * as Yup from 'yup'; //npm install yup --save
//import AppText from "../components/AppText";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";




const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")  // min = min # of characters allowed
})

const LoginScreen = () => {
  // const [email, setEmail] = useState();
  // const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
      <Image
        source={require("../assets/UnStuffLogo.png")}
        style={styles.logo}
      />

      {/*syntax for formik is a little weird so pay attention here! */}
      {/* <Formik //changed to AppForm, now need to reorganize, redo the syntax*/}
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {/* {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (  //changed to line below*/}
          {/* {({  }) => ( //getting rid of this when changing Formik to AppForm */}
          {/* <>  //getting rid of this when changing Formik to AppForm */}
            <AppFormField
              name={'email'} //added after chaning from AppTextInput to AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              placeholder="email"
              keyboardType="email-address"
              // onBlur={() => setFieldTouched("email")}  //removed after changing to AppFormField
              // onChangeText={text => setEmail(text)} using Formik version now so see next line
              // onChangeText={handleChange("email")}  //removed after changing to AppFormField
              textContentType="emailAddress"
            />
            {/* <AppText style={{color: "red"}}>{errors.email}</AppText> */}
            {/* <ErrorMessage error={errors.email} visible={touched.email} /> now handled in AppFormField component */}
            <AppFormField
              name={'password'} //added after changing from AppTextInput to AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              placeholder="password"
              //keyboardType="email-address" //removed after changing to AppFormField
              // onBlur={() => setFieldTouched("password")} //removed after changing to AppFormField
              // onChangeText={text => setPassword(text)}
              // onChangeText={handleChange("password")}  //removed after changing to AppFormField
              secureTextEntry
              textContentType="password"
            />
            {/* <AppText style={{color: "red"}}>{errors.password}</AppText> */}
            {/* <ErrorMessage error={errors.password} visible={touched.password} /> now handled in AppFormField component */}
            {/* <AppButton
              style={styles.button}
              title="Login"
              onPress={handleSubmit}
            /> */}
            <SubmitButton title={"Login"} />
          {/* </> */}
        {/* )} */}
        </AppForm>
      {/* </Formik> */}
    </Screen>
  );
};

const styles = StyleSheet.create({
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  button: {
    alignSelf: "center",
    marginVertical: 300,
    width: "80%",
  },
  container: {
    padding: 15,
  },
});

export default LoginScreen;
