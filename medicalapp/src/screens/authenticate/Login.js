import { View, Text, TextInput, TouchableOpacity ,Alert} from 'react-native'
import React, {useState} from 'react'
import AppWrapper from '../../components/AppWrapper'
import { mycolors } from '../../utils/color'
import { useNavigation } from '@react-navigation/native'
import Entypo from 'react-native-vector-icons/Entypo'
import { BASE_URL } from '../../components/Config'
import { useUser } from '../../components/UserContext'


const Login = ({}) => {
  const {setUserData} = useUser();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    const loginData = {
      email,
      password,
    };

    console.log('Login Data:', loginData);  // Log the login data to check

    try {
      const response = await fetch(`${BASE_URL}/user/login/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log('Response Data:', data);

      if (response.ok) {
        Alert.alert('Success', 'Login successful!');
        setUserData(data.userData); 
        console.log('User Data Set:', data.userData); // Set the user data in the context
        navigation.navigate('Home');  // Navigate to Home on success
      } else {
        Alert.alert('Error', data.error || 'Invalid credentials');
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'Could not connect to the server.');
    }
  };

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };


  return (
    <AppWrapper>

      <View style={{ flex: 0.25, backgroundColor: mycolors.white, alignItems: 'center', paddingTop: 30 }}>
        <Text style={{ fontSize: 25, color: mycolors.ThemeBlue, fontFamily: 'LeagueSpartan-SemiBold', }}>Log In</Text>
        <Text style={{ paddingTop: 66, paddingLeft: 17, alignSelf: 'flex-start', color: mycolors.ThemeBlue, fontSize: 24, fontFamily: 'LeagueSpartan-SemiBold' }}>Welcome</Text>
      </View>

      <View style={{
        flex: 0.75, alignItems: 'center', backgroundColor: mycolors.white
      }}
      >

        <Text style={{
          color: mycolors.black, alignSelf: 'flex-start', paddingLeft: 17, fontFamily: 'LeagueSpartan-Medium', paddingBottom: 10, fontSize: 20
        }}>
          Email or Phone Number</Text>
        <TextInput placeholder='example@email.com' placeholderTextColor='#809cff' keyboardType='email-address'
          style={{
            color: '#809cff', fontSize: 20, backgroundColor: '#ecf1ff', borderRadius: 15, width: 365, height: 55,fontFamily: 'LeagueSpartan-Medium'
          }} value={email}
          onChangeText={setEmail} />

        <Text style={{
          color: mycolors.black, alignSelf: 'flex-start', paddingLeft: 17, fontFamily: 'LeagueSpartan-Medium', paddingBottom: 10, fontSize: 20
        }}>
          Password</Text>
        
          <View style={{ flexDirection: 'row' }}>
          <TextInput secureTextEntry={!isPasswordVisible} placeholder='Password' placeholderTextColor='#809cff' keyboardType='default'
            style={{
              color: '#809cff', fontSize: 20, backgroundColor: '#ecf1ff', borderRadius: 15, width: 365, height: 55,fontFamily: 'LeagueSpartan-Medium'
            }} value={password}
            onChangeText={setPassword}/>
            <TouchableOpacity onPress={togglePasswordVisibility}>
          <Entypo name={isPasswordVisible ? 'eye-with-line' : 'eye'} size={40} color="#809cff" style={{
            position: 'absolute', right: 10,bottom: 6.5
            
          }} />
          </TouchableOpacity>
        </View>
        <Text style={{ color: mycolors.black, alignSelf: 'flex-end', paddingRight: 20, paddingTop: 5, color: mycolors.ThemeBlue, fontFamily: 'LeagueSpartan-Medium' }}>Forgot Password</Text>

        <View style={{ paddingTop: 30,paddingBottom:20 }}>
          <TouchableOpacity style={{ width: 230, height: 60, backgroundColor: mycolors.ThemeBlue, padding: 10, borderRadius: 100, justifyContent: 'center', alignItems: 'center' }} onPress={handleLogin}>

            <Text style={{ color: mycolors.white, fontSize: 24, fontFamily: 'LeagueSpartan-SemiBold' }}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View style={{}}>
          <Text style={{ color: mycolors.black }}>
            or
          </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={{ color: mycolors.black }}>
            Don't have an account?{' '}
          </Text>
          <Text style={{ color: mycolors.ThemeBlue }} onPress={() => navigation.navigate('Signin')}>
            Sign Up
          </Text>
        </View>
      </View>

    </AppWrapper>
  )
}

export default Login