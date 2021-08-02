import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import useAuthStore from '../../stores/AuthStore';

export default function HomeScreen(props) {
    const signOut = useAuthStore(state => state.signOut);

    const onSignOutButtonPress = () => {
        signOut().then(() =>
            props.navigation.reset({
                index: 0,
                routes: [{ name: 'Login' }],
            })
        );
    };

    return (
        <View style={styles.container}>
            {props.user?.fullName && (
                <Text style={styles.title}>Hi, {props.user.fullName}!</Text>
            )}
            <TouchableOpacity
                style={styles.button}
                onPress={onSignOutButtonPress}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
        </View>
    );
}
