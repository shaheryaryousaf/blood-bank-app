import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import HeadingText from '../components/HeadingText'

import { AppForm, AppFormField, SubmitButton } from '../components/forms'

import colors from '../config/colors'
import { Fontisto } from '@expo/vector-icons'

import { connect } from 'react-redux'
import { login } from '../actions/Authentication'

import * as yup from 'yup'

const validationSchema = yup.object().shape({
  email: yup.string().email().required().label('Email'),
  password: yup.string().required().min(6).label('Password'),
})

const LoginScreen = ({ navigation, login }) => {
  return (
    <View style={styles.container}>
      <Fontisto name='blood-drop' size={100} color={colors.blood} />
      <HeadingText style={styles.heading}>Login</HeadingText>
      <AppForm
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          login(values.email, values.password)
          setTimeout(() => {
            navigation.navigate('UsersList')
          }, 2000)
        }}
        validationSchema={validationSchema}
      >
        <View style={styles.form}>
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
          <SubmitButton title='Login' />
        </View>
      </AppForm>

      <Text
        style={{ marginTop: 5 }}
        onPress={() => navigation.navigate('Register')}
      >
        Register Here
      </Text>
      {/* <Text
        style={{ marginTop: 5 }}
        onPress={() => navigation.navigate('Welcome')}
      >
        Welcome
      </Text>
      <Text
        style={{ marginTop: 5 }}
        onPress={() => navigation.navigate('Profile_Page')}
      >
        User Profile
      </Text>
      <Text
        style={{ marginTop: 5 }}
        onPress={() => navigation.navigate('UsersList')}
      >
        Users List
      </Text>
      <Text
        style={{ marginTop: 5 }}
        onPress={() => navigation.navigate('BloodGroup')}
      >
        Blood Group
      </Text>
      <Text
        style={{ marginTop: 5 }}
        onPress={() => navigation.navigate('CompleteProfile')}
      >
        Complete Profile
      </Text> */}
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

export default connect(null, { login })(LoginScreen)
