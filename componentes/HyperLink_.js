//npm i --save react-native-hyperlink   instalacion hyperlink
// npm install --save react-native-vector-icons LO PRIMERO!!!

import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Hyperlink from "react-native-hyperlink";

const Hyperlink_ = ({navigation}) => {
 
  return (
    
    <ScrollView>
    <View >
      <Hyperlink linkDefault={ true }>
    <Text style={ { fontSize: 15 } }>
      PROP "linkDefault" es booleano y nos permite hacer clickable una url:
       https://www.google.com 
    </Text>
  </Hyperlink>
  <Text>---------------------------------------------</Text>
  <Hyperlink onPress={ (url) => alert(url+"                  HICISTE CLICK SOBRE LA URL") }>
    <Text style={ { fontSize: 20 } }>
      PROP "onPress/onLongPress" permite hacer llamado a acciones mediante el URL  https://www.google.com
    </Text>
  </Hyperlink>
  <Text>---------------------------------------------</Text>
  <Hyperlink onPress={ (url) => {alert(url)} }
  //linkDefault={true}
  >
    <View>
      <Text>
        LINKS "Text's anidados":
      </Text>
      <Text style={ { fontSize: 15 } }>
        https://google.com 
      </Text>
      <Text style={ { fontSize: 15 } }>
        https://youtube.com
      </Text>
    </View>
  </Hyperlink>
  <Text>---------------------------------------------</Text>

  <Hyperlink 
   linkDefault={ true }
  linkStyle={ { color: 'red', fontSize: 15 } }>
    
    <Text style={ { fontSize: 15 } }>
     PROP "LinkStyle" personaliza la url:  https://www.google.com/
    </Text>
  </Hyperlink>
  <Text>---------------------------------------------</Text>
  <Hyperlink
     linkDefault={ true }
    linkStyle={ { color: '#2980b9', fontSize: 20 } }
    
    linkText={ url => 'FACEBOOK' }
  >
    <Text style={ { fontSize: 15 } }>
     PROP "LinkText" realiza un parce de la url:
     https://facebook.com
    </Text>
  </Hyperlink>
  <Text>---------------------------------------------</Text>
  <Hyperlink
    
    linkDefault={ true }
    injectViewProps={ url => ({
          style: url === 'https://google.com' ? { color: 'green' } : { color: 'orange' },
          //any other props you wish to pass to the component
    }) }
  >
    <Text>PROP "injectViewProp" permite traspasar props entre componentes según si coincide la url o no:</Text>
    <Text>This url looks red https://google.com</Text>
    <Text> and this url looks blue https://facebook.com </Text>
  </Hyperlink>
    </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    marginTop: 300,
    alignItems: "center",
    alignContent: "center",
    textAlign: "center",
    backgroundColor: "white",
  },
  styleBoxFB: {
    borderRadius: 1,
    height: 80,
    width: 80,
    backgroundColor: "green",
  },
  styleBoxYT: {
    borderRadius: 1,
    height: 80,
    width: 80,
    backgroundColor: "yellow",
  },
  styleBoxTW: {
    borderRadius: 1,
    height: 80,
    width: 80,
    backgroundColor: "red",
  },
  buttonMargin: {
    marginTop: 20,
  },
});

export default Hyperlink_;

//PROPS MAS USADOS
//color=color de texto o icono
// size=Tamaño del icono
// iconStyle=Define el estilo del icono, para setear margenes o color.
// backgroundColor= Define el color de fondo del boton
// borderRadius= Radio del borde del boton
// onPress= Funcion que llama lo que queramos cuando apretamos el boton
