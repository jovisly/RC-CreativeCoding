import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Button from "./components/Button";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>You can only make one dot at a time!</Text>
      <View style={{ height: 18 }} />
      <Button
        title="OK!"
        onPress={() => {
          console.log("PRESSED!");
        }}
        iconName="thumb-up"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
