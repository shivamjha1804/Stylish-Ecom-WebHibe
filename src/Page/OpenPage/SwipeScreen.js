import React, { useRef } from 'react'
import OpenPage1 from './OpenPage1'
import { Button, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'


const SwipeScreen = () => {
    const Navigation = useNavigation();
    const swiperRef = useRef(null);
    return (
        <Swiper scrollEnabled={false} ref={swiperRef} style={styles.wrapper}>
            <OpenPage1 onNext={() => {
                swiperRef.current.scrollBy(1, true)
            }} num={1} Image={require("../../Assest/Image1.png")} Heading={"Choose Products"} Text={"Amet minim mollit non deserunt ullamco est \n sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."} Button1={''} Button2={'Next'} />

            <OpenPage1 onPrev={() => {
                swiperRef.current.scrollBy(-1, true)
            }} onNext={() => {
                swiperRef.current.scrollBy(1, true)
            }} num={2} Image={require("../../Assest/Image2.png")} Heading={"Make Payment"} Text={"Amet minim mollit non deserunt ullamco est \n sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."} Button1={'Prev'} Button2={'Next'} />

            <OpenPage1 onPrev={() => {
                swiperRef.current.scrollBy(-1, true)
            }} onNext={() => {
                Navigation.navigate("login")
            }} num={3} Image={require("../../Assest/Image3.png")} Heading={"Get Your Order"} Text={"Amet minim mollit non deserunt ullamco est \n sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit."} Button1={'Prev'} Button2={'Get Started'} Nav={"login"} />
        </Swiper>
    )
}

const styles = StyleSheet.create({
    wrapper: {},
})

export default SwipeScreen