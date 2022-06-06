import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import AppButton from '../components/AppButton'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export const ViewImageScreen = function() {
  return (
    <View style={styles.screen}>
      <View style={styles.buttonContainer}>

        <TouchableOpacity style={{ ...styles.buttonClose }}>
          <MaterialCommunityIcons name='close' color='white' size={30} />
        </TouchableOpacity>

        <TouchableOpacity style={{ ...styles.button, ...styles.buttonDelete }}>
          <MaterialCommunityIcons name='trash-can-outline' color='white' size={35} />
        </TouchableOpacity>
      </View>
      <Image style={styles.image} source={require('../assets/chair.jpg')} />
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
  buttonClose: {
    position: 'absolute',
    top: 40,
    left: 30
  },
  buttonDelete: {
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