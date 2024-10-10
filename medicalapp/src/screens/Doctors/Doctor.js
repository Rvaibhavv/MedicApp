import React, { useEffect, useState } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, StyleSheet ,Image} from 'react-native';
import axios from 'axios';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { mycolors } from '../../utils/color';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { BASE_URL } from '../../components/Config';
import AppWrapper from '../../components/AppWrapper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';

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

                    <View style={{ flexDirection: 'row' }}>
                        <View >
                            {item.gender === 'Male' ? (
                                <Image
                                    source={require('../../assets/male.jpg')}
                                    style={{ width: 100, height: 100 ,borderRadius: 60,marginTop:10}}
                                />
                            ) : (
                                <Image
                                    source={require('../../assets/female.jpg')}
                                    style={{ width: 100, height: 100 ,borderRadius: 60,marginTop:10}}
                                />
                            )}
                        </View>

                        <View style={{ flex: 1, justifyContent: 'center', marginLeft: 4, }}>
                            <Text style={styles.itemName}>{item.name}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.itemDetail}> {item.specialization}</Text>
                                <Text style={styles.itemDetail}>, {item.age}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', marginLeft: 'auto' }}>
                        <View style={styles.actionButton}>
                                <Entypo name='star-outlined' size={17} color={mycolors.ThemeBlue} />
                                <Text style={{ color: mycolors.ThemeBlue }}> rating </Text>
                            </View>
                            <View style={styles.smallButton}>
                                <AntDesign name='hearto' size={15} color={mycolors.ThemeBlue} />
                            </View>
                        </View>
                        </View>
                    </View>
                    <View style ={{flexDirection:'row',justifyContent:'center'}}>
                        <TouchableOpacity>
                        
                            <View style ={{backgroundColor:mycolors.white,width:150,height:44,marginTop:7,borderRadius:30,marginHorizontal:10,justifyContent:'center'}}>
                                <Text style={{color:mycolors.ThemeBlue,fontFamily:'LeagueSpartan-SemiBold',fontSize:22,textAlign:'center'}}>Book</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                            <View style ={{backgroundColor:mycolors.ThemeBlue,width:150,height:44,marginTop:7,borderRadius:30,marginHorizontal:10,justifyContent:'center'}}>
                                <Text style={{color:mycolors.white,fontFamily:'LeagueSpartan-SemiBold',fontSize:22,textAlign:'center'}}>Details</Text>
                            </View>
                            </TouchableOpacity>
                    </View>
                </View>
            )}
            contentContainerStyle={styles.listContainer} // Optional: Add padding to the FlatList
        />
    );
};

// App component
const Doctor = () => {
    const navigation = useNavigation();
    return (
        <AppWrapper>
            <View style={{ flexDirection: 'row', flex: 0.8, alignItems: 'center', justifyContent: 'center' ,borderBottomColor:'grey',borderBottomWidth:0.1}}>
                <TouchableOpacity style={{ position: 'absolute', left: 10 }} onPress={()=>navigation.navigate('Home')}>
                    <MaterialIcons
                        name="arrow-back-ios"
                        size={30}
                        color={mycolors.ThemeBlue}
                    />
                </TouchableOpacity>



                <Text style={{ color: mycolors.ThemeBlue, fontFamily: 'LeagueSpartan-SemiBold', fontSize: 24 }}>
                    Doctors
                </Text>
            </View>
            <SafeAreaView style={{ flex: 8.2, backgroundColor: mycolors.white, }}>
                <DoctorList />
            </SafeAreaView>
        </AppWrapper>
    );
};

// Styles
const styles = StyleSheet.create({

    itemContainer: {
        backgroundColor: '#cad6ff',
        height: 180,
        padding: 10,
        marginVertical: 5,
        borderRadius: 20,
        // For Android shadow
    },
    iconContainer: {
        width: 100,        // Set explicit width
        height: 100,
        marginTop: 2,    // Set explicit height, same as width to form a circle
        backgroundColor: mycolors.white,
        borderRadius: 60, // Half of the width/height to make it a circle
        justifyContent: 'center',  // Centers content vertically
        alignItems: 'center',      // Centers content horizontally
    },
    itemName: {
        marginTop: 18,
        marginLeft: 3,
        color: mycolors.ThemeBlue,
        fontFamily: 'LeagueSpartan-Medium',
        fontSize: 22,
    },
    itemDetail: {
        color: mycolors.black,
        fontSize: 15,
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
        marginTop:3,
        backgroundColor: mycolors.white,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderRadius: 30,
        alignItems: 'center',
        marginLeft: 10,
    },
});

export default Doctor;

