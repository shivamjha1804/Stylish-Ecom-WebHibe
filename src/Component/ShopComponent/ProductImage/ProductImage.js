import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Swiper from 'react-native-swiper'

const ProductImage = () => {
    return (
        <View style={styles.subContainer}>
            <Swiper height={250} activeDotColor='#F83758' dotColor='#DEDBDB' autoplay style={styles.wrapper} >
                <Image source={require("../../../Assest/ShopProductImage.png")} />
                <Image source={require("../../../Assest/ShopProductImage.png")} />
                <Image source={require("../../../Assest/ShopProductImage.png")} />
                <Image source={require("../../../Assest/ShopProductImage.png")} />
            </Swiper>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {},

    subContainer: {
        marginTop: 20,
        height: 270
    },
})

export default ProductImage