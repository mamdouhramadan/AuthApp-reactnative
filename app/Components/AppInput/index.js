import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-paper'
import { Colors } from '../../Constants/Colors'
import AnimatedStyles from 'react-native-animated-styles';

export default function AppInput({ valid, icon, value, password, onChangeText, placeholder, name, style }) {

    const [focused, setfocused] = useState(false)
    const onBlur = () => {
        setfocused(false)
    }
    const onFocus = () => {
        setfocused(true)
    }
    const inputTheme = {
        roundness: 40,
        colors: {
            // placeholder: 'white',
            text: Colors.primary,
            primary: Colors.primary,
            underlineColor: 'transparent',
            background: '#ffffff'
        }
    }

    return (
        <AnimatedStyles.View
            animatedStyle={styles.inputContainerFocused} // Style will set after "active" variable be True
            style={[styles.inputContainer, style]} // Default style, and the style that will set when "active" variable is False
            active={focused} // active variable , Will help us to change the style 
        >
            <TextInput
                onBlur={() => onBlur()} // function run When leave the input 
                onFocus={() => onFocus()} // function to run when be focused in the input
                style={styles.textInput} // input style
                placeholder={placeholder.charAt(0).toUpperCase() + placeholder.substr(1).toLowerCase()} // To convert Placeholder to title case
                autoComplete={false} // Dont Allow Autocomplete 
                underlineColor={"transparent"}
                onChangeText={onChangeText} // Function to detect Typing Changes
                theme={inputTheme} // Overide Theme Style
                value={value} // Default Value for this input
                secureTextEntry={password} // for Passord , hide the text
                left={<TextInput.Icon color={Colors.primary} name={icon} />} // Left Side Icon
                right={valid && <TextInput.Icon color={Colors.success} name={"check-circle"} />} // Right Side Icon
            />
        </AnimatedStyles.View>
    )
}

const styles = StyleSheet.create({
    // Default Style
    inputContainer: {
        borderRadius: 55,
        overflow: 'hidden',
        // backgroundColor: '#333',
        marginVertical: 10,
        shadowColor: "#666",
        shadowOffset: {
            width: 0,
            height: 9,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2.16,
        elevation: 15,
    },
    // OnFocus Style
    inputContainerFocused: {
        borderWidth: 1,
        borderColor: Colors.primary,
        // borderStyle: 'solid',
        shadowColor: "#333",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.05,
        shadowRadius: 2.16,
        elevation: 2,
    },
    textInput: {
        borderRadius: 50,
        borderWidth: 0,
        height: 55,
        paddingHorizontal: 20,
        margin: -3
    },
})