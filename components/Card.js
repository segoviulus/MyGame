import { StyleSheet, View } from 'react-native'
import React from 'react'
import colors from '../constants/colors'

const Card = ({ children, newStyles }) => {
    return (
        <View style={{...styles.inputContainer, ...newStyles}}>{children}</View>
    )
}

export default Card

const styles = StyleSheet.create({
    inputContainer: {
        width: 320,
        alignItems: 'center',
        padding: 20,
        shadowColor: colors.primary,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: colors.secondary
    },
})