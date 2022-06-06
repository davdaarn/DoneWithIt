import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import colors from '../config/colors'
import AppButton from '../components/AppButton'
import { AppText } from '../components/AppText'

export const WelcomeScreen = function() {
  return (
    <ImageBackground
      style={styles.background}
      blurRadius={3}
      source={require("../assets/background.jpg")}
    >
      <Image style={styles.logo} source={require('../assets/logo-red.png')} />
      <AppText style={styles.welcomeText}>Sell What You Don't Need</AppText>
      <AppButton
        style={{ ...styles.button, ...styles.loginButton }}
        title="Login"
      />
      <AppButton
        style={{ ...styles.button, ...styles.registerButton }}
        title="Register"
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end"
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    position: 'absolute',
    top: 100
  },
  welcomeText: {
    alignSelf: 'center',
    position: 'absolute',
    top: 250
  },
  loginButton: {
    // width: '100%',
    height: 40,
    margin: 20,
    backgroundColor: colors.primary
  },
  registerButton: {
    // width: '100%',
    height: 40,
    margin: 20,
    marginTop: 0,
    backgroundColor: colors.secondary
  }
})