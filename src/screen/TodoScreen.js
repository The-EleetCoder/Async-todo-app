import { StyleSheet, Text, View, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import TaskView from "../components/TaskView";

const TodoScreen = () => {
  const [todoText, setTodoText] = useState("");

  const renderItem = ({ item }) => {
    return <TaskView text={item.text} />;
  };

  // will remove this later
  const dummyText = [
    {
      id: 1,
      text: "Read a book 1",
    },
    {
      id: 2,
      text: "Read a book 2",
    },
    {
      id: 3,
      text: "Read a book 3",
    },
    {
      id: 4,
      text: "Read a book 4",
    },
  ];

  return (
    <View>
      {/* input box */}
      <TextInput
        style={styles.textInput}
        placeholder="Add a task"
        onChangeText={(text) => setTodoText(text)}
        value={todoText}
      />

      {/* button */}
      <Button>ADD</Button>

      {/* task view */}
      <FlatList
        data={dummyText}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#397ad0",
    borderWidth: 2,
    marginHorizontal: 20,
    marginVertical: 30,
    height: 45,
    borderRadius: 7,
    padding: 15,
  },
  text: {
    color: "white",
    fontFamily: "open-sans-bold",
  },
});
