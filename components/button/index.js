import { StyleSheet } from "react-native";
import { Button as PaperButton } from "react-native-paper";
import CameraButton from "./cameraButton";

const modes = {
  primary: "contained",
  secondary: "outlined",
};

export const Button = ({
  isCamera,
  onPress,
  icon,
  children,
  style = "primary",
}) => {
  return isCamera ? (
    <CameraButton title={"Ta en bild"} icon="camera" onPress={onPress} />
  ) : (
    <PaperButton
      mode={modes[style]}
      icon={icon}
      style={styles[style]}
      onPress={onPress}
    >
      {children}
    </PaperButton>
  );
};

const styles = StyleSheet.create({
  primary: {
    marginTop: 15,
    borderRadius: 10,
    backgroundColor: "#a1d1ca",
    color: "white",
  },
  secondary: {
    marginTop: 5,
    borderRadius: 10,
    backgroundColor: "white",
    color: "black",
  },
});
