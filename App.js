import React from 'react'

import LoginScreen from './app/screens/LoginScreen'
import RegisterScreen from './app/screens/RegisterScreen'
import WelcomeScreen from './app/screens/WelcomeScreen'
import UserProfileScreen from './app/screens/UserProfileScreen'
import UsersListScreen from './app/screens/UsersListScreen'
import SelectBloodGroupScreen from './app/screens/SelectBloodGroupScreen'
import CompleteProfileScreen from './app/screens/CompleteProfileScreen'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import colors from './app/config/colors'

const Stack = createStackNavigator()

import { Provider } from 'react-redux'
import store from './app/store'

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerStyle: {
              backgroundColor: colors.blood,
            },
            headerTintColor: colors.white,
          }}
        >
          <Stack.Screen
            name='Welcome'
            component={WelcomeScreen}
            options={{
              headerShown: false,
              borderBottomWidth: 0,
            }}
          />
          <Stack.Screen
            name='Login'
            component={LoginScreen}
            options={{
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTintColor: colors.blood,
            }}
          />
          <Stack.Screen
            name='Register'
            component={RegisterScreen}
            options={{
              headerStyle: {
                backgroundColor: colors.white,
              },
              headerTintColor: colors.blood,
            }}
          />
          <Stack.Screen name='Profile_Page' component={UserProfileScreen} />
          <Stack.Screen
            name='UsersList'
            component={UsersListScreen}
            options={{
              title: 'Users List',
            }}
          />
          <Stack.Screen
            name='BloodGroup'
            component={SelectBloodGroupScreen}
            options={{
              title: 'Blood Groups',
            }}
          />
          <Stack.Screen
            name='CompleteProfile'
            component={CompleteProfileScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  )
}
