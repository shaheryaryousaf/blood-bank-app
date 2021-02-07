import React from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'

import colors from '../config/colors'
import { Fontisto } from '@expo/vector-icons'
import Constants from 'expo-constants'

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Fontisto name='blood-drop' size={160} color={colors.white} />
      <Text style={styles.text}>Blood Bank</Text>
      <View style={styles.buttonsContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Login')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate('Register')}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Register</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blood,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
    fontSize: 34,
    marginTop: 15,
    fontWeight: 'bold',
  },
  buttonsContainer: {
    paddingTop: 25,
    padding: 35,
    width: '100%',
  },
  button: {
    backgroundColor: colors.white,
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 6,
    width: '100%',
  },
  buttonText: {
    color: colors.blood,
    fontSize: 16,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
})

export default WelcomeScreen
