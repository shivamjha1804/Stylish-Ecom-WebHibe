import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const Size = () => {
    const [size, setSize] = useState("");

  return (
    <View style={{paddingHorizontal: 5}}>
        <View style={{flexDirection:'row'}}>
            <Text style={styles.Size}>
                Size:
            </Text>
            <Text style={styles.Size}>
                {size}UK
            </Text>
        </View>
        <View style={{flexDirection:'row', columnGap: 15}}>
            <View>
                <TouchableOpacity style={{...styles.Button, }}  onPress={() => {
                    setSize(6)
                }}>
                    <Text style={styles.Text}>
                        6 UK
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.Button} onPress={() => {
                    setSize(7)
                }}>
                    <Text style={styles.Text}>
                        7 UK
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.Button} onPress={() => {
                    setSize(8)
                }}>
                    <Text style={styles.Text}>
                        8 UK
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.Button} onPress={() => {
                    setSize(9)
                }}>
                    <Text style={styles.Text}>
                        9 UK
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.Button} onPress={() => {
                    setSize(10)
                }}> 
                    <Text style={styles.Text}> 
                        10 UK
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Button:{
        borderColor:"#FA7189",
        paddingHorizontal:10,
        paddingVertical: 5,
        borderRadius: 5,
        borderWidth: 2
    },

    Text:{
        color:'#FA7189'
    },

    Size:{
        color:'black',
        marginVertical: 15,
        marginLeft: 5,
        fontSize:15,
        fontWeight:'600'
    }
});

export default Size