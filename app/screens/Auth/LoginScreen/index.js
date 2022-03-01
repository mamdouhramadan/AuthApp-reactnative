import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import AppLogo from '../../../Components/AppLogo';
import AppTitle from '../../../Components/AppText';
import AppText from '../../../Components/AppText';
import { Colors } from '../../../Constants/Colors';
import AppInput from '../../../Components/AppInput';
import AppButton from '../../../Components/AppButton';
import ScreenContainer from '../../../Containers/ScreenContainer';

export default function LoginScreen() {

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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handelEmailChange = (email) => {
        setEmail(email)
        console.log(email)
    }
    const handelPasswordChange = (password) => {
        setPassword(password)

        console.log(password)
    }

    return (
        <ScreenContainer>
            <KeyboardAvoidingView enabled style={{ paddingTop: 50, paddingBottom: 20, paddingHorizontal: 30 }}>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <AppLogo />
                </View>

                <View style={{ marginVertical: 20 }}>

                    <AppText style={{ marginBottom: 5 }} bold size={28} center>Welcome Back</AppText>
                    <AppText style={{ marginBottom: 5 }} gray size={18} center>Login to your exsting account</AppText>
                    <View style={{ marginVertical: 15 }}>
                        <AppInput
                            name="email"
                            placeholder={"email"}
                            value={email}
                            icon="account-outline"
                            valid={email.length > 2}
                            onChangeText={handelEmailChange} />
                        <AppInput
                            password
                            name="password"
                            placeholder={"password"}
                            value={password}
                            icon={"lock-outline"}
                            valid={password.length > 2}
                            onChangeText={handelPasswordChange} />
                    </View>
                    <View>

                        <AppButton center>Login</AppButton>
                    </View>
                    <View>
                        <View style={{ justifyContent: 'center', flexDirection: 'row', marginVertical: 25 }}>
                            <View style={{ height: 1, backgroundColor: Colors.gray, marginHorizontal: 10, width: 10 + "%", alignSelf: 'center' }}></View>
                            <AppText center size={16} gray style={{ marginTop: -5 }}>or connect with</AppText>
                            <View style={{ height: 1, backgroundColor: Colors.gray, marginHorizontal: 10, width: 10 + "%", alignSelf: 'center' }}></View>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <AppButton rounded color={Colors.google} style={{ width: 48 + "%" }} fullwidth icon="google">Google</AppButton>
                            <AppButton rounded color={Colors.facebook} style={{ width: 48 + "%" }} fullwidth icon="facebook">Facebook</AppButton>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 20 }}>
                            <AppText>Don't have account? </AppText>
                            <AppText color={Colors.secondary}>Sign up</AppText>
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </ScreenContainer>
    )
}

const styles = StyleSheet.create({
})