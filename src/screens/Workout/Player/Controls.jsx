import React from 'react';

import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from './styles';

export default function Controls({
    paused,
    pause,
    play,
    back,
    next,
    nextDisabled,
}) {
    return (
        <View style={styles.controlsContainer}>
            <TouchableOpacity onPress={back}>
                <Text>Back</Text>
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            {!paused ? (
                <TouchableOpacity onPress={pause}>
                    <Text>Pause</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={play}>
                    <Text>Play</Text>
                </TouchableOpacity>
            )}
            <View style={{ width: 20 }} />
            <TouchableOpacity onPress={next} disabled={nextDisabled}>
                <Text>Next</Text>
            </TouchableOpacity>
        </View>
    );
};