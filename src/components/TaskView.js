import { StyleSheet, Text, View } from "react-native";
import React from "react";

const TaskView = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TaskView;

const styles = StyleSheet.create({
  container: {
    borderColor: "#0a499b",
    borderBottomWidth: 3,
    borderRightWidth: 3,
    borderLeftWidth:0.1,
    backgroundColor: "#397ad0",
    marginHorizontal: 20,
    height: 60,
    borderRadius: 7,
    justifyContent: "center",
    elevation: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  text: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 16,
    marginLeft: 6,
  },
});
