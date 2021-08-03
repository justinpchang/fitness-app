import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import useAuthStore from '../../stores/AuthStore';
import { signOut } from '../../utils/AuthUtils';

export default function HomeScreen({ navigation }) {
    const user = useAuthStore((state) => state.user);

    return (
        <View style={styles.container}>
            {user?.fullName && (
                <Text style={styles.title}>Hi, {user.fullName}!</Text>
            )}
            <TouchableOpacity
                style={styles.button}
                onPress={() => signOut()}
            >
                <Text style={styles.buttonText}>Sign out</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Onboarding')}
            >
                <Text style={styles.buttonText}>Onboarding</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Focus')}
            >
                <Text style={styles.buttonText}>Select Focus</Text>
            </TouchableOpacity>
        </View>
    );
}
