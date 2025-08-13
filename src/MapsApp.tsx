import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native'
import { StackNavigator } from './presentation/navigation/StackNavigator'

const MapsApp = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}

export default MapsApp
