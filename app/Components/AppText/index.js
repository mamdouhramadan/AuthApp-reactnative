import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../Constants/Colors'

export default function AppText({ color, gray, size, center, children, bold, style, ...rest }) {
    return (
        <View {...rest}>
            <Text
                style={
                    [
                        { color: color || Colors.primary, fontSize: size || 14 },
                        bold && styles.bold,
                        gray && styles.gray,
                        center && styles.center,
                        style
                    ]
                }>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    center: {
        textAlign: 'center',
    },
    gray: {
        color: Colors.gray
    },
    bold: {
        fontWeight: 'bold'
    }
})