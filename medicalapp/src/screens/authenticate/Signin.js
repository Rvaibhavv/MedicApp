import { View, Text ,TextInput,TouchableOpacity,Alert} from 'react-native'
import React,{useState} from 'react'
import { Colors } from 'react-native/Libraries/NewAppScreen'
import { mycolors } from '../../utils/color'
import AppWrapper from '../../components/AppWrapper'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'
import { BASE_URL } from '../../components/Config'

const Signin = () => {
  const navigation = useNavigation()

  const[isPasswordVisible,setIsPasswordVisible] = useState(false)
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible)
  }

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dob, setDob] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const userData = {
      name,
      email,
      phone,
      dob,
      password,
    };

    try {
      const response = await fetch(`${BASE_URL}/user/signin/`, {  // Update this to your actual server address
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
      } else {
        navigation.navigate('Login');
      }
    } catch (error) {
      console.error('Error:', error);
      navigation.navigate('Wrong');
        }
  };

  return (
    
    <AppWrapper>   
      <View style ={{flex:0.11,backgroundColor:mycolors.white, alignItems: 'center',paddingTop:35,}}>
      <Text style={{color:mycolors.ThemeBlue ,fontFamily:'LeagueSpartan-SemiBold',fontSize:22}}>New Account</Text>
    </View>
      <View style={{flex:0.89,backgroundColor:mycolors.white,alignItems:'center',paddingTop:1}}>
      <Text style={{
          color: mycolors.black, alignSelf: 'flex-start', paddingLeft: 17, fontFamily: 'LeagueSpartan-Medium', paddingTop:10,paddingBottom: 10, fontSize: 20
        }}>
          Name</Text>
        <TextInput placeholder='Ex-John Doe' placeholderTextColor='#809cff' keyboardType='email-address'
          style={{
            color: '#809cff', fontSize: 20, backgroundColor: '#ecf1ff', borderRadius: 15, width: 365, height: 55,fontFamily: 'LeagueSpartan-Medium'
          }} value={name} onChangeText={setName}/>
      <Text style={{
          color: mycolors.black, alignSelf: 'flex-start', paddingLeft: 17, fontFamily: 'LeagueSpartan-Medium', paddingTop:10,paddingBottom: 10, fontSize: 20
        }}>
          Email</Text>
        <TextInput placeholder='example@email.com' placeholderTextColor='#809cff' keyboardType='email-address'
          style={{
            color: '#809cff', fontSize: 20, backgroundColor: '#ecf1ff', borderRadius: 15, width: 365, height: 55,fontFamily: 'LeagueSpartan-Medium'
          }} value={email}
          onChangeText={setEmail}/>
      <Text style={{
          color: mycolors.black, alignSelf: 'flex-start', paddingLeft: 17, fontFamily: 'LeagueSpartan-Medium', paddingTop:10,paddingBottom: 10, fontSize: 20
        }}>
          Phone Number</Text>
        <TextInput placeholder='9876543210' placeholderTextColor='#809cff' keyboardType='phone-pad'
          style={{
            color: '#809cff', fontSize: 20, backgroundColor: '#ecf1ff', borderRadius: 15, width: 365, height: 55,fontFamily: 'LeagueSpartan-Medium'
          }}  value={phone}
          onChangeText={setPhone}/>
      <Text style={{
          color: mycolors.black, alignSelf: 'flex-start', paddingLeft: 17, fontFamily: 'LeagueSpartan-Medium', paddingTop:10,paddingBottom: 10, fontSize: 20
        }}>
          Date of Birth</Text>
         

        <TextInput  placeholder='DD/MM/YYYY' placeholderTextColor='#809cff' keyboardType='numeric'
          style={{
            color: '#809cff', fontSize: 20, backgroundColor: '#ecf1ff', borderRadius: 15, width: 365, height: 55,fontFamily: 'LeagueSpartan-Medium'
          }} value={dob}
          onChangeText={setDob}/>

<Text style={{
          color: mycolors.black, alignSelf: 'flex-start', paddingLeft: 17, fontFamily: 'LeagueSpartan-Medium', paddingBottom: 10,paddingTop:10, fontSize: 20
        }}>
          Password</Text>
        
          <View style={{ flexDirection: 'row,', }}>
          <TextInput secureTextEntry={!isPasswordVisible} placeholder='Password' placeholderTextColor='#809cff' keyboardType='default'
            style={{
              color: '#809cff', fontSize: 20, backgroundColor: '#ecf1ff', borderRadius: 15, width: 365, height: 55,fontFamily: 'LeagueSpartan-Medium'
            }}value={password}
            onChangeText={setPassword}/>
            <TouchableOpacity onPress={togglePasswordVisibility}>
          <Entypo name={isPasswordVisible ? 'eye-with-line' : 'eye'} size={40} color="#809cff" style={{
            position: 'absolute', right: 10,bottom: 6.5
            
          }} />
          </TouchableOpacity>
        </View>

        <Text style={{ color: mycolors.black,paddingTop:10 }} onPress={() => navigation.navigate('Signin')}>
            By continuing, you agree to our
          </Text>
        <View style={{ flexDirection: 'row',paddingTop:5 }}>
        <Text style={{ color: mycolors.ThemeBlue,fontSize:17 }} onPress={() => navigation.navigate('Signin')}>
            Terms of Use{' '}
          </Text>
          <Text style={{ color: mycolors.black ,fontSize:17}}>
            and{' '}
          </Text>
          <Text style={{ color: mycolors.ThemeBlue ,fontSize:17}} onPress={() => navigation.navigate('Signin')}>
            Privacy Policy
          </Text>
        </View>
        <View style={{ paddingTop: 30,paddingBottom:20 }}>
          <TouchableOpacity style={{ width: 230, height: 60, backgroundColor: mycolors.ThemeBlue, padding: 10, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }} onPress={handleSubmit}>

            <Text style={{ color: mycolors.white, fontSize: 24, fontFamily: 'LeagueSpartan-SemiBold' }}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
   
  </AppWrapper>


  )
}

export default Signin









