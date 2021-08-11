import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/Header';
import styles from './styles';
import useAuthStore from '../../stores/AuthStore';
import { signOut } from '../../utils/AuthUtils';
import { COLORS } from '../../constants';
import IconButton from '../../components/IconButton';

export default function HomeScreen({ navigation }) {
    const user = useAuthStore((state) => state.user);

    return (
        <>
            <Header navigation={navigation} />
            <View style={styles.container}>
                <Text style={styles.firstName}>
                    {user?.fullName?.split(' ')?.[0]}
                </Text>
                <Text style={styles.lastName}>
                    {user?.fullName?.split(' ')?.[1]}
                </Text>
                <View style={styles.buttonsContainer}>
                    <IconButton
                        icon={
                            <Ionicons
                                name="ios-person"
                                size={20}
                                color={COLORS.ORANGE}
                            />
                        }
                        iconBackground
                        style={styles.navButton}
                        onPress={() => navigation.navigate('Focus')}
                        text="Goals"
                        showArrow
                    />
                    <IconButton
                        icon={
                            <Ionicons
                                name="analytics"
                                size={20}
                                color={COLORS.PURPLE}
                            />
                        }
                        iconBackground
                        style={styles.navButton}
                        onPress={() => navigation.navigate('Onboarding')}
                        text="Progress"
                        showArrow
                    />
                    <IconButton
                        icon={
                            <Ionicons
                                name="settings-sharp"
                                size={20}
                                color={COLORS.BLUE}
                            />
                        }
                        iconBackground
                        style={styles.navButton}
                        onPress={() => navigation.navigate('Workout Settings')}
                        text="Settings"
                        showArrow
                    />
                </View>
                <IconButton
                    icon={
                        <Ionicons
                            name="log-out-outline"
                            size={25}
                            color={COLORS.RED}
                        />
                    }
                    style={styles.signOutButton}
                    onPress={signOut}
                    text="Sign Out"
                />
                {false && (
                    <>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() =>
                                navigation.navigate('Workout Player')
                            }
                        >
                            <Text style={styles.buttonText}>
                                Workout Player
                            </Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </>
    );
}
