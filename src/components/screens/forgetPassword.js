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

const ForgetPassword = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const FIREBASE_API_ENDPOINT = "https://mad-semester-project-c232f-default-rtdb.asia-southeast1.firebasedatabase.app/"

    const handleForgetPassword = () => {
    try {
        fetch(`${FIREBASE_API_ENDPOINT}/data/${key}.json`, {
            method: 'PUT',
            body: JSON.stringify(email),
        })
            .then(response => response.json())
            .then(responseJson => console.log(responseJson))
            .catch(error => console.error(error));
    }
    catch (e) {
        alert("Forget Password failed")
    }
}
};

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
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
                />
            </View>

            <View style={styles.inputItem}>
                <TouchableOpacity
                    onPress={handleForgetPassword}
                    buttonBg={colors.primary}
                    text={colors.secondary}
                    title="Forget Password"
                    style={styles.loginButton}>
                    <Text style={styles.loginButtonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
);
            };

export default forgetPassword;

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
