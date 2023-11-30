import React from "react";
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  Pressable,
  Platform
} from "react-native";
import Colour from "../config/Colour";
import AppButton from "../components/AppButton";
//import LivingRoom from '../assets/LivingRoom.jpg'

//rsf, tab
function WelcomeScreen(props) {
  // const bgImage = require('../assets/LivingRoom.jpg');

  return (
    <ImageBackground
      source={require("../assets/LivingRoom.jpg")}
      style={styles.background}
    >
      <Image
        style={styles.logo}
        //source={require("../assets/UnstuffLogo.png")}
      />
      <Text style={styles.text}>Unstuff Your Life</Text>
      {/* Button deprecated; suggested using Pressable instead so that's what I did */}
      {/* <Pressable style={styles.loginButton}>
        <Text style={styles.button}>Login</Text>
      </Pressable> */}
      <AppButton color="primary" title={'Login'} onPress={() => console.log("login!")} />
      <AppButton color="secondary" title={'Register'} onPress={() => console.log("register!")} />
      {/* <Pressable style={styles.registerButton}>
        <Text style={styles.button}>Register</Text>
      </Pressable> */}
    </ImageBackground>
  );
}

//rnss, tab
const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
    height: 70,
    backgroundColor: Colour.primary,
    borderRadius: 35,
    margin: 5,
  },
  registerButton: {
    width: "100%",
    height: 70,
    backgroundColor: Colour.secondary,
    borderRadius: 35,
    margin: 5,
  },
  logo: {
    width: 200,
    height: 200,
    position: "absolute",
    top: 80,
  },
  text: {
    bottom: 400,
  },
  button: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 20,
    textTransform: 'uppercase',
    fontFamily: Platform.OS === 'android' ? 'monospace' : 'arial'
  }
});

export default WelcomeScreen;
