import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SwipeScreen from '../OpenPage/SwipeScreen';
import Login from '../LoginPage/Login';
import SignUp from '../SignUp/SignUp';
import ForgetPassword from '../LoginPage/ForgetPassword';

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='slide1'
          component={SwipeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='login'
          component={Login}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='signUp'
          component={SignUp}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='ForgetPassword'
          component={ForgetPassword}
          options={{ headerShown: false }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator