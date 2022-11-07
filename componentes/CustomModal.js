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
        
        <View style={styles.modalView}> 
          <Image style={styles.image} source={Warning}/>
            <Text style={styles.modalText}>Este es un modal</Text>
          
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>ESCONDER MODAL</Text>
            </Pressable>

          </View>

      </Modal>
      
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>ABRIR MODAL</Text>
      </Pressable>

      

    </View>
  );
};

const styles = StyleSheet.create({
  image:{
    width:'100%'
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default CustomModal;