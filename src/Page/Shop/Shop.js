import React from 'react'
import Header2 from '../../Component/Header2/Header2'
import { StyleSheet, View } from 'react-native'
import ProductImage from '../../Component/ShopComponent/ProductImage/ProductImage'
import Size from '../../Component/ShopComponent/Size/Size'
import Description from '../../Component/ShopComponent/Description/Description'

const Shop = () => {
  return (
    <View style={styles.Container}>
        <Header2 ImageLeft={require("../../Assest/BackIcon.png")} ImageRight={require("../../Assest/cartIcon.png")}/>
        <ProductImage/>
        <Size/>
        <Description/>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        paddingHorizontal: 10,
        justifyContent: 'center'
    }
})

export default Shop