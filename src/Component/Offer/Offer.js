import React from 'react'
import { Image, View } from 'react-native'

const Offer = () => {
  return (
    <View style={{backgroundColor:'white', justifyContent:'center', alignItems:'center', }}>
        <Image style={{height:200, width: 400}} source={require("../../Assest/Offer.png")}/>
    </View>
  )
}

export default Offer