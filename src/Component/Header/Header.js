import React from 'react'
import { Image, Text, ScrollView, StyleSheet, View } from 'react-native'

const Header = () => {
    return (
        <View  style={{backgroundColor: 'white'}}>
            <View style={styles.InnerContainer}>
                <View style={styles.Row1}>
                    <Image style={styles.Hamburger} source={require('../../Assest/menu.png')} />
                </View>
                <View style={styles.Row2}>
                    <Image source={require('../../Assest/logo.png')} />
                    <Text style={styles.LogoText}>
                        Stylish
                    </Text>
                </View>
                <View style={styles.Row3}>
                    <Image source={require('../../Assest/userImage.png')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    InnerContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginTop: 40
    },

    Hamburger: {
        height: 30,
        width: 30,
    },

    Row2: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    LogoText: {
        color: '#4392F9',
        marginLeft: 5,
        fontSize: 20,
        fontWeight: '500'
    },

    Row3: {
        borderRadius: 50,

    }
})

export default Header