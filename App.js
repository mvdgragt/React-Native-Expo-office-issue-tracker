import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ChosenTodo from "./screens/ChosenTodo";
import { collection, addDoc } from "firebase/firestore";
import { db } from "./config";

const Stack = createNativeStackNavigator();

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState("");
  const [chosenTodo, setChosenTodo] = useState("");
  const [resultData, setResultData] = useState({});
  const [onUpdate, setOnUpdate] = useState(false);

  const data = [
    { key: "Belysning", value: "Belysning" },
    { key: "Toalett", value: "Toalett" },
    { key: "Kontor", value: "Kontor" },
    { key: "Övrigt", value: "Övrigt" },
  ];

  const addTodo = async (e) => {
    // e.preventDefault();
    alert(todo[0].id);
    try {
      const docRef = await addDoc(collection(db, "todos"), {
        todo: todo[0].id,
      });
      console.log("todo: ", todo);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const deleteTodo = (description) => {
    setTodo((prevTodos) => {
      return prevTodos.filter((todo) => todo.description != description);
    });
  };

  const GlobalState = {
    modalVisible,
    setModalVisible,
    todo,
    setTodo,

    chosenTodo,
    setChosenTodo,
    resultData,
    setResultData,
    addTodo,
    onUpdate,
    setOnUpdate,
    deleteTodo,
    data,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" options={{ headerShown: false }}>
          {(props) => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="ChosenTodo" options={{ headerShown: false }}>
          {(props) => <ChosenTodo {...props} GlobalState={GlobalState} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
