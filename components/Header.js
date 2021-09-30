import React from "react";

import { View, Text, StyleSheet } from "react-native";
import Colors from "../constants/Colors";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View style={styles.header}>
      <TitleText>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 100,
    padding: 36,
    paddingBottom: 28,
    backgroundColor: Colors.backgroundH,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;
