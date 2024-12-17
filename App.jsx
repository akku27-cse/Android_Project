import { View, Text } from 'react-native'
import React from 'react'
import { colors } from './src/Constants/colors'

const App = () => {
  return (
    <View>
      <Text style={{backgroundColor:colors.background}}>App</Text>
    </View>
  )
}

export default App