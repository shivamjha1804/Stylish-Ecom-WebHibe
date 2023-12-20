import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Filter = () => {
  return (
    <View style={{backgroundColor:'white'}}>
        <View style={styles.Container}>
            <View style={styles.Row1}>
                <Text style={styles.Text1}>
                    All Featured
                </Text>
            </View>
            <View style={styles.Row2}>
                <Text style={styles.Text2}>
                    Sort
                </Text>
                <Image source={require('../../Assest/sortIcon.png')}/>
            </View>
            <View style={styles.Row3}>
                <Text style={styles.Text2}>
                    Filter
                </Text>
                <Image source={require('../../Assest/filterIcon.png')}/>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flexDirection:'row',
        marginHorizontal: 15,
        marginTop: 30,
        alignItems: 'center'
    },

    Text1:{
        color: 'black',
        fontSize: 20,
        fontWeight: '600'
    },

    Row2:{
        flexDirection: 'row',
        marginLeft:"35%",
        alignItems: 'center'
    },

    Text2:{
        color: 'black'
    },

    Row3:{
        flexDirection: 'row',
        marginLeft:"10%",
        alignItems: 'center'
    },


})

export default Filter