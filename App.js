import { useState } from "react";
import { StyleSheet, View, Text} from "react-native";
import Header from "./components/Header";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
import { useFonts } from "expo-font";

export default function App() {
  const [loaded] = useFonts({
    RalewayBold: require("./assets/fonts/Raleway-Bold.ttf"),
  })

  const [userNumber, setUserNumber] = useState()
  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
  }

  let content = <StartGameScreen onStartGame={handleStartGame} />

  if (userNumber) {
    content = <GameScreen/>
  }

  if (!loaded) {
    return <Text>Cargando...</Text>
  }

  return (
    <View style={styles.container}>
      <Header
        title={"ADIVINA EL NUMERO"}
        newStyles={{ fontFamily: "RalewayBold" }}
      />
      {content}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
