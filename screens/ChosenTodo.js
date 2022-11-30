import React, { useState, useEffect } from "react";
import { Card, Button, Paragraph, Text } from "react-native-paper";
import { SafeAreaView, StyleSheet, View } from "react-native";

const ChosenTodo = ({ navigation, GlobalState }) => {
  const { chosenTodo, deleteTodo } = GlobalState;
  const image = chosenTodo.image;
  const deleteItem= () => {
    alert(chosenTodo.description)
    deleteTodo(chosenTodo.description)
    navigation.navigate('Home')
  };

  return (
    <SafeAreaView style={{ flex: 1, margin: 20, marginTop: 100,
     alignContent: "center" }}>
      <Card>
        <Card.Content>
          <Card.Cover source={{ uri: image }} />
          <Text variant="titleLarge">{chosenTodo.category}</Text>

          <Text variant="bodyLarge">{chosenTodo.description}</Text>

          <Card.Actions>
            <Button 
            onPress={() => navigation.navigate('Home')}
            >Back</Button>
            <Button onPress={deleteItem}
            >Delete</Button>

          </Card.Actions>
        </Card.Content>
      </Card>
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
