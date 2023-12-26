import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator, DrawerActions} from '@react-navigation/drawer';
// import BottomTab from './BottomTab';

import Home from '../../Page/Home/Home';
import DrawerContainer from './DrawerContainer';

const Drawer = createDrawerNavigator();
const drawerRef = React.createRef();
console.log('drawer is opened')

const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      useLegacyImplementation={false}
      initialRouteName="BottomTab"
      drawerContent={props => (
        <DrawerContainer {...props} navigation={props.navigation} />
      )}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#1D3557',
        },
      }}>
      {/* <Drawer.Screen name="BottomTab" component={BottomTab} /> */}
      {/* <Drawer.Screen name="HomePage" component={HomePage} /> */}
      <Drawer.Screen
        name='Home'
        component={Home} 
      />
      
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;

const styles = StyleSheet.create({});