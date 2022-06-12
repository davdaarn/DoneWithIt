import { StyleSheet, Text, View } from 'react-native'
import { AppText } from '../AppText'
import React from 'react'

const ErrorMessage = ({ error, visible }) => {
  if (!error || !visible) return null;

  return (
    <AppText style={styles.errorMessage}>{error}</AppText>
  )
}

export default ErrorMessage

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red',
  }
})