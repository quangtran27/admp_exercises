import { StackNavigationProp } from '@react-navigation/stack'
import { useEffect, useState } from 'react'
import { Text, View } from 'react-native'
import { RootStackParamList } from '../types/stack.type'

type IntroProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Introduction'>
}

export default function Intro({ navigation }: IntroProps) {
  const [counter, setCounter] = useState(10)

  useEffect(() => {
    if (counter <= 0) {
      navigation.replace('Home')
    }

    const timer = setInterval(() => {
      setCounter((prev) => prev - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [navigation, counter])

  return (
    <View>
      <Text>Họ và tên: Trần Văn Quảng</Text>
      <Text>MSSV: 20110160</Text>
      <Text>Chuyển sang trang chủ trong {counter}</Text>
    </View>
  )
}
