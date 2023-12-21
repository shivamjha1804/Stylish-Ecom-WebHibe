import React from 'react'
import { FlatList, ScrollView, StyleSheet, View } from 'react-native'
import SubProduct from '../Product/SubProduct'


const Detail = [
    {
        Image: require("../../Assest/person1.png"),
        Title: "Women Printed Kurta",
        Description: "Neque porro quisquam est qui dolorem ipsum quia",
        Price: "₹1500",
        CrossedPrice: "₹2499",
        Percentage: "40%Off",
        Rating: "56890"
    },
    {
        Image: require("../../Assest/person1.png"),
        Title: "Women Printed Kurta",
        Description: "Neque porro quisquam est qui dolorem ipsum quia",
        Price: "₹1500",
        CrossedPrice: "₹2499",
        Percentage: "40%Off",
        Rating: "56890"
    },
    {
        Image: require("../../Assest/person1.png"),
        Title: "Women Printed Kurta",
        Description: "Neque porro quisquam est qui dolorem ipsum quia",
        Price: "₹1500",
        CrossedPrice: "₹2499",
        Percentage: "40%Off",
        Rating: "56890"
    },
    {
        Image: require("../../Assest/person1.png"),
        Title: "Women Printed Kurta",
        Description: "Neque porro quisquam est qui dolorem ipsum quia",
        Price: "₹1500",
        CrossedPrice: "₹2499",
        Percentage: "40%Off",
        Rating: "56890"
    },
    {
        Image: require("../../Assest/person1.png"),
        Title: "Women Printed Kurta",
        Description: "Neque porro quisquam est qui dolorem ipsum quia",
        Price: "₹1500",
        CrossedPrice: "₹2499",
        Percentage: "40%Off",
        Rating: "56890"
    },
    {
        Image: require("../../Assest/person1.png"),
        Title: "Women Printed Kurta",
        Description: "Neque porro quisquam est qui dolorem ipsum quia",
        Price: "₹1500",
        CrossedPrice: "₹2499",
        Percentage: "40%Off",
        Rating: "56890"
    },
    {
        Image: require("../../Assest/person1.png"),
        Title: "Women Printed Kurta",
        Description: "Neque porro quisquam est qui dolorem ipsum quia",
        Price: "₹1500",
        CrossedPrice: "₹2499",
        Percentage: "40%Off",
        Rating: "56890"
    },
]


const ProductName = () => {
    return (
        <View style={styles.Container}>
            <FlatList
                data={Detail} 
                numColumns={2} 
                renderItem={({item, index}) => {
                    return (
                        <SubProduct  item={item} key={index} />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    Container:{
        backgroundColor: 'white',
        paddingHorizontal: 10,
        flexWrap:'wrap',
    }
})

export default ProductName