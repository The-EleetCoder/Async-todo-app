import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "./Icon";

const TaskView = ({ text, updateHandler, deleteHandler }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.iconContainer}>
        <Icon name="create" size={32} color="#005500" onPress={updateHandler} />
        <Icon
          name="trash"
          size={32}
          color="#930000d8"
          onPress={deleteHandler}
        />
      </View>
    </View>
  );
};

export default TaskView;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderColor: "#0a499b",
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderLeftWidth: 0.1,
    backgroundColor: "#397ad0",
    marginHorizontal: 20,
    minHeight: 60,
    borderRadius: 7,
    justifyContent: "space-between",
    alignItems: "center",
    elevation: 5,
    marginBottom: 20,
    padding: 10,
  },
  text: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginLeft: 6,
    flex: 3,
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
});
