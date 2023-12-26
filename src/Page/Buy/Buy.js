import React from 'react'
import { Text, View } from 'react-native'
import Header2 from '../../Component/Header2/Header2'
import Card from '../../Component/ShoppingBag/Card/Card'
import Coupons from '../../Component/ShoppingBag/Coupons/Coupons'
import PaymentDetails from '../../Component/ShoppingBag/PaymentDetails/PaymentDetails'
import Total from '../../Component/ShoppingBag/Total/Total'
import Payment from '../../Component/ShoppingBag/Payment/Payment'

const Buy = () => {
  return (
    <>
      <View style={{ backgroundColor: 'white', paddingBottom: 25, paddingHorizontal: 20 }}>
        <Header2 Title={"Shopping Bag"} ImageLeft={require("../../Assest/BackIcon.png")} ImageRight={require("../../Assest/cartIcon.png")} />
        <Card />
        <Coupons />
        <View style={{ marginVertical: 30, borderWidth: 0.4, borderColor: '#C4C4C4' }}></View>
        <PaymentDetails />
        <View style={{ marginVertical: 30, borderWidth: 0.4, borderColor: '#C4C4C4' }}></View>
        <Total />
      </View>
      <View style={{backgroundColor:'white',flex:1}}>
        <View style={{borderTopWidth:1, borderLeftWidth:1, borderRightWidth: 1, borderTopLeftRadius: 25, borderTopRightRadius: 25, borderColor:"#C4C4C4", paddingHorizontal: 20 }}>
          <Payment/>
        </View>
      </View>
    </>
  )
}

export default Buy