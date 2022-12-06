import * as React from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { List, Avatar, Text } from "react-native-paper";

const ListItems = ({ data, setChosenTodo, navigation }) => {
  return (
    <FlatList
      keyExtractor={(item) => item.image}
      data={data}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => {
              setChosenTodo(item);
              navigation.navigate("ChosenTodo");
            }}
          >
            <List.Item
              style={styles.listItem}
              title={item.category}
              description={item.description}
              left={() => (
                <Avatar.Image
                  style={{ alignSelf: "center" }}
                  size={50}
                  source={{ uri: `${item.image}` }}
                />
              )}
              right={() => (
                <Text style={{ paddingTop: 10 }}>{item.date}</Text>
              )}
            />
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  listItem: {
    borderColor: "#cad5d3",
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

export default ListItems;
