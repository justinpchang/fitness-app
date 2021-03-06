import React from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import useAuthStore from '../../stores/AuthStore';
import { BlurBackground, Title } from '../../components';

export default function RegistrationScreen({ navigation }) {
    const [fullName, setFullName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [confirmPassword, setConfirmPassword] = React.useState('');
    const signUp = useAuthStore((state) => state.signUp);

    const onFooterLinkPress = () => {
        navigation.navigate('Login');
    };

    const onRegisterPress = () => {
        if (password !== confirmPassword) {
            alert("Passwords don't match.");
            return;
        }

        signUp({ email, password, fullName });
    };

    return (
        <BlurBackground>
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    style={{ flex: 1, width: '100%' }}
                    keyboardShouldPersistTaps="always"
                >
                    <Title
                        mainText="Welcome!"
                        style={styles.title}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Full Name"
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setFullName(text)}
                        value={fullName}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                        placeholderTextColor="#aaaaaa"
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder="Password"
                        onChangeText={(text) => setPassword(text)}
                        value={password}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholderTextColor="#aaaaaa"
                        secureTextEntry
                        placeholder="Confirm Password"
                        onChangeText={(text) => setConfirmPassword(text)}
                        value={confirmPassword}
                        underlineColorAndroid="transparent"
                        autoCapitalize="none"
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onRegisterPress()}
                    >
                        <Text style={styles.buttonTitle}>Create account</Text>
                    </TouchableOpacity>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>
                            Already got an account?{' '}
                            <Text
                                onPress={onFooterLinkPress}
                                style={styles.footerLink}
                            >
                                Log in
                            </Text>
                        </Text>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </BlurBackground>
    );
}
