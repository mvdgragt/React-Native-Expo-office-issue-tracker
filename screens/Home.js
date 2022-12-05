import React, { useState, useEffect } from "react";
import { FAB } from "react-native-paper";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ListItems from "../components/listItems";
import Modal from "react-native-modal";
import Form from "../components/form/form";
import Header from "../components/Header";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config";

const Home = ({ GlobalState, navigation }) => {
  const {
    modalVisible,
    setModalVisible,
    todo,
    setTodo,
    data,
    chosenTodo,
    setChosenTodo,
    onUpdate,
    setOnUpdate,
    deleteTodo,
    addTodo,
  } = GlobalState;

  const handleClose = () => setModalVisible(false);
  const handleTodo = (item) => setChosenTodo(item);

  const fetchPost = async () => {
    await getDocs(collection(db, "todos")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setTodo(newData);
    });
  };

  useEffect(() => {
    fetchPost();
  }, [onUpdate]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#e4e1da" }}>
      {modalVisible ? (
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
        >
          <View style={styles.modalView}>
            <Form
              data={data}
              handleClose={handleClose}
              setTodo={setTodo}
              addTodo={addTodo}
              onUpdate={onUpdate}
              setOnUpdate={setOnUpdate}
            />
          </View>
        </Modal>
      ) : (
        <View style={styles.containerMain}>
          <Header />

          <ListItems
            data={todo}
            handleTodo={handleTodo}
            deleteTodo={deleteTodo}
            chosenTodo={chosenTodo}
            setChosenTodo={setChosenTodo}
            onUpdate={onUpdate}
            setOnUpdate={setOnUpdate}
            navigation={navigation}
          />
          <View style={styles.bottomView}>
            <FAB
              style={styles.fab}
              animated="true"
              mode="elevated"
              label="Ny Uppgift"
              icon="plus"
              onPress={() => setModalVisible(true)}
            />
          </View>
        </View>
      )}
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

export default Home;
