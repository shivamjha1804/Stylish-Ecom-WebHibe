import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import Header2 from '../../Component/Header2/Header2'
import Label from '../../Component/CartComponent/Label/Label'
import AddressBox from '../../Component/CartComponent/AddressBox/AddressBox'
import Card from '../../Component/CartComponent/Card/Card'

const Cart = () => {
    return (
        <ScrollView style={{backgroundColor:'white'}}>
            <Header2 ImageLeft={require("../../Assest/BackIcon.png")} Title={"Checkout"} />
            <Label Image={require("../../Assest/locationIcon.png")} Title={"Delivery Address"}/>
            <AddressBox/>
            <Label Title={"Shopping List"}/>
            <Card/>
        </ScrollView>
    )
}

export default Cart