import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SubListOfProduct = (props) => {
    return (
        <View style={styles.Container}>
            <View>
                <Image style={styles.ProductImage} source={props.Image}/>
            </View>
            <View>
                <Text style={styles.ProductName}>
                    {props.Title}
                </Text>
            </View>
            <View>
                <Text style={styles.ProductPrice}>
                    {props.Price}
                </Text>
            </View>
            <View style={{flexDirection:'row', gap: 5}}>
                <Text style={styles.ProductCrossedPrice}>
                    {props.CrossedPrice}
                </Text>
                <Text style={styles.Percentage}>
                    {props.Percentage}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor:'white',
        width: 150,
    },

    ProductImage:{
        borderRadius: 5,
        alignSelf:'center'
    },

    ProductName:{
        color:'black',
        fontWeight:'500'
    },

    ProductPrice:{
        color: 'black',
        fontWeight:'700'
    },

    ProductCrossedPrice:{
        color: '#808488',
        textDecorationLine:'line-through'
    },  

    Percentage:{
        color:'#FE735C'
    }
})

export default SubListOfProduct