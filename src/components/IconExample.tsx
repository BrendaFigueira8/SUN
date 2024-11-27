import React, { ReactNode } from 'react'
import { FaStar } from 'react-icons/fa';
import { View } from 'react-native'


interface Props {
    color: string;
    icon: React.ReactNode
}


export default function IconExample({color, icon} : Props) {
 
  return (
    <View className={`bg-${color} p-4 flex items-center justify-center rounded-xl`}>
        {icon}
    </View>
  )
}


