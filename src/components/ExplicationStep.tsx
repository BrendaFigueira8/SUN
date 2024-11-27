import React from 'react'
import { View } from 'react-native'

interface Props{
  step: number
 }

export default function ExplicationStep({step}: Props) {
  return (
    <View className='flex gap-2 flex-row'> 
        <View className={`w-5 h-5 rounded-full ${step == 1 ? 'bg-blue-500' : 'bg-[#D9D9D9]'}`}/> 
        <View className={`w-5 h-5 rounded-full ${step == 2 ? 'bg-blue-500' : 'bg-[#D9D9D9]'}`}/>
        <View className={`w-5 h-5 rounded-full ${step == 3 ? 'bg-blue-500' : 'bg-[#D9D9D9]'}`}/> 
    </View>
  )
}
