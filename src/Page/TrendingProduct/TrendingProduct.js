import React from 'react'
import { ScrollView, View } from 'react-native'
import Header from '../../Component/Header/Header'
import Search from '../../Component/Search/Search'
import Filter from '../../Component/Filter/Filter'
import ProductName from '../../Component/ProductName/ProductName'

const TrendingProduct = () => {
  return (
    <View>
        <ScrollView>
        <Header/>
        <Search/>
        <Filter Title={"52,082+ Iteams"}/>
        <ProductName/>
        </ScrollView>
    </View>
  )
}

export default TrendingProduct