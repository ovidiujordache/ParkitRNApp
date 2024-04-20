import React, { useState } from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const EVInfoModal = ({ visible, onClose }) => {

  const currentDate = new Date().toLocaleDateString(); 
  const infoItems = [
    "Price /KW : 0.40 €",
    "Price parking/h : 2 €",
       `Price Update: ${currentDate}`
  ];

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Important Information</Text>
          {infoItems.map((item, index) => (
            <Text key={index} style={styles.itemText}>{item}</Text>
          ))}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#50cf92', // Updated background color
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  itemText: {
    textAlign: 'center',
    fontSize: 20,
    marginBottom: 10,
    color:'#182d05'
  },
  button: {
    marginTop: 20,
    backgroundColor: '#2196F3',
    padding: 10,
    elevation: 2,
    borderRadius: 20
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

export default EVInfoModal;
