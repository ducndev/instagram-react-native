import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import LoginForm from '../components/loginScreen/LoginForm'

const INSTAGRAM_LOGO = "https://w7.pngwing.com/pngs/890/910/png-transparent-logo-instagram-text-logo-number.png"


const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: INSTAGRAM_LOGO}}  style={{width: 100, height: 100}} />
      </View>
      {/* Login Form */}
      <LoginForm />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 50,
        paddingHorizontal: 12,
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 60,        
    }
})