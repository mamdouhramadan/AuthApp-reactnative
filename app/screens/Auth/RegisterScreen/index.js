import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AppLogo from '../../../Components/AppLogo';
import AppText from '../../../Components/AppText';
import { Colors } from '../../../Constants/Colors';
import AppInput from '../../../Components/AppInput';
import AppButton from '../../../Components/AppButton';
import ScreenContainer from '../../../Containers/ScreenContainer';

export default function RegisterScreen() {
    const inputTheme = {
        roundness: 40,
        colors: {
            placeholder: 'white',
            text: Colors.primary,
            primary: Colors.primary,
            underlineColor: 'transparent',
            background: '#ffffff'
        }
    }
    const [fullname, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");

    const handelNameChange = (fullname) => {
        setFullname(fullname)
        console.log(fullname)
    }
    const handelEmailChange = (email) => {
        setEmail(email)
        console.log(email)
    }
    const handelPhoneChange = (phone) => {
        setPhone(phone)
        console.log(phone)
    }
    const handelPasswordChange = (password) => {
        setPassword(password)
        console.log(password)
    }
    const handelRePasswordChange = (repassword) => {
        setRePassword(repassword)
        console.log(repassword)
    }
    return (

        <ScreenContainer ScreenContainer >
            <KeyboardAvoidingView enabled style={{ paddingTop: 50, paddingBottom: 20, paddingHorizontal: 30 }}>
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <AppLogo />
                </View>

                <View style={{ marginVertical: 20 }}>

                    <AppText style={{ marginBottom: 5 }} bold size={28} center>Let's Get Started!</AppText>
                    <AppText style={{ marginBottom: 5 }} gray size={16} center>Create an account to get all feartures</AppText>

                    <View style={{ marginVertical: 15 }}>
                        <AppInput
                            placeholder={"Full Name"}
                            value={fullname}
                            icon="account-outline"
                            valid={fullname.length > 2}
                            onChangeText={handelNameChange} />
                        <AppInput
                            placeholder={"email"}
                            value={email}
                            icon="email-outline"
                            valid={email.length > 2}
                            onChangeText={handelEmailChange} />
                        <AppInput
                            placeholder={"Phone Number"}
                            value={phone}
                            icon={"phone-outline"}
                            valid={phone.length > 2}
                            onChangeText={handelPhoneChange} />
                        <AppInput
                            password
                            placeholder={"password"}
                            value={password}
                            icon={"lock-outline"}
                            valid={password.length > 2}
                            onChangeText={handelPasswordChange} />

                        <AppInput
                            password
                            placeholder={"Confirm Password"}
                            value={repassword}
                            icon={"lock-outline"}
                            valid={repassword.length > 2}
                            onChangeText={handelRePasswordChange} />

                    </View>
                    <View>

                        <AppButton center>Register</AppButton>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                        <AppText>Already Have an Account? </AppText>
                        <AppText color={Colors.secondary}>Login</AppText>
                    </View>

                </View>
            </KeyboardAvoidingView>
        </ScreenContainer >
    )
}

const styles = StyleSheet.create({})