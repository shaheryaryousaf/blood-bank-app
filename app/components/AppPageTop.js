import React from 'react'
import { View, StyleSheet } from 'react-native'

import AppView from '../components/AppView'
import AppText from '../components/AppText'

import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const AppPageTop = ({ title, subTitle }) => {
  const navigation = useNavigation()

  return (
    <AppView style={styles.container}>
      <View>
        <AppText style={styles.heading}>{title}</AppText>
        <AppText style={styles.subHeading}>{subTitle}</AppText>
      </View>
      <MaterialCommunityIcons
        name='arrow-left'
        size={30}
        color={colors.white}
        onPress={() => navigation.navigate('Login')}
      />
    </AppView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blood,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  subHeading: {
    fontSize: 18,
    color: colors.white,
  },
})

export default AppPageTop
