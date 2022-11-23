import React, { useRef } from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "../button";

export const Camera = ({ setImage, setStartCamera }) => {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef)
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log(data);
        setImage(data.uri);
        setStartCamera(false);
      } catch (e) {
        console.log(e);
      }
  };

  return (
    <View style={styles.cameraContainer}>
      <ExpoCamera
        style={styles.camera}
        type={CameraType.back}
        ref={cameraRef}
      >
        <View>
          <Button isCamera onPress={takePicture} />
        </View>
      </ExpoCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  cameraContainer: {},
  camera: {
    minHeight: 1000, //strange way of having camera full screen
  },
});
