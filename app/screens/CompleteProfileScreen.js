import React, { useEffect } from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import { AppForm, AppFormField, SubmitButton } from '../components/forms'

import colors from '../config/colors'

import { connect } from 'react-redux'
import { completeProfile, getProfile } from '../actions/Profile'

import * as yup from 'yup'
const validationSchema = yup.object().shape({
  phone: yup.string().required().label('Phone'),
})

const CompleteProfileScreen = ({
  completeProfile,
  user,
  navigation,
  getProfile,
  profile,
}) => {
  useEffect(() => {
    getProfile(user.uid)
  }, [user.uid])

  const initialValues = {
    id: user && user.uid,
    phone: '',
    age: '',
    blood_group: '',
    address: '',
    city: '',
    bio: '',
  }
  return (
    <Screen>
      <ScrollView>
        <AppForm
          initialValues={initialValues}
          onSubmit={(values) => {
            completeProfile(values)
            navigation.navigate('Profile_Page')
          }}
          validationSchema={validationSchema}
        >
          <View style={styles.form}>
            <AppFormField
              placeholder='Phone'
              name='phone'
              keyboardType='numeric'
            />
            <AppFormField placeholder='uid' name='uid' value={user.uid} />
            <AppFormField placeholder='Age' name='age' keyboardType='numeric' />
            <AppFormField placeholder='Blood Group' name='blood_group' />
            <AppFormField placeholder='Address' name='address' />
            <AppFormField placeholder='City' name='city' />
            <AppFormField
              placeholder='Bio'
              name='bio'
              multiline={true}
              numberOfLines={5}
              style={{
                minHeight: 200,
                textAlignVertical: 'top',
                justifyContent: 'flex-start',
              }}
            />

            <SubmitButton title='Complete Profile' />
          </View>
        </AppForm>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  form: {
    width: '100%',
    marginVertical: 15,
    paddingRight: 25,
    paddingLeft: 25,
  },
  select: {
    width: '100%',
    borderWidth: 1,
    borderColor: colors.medium,
    borderRadius: 10,
    marginVertical: 5,
  },
})

const mapStateToProps = (state) => ({
  user: state.Authentication.user,
  profile: state.Profile.profile,
})

export default connect(mapStateToProps, { completeProfile, getProfile })(
  CompleteProfileScreen
)
