import { StyleSheet, Text, View, Platform } from 'react-native'

export const AppText = (props) => {
  return <Text style={{ ...styles.text, ...props.style }}>{props.children}</Text>;
}



const styles = StyleSheet.create({
  text: {
    ...Platform.select({
      ios: {
        fontSize: 20,
        fontFamily: "Avenir",
      },
      android: {
        fontSize: 18,
        fontFamily: "Roboto"
      }
    })
  }
})