import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";

const Button = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // using external fonts
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "open-sans": require("../../assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("../../assets/fonts/OpenSans-Bold.ttf"),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Pressable style={({pressed})=> [styles.button, pressed && styles.buttonPressed]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderColor: "#ad0606da",
    borderWidth: 3,
    borderTopWidth: 0,
    backgroundColor: "red",
    marginHorizontal: 20,
    height: 45,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    elevation: 4
  },
  text: {
    color: "white",
    fontFamily: "open-sans-bold",
  },
  buttonPressed:{
    opacity: 0.75
  }
});
