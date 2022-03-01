import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { Colors } from '../../Constants/Colors'

export default function AppButton({ rounded, color, icon, onPress, children, style, center, fullwidth }) {
    return (
        <View style={style}>
            <TouchableOpacity onPress={onPress}>
                <Button
                    style={[styles.buttonStyle, fullwidth && styles.btnFullWidth, center && styles.btnCenter, rounded || styles.rounded]}
                    icon={icon} // Icon Name 
                    mode="contained" // Button Mode {'text' | 'outlined' | 'contained'}
                    color={color || Colors.secondary} // If color prop is exist apply it color , else Make it with Primary Color
                // Onpress Function
                >
                    <Text style={{ color: "#fff", fontSize: 16 }}>{children}</Text>
                </Button>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginVertical: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: 50 + "%",
        borderRadius: 8,
        // Start Shadow
        shadowColor: "#666",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2.16,
        elevation: 15,
        // End Shadow
    },
    rounded: { borderRadius: 50 },
    btnCenter: { alignSelf: 'center' },
    btnFullWidth: { width: 100 + "%" },
})