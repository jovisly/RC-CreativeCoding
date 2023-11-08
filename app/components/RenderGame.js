import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const OneColor = ({ color }) => {
  const size = 32;
  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
      }}
      onPress={() => {}}
    />
  );
};

const ColorPicker = () => {
  // A color bar is a row of colors.
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 6,
      }}
    >
      <Text style={{ fontSize: 18 }}> Pick Color: </Text>
      <OneColor color={"pink"} />
      <OneColor color={"yellow"} />
      <OneColor color={"gray"} />
      <OneColor color={"gray"} />
      <OneColor color={"gray"} />
      <OneColor color={"gray"} />
      <OneColor color={"gray"} />
      <OneColor color={"gray"} />
    </View>
  );
};

// Grids for user to fiill in color.

const RenderGame = () => {
  // What elements will be here?
  return (
    <View style={styles.container}>
      <View style={{ height: 80 }} />
      <ColorPicker />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default RenderGame;
