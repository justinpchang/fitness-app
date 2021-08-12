import React from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from './styles';
import { BlurBackground } from '../../components';

export default function LandingScreen({ navigation }) {
    return (
        <BlurBackground>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../../../assets/yoga_mom.png')}
                />
            </View>
            <View style={styles.container}>
                <Text style={styles.titleText}>
                    FIT
                    <Text style={styles.titleNumber}>
                        5
                    </Text>
                </Text>
                <Text style={styles.subText}>
                    Fast workouts that motivate you.
                </Text>
                <Text style={styles.subText}>
                    Get started in just 5 minutes a day.
                </Text>
            </View>
            <View style={styles.buttonsContainer}>
                <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={() => navigation.navigate('Registration')}>
                    <Text style={styles.buttonText}>
                        Register
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.button, styles.logInButton]} onPress={() => navigation.navigate('Login')}>
                    <Text style={styles.buttonText}>
                        Log In
                    </Text>
                </TouchableOpacity>
            </View>
        </BlurBackground>
    );
}