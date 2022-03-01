import { Image, KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AppText from '../../../Components/AppText'
import AppButton from '../../../Components/AppButton'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { Text } from 'react-native-paper'
import { Colors } from '../../../Constants/Colors'
import ScreenContainer from '../../../Containers/ScreenContainer';
import AuthContainer from '../../../Containers/AuthContainer';
import AppScreenTitle from '../../../Components/AppScreenTitle';

export default function VerificationCodeScreen() {
    const verificationImage = './../../../assets/images/verification.png';
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({ value, setValue });
    const CELL_COUNT = 4;

    return (
        <AuthContainer>
            <AppScreenTitle width={250} height={250} source={require(verificationImage)}>Verification</AppScreenTitle>

            <View style={{ marginVertical: 20, }}>
                <AppText style={{ marginBottom: 10 }} bold size={18} center>
                    Enter The Verification Code We Just Sent You On Your Email
                </AppText>

                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFiledRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                        <View
                            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
                            onLayout={getCellOnLayoutHandler(index)}
                            key={index}
                            style={[styles.cellRoot, isFocused && styles.focusCell]}>
                            <Text style={styles.cellText}>F{symbol || (isFocused ? <Cursor /> : null)}</Text>
                        </View>
                    )}
                />

            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginVertical: 15 }}>
                <AppText size={18}>If you didn't recive a code!</AppText>
                <TouchableOpacity>
                    <AppText size={18} color={Colors.secondary}> Resend !</AppText>
                </TouchableOpacity>
            </View>
            <View style={{ paddingBottom: 25 }}>
                <AppButton center>Reset</AppButton>
            </View>
        </AuthContainer>

    )
}

const styles = StyleSheet.create({
    root: { padding: 20, minHeight: 300 },
    title: { textAlign: 'center', fontSize: 30 },
    codeFiledRoot: {
        marginTop: 20,
        width: 280,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    cellRoot: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    cellText: {
        color: '#000',
        fontSize: 36,
        textAlign: 'center',
    },
    focusCell: {
        borderBottomColor: '#007AFF',
        borderBottomWidth: 2,
    },
})