import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { AppText } from './AppText'

const AppButton = (props) => {
  console.log(props)
  return (
    <TouchableOpacity style={{ ...styles.appButton, ...props.style }}>
      <AppText style={{ color: 'white' }}>{props.title}</AppText>
    </TouchableOpacity >
  )
}

export default AppButton

const styles = StyleSheet.create({
  appButton: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  }
})