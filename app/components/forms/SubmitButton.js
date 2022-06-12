import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import AppButton from '../AppButton'

const SubmitButton = ({ title }) => {
  const { handleSubmit } = useFormikContext();
  return (
    <AppButton
      style={{ marginTop: 30 }}
      title={title}
      onPress={handleSubmit} />
  )
}

export default SubmitButton

const styles = StyleSheet.create({})