import { Image, StyleSheet, View } from 'react-native'
import * as Yup from 'yup';

import AppSafeAreaView from '../components/AppSafeAreaView'
import { AppFormField, AppForm, SubmitButton } from '../components/forms'


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).matches().label('Password')
})

const LoginScreen = () => {
  return (
    <AppSafeAreaView>
      <Image source={require('../assets/logo-red.png')} style={styles.logo} />
      <AppForm
        validationSchema={validationSchema}
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={values => console.log(values)}>
        <View style={{ marginHorizontal: 20 }}>
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

          <SubmitButton title='Login' />
        </View>
      </AppForm>
    </AppSafeAreaView >
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    // marginTop: 50,
    marginBottom: 20
  }
})