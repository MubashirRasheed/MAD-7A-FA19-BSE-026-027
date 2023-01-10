import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomTabView from './BottomTabView';


// import {colors} from '../config/Colors';
import Icon from 'react-native-vector-icons/FontAwesome';
import PrimaryInputForm from './PrimaryInputForm';
import PrimaryButton from './PrimaryButton';

export const colors = {
  primary: '#3897f0',
  secondary: '#ffff',
  gray: 'gray',
  gray1: '#E8E8E8',
  black: 'black',
  primaryBlue: '#009cff',
  blue: 'blue',
};

const LoginScreen = ({ navigation }) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const FIREBASE_API_ENDPOINT = "https://mad-semester-project-c232f-default-rtdb.asia-southeast1.firebasedatabase.app/"


  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();


  const handleLogin = async () => {

    if (username == '' || password == '') {
      alert("Please Fill All Fields")
    } else {
      try {
        const emailval = await AsyncStorage.getItem('@store_email')
        const passval = await AsyncStorage.getItem('@store_pass')

        console.log(emailval, passval, username, password)

        if (emailval === username && passval === password) {
          alert("Login Sucessful")
          navigation.navigate('BottomTabView');
        }
        else {
          alert("Login failed")
        }
      } catch (e) {
        alert(e)
      }
    }
  }

  }
  // const handleLogin = () => {
  //   if (username === 'admin' && password === 'admin') {
  //     // Successful login
  //     navigation.navigate('BottomTabView');
  //   } else {
  //     // Invalid login credentials
  //     // setError('Invalid username or password');
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.sectionTop}>
        <View style={styles.languageContainer}>
          {/* <TouchableOpacity
            onPress={() => {
              this.handleClick();
            }}>
            <Text>
              <Text>English (United States) </Text>
              <Icon name="caret-down" />
            </Text>
          </TouchableOpacity> */}
        </View>
      </View>

      <View style={styles.sectionMiddle}>
        <View>
          <Image
            resizeMode={'contain'}
            style={styles.instaLogo}
            source={require('../../storage/images/spectrumLogo.png')}
          />
        </View>

        <View style={styles.inputItem}>
          <TextInput
            style={styles.input}
            value={username}
            onChangeText={setUsername}
            placeholder="Username Or email"
          />
        </View>
        <View style={styles.inputItem}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry
          />
        </View>

        <View style={styles.inputItem}>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputItem}>
          <TouchableOpacity>
            <Text style={styles.subTitle}>
              <Text style={styles.link}>Forget password?</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.sectionBottom}>
        <View style={styles.bottomContainer}>
          <Text style={styles.subTitle}>
            <Text style={styles.noAccount}>Dont Have an account?</Text>{' '}
            <TouchableOpacity
              onPress={() => { navigation.navigate('SignUpScreen') }}>
              <Text style={styles.link}>SignUp.</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    // backgroundColor: 'black', Added by MI  
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 5,
  },
  loginButton: {
    backgroundColor: '#4169E1',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  sectionTop: {
    display: 'flex',
    flex: 1,
  },
  sectionMiddle: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  sectionBottom: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
  },
  languageContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
  },
  instaLogo: {
    width: '100%',
    height: '70%',
    alignSelf: 'center',
  },
  inputItem: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  subTitle: {
    textAlign: 'center',
  },
  forgotPasswordText: {
    color: colors.gray,
  },
  link: {
    color: colors.primary,
  },
  subTitleOR: {
    textAlign: 'center',
    margin: 15,
  },
  bottomContainer: {
    borderTopWidth: 1,
    borderColor: colors.gray1,
    padding: 15,
  },
  noAccount: {
    color: colors.gray,
  },
});
