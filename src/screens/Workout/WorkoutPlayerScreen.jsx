import React from 'react';
import {
    Text,
    View
} from 'react-native';
import styles from './styles';
import Player from './Player/Player';

export default function WorkoutPlayerScreen({ navigation }) {
    return (
        <View styles={styles.container}>
            <Text>Workout Timer Screen</Text>
            <Player />
        </View>
    );
};