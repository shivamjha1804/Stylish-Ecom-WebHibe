import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SubSize from './SubSize'

const Details = [
  {
    size: "6"
  },

  {
    size: "7"
  },

  {
    size: "8"
  },

  {
    size: "9"
  },

  {
    size: "10"
  }
]

const Size = () => {
  const [size, setSize] = useState("");
  return (
    <View>
      <View>

        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.sizeContainer}>
            Size:
          </Text>
          <Text style={styles.sizeContainer}>
            {size}UK
          </Text>
        </View>
      </View>
      <View style={{flexDirection:'row'}}>
        {
          Details.map((item, index) => {
            return (
              <SubSize item={item} key={index} />
            )
          })
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  sizeContainer: {
    color: 'black',
    marginVertical: 15,
    marginLeft: 5,
    fontSize: 15,
    fontWeight: '600'
  }
})

export default Size