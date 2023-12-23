import React from 'react'
import { Text, View } from 'react-native'
import Header2 from '../../Component/Header2/Header2'
import Card from '../../Component/ShoppingBag/Card/Card'

const Buy = () => {
  return (
    <View style={{backgroundColor:'white', flex:1, paddingHorizontal:20}}>
      <Header2 Title={"Shopping Bag"} ImageLeft={require("../../Assest/BackIcon.png")} ImageRight={require("../../Assest/cartIcon.png")} />
      <Card/>
    </View>
  )
}

export default Buy