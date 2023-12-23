import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import SubListOfProduct from './SubListOfProduct'

const ListOfProduct = () => {
  return (
    <View style={styles.Container}>
        <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
            <SubListOfProduct Image={require("../../Assest/Product1.png")} Title={`IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`} Price={"₹650"} CrossedPrice={"₹1599"} Percentage={"60% off"}/>
            <SubListOfProduct Image={require("../../Assest/Product2.png")} Title={`Labbin White \nSneakers \nFor Men and Female`} Price={"₹650"} CrossedPrice={"₹1250"} Percentage={"70% off"}/>
            <SubListOfProduct Image={require("../../Assest/Product1.png")} Title={`Mammon Women's Handbag(Set of 3, Beige)" 44mm`} Price={"₹750"} CrossedPrice={"₹1999"} Percentage={"60% off"}/>
            <SubListOfProduct Image={require("../../Assest/Product1.png")} Title={`IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`} Price={"₹650"} CrossedPrice={"₹1599"} Percentage={"60% off"}/>
            <SubListOfProduct Image={require("../../Assest/Product1.png")} Title={`IWC Schaffhausen 2021 Pilot's Watch "SIHH 2019" 44mm`} Price={"₹650"} CrossedPrice={"₹1599"} Percentage={"60% off"}/>
        </ScrollView>
    </View>
  )
}


const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
    },

    Container:{
        backgroundColor:'white',
    }
})


export default ListOfProduct