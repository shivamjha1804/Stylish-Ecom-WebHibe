import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ReactNativeModal } from 'react-native-modal'

const PaymentConfirmation = () => {
    return (
        <View>
             <View style={styles.Container}>
                    <View style={styles.Row1}>
                        <Image source={require("../../Assest/PaymentConfirmation.png")} />
                        <Image style={styles.Tick} source={require("../../Assest/PaymentConfirmationTick.png")} />
                    </View>
                    <View>
                        <Text style={styles.Text}>
                            Payment done successfully.
                        </Text>
                    </View>
                </View>
            {/* <ReactNativeModal>
               
            </ReactNativeModal> */}
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25,
        borderRadius: 15,
        marginTop: 300
    },

    Tick: {
        position: 'absolute',
        top: 70,
        left: 20
    },

    Row1: {
        paddingTop: 40
    },

    Text: {
        color: 'black',
        paddingVertical: 30,
        fontSize: 18,
        fontWeight: '600'
    }
})

export default PaymentConfirmation