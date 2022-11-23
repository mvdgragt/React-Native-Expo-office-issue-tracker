import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  Image,
} from "react-native";
import { Formik } from "formik";
import { TextInput, List, Button, Avatar, Snackbar } from "react-native-paper";
import SelectList from "react-native-dropdown-select-list";
import * as ImagePicker from "expo-image-picker";
// import * as MediaLibrary from "expo-media-library";
// import { Camera } from "./camera";
// import { Button } from "../button";

const Form = (props) => {
  const data = props.data;
  // console.log("form data :", data[0].value)
  // console.log("form data :", data[selectedCategory].key)
  // data[selectedCategory-1].value

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // const __startCamera = async () => {
  //   const { status } = await Camera.requestCameraPermissionsAsync();
  //   if (status === "granted") {
  //     console.log("start the camera");
  //     setStartCamera(true);
  //   } else {
  //     Alert.alert("Access denied");
  //   }
  // };

  const [description, setDescription] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image, setImage] = useState();
  const setModalVisible = false;
  // selectedCategory && console.log(data[selectedCategory - 1].value);
// console.log(data)
  // const selected = data[selectedCategory - 1].value

  return (
    <Formik
      initialValues={{ selectedCategory: "", description: "", image: "" }}
      onSubmit={(values) =>{
        console.log("values :", values)
      }}
    >
      {( props ) => (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <View style={styles.container}>
            <Text style={styles.title}>Ärendets kategori</Text>
            <SelectList
            name="selectedCategory"
              setSelected={setSelectedCategory}
              placeholder="Välj kategori"
              boxStyles={{ backgroundColor: "white" }}
              dropdownStyles={{ backgroundColor: "white" }}
              dropdownItemStyles={{
                borderColor: "white",
                borderBottomWidth: 2,               
              }}
              data={data}
              save="value"
              onValueChange={props.handleChange('selectedCategory')}
              selectedValue={props.values.selectedCategory}
              // onChange={value => setFieldValue('selectedCategory', value.value)}
              // onChangeText={props.handleChange('selectedCategory')}
              // value={props.values.selectedCategory}
              
            />
            <View>
              <TextInput
              name="description"
                disabled={!selectedCategory ? true : false}
                multiline
                theme={{ roundness: 8 }}
                mode="outlined"
                label="Description"
                style={styles.description}
                // onChangeText={setDescription}
                onChangeText={props.handleChange('description')}
                value={props.values.description}

              />
            </View>

            <Text style={styles.imageTitle}>Bifoga fil</Text>
            <View>
              <Button
                disabled={!selectedCategory ? true : false}
                mode="outlined"
                style={styles.secondary}
                onPress={pickImage}
                onChangeText={props.handleChange('image')}
                value={props.values.image}

              >
                Galleri
              </Button>

              {/* <Button style="secondary" onPress={__startCamera}>
                Kamera
              </Button> */}
            </View>
            <View style={styles.imageTitle}>
              <Text style={styles.listItemTitle}>Ärendet som bifögas:</Text>
            </View>

            {selectedCategory && (
              <List.Item
              name="image"
                style={styles.listItem}
                title={data[selectedCategory - 1].value}
                description={description}
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
              // onPress={(event) => props.onPress((event.target.value = false))}
              onPress={props.handleSubmit}

            >
              <Text style={styles.submitButtonText}>Skicka ärendet</Text>
            </Button>
          </View>
        </TouchableWithoutFeedback>
      )}
    </Formik>
  );
};

export default Form;

const width_proportion = "45%";

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
