import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const OneColor = ({ color, currColor, setCurrColor }) => {
  const size = 24;
  return (
    <TouchableOpacity
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: color,
        overflow: "visible",
      }}
      onPress={() => {
        setCurrColor(color);
      }}
    >
      {color === currColor && (
        <View
          style={{
            width: size + 8,
            height: size + 8,
            borderRadius: (size + 8) / 2,
            borderColor: "grey",
            borderWidth: 1,
            position: "absolute",
            left: -4,
            top: -4,
          }}
        />
      )}
    </TouchableOpacity>
  );
};

const ColorPicker = ({ currColor, setCurrColor }) => {
  // A color bar is a row of colors.
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      <Text style={{ fontSize: 18 }}> Pick Color: </Text>
      <OneColor
        color={"pink"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"yellow"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"gray"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"gray"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"gray"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"gray"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"gray"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"purple"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
    </View>
  );
};

// Grids for user to fiill in color.

const RenderGame = () => {
  const [currColor, setCurrColor] = useState("purple");
  return (
    <View style={styles.container}>
      <View style={{ height: 80 }} />
      <ColorPicker currColor={currColor} setCurrColor={setCurrColor} />
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
