import React from 'react'
import SubTags from './SubTags'
import { View } from 'react-native'

const Details = [
    {
        Image: require("../../../Assest/locationIcon.png"),
        Text: "Nearest Store"
    },

    {
        Image: require("../../../Assest/lockIcon.png"),
        Text: "VIP"
    },

    {

        Image: require("../../../Assest/returnIcon.png"),
        Text: "Return policy"
    }
]


const Tags = () => {
    return (
        <View style={{flexDirection:'row', columnGap:8, marginHorizontal: 5}}>
            {
                Details.map((item, index) => {
                    return(
                        <SubTags item={item} key={index} />
                    )
                })
            }
        </View>
    )
}

export default Tags