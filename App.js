import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import TodoScreen from "./src/screen/TodoScreen";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function App() {
  // Loading Fonts
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
      });
      setFontsLoaded(true);
    };
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView>
      <View>
        <StatusBar style="dark" />
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
