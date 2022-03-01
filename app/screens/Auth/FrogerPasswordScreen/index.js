import { Image, KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import AppText from '../../../Components/AppText'
import AppInput from '../../../Components/AppInput'
import AppButton from '../../../Components/AppButton'
import ScreenContainer from '../../../Containers/ScreenContainer'
import AuthContainer from '../../../Containers/AuthContainer'
import AppScreenTitle from '../../../Components/AppScreenTitle'

export default function ForgetPasswordScreen() {
    const resetImage = './../../../assets/images/forget_password.png';

    const [form, setformValue] = useState({ email: '' });
    const { email } = form;

    return (
        <AuthContainer>

            <AppScreenTitle width={250} height={250} source={require(resetImage)}>Forgot Password ?</AppScreenTitle>

            <View style={{ marginVertical: 20, }}>
                <AppText style={{ marginBottom: 10 }} bold size={18} center>
                    Enter The Email Address Associated With Your Account
                </AppText>
                <AppText gray style={{ marginBottom: 5, padding: 10 }} size={16} center>
                    We Will Email You A Link To Reset Your Password
                </AppText>
                <AppInput
                    placeholder={"email"}
                    value={email}
                    icon={"email-outline"}
                    valid={email.length > 2}
                    onChangeText={(email) => setformValue({ ...form, email })} />

            </View>
            <View style={{ paddingBottom: 25 }}>
                <AppButton center>Reset</AppButton>
            </View>
        </AuthContainer>

    )
}

const styles = StyleSheet.create({})