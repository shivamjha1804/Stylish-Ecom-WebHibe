import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SwipeScreen from '../OpenPage/SwipeScreen';
import Login from '../LoginPage/Login';
import SignUp from '../SignUp/SignUp';
import ForgetPassword from '../LoginPage/ForgetPassword';
import Dashboard from '../Dashboard/Dashboard';
import Profile from '../Profile/Profile';
import Cart from '../Cart/Cart';
import Buy from '../Buy/Buy';
import Payment from '../Payment/Payment';
import PaymentConfirmation from '../PaymentConfirmation/PaymentConfirmation';
import GetStarted from '../GetStarted/GetStarted';
import NavigationService from '../../../Service/Navigation';
import Screen1 from '../DemoScreen/Screen1';
import Screen2 from '../DemoScreen/Screen2';
import Screen3 from '../DemoScreen/Screen3';

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <NavigationContainer ref={r => NavigationService.setTopLevelNavigator(r)}>
      
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
          name='Screen1'
          component={Screen1}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Screen2'
          component={Screen2}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Screen3'
          component={Screen3}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='ForgetPassword'
          component={ForgetPassword}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Dashboard'
          component={Dashboard}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Profile'
          component={Profile}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Cart'
          component={Cart}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Buy'
          component={Buy}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='Payment'
          component={Payment}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='PaymentConfirmation'
          component={PaymentConfirmation}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name='GetStarted'
          component={GetStarted}
          options={{headerShown: false}}
        />

        
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator