import { View, Text } from 'react-native'
import React from 'react'
import TabNavigator from '../../routes/TabNavigator'
import AppWrapper from '../../components/AppWrapper'
import { mycolors } from '../../utils/color'
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather' 
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'

const Profile = () => {
  const navigation = useNavigation()
  return (
    <AppWrapper>
   <View style={{flexDirection:'row',flex:1.0,alignItems:'center', justifyContent: 'center'}}>
  <TouchableOpacity style={{position: 'absolute',left: 10}}>
  <MaterialIcons 
    name="arrow-back-ios" 
    size={30} 
    color={mycolors.ThemeBlue} 
  />
  </TouchableOpacity>
  
  

  <Text style={{color:mycolors.ThemeBlue, fontFamily:'LeagueSpartan-SemiBold', fontSize:24}}>
    My Profile
  </Text>
</View>

    <View style={{flex:7.3}}>
      
      
      <View style={{flexDirection:'row',postion:'absolute',left:20,marginTop:25}}>
       <View style={{backgroundColor:'#cad6ff',borderRadius:28,height:56,width:56,alignItems:'center',justifyContent:'center'}}>
        <Ionicons name='person-outline'size ={38} color={mycolors.ThemeBlue}/>
        </View>
        <Text style={{marginLeft:25,marginTop:10,color:mycolors.black, fontFamily:'LeagueSpartan-Regular', fontSize:24}}>Profile</Text> 
        <TouchableOpacity style={{position: 'absolute',right: 25,marginTop:10}}>
  <MaterialIcons 
    name="arrow-forward-ios" 
    size={30} 
    color={mycolors.ThemeBlue} 
  />
  </TouchableOpacity> 
      </View>
      <View style={{flexDirection:'row',postion:'absolute',left:20,marginTop:25}}>
       <View style={{backgroundColor:'#cad6ff',borderRadius:28,height:56,width:56,alignItems:'center',justifyContent:'center'}}>
        <AntDesign name='hearto'size ={35} color={mycolors.ThemeBlue}/>
        </View>
        <Text style={{marginLeft:25,marginTop:10,color:mycolors.black, fontFamily:'LeagueSpartan-Regular', fontSize:24}}>Favourite</Text> 
        <TouchableOpacity style={{position: 'absolute',right: 25,marginTop:10}}>
  <MaterialIcons 
    name="arrow-forward-ios" 
    size={30} 
    color={mycolors.ThemeBlue} 
  />
  </TouchableOpacity> 
      </View>
      <View style={{flexDirection:'row',postion:'absolute',left:20,marginTop:25}}>
       <View style={{backgroundColor:'#cad6ff',borderRadius:28,height:56,width:56,alignItems:'center',justifyContent:'center'}}>
        <AntDesign name='wallet'size ={35} color={mycolors.ThemeBlue}/>
        </View>
        <Text style={{marginLeft:25,marginTop:10,color:mycolors.black, fontFamily:'LeagueSpartan-Regular', fontSize:24}}>Payment Method</Text> 
        <TouchableOpacity style={{position: 'absolute',right: 25,marginTop:10}}>
  <MaterialIcons 
    name="arrow-forward-ios" 
    size={30} 
    color={mycolors.ThemeBlue} 
  />
  </TouchableOpacity> 
      </View>
      <View style={{flexDirection:'row',postion:'absolute',left:20,marginTop:25}}>
       <View style={{backgroundColor:'#cad6ff',borderRadius:28,height:56,width:56,alignItems:'center',justifyContent:'center'}}>
        <Feather name='lock'size ={35} color={mycolors.ThemeBlue}/>
        </View>
        <Text style={{marginLeft:25,marginTop:10,color:mycolors.black, fontFamily:'LeagueSpartan-Regular', fontSize:24}}>Privacy Policy</Text> 
        <TouchableOpacity style={{position: 'absolute',right: 25,marginTop:10}}>
  <MaterialIcons 
    name="arrow-forward-ios" 
    size={30} 
    color={mycolors.ThemeBlue} 
  />
  </TouchableOpacity> 
      </View>
      <View style={{flexDirection:'row',postion:'absolute',left:20,marginTop:25}}>
       <View style={{backgroundColor:'#cad6ff',borderRadius:28,height:56,width:56,alignItems:'center',justifyContent:'center'}}>
        <Ionicons name='settings-outline'size ={39} color={mycolors.ThemeBlue}/>
        </View>
        <Text style={{marginLeft:25,marginTop:10,color:mycolors.black, fontFamily:'LeagueSpartan-Regular', fontSize:24}}>Settings</Text> 
        <TouchableOpacity style={{position: 'absolute',right: 25,marginTop:10}}>
  <MaterialIcons 
    name="arrow-forward-ios" 
    size={30} 
    color={mycolors.ThemeBlue} 
  />
  </TouchableOpacity> 
      </View>
      <View style={{flexDirection:'row',postion:'absolute',left:20,marginTop:25}}>
       <View style={{backgroundColor:'#cad6ff',borderRadius:28,height:56,width:56,alignItems:'center',justifyContent:'center'}}>
        <AntDesign name='question'size ={45} color={mycolors.ThemeBlue}/>
        </View>
        <Text style={{marginLeft:25,marginTop:10,color:mycolors.black, fontFamily:'LeagueSpartan-Regular', fontSize:24}}>Help</Text> 
        <TouchableOpacity style={{position: 'absolute',right: 25,marginTop:10}}>
  <MaterialIcons 
    name="arrow-forward-ios" 
    size={30} 
    color={mycolors.ThemeBlue} 
  />
  </TouchableOpacity> 
      </View>
      <View style={{flexDirection:'row',postion:'absolute',left:20,marginTop:25}}>
       <View style={{backgroundColor:'#cad6ff',borderRadius:28,height:56,width:56,alignItems:'center',justifyContent:'center'}}>
        <AntDesign name='logout'size ={33} color={mycolors.ThemeBlue}/>
       
       
        </View>
        <Text style={{marginLeft:25,marginTop:10,color:mycolors.black, fontFamily:'LeagueSpartan-Regular', fontSize:24}}>Logout</Text> 
        <TouchableOpacity style={{position: 'absolute',right: 25,marginTop:10}} onPress={() => navigation.navigate('Logout')}>
  <MaterialIcons 
    name="arrow-forward-ios" 
    size={30} 
    color={mycolors.ThemeBlue} 
  />
  </TouchableOpacity> 
      </View>

      
    </View>
    <View style={{flex:0.7, backgroundColor:mycolors.white,justifyContent: 'center', alignItems: 'center',borderWidth:0.55,borderColor:'#ebf1f7'}}>
    <TabNavigator/>
  </View>
  </AppWrapper>
  )
}

export default Profile