import { StyleSheet, View, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
import TaskView from "../components/TaskView";
import Fallback from "../components/Fallback";

const TodoScreen = () => {
  const [todoText, setTodoText] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateId, setUpdateId] = useState(null);

  // CREATE
  const addHandler = () => {
    setTodoArray([...todoArray, { id: Date.now().toString(), text: todoText }]);
    setTodoText("");
  };

  // UPDATE & SAVE
  const saveHandler = () => {
    const filteredArray = todoArray.filter((item) => item.id !== updateId);
    setTodoArray([...filteredArray, { id: updateId, text: todoText }]);
    setTodoText("");
    setIsUpdating(false);
  };
  const updateHandler = (item) => {
    setIsUpdating(true);
    setUpdateId(item.id);
    setTodoText(item.text);
  };

  // DELETE
  const deleteHandler = (id) => {
    const filteredArray = todoArray.filter((item) => item.id !== id);
    setTodoArray(filteredArray);
  };

  const renderItem = ({ item }) => {
    return (
      <TaskView
        text={item.text}
        updateHandler={updateHandler.bind(this, item)}
        deleteHandler={deleteHandler.bind(this, item.id)}
      />
    );
  };

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
      <Button onPress={isUpdating ? saveHandler : addHandler}>
        {isUpdating ? "SAVE" : "ADD"}
      </Button>

      {/* Fallback */}
      {todoArray.length === 0 && <Fallback />}

      {/* task view */}
      <FlatList
        data={todoArray}
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
