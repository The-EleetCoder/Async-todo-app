import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform, StyleSheet, Text, View } from "react-native";
import TodoScreen from "./src/screen/TodoScreen";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <View>
        <StatusBar style="auto" />
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
