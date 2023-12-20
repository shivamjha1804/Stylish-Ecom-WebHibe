import React from 'react'
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const DealOfTheDay = () => {
    return (
        <View style={{ backgroundColor: "white" }}>
            <View style={styles.Container}>
                <View style={styles.Row1}>
                    <View>
                        <Text style={{...styles.Text, fontSize: 18, fontWeight:'500'}}>
                            Deal of the Day
                        </Text>
                    </View>
                    <View style={styles.Timer}>
                        <Image style={{marginRight: 5}} source={require("../../Assest/watchIcon.png")} />
                        <Text style={styles.Text}>
                            22h 55m 20s remaining
                        </Text>
                    </View>
                </View>
                <View style={styles.Row2}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.Text}>
                            View all
                        </Text>
                        <Image source={require("../../Assest/arrowIcon.png")} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        backgroundColor: '#4392F9',
        marginHorizontal: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        alignItems: 'center',
        paddingVertical: 10,


    },

    Row1: {

    },

    Timer: {
        marginTop:10,
        flexDirection: "row"
    },

    Text: {
        color: 'white'
    },

    Button: {
        borderWidth: 2,
        borderColor: 'white',
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 7,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default DealOfTheDay;

