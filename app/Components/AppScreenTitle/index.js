import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppLogo from '../AppLogo';
import AppText from '../AppText';

export default function AppScreenTitle({ logo, children, width, height, source }) {
    const ImageStyle = { width: width, height: height, resizeMode: 'contain' }
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <AppText bold size={28} center>{children}</AppText>
            {/* Set Image if source prop is exist and has a value */}
            {source && <Image style={ImageStyle} source={source} />}
            {/* Add Logo if logo prop is just exist */}
            {logo && <AppLogo />}
        </View>
    )
}

const styles = StyleSheet.create({})