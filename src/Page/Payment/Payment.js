import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Header2 from '../../Component/Header2/Header2'
import Card from '../../Component/PaymentComponent/Card/Card'
import Label from '../../Component/PaymentComponent/Label/Label'
import PaymentCard from '../../Component/PaymentComponent/PaymentCard/PaymentCard'
import Button from '../../Component/PaymentComponent/Button/Button'

const Payment = () => {
    return (
        <View style={styles.Container}>
            <Header2 ImageLeft={require("../../Assest/BackIcon.png")} Title={"Checkout"} />
            <Card/>
            <View style={{ marginVertical: 30, borderWidth: 0.4, borderColor: '#C4C4C4' }}></View>
            <Label/>
            <PaymentCard/>
            <Button/>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'white',
        flex: 1,
        paddingHorizontal: 20
    }
})

export default Payment