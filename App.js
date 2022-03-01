import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from './app/Constants/Colors';
import ForgetPasswordScreen from './app/screens/Auth/FrogerPasswordScreen';
import LoginScreen from './app/screens/Auth/LoginScreen';
import RegisterScreen from './app/screens/Auth/RegisterScreen';
import ResetPassword from './app/screens/Auth/ResetPaassword';
import VerificationCodeScreen from './app/screens/Auth/VerificationCodeScreen';
import SplashScreen from './app/screens/SplashScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor={Colors.secondary} style="light" />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#FBFAF9',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
