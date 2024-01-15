import { StyleSheet, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const Icon = ({ name, size, color, onPress }) => {
  return (
    <View style={styles.container}>
      <Ionicons name={name} size={size} color={color} onPress={onPress} />
    </View>
  );
};

export default Icon;

const styles = StyleSheet.create({
  container: {
    padding: 3,
    paddingHorizontal: 7,
    marginHorizontal: 4,
    backgroundColor: "#ffffff1f",
    borderRadius: 4,
  },
});
