import { View, Text, KeyboardAvoidingView,TouchableOpacity,TextInput} from 'react-native'
import React from 'react'
import AppWrapper from '../../components/AppWrapper'
import { mycolors } from '../../utils/color'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Feather from 'react-native-vector-icons/Feather'
import Doctorinfolist from './Doctorinfolist'
import TabNavigator from '../../routes/TabNavigator'
import { useUser } from '../../components/UserContext'
import { useNavigation } from '@react-navigation/native'
const Home = () => {
  const navigation = useNavigation();
  const { userData } = useUser();
  console.log('User Data in Home:', userData);

  return (
<AppWrapper>
    <View style={{flex:1.4, backgroundColor:mycolors.white,paddingBottom:8}}>
    <View style={{flexDirection:'row',}}>
      <MaterialCommunityIcons name ='account-circle-outline' size ={42}style={{top:10,left:9}} color={mycolors.grey}/>
     <View>
      <Text style={{paddingTop:8,left:15,fontSize:16,color:mycolors.ThemeBlue,fontFamily:'LeagueSpartan-Thin'}} >Hi,WelcomeBack</Text>
      
      <Text style ={{left:15,color:mycolors.black,fontSize:18,fontFamily:'LeagueSpartan-Regular'}}>
        {userData.name}
        {/* John Doe */}
        </Text>
      </View>
      <TouchableOpacity style={{marginLeft:145,marginRight:1,marginTop:7,width: 48, height: 48, backgroundColor: '#cad6ff', justifyContent:'center', borderRadius: 24,  alignItems: 'center', }}>
      <Ionicons name ='notifications-outline' size ={30} color={mycolors.black}/>
      </TouchableOpacity>
      <TouchableOpacity style={{marginLeft:5,marginRight:8,marginTop:7,width: 48, height: 48, backgroundColor: '#cad6ff', justifyContent:'center', borderRadius: 24,  alignItems: 'center', }}>
      <AntDesign name ='setting' size ={30} color={mycolors.black}/>
      </TouchableOpacity>
    </View>
    <View style={{flexDirection:'row',marginTop:8}}>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate('Doctor')}>
      <MaterialCommunityIcons name ="stethoscope" size={25} color={mycolors.ThemeBlue} style ={{marginLeft:20,marginRight:20,marginTop:7}} />
      <Text style={{color:mycolors.ThemeBlue}}>Doctor</Text>
      </TouchableOpacity>
      </View>
      <View style={{justifyContent:'center',alignItems:'center'}}>
      <AntDesign name ="hearto" size={25} color={mycolors.ThemeBlue} style ={{marginLeft:20,marginRight:20,marginTop:7}} />
      <Text style={{color:mycolors.ThemeBlue}}>Favourite</Text>
      
      </View>
      <View style={{flexDirection:'row'}}>
      <TextInput   placeholderTextColor='#809cff' keyboardType='default'
            style={{
              color: '#809cff', fontSize: 20, backgroundColor: '#ecf1ff',marginTop:5, borderRadius: 50, width: 260, height: 55,fontFamily: 'LeagueSpartan-Medium'
            }} />
            <TouchableOpacity >
          <Feather name='search' size={35} color="#809cff" style={{
            position: 'absolute', right: 10,marginTop:14            
          }} />
          </TouchableOpacity>
      </View>
    </View>
    </View>
    
    <View style={{flex:6.9, backgroundColor:mycolors.white,borderWidth:0.55,borderColor:'#ebf1f7'}}>
      <Doctorinfolist/>
    </View>
    <View style={{flex:0.7, backgroundColor:mycolors.white,justifyContent: 'center', alignItems: 'center',borderWidth:0.55,borderColor:'#ebf1f7'}}>
      <TabNavigator/>
    </View>
</AppWrapper>
  )
}

export default Home