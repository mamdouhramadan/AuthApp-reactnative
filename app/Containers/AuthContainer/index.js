import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenContainer from '../ScreenContainer'

export default function AuthContainer({ children }) {
    return (
        <ScreenContainer>
            <KeyboardAvoidingView enabled style={{ paddingTop: 50, paddingBottom: 20, paddingHorizontal: 30 }}>
                {children}
            </KeyboardAvoidingView>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({})