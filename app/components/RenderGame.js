import React, { memo, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { gameData } from "./gameData";
import Button from "../components/Button";
import * as colors from "../utils/colors";

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
        borderWidth: 1,
        borderColor: "grey",
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
            left: -5,
            top: -5,
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
        color={"#FFFFFF"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"#2B2D2D"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"#66BD74"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"#609BD3"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"#8E6FBE"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"#CA6387"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
      <OneColor
        color={"#DDA777"}
        currColor={currColor}
        setCurrColor={setCurrColor}
      />
    </View>
  );
};

const OneImageGrid = memo(
  ({ currColor, id, colorNum, trueColor, showTrueColor }) => {
    const [color, setColor] = useState("white");
    // console.log("rendering on eimage", id);
    return (
      <TouchableOpacity
        style={{
          width: 24,
          height: 24,
          backgroundColor: showTrueColor ? trueColor : color,
          borderColor: colors.grey300,
          borderWidth: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
        onPress={() => {
          setColor(currColor);
        }}
      >
        {showTrueColor === false && (
          <Text style={{ color: colors.grey400 }}>{colorNum}</Text>
        )}
      </TouchableOpacity>
    );
  }
);

const ImageGrid = memo(({ currColor }) => {
  const [showTrueColor, setShowTrueColor] = useState(false);
  return (
    <>
      <Button
        title={showTrueColor === true ? "Hide" : "Reveal"}
        onPress={() => {
          setShowTrueColor((prev) => !prev);
        }}
        iconName={showTrueColor === true ? "eye-off" : "eye"}
      />
      <View style={{ height: 24 }} />
      <FlatList
        data={gameData}
        numColumns={14}
        renderItem={({ item }) => (
          <OneImageGrid
            currColor={currColor}
            id={item.id}
            colorNum={item.colorNum}
            trueColor={item.color}
            showTrueColor={showTrueColor}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </>
  );
});

const RenderGame = () => {
  const [currColor, setCurrColor] = useState("#FFFFFF");
  return (
    <View style={styles.container}>
      <View style={{ height: 100 }} />
      <ColorPicker currColor={currColor} setCurrColor={setCurrColor} />
      <View style={{ height: 72 }} />
      <ImageGrid currColor={currColor} />

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
