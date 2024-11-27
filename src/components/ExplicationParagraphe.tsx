import React from 'react'
import { Text, View } from 'react-native'
interface Props{
  text: string
}
export default function ExplicationParagraphe({text} : Props) {
  return (
     <View> 
       <Text className='text-[#a4a3b4] text-base text-center'>{text}</Text>
     </View>

    
  )
}
