import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const SubCategory = (props) => {
  return (
    <View style={styles.Conatiner}>
        <Image source={props.Image}/>
        <Text style={styles.Text}>
            {props.Label}
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Conatiner:{
        marginHorizontal: 10,
        alignItems:'center'
    },

    Text:{
        color: '#21003D'
    }
})

export default SubCategory