import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View style={styles.fallbackContainer}>
      <Image source={require("../../assets/list.png")} style={styles.image} />
      <Text style={styles.fallbackText}>Please Enter Tasks!</Text>
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
  },
  fallbackContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  fallbackText: {
    fontFamily: "open-sans-bold",
    fontSize: 26,
    marginTop: 25,
    color: "#397ad0"
  },
});
