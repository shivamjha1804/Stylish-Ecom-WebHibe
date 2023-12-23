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
import Offer from '../../Component/Offer/Offer';
import ListOfProduct from '../../Component/ListOfProduct/ListOfProduct';
import SummerSale from '../../Component/SummerSale/SummerSale';
import Sponsered from '../../Component/Sponserd/Sponsered';
import { StatusBar } from 'react-native-basic-elements';

const Home = () => {
  return (
    <ScrollView style={{backgroundColor:'white', paddingHorizontal:10}} >
      <StatusBar backgroundColor={'white'}/>
      <Header />
      <Search />
      <Filter Title={"All Featured"}/>
      <Category/>
      <Discount/>
      <DealOfTheDay BackGroundColor={'#4392F9'} Title={"Deal of the Day"} Icon={require("../../Assest/watchIcon.png")} Timer={"22h 55m 20s remaining"}/>
      <Product/>
      <SpecialOffer/>
      <Offer/>
      <DealOfTheDay BackGroundColor={"#FD6E87"} Title={"Trending Products"} Icon={require("../../Assest/calenderIcon.png")} Timer={"Last Date 29/02/22"}/>
      <ListOfProduct/>
      <SummerSale/>
      <Sponsered/>
    </ScrollView>
  )
}


export default Home