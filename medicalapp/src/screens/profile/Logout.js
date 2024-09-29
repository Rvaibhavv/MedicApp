import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'
import AppWrapper from '../../components/AppWrapper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';  
import { mycolors } from '../../utils/color';
import { useNavigation } from '@react-navigation/native';
const Logout = () => {
    const navigation = useNavigation();
    return (
        <AppWrapper>
          {/* Back button and title */}
          <View style={{ flexDirection: 'row', flex: 0.25, marginTop: 25, justifyContent: 'center' }}>
            <TouchableOpacity style={{ position: 'absolute', left: 10 }} onPress={()=>navigation.navigate('Profile')}>
              <MaterialIcons
                name="arrow-back-ios"
                size={30}
                color={mycolors.ThemeBlue}
              />
            </TouchableOpacity>
    
            <Text style={{ color: mycolors.ThemeBlue, fontFamily: 'LeagueSpartan-SemiBold', fontSize: 24 }}>
              Log Out
            </Text>
          </View>
    
          {/* Centered content */}
          <View style={{ flex: 2.75,  }}>
            {/* Confirmation message */}
            <Text style={{ color: mycolors.black, fontFamily: 'LeagueSpartan-Medium', fontSize: 15, textAlign: 'center' }}>
              Are You Sure You Want To Leave
            </Text>
    
            {/* Log Out button */}
            <View style={{ paddingTop: 30, paddingBottom: 20 ,alignItems: 'center'}}>
              <TouchableOpacity style={{ width: 230, height: 60, backgroundColor: mycolors.ThemeBlue, padding: 10, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate('Login')}>
                <Text style={{ color: mycolors.white, fontSize: 24, fontFamily: 'LeagueSpartan-SemiBold' }}>
                  Log Out
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </AppWrapper>
      );
}

export default Logout