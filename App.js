import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { firebase } from './src/firebase/config';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens';
import useAuthStore from './src/stores/AuthStore';
import { decode, encode } from 'base-64';
if (!global.btoa) {
    global.btoa = encode;
}
if (!global.atob) {
    global.atob = decode;
}

const Stack = createStackNavigator();

export default function App() {
    const user = useAuthStore((state) => state.user);
    const loadingUser = useAuthStore((state) => state.loadingUser);
    const persistantSignIn = useAuthStore((state) => state.persistantSignIn);

    useEffect(() => {
        persistantSignIn();
    }, []);

    if (loadingUser) {
        // TODO SplashScreen
        return <></>;
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {user ? (
                    <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginScreen} />
                        <Stack.Screen name="Registration" component={RegistrationScreen} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
