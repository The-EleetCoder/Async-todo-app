import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Alert,
  Keyboard,
} from "react-native";
import React, { useEffect, useState, useRef } from "react";
import Button from "../components/Button";
import TaskView from "../components/TaskView";
import Fallback from "../components/Fallback";
import { Dimensions } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TodoScreen = () => {
  const textInputRef = useRef(null);
  const [todoText, setTodoText] = useState("");
  const [todoArray, setTodoArray] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateId, setUpdateId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Load data from AsyncStorage when component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const storedTodoArray = await AsyncStorage.getItem("todoArray");
        if (storedTodoArray !== null) {
          setTodoArray(JSON.parse(storedTodoArray));
        }
      } catch (error) {
        console.error("Error loading data from AsyncStorage:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Save data to AsyncStorage whenever todoArray is updated
  useEffect(() => {
    const saveData = async () => {
      try {
        await AsyncStorage.setItem("todoArray", JSON.stringify(todoArray));
      } catch (error) {
        console.error("Error saving data to AsyncStorage:", error);
      }
    };

    saveData();
  }, [todoArray]);

  // CREATE
  const addHandler = () => {
    if (todoText === "") {
      Alert.alert("Note", "Please enter a task!");
      return;
    }
    setTodoArray([...todoArray, { id: Date.now().toString(), text: todoText }]);
    setTodoText("");
    Keyboard.dismiss();
  };

  // UPDATE & SAVE
  const saveHandler = () => {
    const filteredArray = todoArray.filter((item) => item.id !== updateId);
    setTodoArray([...filteredArray, { id: updateId, text: todoText }]);
    setTodoText("");
    setIsUpdating(false);
    Keyboard.dismiss();
  };
  const updateHandler = (item) => {
    setIsUpdating(true);
    setUpdateId(item.id);
    setTodoText(item.text);
    textInputRef.current.focus();
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
        ref={textInputRef}
      />

      {/* button */}
      <Button onPress={isUpdating ? saveHandler : addHandler}>
        {isUpdating ? "SAVE" : "ADD"}
      </Button>

      {/* Fallback */}
      {!isLoading && todoArray.length === 0 && <Fallback />}

      {/* task view */}
      <View style={styles.flatListContainer}>
        <FlatList
          data={todoArray}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
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
  flatListContainer: {
    height: Dimensions.get("window").height - 210,
  },
});
