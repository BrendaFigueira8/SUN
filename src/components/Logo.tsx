import React from "react";
import { Image, View } from "react-native";
interface Props{
  img: string
}
export default function Logo({img} : Props) {
  return (
    <View className="flex-1 justify-center items-center w-full"> 
        <View className="h-64 w-full">
        <Image
            source={{ uri: img }}
            className="w-full h-full object-cover"
            resizeMode="contain"

            
          />
        </View>
      </View>

  );
}
