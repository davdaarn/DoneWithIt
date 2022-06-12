import { Image, StyleSheet, View } from 'react-native'
import * as Yup from 'yup';

import AppSafeAreaView from '../components/AppSafeAreaView'
import {
  AppFormField,
  AppForm,
  SubmitButton,
  AppFormPicker
} from '../components/forms'


const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(6).label('Title'),
  price: Yup.number().required().min(1).max(10000).label('Price'),
  Category: Yup.string().required().nullable().label('Category'),
  description: Yup.string().required().min(6).label('Description'),

})

const items = [
  { label: 'Furniture', value: 1, id: 1 },
  { label: 'Clothing', value: 2, id: 2 },
  { label: 'Cameras', value: 3, id: 3 },
  { label: 'Keyboards', value: 4, id: 4 },
]

const ListingEditScreen = () => {
  return (
    <AppSafeAreaView>
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          title: '',
          price: '',
          category: '',
          description: ''
        }}
        onSubmit={values => console.log(values)}
      >

        <View style={{ marginHorizontal: 20 }}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Title"
            name={'title'}
            maxLength={255}
          />

          <AppFormField
            maxLength={8}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="numeric"
            placeholder="Price"
            name={'price'}
          />

          <AppFormPicker
            items={items}
            name={'category'}
            placeholder="Category"
          />

          <AppFormField
            maxLength={255}
            placeholder="Description"
            name='description'
            multiline
            numberOfLines={3}
          />

          <SubmitButton title='Register' />
        </View>
      </AppForm>
    </AppSafeAreaView >
  )
}

export default ListingEditScreen

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    // marginTop: 50,
    marginBottom: 20
  }
})