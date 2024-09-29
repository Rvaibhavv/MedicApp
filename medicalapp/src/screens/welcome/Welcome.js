import { View, Text, StatusBar,Image ,Button, TouchableOpacity} from 'react-native'
import React from 'react'
import AppWrapper from '../../components/AppWrapper'
import { mycolors } from '../../utils/color'
import { useNavigation } from '@react-navigation/native'

const Welcome = () => {

  const navigation = useNavigation()

  return (
    <AppWrapper>
      <View
      style={{
        backgroundColor: mycolors.white,
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      }}>
        <StatusBar hidden/>
        <Image style={{width: 140, height: 140}} source={require('../../assets/welcomeicon.png')  }/>
        <Text style={{color:mycolors.ThemeBlue,fontFamily:'LeagueSpartan-Thin',fontSize:56,lineHeight:60}}>Skin </Text>
        <Text style={{color:mycolors.ThemeBlue,fontFamily:'LeagueSpartan-Thin',fontSize:56,lineHeight:59}}>Firts </Text>
        <Text style={{color:mycolors.ThemeBlue,fontFamily:'LeagueSpartan-SemiBold',fontSize:20,lineHeight:30}}>dermatology center </Text>
        
        <View style={{padding:17}}>
        <TouchableOpacity style={{width:200,height:60,backgroundColor:mycolors.ThemeBlue,padding:10,borderRadius:100,justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('Login')}>
          
        <Text style={{ color: mycolors.white, fontSize: 24, fontFamily: 'LeagueSpartan-SemiBold' }}>Log In</Text>
          </TouchableOpacity>

        </View>

        <View style={{padding:2}}>
        <TouchableOpacity style={{width:200,height:60,backgroundColor:'#cad6ff',padding:10,borderRadius:100,justifyContent:'center',alignItems:'center'}} onPress={() => navigation.navigate('Signin')}>
          
        <Text style={{ color: mycolors.ThemeBlue, fontSize: 24, fontFamily: 'LeagueSpartan-SemiBold' }}>Sign Up</Text>
          </TouchableOpacity>

        </View>
       
       
       
        </View>
    </AppWrapper>
    
  )
}

export default Welcome