import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Header from '../../Component/Header/Header'
import Search from '../../Component/Search/Search'
import Filter from '../../Component/Filter/Filter'
import ProductName from '../../Component/ProductName/ProductName'

const TrendingProduct = () => {
  return (
    <View style={styles.Container}>
        <ScrollView >
        <View style={styles.subContainer}>
          <Header/>
          <Search/>
          <Filter Title={"52,082+ Iteams"}/>
        </View>
        <ProductName/>
        </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  Container:{

    backgroundColor:'white'
  },
  subContainer:{
    paddingHorizontal:10
  }
})

export default TrendingProduct