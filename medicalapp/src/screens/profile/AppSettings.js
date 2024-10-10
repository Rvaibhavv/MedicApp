import { View, Text } from 'react-native'
import React from 'react'
import AppWrapper from '../../components/AppWrapper'
import { mycolors } from '../../utils/color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation()
  return (
    <AppWrapper>
      <View style={{ flexDirection: 'row', flex: 1.0, alignItems: 'center', justifyContent: 'center' }}>
        <TouchableOpacity style={{ position: 'absolute', left: 10 }} onPress={() => navigation.goBack()}>
          <MaterialIcons
            name="arrow-back-ios"
            size={30}
            color={mycolors.ThemeBlue}
          />
        </TouchableOpacity>



        <Text style={{ color: mycolors.ThemeBlue, fontFamily: 'LeagueSpartan-SemiBold', fontSize: 24 }}>
          Settings
        </Text>
      </View>

      <View style={{ flex: 7.3 }}>
        <View style={{ flexDirection: 'row', postion: 'absolute', left: 20, marginTop: 25 }}>
          <View style={{ backgroundColor: '#cad6ff', borderRadius: 28, height: 56, width: 56, alignItems: 'center', justifyContent: 'center' }}>
            <Entypo name='light-bulb' size={39} color={mycolors.ThemeBlue} />
          </View>
          <Text style={{ marginLeft: 25, marginTop: 10, color: mycolors.black, fontFamily: 'LeagueSpartan-Regular', fontSize: 24 }}>Notification Setting</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 25, marginTop: 10 }} onPress={() => navigation.navigate('AppSettings')}>
            <MaterialIcons
              name="arrow-forward-ios"
              size={30}
              color={mycolors.ThemeBlue}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', postion: 'absolute', left: 20, marginTop: 25 }}>
          <View style={{ backgroundColor: '#cad6ff', borderRadius: 28, height: 56, width: 56, alignItems: 'center', justifyContent: 'center' }}>
            <Feather name='key' size={36} color={mycolors.ThemeBlue} />
          </View>
          <Text style={{ marginLeft: 25, marginTop: 10, color: mycolors.black, fontFamily: 'LeagueSpartan-Regular', fontSize: 24 }}>Password Manager</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 25, marginTop: 10 }}>
            <MaterialIcons
              name="arrow-forward-ios"
              size={30}
              color={mycolors.ThemeBlue}
            />
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', postion: 'absolute', left: 20, marginTop: 25 }}>
          <View style={{ backgroundColor: '#cad6ff', borderRadius: 28, height: 56, width: 56, alignItems: 'center', justifyContent: 'center' }}>
            <AntDesign name='deleteuser' size={40} color={mycolors.ThemeBlue} />


          </View>
          <Text style={{ marginLeft: 25, marginTop: 10, color: mycolors.black, fontFamily: 'LeagueSpartan-Regular', fontSize: 24 }}>Delete Account</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 25, marginTop: 10 }}>
            <MaterialIcons
              name="arrow-forward-ios"
              size={30}
              color={mycolors.ThemeBlue}
            />
          </TouchableOpacity>
        </View>


      </View>

    </AppWrapper>
  )
}

export default Profile