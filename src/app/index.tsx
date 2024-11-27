import { Text, TouchableOpacity, View } from "react-native";
import "../styles/global.css";
import Logo from "../components/Logo";
import ExplicationTitle from "../components/ExplicationTitle";
import ExplicationParagraphe from "../components/ExplicationParagraphe";
import ExplicationStep from "../components/ExplicationStep";
import Button from "../components/Button";
import { useState, useEffect} from "react";
import IconExample from "../components/IconExample";
import { FaStar, FaCalendarAlt } from "react-icons/fa";
import { SafeAreaView } from "react-native";
export default function Index() {
  const [title, setTitle] = useState("")
  const [step, setStep] = useState(1)
  const [paragraphe, setParagraphe] = useState("")
  const [img, setImg] = useState(' ../../assets/images/logo.png')
  const nextStep = () => {
   
    setStep (prevStep => prevStep + 1)
   
 
  
  }

  useEffect (() => {
   if (step === 1) {
    setTitle("Objetivo")
    setParagraphe("O Objetivo do Aplicativo Sun, é ajudar pessoas que estão passando por momentos difíceis a encontrar uma maneira de organizar sua rotina.")
  }
   if (step === 2){
    setTitle("Desafios")
    setParagraphe("Crie desafios pessoais e ganhe recompensas para subir de level ao completa-los.")
    setImg("../../assets/images/logo2.png")
  }
   if (step === 3){
    setTitle("Lembretes Semanais")
    setParagraphe("Crie tarefas semanais para ajudar a se organizar e a planejar sua semana.")
    setImg("../../assets/images/logo2.png")
  }
  if (step === 4){
   
    setImg("../../assets/images/logo.png")
    
  }
  
  },[step]) 

  return (
    <View className="  h-full flex justify-between items-start px-5 pt-[5rem]">

      <Logo img={img}/>
      { step <= 3 && (
      
      <View className="flex items-center  flex-grow justify-between py-10    ">
        <View className="flex items-center justify-center  ">
          <View className="flex items-center justify-center gap-2 mt-16">
  
          {step === 2 && (
  <IconExample color="[#F2CE54]" icon={<FaStar className="text-white" />} />
)}
  {step === 3 && (
  <IconExample color="blue-500" icon={<FaCalendarAlt className="text-white" />} />
)}
        
            
          <ExplicationTitle text={title} />

          <ExplicationParagraphe
            text={paragraphe}
          />
          </View>
 <View className="mt-12">
          <ExplicationStep step={step} />
          </View>
        </View>
        <View className="mt-10 w-full">
          <Button text={"Proximo"} onPress={nextStep} />
        </View>
      </View>
      )}
      {step == 4 &&(

        <View className="px-5 w-full flex gap-2 mb-12 justify-center items-center">
          <TouchableOpacity className="w-full bg-blue-500 rounded-md p-2 hover:opacity-85  duration-300  flex items-center justify-center"><Text className="text-white font-bold text-xl">Entrar</Text></TouchableOpacity>
          <TouchableOpacity className="w-full bg-[#3F608E] rounded-md  hover:opacity-85 duration-300  p-2 flex items-center justify-center"><Text className="text-white font-bold text-xl">Cadastrar</Text></TouchableOpacity>
          <Text className="text-stone-400 hover:text-blue-500 duration-300 cursor-pointer">Entrar como Convidado</Text>
          </View>
      )}
    </View>
  );
}
