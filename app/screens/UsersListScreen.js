import React, { useEffect } from 'react'

import { FlatList, Text } from 'react-native'

import Screen from '../components/Screen'
import UserListItem from '../components/UserListItem'
import ListItemSeparator from '../components/ListItemSeparator'

import { connect } from 'react-redux'
import { getAllProfiles } from '../actions/Profile'

import { users } from '../config/data'

const UsersListScreen = ({ navigation, getAllProfiles, profiles }) => {
  useEffect(() => {
    getAllProfiles()
  }, [getAllProfiles])
  return (
    <Screen>
      {users.length > 0 ? (
        <FlatList
          data={users}
          keyExtractor={(user) => user.id.toString()}
          renderItem={({ item }) => (
            <UserListItem
              name={item.name}
              bloodGroup={item.blood_group}
              city={item.city}
              onPress={() =>
                navigation.navigate('Profile_Page', { user_id: item.id })
              }
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        />
      ) : (
        ''
      )}
    </Screen>
  )
}

const mapStateToProps = (state) => ({
  profiles: state.Profile.profiles,
})

export default connect(null, { getAllProfiles })(UsersListScreen)
