import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import colors from '../config/colors'


export const WelcomeScreen = function () {
  return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/background.jpg")}
      >
        <Image style={styles.logo} source={require('../assets/logo-red.png')} />
        <Text style={styles.welcomeText}>Sell What You Don't Need</Text>
        <View style={styles.loginButton}></View>
        <View style={styles.registerButton}></View>
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
    width: '100%',
    height: 70,
    backgroundColor: colors.primary
  },
  registerButton: {
    width: '100%',
    height: 70,
    backgroundColor: colors.secondary
  }
})