import React, { useState } from 'react';
import Screen from '../components/Screen';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import { StyleSheet, Image } from 'react-native';


const LoginScreen = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  return (
    <Screen style={styles.container}>
        <Image source={require('../assets/UnStuffLogo.png')} style={styles.logo} />   
        <AppTextInput autoCapitalize='none'
        autoCorrect={false}
        icon='email'
        placeholder='email'
        keyboardType='email-address'
        onChangeText={text => setEmail(text)}
        textContentType='emailAddress' />   
        <AppTextInput autoCapitalize='none'
        autoCorrect={false}
        icon='lock'
        placeholder='password'
        keyboardType='email-address'
        onChangeText={text => setPassword(text)}
        secureTextEntry
        textContentType='password' 
        /> 
        <AppButton 
        style={styles.button}
        title='Login'
        onPress={() => console.log(email, password)}
        />  
    </Screen>
  )
}

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    button: {
        alignSelf: 'center',
        marginVertical: 300,
        width: '80%'
    },
    container: {
        padding: 15
    }   
})

export default LoginScreen
