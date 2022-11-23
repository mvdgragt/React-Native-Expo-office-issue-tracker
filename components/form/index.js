import React, { useState, useEffect } from "react";
import { StyleSheet } from "react-native";
import * as MediaLibrary from "expo-media-library";
// import CameraButton from "../components/buttons";
// import { Camera } from "./camera";
import { Form } from "./form";

const MyReactNativeForm = (props) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [description, setDescription] = useState("");
  const [items, setItems] = useState([
    { label: "Belysning", value: "belysning" },
    { label: "Övrigt", value: "ovrigt" },
  ]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [image, setImage] = useState(null);
  const [startCamera, setStartCamera] = useState(false);
  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  //   const [type, setType] = useState(Camera.Constants.Type.back);
  //   const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  //   const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      const cameraStatus = await ExpoCamera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus === "granted");
    })();
  }, []);

  return startCamera ? (
    <Camera setImage={setImage} setStartCamera={setStartCamera} />
  ) : (
    <Form
      setImage={setImage}
      image={image}
      setSelectedCategory={setSelectedCategory}
      setStartCamera={setStartCamera}
      setDescription={setDescription}
    />
  );
};

const width_proportion = "45%";

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
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
  textInput: {
    marginTop: 15,
    width: width_proportion,
  },
  cameraButton: {
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "white",
    width: 160, //iphoneX
    // width: width_proportion,
  },
  submitButton: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#a1d1ca",
  },
  submitButtonText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  cameraContainer: {},
  camera: {
    minHeight: 1000, //strange way of having camera full screen
  },
});

export default MyReactNativeForm;
