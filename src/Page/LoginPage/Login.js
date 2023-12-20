import React from 'react'
import {StatusBar,View, Text, TextInput, TouchableOpacity, Image, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Login = () => {
  const Navigation = useNavigation();
  return (
    <ScrollView>
      <View>
        <StatusBar backgroundColor={'transparent'} translucent barStyle={'dark-content'}/>
        <Text style={styles.Title}>
          Welcome Back!
        </Text>

        <View style={styles.login}>
          <View style={styles.Input}>
            <View>
              <Image style={styles.Image} source={require('../../Assest/user.png')} />
            </View>
            <TextInput placeholder=' Username or email'  placeholderTextColor={'#676767'}/>
          </View>
          <View style={{ ...styles.Input, justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <Image style={styles.Image} source={require('../../Assest/padlock.png')} />
              <TextInput placeholder='Password' placeholderTextColor={'#676767'} />
            </View>
            <View style={{ marginLeft: 25, marginRight: 1, }}>
              <Image style={styles.Image} source={require('../../Assest/witness.png')} />
            </View>
          </View>
          <Text style={styles.forgetPassowrd} onPress={() => {
            Navigation.navigate("ForgetPassword")
          }}>
            Forget Password
          </Text>
          <TouchableOpacity style={styles.button} onPress={() => {
            Navigation.navigate("Dashboard")
          }}>
            <Text style={styles.buttonText}>
              Login
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttomStyle}>
          <Text style={{color:'#575757'}}>
            -OR Continue With-
          </Text>
          <View style={styles.Logo}>
            <View style={styles.Circle}>
              <Image style={styles.Image} source={require('../../Assest/google.png')} />
            </View>

            <View style={styles.Circle}>
              <Image style={styles.Image} source={require('../../Assest/apple.png')} />
            </View>

            <View style={styles.Circle}>
              <Image style={styles.Image} source={require('../../Assest/facebook.png')} />
            </View>
          </View>

          <View>
            <Text style={{color:'#575757'}}>
              Create An Account <Text style={styles.signUp} onPress={() => {
                Navigation.navigate("signUp")
            }} >Sign Up</Text>
            </Text>
          </View>
        </View>

      </View>
    </ScrollView>
  )

}

const styles = StyleSheet.create(
  {
    Title: {
      fontSize: 50,
      marginTop: 35,
      fontWeight: '700',
      marginRight: 50,
      marginLeft: 10,
      color: 'black'
    },

    Input: {
      flexDirection: 'row',
      marginHorizontal: 10,
      paddingHorizontal: 25,
      paddingVertical: 10,
      borderColor: 'black',
      borderWidth: 0.7,
      borderRadius: 10,
      backgroundColor: '#F3F3F3',
      color: 'black',
      marginVertical: 10,
      alignItems: 'center'
    },

    Image: {
      height: 20,
      width: 20,
    },

    login: {
      marginVertical: 35,
    },

    forgetPassowrd: {
      alignSelf: 'flex-end',
      marginEnd: 15,
      color: '#F83758',
      marginBottom: 45,
    },

    button: {
      backgroundColor: '#F83758',
      paddingVertical: 20,
      marginHorizontal: 15,
      padding: 15,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },

    buttonText: {
      fontWeight: '800',
      fontSize: 18,
      color: 'white'
    },

    buttomStyle: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },

    Logo: {
      flexDirection: 'row',
      marginVertical: 20,
    },

    Circle: {
      marginHorizontal: 5,
      padding: 15,
      borderRadius: 50,
      borderColor: '#F83758',
      borderWidth: 1,
      backgroundColor: '#FCF3F6'
    },

    Image: {
      height: 25,
      width: 25,
      resizeMode: 'contain',
    },

    signUp: {
      color: '#F83758',
    }
  }
)

export default Login;