import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Header2 = (props) => {
    const Navigation = useNavigation();
    return (
        <View style={styles.Container}>
            <TouchableOpacity onPress={() => {
                Navigation.goBack()
            }}>
                <View>
                    <Image source={props.ImageLeft} />
                </View>
            </TouchableOpacity>
            <View>
                <Text style={styles.Text}>
                    {props.Title}
                </Text>
            </View>
            <TouchableOpacity onPress={() => {
                Navigation.navigate("Cart")
            }}>
                <View>
                    <Image source={props.ImageRight} />
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    Container: {
        marginTop: 35,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    Text: {
        color: 'black',
        fontWeight: '600',
        fontSize: 20
    }
});

export default Header2