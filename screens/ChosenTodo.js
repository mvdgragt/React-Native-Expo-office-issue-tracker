import React, { useState, useEffect } from "react";
import { FAB } from "react-native-paper";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import ListItems from "../components/listItems";
import Modal from "react-native-modal";
import Form from "../components/form/form";
import Header from "../components/Header";

const ChosenTodo = ({ navigation, GlobalState }) => {
  const { chosenTodo } = GlobalState;

  return (
    <SafeAreaView style={{ flex: 1 }}>
           <Text>{chosenTodo.category}</Text>
           <Text>{chosenTodo.description}</Text>
           <Text>{chosenTodo.image}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    margin: 10,
  },
  bottomView: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: 20,
    position: "absolute",
    bottom: 0,
  },
  fab: {
    backgroundColor: "#a1d1ca",
  },
  textStyle: {
    color: "#fff",
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    elevation: 2,
    marginTop: 10,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default ChosenTodo;
