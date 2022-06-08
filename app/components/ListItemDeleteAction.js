import { StyleSheet, Text, View } from 'react-native'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'

const ListItemDeleteAction = (props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='trash-can' size={35} color={colors.white} />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default ListItemDeleteAction

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.danger,
    width: 70,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})