import React, { useEffect, useState } from 'react'
import { ScrollView, View, Linking, StyleSheet } from 'react-native'

import Screen from '../components/Screen'
import AppView from '../components/AppView'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'

import colors from '../config/colors'

import { Cell, TableView } from 'react-native-tableview-simple'

import { users } from '../config/data'

import { connect } from 'react-redux'
import { getProfile } from '../actions/Profile'

const UserProfileScreen = ({ getProfile, profile, route }) => {
  const [user, setUser] = useState({})

  useEffect(() => {
    const { user_id } = route.params
    const singleUser = users.filter((usr) => usr.id === user_id)
    singleUser.map((su) => setUser(su))
  }, [])

  return (
    <Screen>
      <ScrollView>
        <AppView style={styles.topContainer}>
          <View style={{ alignItems: 'center' }}>
            <View style={{ alignItems: 'center' }}>
              <AppText style={styles.name}>{user.name && user.name}</AppText>
            </View>
          </View>
        </AppView>

        <AppView style={styles.bioContainer}>
          <AppText style={styles.title}>About</AppText>
          <AppText style={styles.bio}>{user.bio && user.bio}</AppText>
        </AppView>

        <AppView style={styles.table}>
          <TableView>
            <Cell
              cellStyle='RightDetail'
              title='Name'
              detail={user.name && user.name}
            />
            <Cell
              cellStyle='RightDetail'
              title='Email'
              detail={user.email && user.email}
            />
            <Cell
              cellStyle='RightDetail'
              title='Gender'
              detail={user.gender && user.gender}
            />
            <Cell
              cellStyle='RightDetail'
              title='Age'
              detail={user.age && user.age}
            />
            <Cell
              cellStyle='RightDetail'
              title='Blood Group'
              detail={user.blood_group && user.blood_group}
            />
            <Cell
              cellStyle='RightDetail'
              title='Phone Number'
              detail={user.phone_number && user.phone_number}
            />
            <Cell
              cellStyle='RightDetail'
              title='Address'
              detail={user.city && user.city}
            />
          </TableView>
        </AppView>

        <AppView style={styles.button}>
          <AppButton
            title='Contact'
            onPress={() => {
              Linking.openURL('tel:8777111223')
            }}
          />
        </AppView>
      </ScrollView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  topContainer: {
    backgroundColor: colors.blood,
    height: 100,
    paddingBottom: 30,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: colors.white,
    marginTop: 18,
  },
  name: {
    color: colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    marginTop: 15,
  },
  bioContainer: {
    paddingBottom: 0,
  },
  bio: {
    fontSize: 16,
    marginBottom: 15,
    fontWeight: '100',
    lineHeight: 25,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderColor: 'gray',
    paddingBottom: 5,
    marginBottom: 8,
  },
  button: {
    paddingTop: 0,
    paddingBottom: 20,
  },
  table: {
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 0,
    backgroundColor: 'transparent',
  },
})

const mapStateToProps = (state) => ({
  user: state.Authentication.user,
  profile: state.Profile.profile,
})

export default connect(mapStateToProps, { getProfile })(UserProfileScreen)
