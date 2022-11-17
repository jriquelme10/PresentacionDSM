// npm install --save react-native-vector-icons LO PRIMERO!!!

import { View, Text,StyleSheet} from 'react-native';
import React,{useState} from 'react';
import EvilIcons from 'react-native-vector-icons/EvilIcons';



const CustomIcon = () => {

const onPressedFB =()=>{

  console.warn("Abriendo facebook");

    }
    const onPressedYT =()=>{

        console.warn("Abriendo youtube");
      
          }
          const onPressedTW =()=>{

            console.warn("Abriendo twitter");
          
              }
const {product,setProduct} = useState('');
  return (


    
    <View style={style.container}>

    <View>
    <EvilIcons.Button
     style={style.styleBoxFB}
     name="sc-facebook"
     textAlign='center'
     size={70} 
     color="black"
     onPress={onPressedFB}
     />
    </View>
     
     
     
    <View style={style.buttonMargin}>
    <EvilIcons.Button 
     style={style.styleBoxYT}
     name="sc-youtube"
     size={70} 
     color="black"
     onPress={onPressedYT}
      />  
    </View>
     
    <View style={style.buttonMargin}>
    <EvilIcons.Button 
     style={style.styleBoxTW}
     name="sc-twitter" 
     size={70} 
     color="black" 
     onPress={onPressedTW}
     /> 
    </View>
     
    </View>
    

  )
}



const style = StyleSheet.create({
    container:{
        marginTop:300,
        alignItems:'center',
        alignContent:'center',
        textAlign:'center',
        backgroundColor:'white'
    },
    styleBoxFB:{
      
        borderRadius:1,
        height:80,
        width:80,
        backgroundColor:'green'
        
    },
    styleBoxYT:{
        borderRadius:1,
        height:80,
        width:80,
        backgroundColor:'yellow'
    },
    styleBoxTW:{
        borderRadius:1,
        height:80,
        width:80,
        backgroundColor:'red'
    },
    buttonMargin:{
        marginTop:20
    }
});

export default CustomIcon

//PROPS MAS USADOS
//color=color de texto o icono
// size=Tamaño del icono
// iconStyle=Define el estilo del icono, para setear margenes o color.
// backgroundColor= Define el color de fondo del boton
// borderRadius= Radio del borde del boton
// onPress= Funcion que llama lo que queramos cuando apretamos el boton


