import { View, Text,StatusBar } from 'react-native'
import React, { useEffect } from 'react'
import AppWrapper from '../../components/AppWrapper'
import { mycolors } from '../../utils/color'
import { Image } from 'react-native'

const Splash = ({navigation}) => {

  useEffect(()=>{
    const timer = setTimeout(()=>{
      navigation.navigate('Welcome')
    },2500)
     
  })
  return (
    <AppWrapper>
    <View
    style ={{
      backgroundColor: mycolors.ThemeBlue,
      flex:1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <StatusBar hidden/>
      <Image style={{width: 140, height: 140}} source={require('../../assets/medapp1stlogo.png')  }/>
      <Text style={{color:mycolors.white,fontFamily:'LeagueSpartan-Thin',fontSize:56,lineHeight:60}}>Skin </Text>
      <Text style={{color:mycolors.white,fontFamily:'LeagueSpartan-Thin',fontSize:56,lineHeight:59}}>Firts </Text>
      <Text style={{color:mycolors.white,fontFamily:'LeagueSpartan-SemiBold',fontSize:20,lineHeight:30}}>dermatology center </Text>
  </View>
    </AppWrapper>
  )
}

export default Splash

