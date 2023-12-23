import React from 'react'
import { TextInput, View, Image, StyleSheet } from 'react-native'

const Search = () => {
    return (
        <View style={{ backgroundColor: 'white' }}>
            <View style={styles.InnerContainer}>
                <View style={styles.Row1}>
                    <View>
                        <Image source={require('../../Assest/searchIcon.png')} />
                    </View>
                    <TextInput placeholder='Search any Product..' placeholderTextColor={'gray'}/>
                </View>
                <View style={styles.Row2}>
                    <Image source={require('../../Assest/micIcon.png')} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    InnerContainer: {
        flexDirection: 'row',
        marginTop: 30,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'black',
        paddingHorizontal: 10
    },

    Row1:{
        flexDirection:'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Search