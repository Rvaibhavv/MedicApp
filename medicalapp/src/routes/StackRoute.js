import { View, Text } from 'react-native'
import React from 'react'

import Splash from '../screens/splash/Splash'
import Welcome from '../screens/welcome/Welcome'
import Login from '../screens/authenticate/Login'
import Signin from '../screens/authenticate/Signin'
import CreatePassword from '../screens/authenticate/CreatePassword'
import Home from '../screens/home/Home'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Chat from '../screens/notification&chat/Chat'
import Schedule from '../screens/schedule/Schedule'
import Profile from '../screens/profile/Profile'
import Wrong from '../screens/authenticate/Wrong'
import Logout from '../screens/profile/Logout'
import AppSettings from '../screens/profile/AppSettings'
import Doctor from '../screens/Doctors/Doctor'
import Ai from '../screens/notification&chat/Ai'
const Stack = createNativeStackNavigator();

const StackRoute = () => {
  return (
  <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Doctor' >
<Stack.Screen name="Splash" component={Splash}/>
<Stack.Screen name="Welcome" component={Welcome}/>
<Stack.Screen name="Login" component={Login}/>
<Stack.Screen name="Signin" component={Signin}/> 
<Stack.Screen name="CreatePassword" component={CreatePassword}/> 
<Stack.Screen name="Home" component={Home}/> 
<Stack.Screen name="Chat" component={Chat}/> 
<Stack.Screen name="Schedule" component={Schedule}/> 
<Stack.Screen name="Profile" component={Profile}/> 
<Stack.Screen name="Wrong" component={Wrong}/> 
<Stack.Screen name="Logout" component={Logout}/> 
<Stack.Screen name="AppSettings" component={AppSettings}/> 
<Stack.Screen name="Doctor" component={Doctor}/> 
<Stack.Screen name="Ai" component={Ai}/> 
  </Stack.Navigator>
  )
}

export default StackRoute