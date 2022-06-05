import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../config/colors'

export const ViewImageScreen = function() {
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={{...styles.button, ...styles.buttonDelete}}></TouchableOpacity>
        <TouchableOpacity style={{...styles.button, ...styles.button2}}></TouchableOpacity>
      </View>
      <Image style={styles.image} source={require('../assets/chair.jpg')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'space-between'
  },
  button: {
    width: 50,
    height: 50,
  },
  buttonDelete: {
    backgroundColor: colors.primary,
    position: 'absolute',
    top: 40,
    left: 30
  },
  button2: {
    backgroundColor: colors.secondary,
    position: 'absolute',
    top: 40,
    right: 30
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain'
  }
})