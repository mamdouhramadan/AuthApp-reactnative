import { Image, KeyboardAvoidingView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import AppText from '../../../Components/AppText'
import AppInput from '../../../Components/AppInput'
import AppButton from '../../../Components/AppButton'
import ScreenContainer from '../../../Containers/ScreenContainer/'
import AuthContainer from '../../../Containers/AuthContainer'
import AppScreenTitle from '../../../Components/AppScreenTitle'

export default function ResetPassword() {
    const resetImage = './../../../assets/images/reset_password.png';
    const initState = {
        password: '',
        repassword: ''
    }
    const [value, setValue] = useState(initState);

    return (
        <AuthContainer>

            <AppScreenTitle source={require(resetImage)}>Reset Password</AppScreenTitle>

            <View style={{ marginVertical: 20 }}>
                <AppText style={{ marginBottom: 5 }} bold size={18} center>
                    Enter New Password And Login To Your Account
                </AppText>

                <View style={{ marginVertical: 15 }}>
                    <AppInput
                        password
                        placeholder={"password"}
                        value={value.password}
                        icon={"lock-outline"}
                        valid={value.password.length > 2}
                        onChangeText={(password) => setValue({ ...value, password })} />
                    <AppInput
                        password
                        placeholder={"password"}
                        value={value.repassword}
                        icon={"lock-outline"}
                        valid={value.repassword.length > 2}
                        onChangeText={(repassword) => setValue({ ...value, repassword })} />

                </View>
                <View>
                    <AppButton center>Reset</AppButton>
                </View>

            </View>
        </AuthContainer>
    )
}

const styles = StyleSheet.create({})