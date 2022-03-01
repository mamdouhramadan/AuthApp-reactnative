import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function AppLogo({ style }) {
    // Logo Image Path
    const logo = "./../../assets/images/logo.png";

    return (
        <View style={style}>
            <Image
                resizeMode="contain"
                style={styles.logo}
                source={require(logo)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
        maxWidth: 70 + "%",
    },
})