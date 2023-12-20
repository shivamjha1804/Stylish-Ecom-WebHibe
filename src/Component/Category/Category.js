import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import SubCategory from './SubCategory'

const Category = () => {
    return (
        <View style={{ backgroundColor: "white", }}>
            <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                <SubCategory Image={require('../../Assest/subComponent1.png')} Label={"Beauty"} />
                <SubCategory Image={require('../../Assest/subComponent2.png')} Label={"Fashion"} />
                <SubCategory Image={require('../../Assest/subComponent3.png')} Label={"Kids"} />
                <SubCategory Image={require('../../Assest/subComponent4.png')} Label={"Mens"} />
                <SubCategory Image={require('../../Assest/subComponent5.png')} Label={"womens"} />
                <SubCategory Image={require('../../Assest/subComponent1.png')} Label={"Beauty"} />
                <SubCategory Image={require('../../Assest/subComponent1.png')} Label={"Beauty"} />
                <SubCategory Image={require('../../Assest/subComponent1.png')} Label={"Beauty"} />
                <SubCategory Image={require('../../Assest/subComponent1.png')} Label={"Beauty"} />
                
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