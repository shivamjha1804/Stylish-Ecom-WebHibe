import React from 'react'
import { StyleSheet, View } from 'react-native'
import SubSponsered from './SubSponsered'
import Discount from '../Discount/Discount'

const Sponsered = () => {
  return (
    <View style={styles.Container}>
        <SubSponsered Image={require("../../Assest/CompanySponcered.png")} Discount={"up to 50% Off"}/>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        paddingBottom: 100,
        backgroundColor:"white",
        paddingLeft: 25
    }
})

export default Sponsered