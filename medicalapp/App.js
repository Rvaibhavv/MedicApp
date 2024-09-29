import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import StackRoute from './src/routes/StackRoute'
import { UserProvider } from './src/components/UserContext'

const App = () => {
  return (
    <UserProvider>
    <NavigationContainer>
      <StackRoute/>
    </NavigationContainer>
    </UserProvider>
  )
}

export default App