import { StyleSheet, Text, View, TextInput } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";

const TodoScreen = () => {
  const [todoText, setTodoText] = useState("");

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
});
