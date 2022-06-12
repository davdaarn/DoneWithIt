import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import AppSafeAreaView from '../components/AppSafeAreaView'
import AppPicker from '../components/AppPicker'
import AppTextInput from '../components/AppTextInput'

const cat = [
  { label: 'Furniture', value: 1, id: 1 },
  { label: 'Clothing', value: 2, id: 2 },
  { label: 'Cameras', value: 3, id: 3 },
  { label: 'Keyboards', value: 4, id: 4 },
]

const PickerTestScreen = () => {
  const [category, setCategory] = useState();

  return (
    <AppSafeAreaView>
      <AppPicker
        icon='apps'
        placeholder='Category'
        items={cat}
        selectedItem={category}
        onSelectItem={item => setCategory(item.label)}
      />

      <AppTextInput icon='email' placeholder='Email'></AppTextInput>
    </AppSafeAreaView>
  )
}

export default PickerTestScreen

const styles = StyleSheet.create({})