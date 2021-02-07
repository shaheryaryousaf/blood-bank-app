import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

import HeadingText from '../components/HeadingText'

import { AppForm, AppFormField, SubmitButton } from '../components/forms'

import colors from '../config/colors'
import { Fontisto } from '@expo/vector-icons'

import { connect } from 'react-redux'
import { signUp } from '../actions/Authentication'

import * as yup from 'yup'
const validationSchema = yup.object().shape({
  name: yup.string().required().label('Name'),
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().min(6).label('Password'),
  password2: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
})

const RegisterScreen = ({ navigation, signUp }) => {
  return (
    <View style={styles.container}>
      <Fontisto name='blood-drop' size={100} color={colors.blood} />
      <HeadingText style={styles.heading}>Register</HeadingText>
      <AppForm
        initialValues={{ name: '', email: '', password: '', password2: '' }}
        onSubmit={(values) => {
          signUp(values.name, values.email, values.password, values.password2)
          // navigation.navigate('Login')
        }}
        validationSchema={validationSchema}
      >
        <View style={styles.form}>
          <AppFormField icon='account-outline' placeholder='Name' name='name' />
          <AppFormField
            icon='email'
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize='none'
            keyboardType='email-address'
            name='email'
          />
          <AppFormField
            icon='lock'
            placeholder='Password'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry
            name='password'
          />
          <AppFormField
            icon='lock'
            placeholder='Confirm Password'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry
            name='password2'
          />
          <SubmitButton title='Register' />
        </View>
      </AppForm>

      <Text
        style={{ marginTop: 5 }}
        onPress={() => navigation.navigate('Login')}
      >
        Already have an account?
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  heading: {
    marginVertical: 15,
  },
  form: {
    width: '100%',
    marginVertical: 5,
    paddingRight: 35,
    paddingLeft: 35,
  },
})

export default connect(null, { signUp })(RegisterScreen)
