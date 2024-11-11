import { Text, View } from 'react-native'
import React from 'react'
import {Link} from 'expo-router';

const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-fsemibold text-fuchsia-700">Meal Magic</Text>
      <Link className="text-2xl font-fsemibold" href="./home">Go to Home</Link>
    </View>
  )
}

export default index