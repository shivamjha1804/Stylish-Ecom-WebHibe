import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SubProduct = (props) => {
    return (
        <View style={{width: 191}}>
            <View style={styles.Row1}>
                <Image borderRadius={5} style={{width: 181, height: 150}} source={props.Image} />
            </View>
            <View style={styles.Row2}>
                <Text style={styles.ProductName}>
                    {props.Title}
                </Text>
            </View>
            <View style={styles.Row3}>
                <Text style={styles.ProductDiscription}>
                    {props.Description}
                </Text>
            </View>
            <View style={styles.Row4}>
                <Text style={styles.ProductPrice}>
                    {props.Price}
                </Text>
            </View>
            <View style={styles.Row5}>
                <Text style={styles.CrossedPrice}>
                    {props.CrossedPrice}
                </Text>
                <Text style={styles.Percentage}>
                    {props.Percentage}
                </Text>
            </View>
            <View style={styles.Row6}>
                <View style={styles.StarGroup}>
                    <Image style={styles.Star} source={require("../../Assest/starIcon.png")} />
                    <Image style={styles.Star} source={require("../../Assest/starIcon.png")} />
                    <Image style={styles.Star} source={require("../../Assest/starIcon.png")} />
                    <Image style={styles.Star} source={require("../../Assest/starIcon.png")} />
                    <Image style={styles.HalfStar} source={require("../../Assest/halfstarIcon.png")} />
                </View>
                <Text style={styles.Rating}>
                    {props.Rating}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
   
    Row2:{
        marginTop:10,
        marginLeft: 5
    },  
    ProductName: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600'
    },

    Row3:{
        marginTop: 10,
        marginLeft: 5
    },  

    ProductDiscription: {
        color: 'black',
        fontSize: 12,
        fontWeight: '400',
        width: "95%"
    },

    Row4:{
        marginTop:8,
        marginLeft:5

    },

    ProductPrice: {
        color: 'black',
        fontSize: 15,
        fontWeight: '600',
        
    },

    Row5: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 2,
        marginLeft: 5
    },

    CrossedPrice: {
        color: '#BBBBBB',
        fontSize: 15,
        fontWeight: '300',
        textDecorationLine:'line-through'
    },

    Percentage: {
        color: '#FE735C',
        fontSize: 15,
        fontWeight: '300'
    },

    Row6:{
        flexDirection:'row',
        gap: 10,
        marginTop: 10,
        marginLeft: 5
    },

    StarGroup:{
        flexDirection:'row',
    },

    Star:{
        height: "120%",
        marginRight: 5
    },

    Rating:{
        fontWeight:'300',
        color:"#A4A9B3"
    }
})

export default SubProduct