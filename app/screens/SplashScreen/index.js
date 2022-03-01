import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native';
import AppLogo from '../../Components/AppLogo';

export default function SplashScreen() {
    const bg_image = "./../../assets/images/background.jpg";
    const logo = "./../../assets/images/logo.png";
    const loading = "./../../assets/lottie/loading.json";

    return (
        <View style={styles.container}>
            <ImageBackground source={require(bg_image)} resizeMode="cover" style={styles.image}>
                <AppLogo style={{ marginTop: -50, }} />
                <LottieView style={styles.loading} source={require(loading)} autoPlay loop />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    },


    text: {
        color: "white",
        fontSize: 42,
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000c0"
    }, loading: {
        marginTop: 100
    }
});