import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface Props{
    text: string
    onPress: () => void
}

export default function Button({ text, onPress } : Props) {
  return (
    <TouchableOpacity className="bg-[#4F98FE] w-full py-4 flex items-center justify-center rounded-md" onPress={onPress}>
      <Text className=" text-white font-semibold">{text}</Text>
    </TouchableOpacity>
  );
}
