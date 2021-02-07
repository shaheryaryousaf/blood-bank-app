import React from 'react'
import { View, StyleSheet } from 'react-native'

const AppView = ({ children, style }) => {
  return <View style={[styles.container, style]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
})

export default AppView
