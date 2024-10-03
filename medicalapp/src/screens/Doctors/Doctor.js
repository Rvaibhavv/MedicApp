import React, { useEffect, useState} from 'react';
import { SafeAreaView, View, Text,TouchableOpacity, FlatList, StyleSheet } from 'react-native'; 
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { mycolors } from '../../utils/color';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { BASE_URL } from '../../components/Config';
import AppWrapper from '../../components/AppWrapper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

// API configuration
const api = axios.create({
    baseURL: `${BASE_URL}/medapp/api`,  // Replace <your-computer-ip> with your actual IP address
});

// ItemList component
const DoctorList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        api.get('doctors/')  // Adjust the endpoint to fetch doctor data
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.error('API Error:', error.response ? error.response.data : error.message);
            });
    }, []);

    return (
        <FlatList
            data={items}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                   
                   <View style={{flexDirection:'row'}}>
                        <View style={styles.iconContainer}>
                            {item.gender === 'Male' ? (
                                <Ionicons name='male' size={55} color='#87CEEB' />
                            ) : (
                                <Ionicons name='female' size={55} color='pink' />
                            )}
                        </View>
                        <View style={{flex:1,backgroundColor:'#cad6ff',justifyContent:'center',marginLeft:25}}>
                        <Text style={styles.itemName}>{item.name}</Text>
                        <View style={{flexDirection:'row'}}>
                        <Text style={styles.itemDetail}> {item.specialization}</Text>
                        <Text style={styles.itemDetail}>, {item.age}</Text>
                        </View>
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View style={styles.actionButtonsContainer}>
                        {/* Group Rating and Text together */}
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.actionButton}>
                                <Entypo name='star-outlined' size={17} color={mycolors.ThemeBlue} />
                                <Text style={{color:mycolors.ThemeBlue}}> rating </Text>
                            </View>
                            <View style={styles.actionButton}>
                                <AntDesign name='message1' size={15} color={mycolors.ThemeBlue} />
                                <Text style={{color:mycolors.ThemeBlue, marginLeft:3}}> text </Text>
                            </View>
                        </View>

                        {/* Align Question and Heart to the Right */}
                        <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                            <View style={styles.smallButton}>
                                <AntDesign name='question' size={15} color={mycolors.ThemeBlue} />
                            </View>
                            <View style={styles.smallButton}>
                                <AntDesign name='hearto' size={15} color={mycolors.ThemeBlue} />
                            </View>
                        </View>
                    </View>
                </View>
            )}
            contentContainerStyle={styles.listContainer} // Optional: Add padding to the FlatList
        />
    );
};

// App component
const Doctor = () => {
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
    Doctors
  </Text>
</View>
        <SafeAreaView style={{flex:8,backgroundColor: mycolors.white,}}>
            <DoctorList />
        </SafeAreaView>
        </AppWrapper>
    );
};

// Styles
const styles = StyleSheet.create({
    
    itemContainer: {
        backgroundColor: '#cad6ff',
        height:180,
        padding: 10,
        marginVertical: 5,
        borderRadius: 25,
         // For Android shadow
    },
    iconContainer: {
        width: 100,        // Set explicit width
        height:100,   
        marginTop:20,    // Set explicit height, same as width to form a circle
        backgroundColor: mycolors.white,
        borderRadius: 60, // Half of the width/height to make it a circle
        padding: 5,
        justifyContent: 'center',  // Centers content vertically
        alignItems: 'center',      // Centers content horizontally
    },
    itemName: {
        color: mycolors.ThemeBlue,
        fontFamily: 'LeagueSpartan-Medium',
        fontSize: 18,
    },
    itemDetail: {
        color: mycolors.black,
        fontFamily: 'LeagueSpartan-Regular',
        marginTop: 0.1,
    },
    listContainer: {
        padding: 10,
        backgroundColor: mycolors.white,
    },
    actionButtonsContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 70,
        alignItems: 'center',
    },
    actionButton: {
        flexDirection: 'row',
        backgroundColor: mycolors.white,
        paddingHorizontal: 6,
        paddingVertical: 3,
        borderRadius: 30,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    smallButton: {
        backgroundColor: mycolors.white,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 30,
        alignItems: 'center',
        marginLeft: 10,
    },
});

export default Doctor;

