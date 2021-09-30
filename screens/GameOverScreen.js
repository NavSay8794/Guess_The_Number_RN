import React from "react";

import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import Colors from "../constants/Colors";

import GameButton from "../components/GameButton";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <BodyText>The Game Is Over</BodyText>
      <View style={styles.imageContainer}>
        <Image
          fadeDuration={1000}
          source={require("../assets/success.png")}
          // source={{
          //   uri: `https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_1280.jpg`,
          // }}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      <View style={styles.resultContainer}>
        <BodyText>
          Your Phone Needed <Text style={styles.highlight}>{props.rounds}</Text>{" "}
          rounds to guess the user entered number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <GameButton onClick={props.onRestart}>Reset</GameButton>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderColor: "black",
    borderWidth: 2,
    overflow: "hidden",
    marginVertical: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    width: "80%",
  },
  highlight: {
    color: Colors.primary,
  },
});

export default GameOverScreen;
