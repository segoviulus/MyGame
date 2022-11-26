import { StyleSheet, Text, View, Pressable } from "react-native"
import React, { useEffect, useState } from "react"
import Card from "../components/Card"
import colors from "../constants/colors"
import { useFonts } from "expo-font";

const GameScreen = () => {
  const [loaded] = useFonts({
    RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"),
    RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf"),
  })

  const [currentGuess, setCurrentGuess] = useState()

  useEffect(() => {
    setCurrentGuess(Math.floor(Math.random() * (100 - 1) + 1));
  }, [])

  if (!loaded) {
    return <Text>Cargando...</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.subTitle}>La suposicion del oponente</Text>
      <Text style={styles.guessNumber}>{currentGuess}</Text>
      <Card newStyles={styles.buttonContainer}>
      <Pressable>
        <Text style={ styles.upDownButton }>⬇️ Menor</Text>
      </Pressable>
      <Pressable>
        <Text style={ styles.upDownButton }>⬆️ Mayor</Text>
      </Pressable>
      </Card>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  subTitle: {
    fontFamily: "RalewayRegular",
    fontSize: 17,
},
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
    width: 300,
  },
  upDownButton: {
    fontFamily: "RalewayRegular",
    fontSize: 16,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: colors.primary,
    color: colors.secondary,
    height: 32,
    paddingLeft: 10,
    paddingRight: 10,
    borderRadius: 7,
},
guessNumber: {
  fontFamily: "RalewayBold",
  fontSize: 22,
  paddingBottom: 12,
}
})