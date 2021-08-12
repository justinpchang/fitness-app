import React from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import useAuthStore from '../../stores/AuthStore.js';
import { BlurBackground, Title } from '../../components';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const signIn = useAuthStore(state => state.signIn);

    const onFooterLinkPress = () => {
        navigation.navigate('Registration');
    };

    const onLoginPress = () => {
        signIn({ email, password });
    };

    return (
        <BlurBackground>
            <View style={styles.container}>
                <KeyboardAwareScrollView
                    style={{ flex: 1, width: '100%' }}
                    keyboardShouldPersistTaps="always"
                >
                    <Title
                        mainText="Welcome"
                        subText="Back"
                        style={styles.title}
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
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onLoginPress()}
                    >
                        <Text style={styles.buttonTitle}>Log in</Text>
                    </TouchableOpacity>
                    <View style={styles.footerView}>
                        <Text style={styles.footerText}>
                            Don't have an account?{' '}
                            <Text
                                onPress={onFooterLinkPress}
                                style={styles.footerLink}
                            >
                                Sign up
                            </Text>
                        </Text>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        </BlurBackground>
    );
}
