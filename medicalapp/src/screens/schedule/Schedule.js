import { View, Text } from 'react-native'
import React from 'react'
import TabNavigator from '../../routes/TabNavigator'
import AppWrapper from '../../components/AppWrapper' 
import { mycolors } from '../../utils/color'

const Schedule = () => {
  return (
    <AppWrapper>
    <View style={{flex:8.3}}>
      <Text>Schedule</Text>
    </View>
    <View style={{flex:0.7, backgroundColor:mycolors.white,justifyContent: 'center', alignItems: 'center',borderWidth:0.55,borderColor:'#ebf1f7'}}>
    <TabNavigator/>
  </View>
  </AppWrapper>
  )
}

export default Schedule