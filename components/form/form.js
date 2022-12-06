import React, { useState } from "react";
import { Formik } from "formik";
import { TextInput, List, Button } from "react-native-paper";
import SelectList from "react-native-dropdown-select-list";
import * as ImagePicker from "expo-image-picker";
import { colRef } from "../../config";
import { getStorage } from "firebase/storage";
import { getDocs, addDoc, serverTimestamp } from "firebase/firestore";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  Image,
  Alert,
} from "react-native";

const Form = ({ data, handleClose, onUpdate, setOnUpdate }) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image, setImage] = useState(null);
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dateStamp = [year, month, day].join("-");
  const value = selectedCategory;

  const uploadImage = async () => {
    setUploading(true);
    const response = fetch(image.uri);
    const blob = await (await response).blob();
    const filename = image.uri.substring(image.uri.lastIndexof("/") + 1);
    var ref = firebase.storage().ref().child(filename).put(blob);

    try {
      await ref;
    } catch (error) {
      console.log(error);
    }
    setUploading(false);
    Alert.alert("photo uploading...");
    setImage(null);
  };

  const pickImageAsync = async (handleChange) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0, // 0 means compress for small size, 1 means compress for maximum quality
    });
    if (!result.canceled) {
      console.log(result);
      handleChange(result.assets[0].uri);
      setImage(result.assets[0].uri);
      const storage = getStorage();
      const ref = ref(storage, "image.jpg");
      //convert inage to array of bytes
      const img = await fetch(result.assets[0].uri);
      // const bytes = await img.blob();
      uploadBytes(ref, result.bytes);
    }
  };

  getDocs(colRef)
    .then((snapshot) => {
      // console.log(snapshot.docs)
      let todos = [];
      snapshot.docs.forEach((doc) => {
        todos.push({ ...doc.data(), id: doc.id });
      });
      console.log(todos);
    })
    .catch((err) => {
      console.error(err.message);
    });

  const HideKeyboard = ({ children }) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <Formik
      initialValues={{
        category: "",
        description: "",
        image: "",
        bytes: "",
        date: dateStamp,
        createdAt: serverTimestamp(),
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        addDoc(colRef, values);
        handleClose();
        setOnUpdate(!onUpdate);
      }}
    >
      {({ handleChange, handleSubmit, values, setFieldValue }) => (
        <View style={styles.container}>
          <Text style={styles.title}>Ärendets kategori</Text>
          <SelectList
            setSelected={setSelectedCategory}
            data={data}
            placeholder="Välj kategori"
            boxStyles={{ backgroundColor: "white" }}
            dropdownStyles={{ backgroundColor: "white" }}
            dropdownItemStyles={{
              borderColor: "white",
              borderBottomWidth: 2,
            }}
            save={value}
            onSelect={() => setFieldValue("category", value)}
          />
          <HideKeyboard>
            <View>
              <TextInput
                name="description"
                disabled={!selectedCategory ? true : false}
                multiline
                theme={{ roundness: 8 }}
                mode="outlined"
                label="Description"
                style={styles.description}
                onChangeText={handleChange("description")}
                value={values.description}
              />
            </View>
          </HideKeyboard>

          <Text style={styles.imageTitle}>Bifoga fil</Text>
          <View>
            <Button
              disabled={!selectedCategory ? true : false}
              mode="outlined"
              style={styles.secondary}
              onPress={() => {
                pickImageAsync(handleChange("image"));
                {
                  Keyboard.dismiss;
                }
              }}
              value={image}
              onSelect={(value) => {
                setFieldValue(image, value);
              }}
            >
              Galleri
            </Button>

            <Button
              disabled={!selectedCategory ? true : false}
              mode="outlined"
              style={styles.secondary}
              // onPress={__startCamera}
              // onPress={Camera_3}
              // onPress={cameraRequestPermission}
            >
              Kamera
            </Button>
          </View>
          <View style={styles.imageTitle}>
            <Text style={styles.listItemTitle}>Ärendet som bifögas:</Text>
          </View>

          {selectedCategory && (
            <List.Item
              name="image"
              style={styles.listItem}
              title={selectedCategory}
              description={values.description}
              right={() => (
                <Image
                  source={{ uri: image }}
                  style={{ width: 60, height: 60, borderRadius: 5 }}
                />
              )}
            />
          )}

          <Button
            style={styles.submitButton}
            onPress={() => {
              handleSubmit();
              {
                uploadImage;
              }
            }}
          >
            <Text style={styles.submitButtonText}>Skicka ärendet</Text>
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default Form;

const styles = StyleSheet.create({
  description: {
    marginTop: 15,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  imageTitle: {
    marginTop: 15,
    fontWeight: "bold",
  },
  listItemTitle: {
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 5,
  },
  textInput: {
    marginTop: 15,
  },
  secondary: {
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "white",
    color: "black",
  },
  cameraButton: {
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "white",
  },
  submitButton: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#a1d1ca",
  },
  submitButtonText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "white",
  },
  listItem: {
    borderColor: "#cad5d3",
    // flexDirection: "row",
    marginBottom: 15,
    padding: 15,
    borderRadius: 5,
    backgroundColor: "#e4f3f1",
    shadowOpacity: 0.3,
    shadowRadius: 1,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
});
