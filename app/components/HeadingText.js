import React from 'react'
import { Text, StyleSheet } from 'react-native'

const HeadingText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
  },
})

export default HeadingText
