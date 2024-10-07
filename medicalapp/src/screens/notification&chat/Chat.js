import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Image,
} from 'react-native';
import { GoogleGenerativeAI } from '@google/generative-ai';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { mycolors } from '../../utils/color';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';
import { gemini_api } from '../../components/Config';

const API_KEY = gemini_api;
const genAI = new GoogleGenerativeAI(API_KEY);

export default function Ai({ handleBackPress }) {
  const navigation = useNavigation();

  const scrollRef = useRef();
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    try {
      setLoading(true);
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const chat = model.startChat();
      const result = await chat.sendMessage(query);
      const response = result.response;
      if (response) {
        const text = await response?.text();
        const newQuestion = { question: query, answer: text };
        setMessages([...messages, newQuestion]);
        scrollRef.current?.scrollToEnd({ animated: true });
      }
      setQuery('');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      setQuery('');
      Alert.alert('Error', err);
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container1}>



        <View style={styles.header}>
          <TouchableOpacity style={{ position: 'absolute', left: 10 }} onPress={() => navigation.navigate("Home")}>
            <MaterialIcons
              name="arrow-back-ios"
              size={30}
              color={mycolors.white}
            />
          </TouchableOpacity>
          <Text style={{ color: mycolors.white, fontFamily: 'LeagueSpartan-SemiBold', fontSize: 24, }}>
            Medic Chatbot
          </Text>
        </View>

        <ScrollView ref={scrollRef}>
          {messages.length > 0 &&
            messages.map((msg, index) => {
              return (
                <View key={index} style={styles.listWrapper}>
                  <View style={styles.listQuestionStyle}>
                    <Text style={styles.listTextStyle}>{msg.question}</Text>
                  </View>
                  <View style={styles.listStyle}>
                    <Text style={styles.listTextStyle}>{msg.answer}</Text>
                  </View>
                </View>
              );
            })}
        </ScrollView>
      </View>
      <View style={styles.container2}>
        <View style={styles.bottomWrapper}>
          <TextInput
            style={styles.bottomTextInput}
            placeholder="Type message here"
            placeholderTextColor="#888888"
            multiline={true}
            editable={loading ? false : true}
            value={query}
            onChangeText={text => setQuery(text)}></TextInput>
          {loading ? (
            <View style={styles.bottomWrapperButton}>
              <ActivityIndicator size={'small'} color={'#33CEFE'} />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.bottomWrapperButton}
              onPress={handleSend}>
                 <View
      style={{
        width: 46,        // Diameter of the circle
        height: 46,       // Diameter of the circle
        borderRadius: 28, // Half of the width/height to make it a circle
        backgroundColor: '#cad6ff',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom:4,
        marginLeft:35,
      }}
    >
      <Feather name="send" size={30} color={mycolors.ThemeBlue} />
    </View>

            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  backgroundColor:'white'  },
  container1: {
    flex: 0.93,
    paddingBottom: 5,
  },
  container2: {
    paddingHorizontal:5,
    paddingVertical: 3,
    backgroundColor:"#cad6ff",
    flex: 0.08,
  },
  bottomWrapper: {
    
    backgroundColor:mycolors.white,
    marginTop: 5,
    width: '95%',
    height: 55,
    borderWidth: 1,
    borderRadius: 50,
    alignSelf: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTextInput: {
    width: '80%',
    color: 'grey',
  },
  bottomWrapperButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '15%',
    paddingTop: 5,
  },
  listWrapper: {
    marginTop: 10,
  },
  listQuestionStyle: {

    alignSelf: 'flex-end',
    backgroundColor: '#cad6ff',
    marginLeft: 120,
    marginRight: 15,
    borderRadius: 20
  },
  listStyle: {
    alignSelf: 'flex-start',
    backgroundColor: '#ECF1FF',
    marginTop: 10,
    marginRight: 120,
    marginLeft: 15,
    borderRadius: 30

  },
  listTextStyle: {
    padding: 10,
    color: 'black'
  },
  icon: {
    width: 200,
    height: 60,
    alignSelf: 'center',
  },
  backIcon: {
    width: 20,
    height: 20,
    paddingLeft: 40
  },
  heading: {
    fontSize: 20,
    color: '#000',
    paddingRight: 40
  },
  headingContainer: {
    width: '90%',
    alignItems: 'center'
  },
  backIconContainer: {
    width: '10%',
    justifyContent: 'center'
  },
  header: {
    paddingTop:23,
    paddingBottom: 23,
    backgroundColor: mycolors.ThemeBlue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  }
});