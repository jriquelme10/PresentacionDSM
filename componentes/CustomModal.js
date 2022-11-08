import React, { useState } from "react"; //Se importa React y el hook useState
import { Modal, StyleSheet, Text, Pressable, View, Image } from "react-native";//se Importan los componentes
import Warning from '../Warning.png';

const CustomModal = () => {

 const [modalVisible, setModalVisible] = useState(false);// Se crea un booleano modalvisible para ir actualizando el estado del modal con el hook useState cada vez que apretamos el boton
  return (
    <View style={styles.centeredView}> 

      <Modal
        animationType="slide" //Prop que controla la animacion del modal slide, fade o none
        transparent={true} //Prop que si esta true entrega un fondo transparente al abrir el modal y false un fondo blanco.
        visible={modalVisible} //Prop que determina cuando el modal esta visible
      >
        <View style={styles.centeredView}>
        <View style={styles.modalView}> 
          <Image style={styles.image} source={Warning}/>
            <Text style={styles.titleModal}>Este es un modal</Text>
          
            <Pressable
              style={[styles.button]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>ESCONDER MODAL</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
      
      <Pressable
        style={[styles.button]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>ABRIR MODAL</Text>
      </Pressable>

      

    </View>
  );
};

const styles = StyleSheet.create({
  
  image:{
    width:50,
    height:50
  },
  centeredView: {
    flex:1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding:20,
    alignItems: "center",
    shadowOpacity: 0.5,
  },
  button: {
    marginTop:10,
    padding: 10,
    backgroundColor:'black'
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    fontWeight:"bold"
  },
  titleModal:{
    fontSize:20,
    marginTop:10,
    fontWeight:'bold'
  },
  
});

export default CustomModal;