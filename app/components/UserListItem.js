import React from 'react'
import { View, TouchableHighlight, StyleSheet } from 'react-native'

import AppView from '../components/AppView'
import AppText from '../components/AppText'

import colors from '../config/colors'
import { Feather } from '@expo/vector-icons'

const UserListItem = ({ name, bloodGroup, city, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <AppView style={styles.userListItem}>
        <View style={styles.listItemDetail}>
          <View>
            <AppText style={styles.full_name}>{name}</AppText>
            <AppText style={styles.blood_group}>
              Blood Group: {bloodGroup}
            </AppText>
            <AppText style={styles.location}>City: {city}</AppText>
          </View>
          <Feather name='chevron-right' size={14} color={colors.blood} />
        </View>
      </AppView>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  userListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  listItemDetail: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  full_name: {
    fontSize: 16,
  },
  blood_group: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 14,
    fontStyle: 'italic',
    color: colors.medium,
  },
})

export default UserListItem
