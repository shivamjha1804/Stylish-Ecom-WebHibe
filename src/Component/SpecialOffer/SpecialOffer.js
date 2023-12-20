import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SpecialOffer = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.Row1}>
                <Image source={require("../../Assest/offer.png")} />
            </View>
            <View style={styles.Row2}>
                <View>
                    <View>
                        <Text>
                            Special Offers
                        </Text>
                    </View>
                    <View>
                        <Text>
                            😱
                        </Text>
                    </View>
                </View>
                <View>
                    <Text>
                        We make sure you get the offer you need at best prices
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        marginVertical: 15,
        marginBottom: 500
    }
});

export default SpecialOffer