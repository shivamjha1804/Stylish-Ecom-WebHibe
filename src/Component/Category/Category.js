import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import SubCategory from './SubCategory'

const Detail = [
    {
        Image: require('../../Assest/subComponent1.png'),
        Label: "Beauty"
    },

    {
        Image: require('../../Assest/subComponent2.png'),
        Label: "Fashion"
    },

    {
        Image: require('../../Assest/subComponent3.png'),
        Label: "Kids"
    },

    {
        Image: require('../../Assest/subComponent4.png'),
        Label: "Mens"
    },

    {
        Image: require('../../Assest/subComponent5.png'),
        Label: "womens"
    },

    {
        Image: require('../../Assest/subComponent1.png'),
        Label: "Beauty"
    },

    {
        Image: require('../../Assest/subComponent1.png'),
        Label: "Beauty"
    },

    {
        Image: require('../../Assest/subComponent1.png'),
        Label: "Beauty"
    },

    {
        Image: require('../../Assest/subComponent1.png'),
        Label: "Beauty"
    },
]

const Category = () => {
    return (
        <View style={{ backgroundColor: "white", }}>
            <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                {
                    Detail.map((item, index)=>{
                        return (
                            <SubCategory item={item} key={index}/>
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        paddingVertical: 20,
        marginHorizontal: 10
    }
})

export default Category