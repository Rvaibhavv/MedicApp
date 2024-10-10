import { View, Text,Modal } from 'react-native'
import React from 'react'
import { useState } from 'react'
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
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()

  const handleLogout = () => {
    // Implement your logout logic here
    // For now, just close the modal
    setModalVisible(false);
    navigation.navigate('Login');
  };


  return (
    <AppWrapper>
   <View style={{flexDirection:'row',flex:1.0,alignItems:'center', justifyContent: 'center'}}>
  <TouchableOpacity style={{position: 'absolute',left: 10}}
    onPress={()=>navigation.navigate('Home')}
  >
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
        <TouchableOpacity style={{position: 'absolute',right: 25,marginTop:10}} onPress={() => navigation.navigate('AppSettings')}>
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
        <TouchableOpacity style={{position: 'absolute',right: 25,marginTop:10}} onPress={() => setModalVisible(true)}>
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

    {/* Modal for Logout Confirmation */}
    <Modal
  transparent={true}
  animationType="slide"
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
    <View style={{ flex:0.2,width: '100%', backgroundColor: 'white', padding: 20,borderWidth:0.6,borderColor:'#ebf1f7', borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
    <Text style={{ color: mycolors.ThemeBlue,  textAlign: 'center',fontFamily: 'LeagueSpartan-SemiBold', fontSize: 24 }}>
              Log Out
            </Text>
      <Text style={{ fontSize: 18, textAlign: 'center', color: mycolors.black }}>
        Are you sure you want to logout?
      </Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
        <TouchableOpacity onPress={() => setModalVisible(false)} style={{backgroundColor:'#cad6ff', width:143,height:50,borderRadius:25,justifyContent:'center',alignItems:'center',marginLeft:20}}>
          <Text style={{ color: mycolors.ThemeBlue, fontSize: 22,textAlign:'center' ,fontFamily: 'LeagueSpartan-SemiBold',}}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout} style={{backgroundColor:mycolors.ThemeBlue, width:143,height:50,borderRadius:25,justifyContent:'center',alignItems:'center',marginRight:20}}>
          <Text style={{ color: mycolors.white, fontSize: 22,fontFamily: 'LeagueSpartan-SemiBold',textAlign:'center' }}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
</Modal>


  </AppWrapper>
  )
}

export default Profile