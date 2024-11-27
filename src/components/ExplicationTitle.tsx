import React from "react";
import { Text, View } from "react-native";

interface Props{
  text: string
}
export default function ExplicationTitle ({text} : Props) {

    return (
    <View>
      <Text className="text-[#4F98FE] text-2xl font-extrabold">{text}</Text>
    </View>
  );
}
