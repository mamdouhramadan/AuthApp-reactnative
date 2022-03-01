import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScreenContainer({ children }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
                {children}
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({})