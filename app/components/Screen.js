import React from 'react'
import { View, StyleSheet } from 'react-native'

import Constants from 'expo-constants'

const Screen = ({ children }) => {
  return <View style={[styles.screen]}>{children}</View>
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },
})

export default Screen
