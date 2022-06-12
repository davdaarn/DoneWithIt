import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useFormikContext } from 'formik'

import AppPicker from '../AppPicker'
import ErrorMessage from './ErrorMessage'

const AppFormPicker = ({ name, placeholder, items, }) => {
  const { errors, touched, values, setFieldValue } = useFormikContext();

  return (
    <View>
      <AppPicker
        items={items}
        placeholder={placeholder}
        selectedItem={values[name]}
        onSelectItem={item => setFieldValue(name, item.label)}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </View>
  )
}

export default AppFormPicker

const styles = StyleSheet.create({})