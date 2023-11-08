import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Button from "./components/Button";

const RenderIntro = ({ setIsIntro }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 18 }}>You can only make one dot at a time!</Text>
      <View style={{ height: 18 }} />
      <Button
        title="OK!"
        onPress={() => {
          setIsIntro(false);
        }}
        iconName="thumb-up"
      />
      <StatusBar style="auto" />
    </View>
  );
};

const RenderGame = () => {
  return null;
};

export default function App() {
  const [isIntro, setIsIntro] = useState(true);
  if (isIntro) {
    return <RenderIntro setIsIntro={setIsIntro} />;
  } else {
    return <RenderGame />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
