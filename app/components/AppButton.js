import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { AppText } from './AppText'

const AppButton = ({title, style, onPress, color = 'primary'}) => {
  return (
    <TouchableOpacity style={{ ...styles.appButton, ...style }} onPress={onPress}>
      <AppText style={{ color: 'white' }}>{title}</AppText>
    </TouchableOpacity >
  )
}

export default AppButton

const styles = StyleSheet.create({
  appButton: {
    backgroundColor: colors.primary,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  }
})