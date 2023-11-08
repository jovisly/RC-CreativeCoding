import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Button = ({ onPress, iconName, title }) => {
  const iconSize = 18;

  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 6,
        paddingVertical: 8,
        paddingLeft: 10,
        paddingRight: 16,
        backgroundColor: "blue",
        borderRadius: 6,
      }}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={iconName} size={iconSize} color={"white"} />

      <Text
        style={{
          fontSize: 18,
          lineHeight: 22,
          fontWeight: "bold",
          color: "white",
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
