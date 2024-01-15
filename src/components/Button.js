import { Pressable, StyleSheet, Text } from "react-native";

const Button = ({ children, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
      onPress={onPress}
    >
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
    elevation: 4,
    marginBottom: 65,
  },
  text: {
    color: "white",
    fontFamily: "open-sans-bold",
  },
  buttonPressed: {
    opacity: 0.75,
  },
});
