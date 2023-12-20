import React from 'react';
import Header from '../../Component/Header/Header'
import Search from '../../Component/Search/Search'
import Filter from '../../Component/Filter/Filter'
import Category from '../../Component/Category/Category'
import Discount from '../../Component/Discount/Discount'
import DealOfTheDay from '../../Component/DealOfTheDay/DealOfTheDay'
import Product from '../../Component/Product/Product'
import { ScrollView } from 'react-native'
import SpecialOffer from '../../Component/SpecialOffer/SpecialOffer';

const Home = () => {
  return (
    <ScrollView>
      <Header />
      <Search />
      <Filter/>
      <Category/>
      <Discount/>
      <DealOfTheDay/>
      <Product/>
      <SpecialOffer/>
    </ScrollView>
  )
}

export default Home