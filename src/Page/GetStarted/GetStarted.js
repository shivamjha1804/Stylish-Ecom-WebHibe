import React from 'react'
import { StatusBar, StyleSheet, View, ImageBackground } from 'react-native'

const GetStarted = () => {
    return (
        <ImageBackground style={styles.container} source={require('../../Assest/BackGround.png')}>
        <StatusBar backgroundColor={'transparent'} translucent/>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default GetStarted