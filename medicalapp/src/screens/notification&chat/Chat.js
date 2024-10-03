import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import TabNavigator from '../../routes/TabNavigator'
import AppWrapper from '../../components/AppWrapper'
import { mycolors } from '../../utils/color'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { useNavigation } from '@react-navigation/native'
const Chat = () => {
  const navigation = useNavigation()
  return (
    <AppWrapper>
      <View style={{flexDirection:'row',flex:1.0,alignItems:'center', justifyContent: 'center'}}>
  <TouchableOpacity style={{position: 'absolute',left: 10}} onPress={()=>navigation.navigate("Home")}>
  <MaterialIcons 
    name="arrow-back-ios" 
    size={30} 
    color={mycolors.ThemeBlue} 
  />
  </TouchableOpacity>
  
  

  <Text style={{color:mycolors.white, fontFamily:'LeagueSpartan-SemiBold', fontSize:24}}>
    Chat
  </Text>
</View>
    <View style={{flex:8.3,
    justifyContent: 'center',
    alignItems: 'center',}}>
      <Text style ={{color:mycolors.ThemeBlue,textAlign:'center',fontSize:20,fontFamily:'LeagueSpartan-SemiBold'}}>Have queries talk to our medic chatbot</Text>
      <TouchableOpacity  onPress={()=>navigation.navigate("Ai")}>
        <Image
          source={require('../../assets/robot.png')}
          style={{width: 200, height: 200}}
          alt="medic"
        />
      </TouchableOpacity>
    </View>
    <View style={{flex:0.7, backgroundColor:mycolors.white,justifyContent: 'center', alignItems: 'center',borderWidth:0.55,borderColor:'#ebf1f7'}}>
    <TabNavigator/>
  </View>
  </AppWrapper>
  )
}

export default Chat