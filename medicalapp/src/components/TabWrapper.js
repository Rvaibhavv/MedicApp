import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import TabNavigator from '../routes/TabNavigator'
import { mycolors } from '../utils/color'
const TabWrapper  = ({children}) => {
        return (
          <SafeAreaView style={{flex:1,backgroundColor:mycolors.white}}>
              {children}
              <TabNavigator/>
          </SafeAreaView>
        )
      }
  

export default TabWrapper