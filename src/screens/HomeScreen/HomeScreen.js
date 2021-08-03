import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import useAuthStore from '../../stores/AuthStore';
import { signOut } from '../../utils/AuthUtils';

export default function HomeScreen({ navigation }) {
    const user = useAuthStore((state) => state.user);

    const onSignOutButtonPress = () => {
        signOut();
    };

    const gotoOnboarding = () => {
        navigation.navigate('Onboarding');
    };

    return (
        <View style={styles.container}>
            {user?.fullName && (
                <Text style={styles.title}>Hi, {user.fullName}!</Text>
            )}
            <TouchableOpacity
                style={styles.button}
                onPress={onSignOutButtonPress}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={gotoOnboarding}
            >
                <Text style={styles.buttonText}>Onboarding</Text>
            </TouchableOpacity>
        </View>
    );
}
