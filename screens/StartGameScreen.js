import { Pressable, StyleSheet, Text, TouchableWithoutFeedback, View, Keyboard, KeyboardAvoidingView, Platform, ScrollView, } from 'react-native'
import React, { useState } from 'react'
import Card from '../components/Card'
import colors from '../constants/colors'
import Input from '../components/Input'
import { useFonts } from "expo-font";

const StartGameScreen = ({onStartGame}) => {
    const [loaded] = useFonts({
        RalewayBold: require("../assets/fonts/Raleway-Bold.ttf"),
        RalewayRegular: require("../assets/fonts/Raleway-Regular.ttf"),
      })
    

    const [value, setValue] = useState('')
    const [confirmed, setConfirmed] = useState(false)
    const [selectedNumber, setSelectedNumber] = useState('')

    const handleResetInput = () => {
        setValue('')
        setConfirmed(false)
    }

    const handleConfirmation = () => {
        const choseNumber = parseInt(value)
        if (choseNumber === NaN || choseNumber <= 0 || choseNumber > 99) return
        setConfirmed(true)
        setSelectedNumber(choseNumber)
        setValue('')
    }

    const handleInput = (text) => {
        setValue(text.replace(/[^0-9]/g, ''))
    }

    if (!loaded) {
        return <Text>Cargando...</Text>
      }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === "ios" ? "height" : "padding"}
        >
            <ScrollView>
                <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                    <View style={styles.screen}>
                        <Card>
                            <Text style={styles.subTitle}>Escribe un numero</Text>
                            <Input value={value} onChangeText={handleInput} />
                            <View style={styles.buttonContainer}>
                                <Pressable onPress={handleResetInput}>
                                    <Text style={styles.cleanButton}>Limpiar</Text>
                                </Pressable>
                                <Pressable onPress={handleConfirmation}>
                                    <Text style={{ ...styles.cleanButton, ...styles.confirmButton }}>Confirmar</Text>
                                </Pressable>
                            </View>
                        </Card>
                        {confirmed && (
                            <Card newStyles={{ marginTop: 50, width: 200 }}>
                                <Text style={styles.subTitle}>Tu numero es:</Text>
                                <Text style={styles.chooseNumber}>{selectedNumber}</Text>
                                <Pressable onPress={() => onStartGame(selectedNumber)}>
                                    <Text style={{ ...styles.cleanButton, ...styles.startButton }}>Comienza el juego</Text>
                                </Pressable>
                            </Card>
                        )}
                    </View>
                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default StartGameScreen

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        marginTop: 40,
    },
    subTitle: {
        fontFamily: "RalewayRegular",
        fontSize: 17,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    cleanButton: {
        fontFamily: "RalewayRegular",
        fontSize: 16,
        textAlign: 'center',
        textAlignVertical: 'center',
        backgroundColor: colors.buttonDelete,
        color: colors.secondary,
        height: 32,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 7,
    },
    confirmButton: {
        backgroundColor: colors.buttonConfirm,
    },
    startButton: {
        backgroundColor: colors.primary,
    },
    chooseNumber: {
        fontFamily: "RalewayBold",
        fontSize: 22,
        paddingBottom: 12,
    }
})