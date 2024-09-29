import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { mycolors } from '../../utils/color'
import AppWrapper from '../../components/AppWrapper'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'



const CreatePassword = ({}) => {
  const navigation = useNavigation()

  const[isPasswordVisible,setIsPasswordVisible] = useState(false)
  const[isConfirmPasswordVisible,setIsConfirmPasswordVisible] = useState(false)

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }
  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible)
  }
  return (
    <AppWrapper>
      <View style={{ flex: 0.11, backgroundColor: mycolors.white, alignItems: 'center', paddingTop: 35, }}>
        <Text style={{ color: mycolors.ThemeBlue, fontFamily: 'LeagueSpartan-SemiBold', fontSize: 22 }}>Create Passowrd</Text>
      </View>
      <View style={{ flex: 0.89, backgroundColor: mycolors.white, alignItems: 'center', paddingTop: 1 }}>
        <Text style={{
          color: mycolors.black, alignSelf: 'flex-start', paddingLeft: 17, fontFamily: 'LeagueSpartan-Medium', paddingTop: 10, paddingBottom: 10, fontSize: 20
        }}>
          Password</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput secureTextEntry={!isPasswordVisible} placeholder='Password' placeholderTextColor='#809cff' keyboardType='default'
            style={{
              color: '#809cff', fontSize: 20, backgroundColor: '#ecf1ff', borderRadius: 15, width: 365, height: 55,fontFamily: 'LeagueSpartan-Medium'
            }} />
            <TouchableOpacity onPress={togglePasswordVisibility}>
          <Entypo name={isPasswordVisible ? 'eye-with-line' : 'eye'} size={40} color="#809cff" style={{
            position: 'absolute', right: 10,bottom: 6.5
            
          }} />
          </TouchableOpacity>
        </View>

        <Text style={{
          color: mycolors.black, alignSelf: 'flex-start', paddingLeft: 17, fontFamily: 'LeagueSpartan-Medium', paddingTop: 10, paddingBottom: 10, fontSize: 20
        }}>
          Confirm Password</Text>
        <View style={{ flexDirection: 'row' }}>
          <TextInput secureTextEntry={!isConfirmPasswordVisible} placeholder='Password' placeholderTextColor='#809cff' keyboardType='default'
            style={{
              color: '#809cff', fontSize: 20, backgroundColor: '#ecf1ff', borderRadius: 15, width: 365, height: 55,fontFamily: 'LeagueSpartan-Medium'
            }} />
            <TouchableOpacity onPress={toggleConfirmPasswordVisibility}>
          <Entypo name={isConfirmPasswordVisible ? 'eye-with-line' :'eye'} size={40} color="#809cff" style={{
            position: 'absolute', right: 10,
            bottom: 6.5

          }} />
          </TouchableOpacity>
        </View>
        
        <View style={{ paddingTop: 30, paddingBottom: 20 }}>
          <TouchableOpacity style={{ width: 230, height: 60, backgroundColor: mycolors.ThemeBlue, padding: 10, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Home')}>

            <Text style={{ color: mycolors.white, fontSize: 24, fontFamily: 'LeagueSpartan-SemiBold' }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>

    </AppWrapper>
  )
}

export default CreatePassword