import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

const Header2 = (props) => {
  return (
   <View style={styles.Container}>
        <View>
            <Image source={props.ImageLeft}/>
        </View>
        <View>
            <Text style={styles.Text}>
                {props.Title}
            </Text>
        </View>
        <View>
            <Image source={props.ImageRight}/>
        </View>
   </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        marginTop: 45,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    Text:{
        color:'black',
        fontWeight:'600',
        fontSize: 20
    }
});

export default Header2