import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'react-native'
import LoginForm from '../components/loginScreen/LoginForm'
import SignupForm from '../components/signupScreen/SignupForm'
const INSTAGRAM_LOGO = "https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-social-platform-icon-png-image_6315976.png"


const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={{uri: INSTAGRAM_LOGO}}  style={{width: 100, height: 100}} />
      </View>
      {/* SgnUp Form */}
      <SignupForm navigation={navigation} />
    </View>
  )
}

export default SignUpScreen

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
    },
})