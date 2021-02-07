import React from 'react'
import { View, ImageBackground, Button, StyleSheet } from 'react-native'

import AppText from '../components/AppText'
import colors from '../config/colors'

import { useNavigation } from '@react-navigation/native'

const bloods = [
  {
    id: 1,
    name: 'A+',
  },
  {
    id: 2,
    name: 'A-',
  },
  {
    id: 3,
    name: 'B+',
  },
  {
    id: 4,
    name: 'B-',
  },
  {
    id: 5,
    name: 'O+',
  },
  {
    id: 6,
    name: 'O-',
  },
  {
    id: 7,
    name: 'AB+',
  },
  {
    id: 8,
    name: 'AB-',
  },
]

const SelectBloodGroupScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <AppText style={styles.heading}>Blood Bank</AppText>
      <AppText>Select a Blood Group</AppText>
      <View style={styles.bloodContainer}>
        {bloods.map((blood) => (
          <View
            style={styles.drop}
            key={blood.id}
            onStartShouldSetResponder={() => navigation.navigate('Login')}
          >
            <ImageBackground
              source={require('../assets/blood-drop.png')}
              style={styles.image}
            >
              <AppText style={styles.text}>{blood.name}</AppText>
            </ImageBackground>
          </View>
        ))}
      </View>
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
    fontSize: 36,
    fontWeight: 'bold',
  },
  bloodContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 20,
  },
  drop: {
    width: '50%',
    alignItems: 'center',
    marginVertical: 10,
  },
  image: {
    width: 50,
    height: 82,
  },
  text: {
    position: 'absolute',
    left: 17,
    top: 43,
    color: 'white',
    fontWeight: 'bold',
  },
})

export default SelectBloodGroupScreen
