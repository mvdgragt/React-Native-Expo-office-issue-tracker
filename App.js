import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import ChosenTodo from "./screens/ChosenTodo";
import { View, Text } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import { signInWithMicrosoft, signInWithMicrosoftredirect }  from './firebase-config';
import { initializeApp } from "firebase/app";
import {
  OAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithRedirect
} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDsTcyU26hvpjPiVOr2DDzQUP8xMing_uo",
  authDomain: "knowit-7c05d.firebaseapp.com",
  projectId: "knowit-7c05d",
  storageBucket: "knowit-7c05d.appspot.com",
  messagingSenderId: "925339236625",
  appId: "1:925339236625:web:329e77e8bf13b31b6b74b0",
  measurementId: "G-BZ0SMRHSP5"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth()
var provider = new OAuthProvider("microsoft.com");

const signUp = () => {
  signInWithRedirect(auth, provider)
}



const Stack = createNativeStackNavigator();

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [todo, setTodo] = useState("");
  const [chosenTodo, setChosenTodo] = useState("");

  const data = [
    { key: "Belysning", value: "Belysning" },
    { key: "Toalett", value: "Toalett" },
    { key: "Kontor", value: "Kontor" },
    { key: "Övrigt", value: "Övrigt" },
  ];

  const GlobalState = {
    modalVisible,
    setModalVisible,
    todo,
    setTodo,
    chosenTodo,
    setChosenTodo,
    data,
  };

  // const signInWithMicrosoftFunction = () => {signInWithMicrosoft};
//     const auth = getAuth();
//  const provider = new OAuthProvider('microsoft.com');
// const auth = getAuth();
// signInWithRedirect(authentication)

    // signInWithRedirect(auth, provider);
  // };

  return (
    /* <NavigationContainer >
  <Stack.Navigator >

    <Stack.Screen name="Home" options={{ headerShown: false }}>
      {props => <Home {...props} GlobalState={GlobalState}/>}
    </Stack.Screen>

    <Stack.Screen name="ChosenTodo" options={{ headerShown: false }}>
      {props => <ChosenTodo {...props} GlobalState={GlobalState}/>}
    </Stack.Screen>

  </Stack.Navigator>
</NavigationContainer> */

    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <PaperButton onPress={signInWithMicrosoft}>Click here</PaperButton>
      <PaperButton onPress={signInWithMicrosoftredirect}>Click here for redirect</PaperButton>
      <PaperButton onPress={signUp}>Click here for redirect signup</PaperButton>

    </View>
  );
};

export default App;
