import React from 'react';
import { View } from 'react-native';
import { BlurView } from 'expo-blur';
import styles from './styles';

export default function BlurBackground({ opacity, children, style }) {
    return (
        <View style={styles.container}>
            <View style={{ opacity: (opacity || 0.1) }}>
                <View style={styles.purple} />
                <View style={styles.orange} />
                <View style={styles.red} />
                <View style={styles.blue} />
            </View>
            <BlurView style={[styles.blur, style]} intensity={100}>
                {children}
            </BlurView>
        </View>
    )
}