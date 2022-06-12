import { Image, StyleSheet, View } from 'react-native'
import * as Yup from 'yup';

import AppSafeAreaView from '../components/AppSafeAreaView'
import { AppFormField, AppForm, SubmitButton } from '../components/forms'


const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(6).label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).matches().label('Password')
})

const RegisterScreen = () => {
  return (
    <AppSafeAreaView>
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          name: '',
          email: '',
          password: ''
        }}
        onSubmit={values => console.log(values)}
      >

        <View style={{ marginHorizontal: 20 }}>
          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="account"
            // keyboardTypes="account"
            placeholder="Name"
            // textContentType="nameAddress"
            name={'name'}
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="email"
            keyboardTypes="email-address"
            placeholder="Email"
            textContentType="emailAddress"
            name={'email'}
          />

          <AppFormField
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            keyboardTypes="password"
            placeholder="Password"
            secureTextEntry={true}
            textContentType="password"
            name='password'
          />

          <SubmitButton title='Register' />
        </View>
      </AppForm>
    </AppSafeAreaView >
  )
}

export default RegisterScreen

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    // marginTop: 50,
    marginBottom: 20
  }
})