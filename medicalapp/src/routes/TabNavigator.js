import { View, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { mycolors } from '../utils/color';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const TabNavigator = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Home'); // State to track active tab

  // Update active tab when navigating
  useFocusEffect(
    React.useCallback(() => {
      const currentRoute = navigation.getState().routes[navigation.getState().index].name;
      setActiveTab(currentRoute); // Set the active tab based on current route
    }, [navigation])
  );

  // Function to handle tab press
  const handleTabPress = (tab) => {
    if (activeTab !== tab) { // Navigate only if the pressed tab is different
      setActiveTab(tab);
      navigation.navigate(tab);
    }
  };

  // Helper function to determine icon color
  const getIconColor = (tab) => {
    return activeTab === tab ? '#cad6ff' : mycolors.white; // Change color if active
  };

  return (
    <View style={{ flexDirection: 'row', backgroundColor: "#a5b5ff", width: 360, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 30, marginTop: 3 }}>
      <TouchableOpacity onPress={() => handleTabPress('Home')}>
        <Ionicons name="home-outline" size={30} color={getIconColor('Home')} style={{ marginLeft: 30, marginRight: 30 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('Chat')}>
        <AntDesign name="message1" size={30} color={getIconColor('Chat')} style={{ marginLeft: 30, marginRight: 30 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('Schedule')}>
        <AntDesign name="calendar" size={30} color={getIconColor('Schedule')} style={{ marginLeft: 30, marginRight: 30 }} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('Profile')}>
        <Ionicons name="person-outline" size={30} color={getIconColor('Profile')} style={{ marginLeft: 30, marginRight: 30 }} />
      </TouchableOpacity>
    </View>
  );
};

export default TabNavigator;
