import React from 'react'
import SubPaymentCard from './SubPaymentCard'
import { View } from 'react-native'

const Details = [
    {
        Image: require("../../../Assest/visa.png"),
        CardNumber : '*********2109'
    },

    {
        Image: require("../../../Assest/paypal.png"),
        CardNumber : '*********2109'
    },

    {
        Image: require("../../../Assest/maestro.png"),
        CardNumber : '*********2109'
    },

    {
        Image: require("../../../Assest/apple.png"),
        CardNumber : '*********2109'
    },
]

const PaymentCard = () => {
  return (
    <View>
        {
            Details.map((items, index) => {
                return (
                    <SubPaymentCard item={items} key={index}/>
                )
            })
        }
    </View>
  )
}

export default PaymentCard