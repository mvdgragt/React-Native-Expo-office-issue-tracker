import { StyleSheet, View, Text, Image } from "react-native";
import Constants from "expo-constants";

export default function Header() {
  return (
    <View style={styles.header}>
<Image source={require('../assets/images/knowitCircle.png')}   style={{ width: 100, height: 100 }}/>
      <Text style={styles.text}>Att göra</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    width: "100%",
    alignItems: "center",
    // justifyContent: 'center',
    backgroundColor: "#e4e1da",
    paddingTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    zIndex: 5,
  },
  text: {
    fontSize: 25,
    fontWeight: "500",
    color: "#141414",
    paddingTop: 10,
  },
});
