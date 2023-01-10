import React, { Component, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const colors = {
  primary: '#3897f0',
  secondary: '#ffff',
  gray: 'gray',
  gray1: '#E8E8E8',
  black: 'black',
  primaryBlue: '#009cff',
  blue: 'blue',
};

const SignUpScreen = ({ navigation }) => {


  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const FIREBASE_API_ENDPOINT = "https://mad-semester-project-c232f-default-rtdb.asia-southeast1.firebasedatabase.app/"


  const handleSignUp = async () => {

    if (password.length < 5) {
      alert("Password must be greater than length of 4 ")
    }
    else if (username == "") {
      alert("Username must not be empty")
    }
    else if (username.length < 3) {
      alert("Username must not be lower than 3 characters")
    }
    else if (!emailRegex.test(email)) {
      alert('Invalid Email');
    }
    else {

      fetch(`${FIREBASE_API_ENDPOINT}/data.json`, {
        method: 'POST',
        body: JSON.stringify({
          username: username,
          email: email,
          password: password,
        })
      });

      try {
        await AsyncStorage.setItem('@store_username', username)
        await AsyncStorage.setItem('@store_email', email)
        await AsyncStorage.setItem('@store_pass', password)


      } catch (e) {
        alert("Registration failed")
      }

      alert("You are Signed Up!")
      navigation.navigate('BottomTabView');

    }
  }

  // const handleSignUp = () => {
  //   if (username !== '' && password !== '' && email !== '') {
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
            placeholder="Username"
          />
        </View>
        <View style={styles.inputItem}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
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
            onPress={handleSignUp}
            buttonBg={colors.primary}
            text={colors.secondary}
            title="Sign Up"
            style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputItem}>
          <Text style={styles.subTitle}></Text>
        </View>
      </View>

      <View style={styles.sectionBottom}>
        <View style={styles.bottomContainer}>
          <Text style={styles.subTitle}>
            <Text style={styles.noAccount}>Already Have an account?</Text>{' '}
            <TouchableOpacity
              onPress={() => { navigation.navigate('LoginScreen') }}>
              <Text style={styles.link}>Login.</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
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
