import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SubDiscount from './SubDiscount'
import Swiper from 'react-native-swiper'

const Discount = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.subContainer}>
                <Swiper height={250} activeDotColor='#FFA3B3' dotColor='#DEDBDB' style={styles.wrapper} >
                    <SubDiscount Image={require('../../Assest/discount.png')} Text1={"50-40% OFF"} Text2={"Now in (product) \nAll colours"}/>
                    <SubDiscount Image={require('../../Assest/discount.png')}/>
                    <SubDiscount Image={require('../../Assest/discount.png')}/>
                </Swiper>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
    },
    subContainer:{
        marginTop: 20,
    },  

    wrapper: {},
})

export default Discount