import React from 'react';
import {
    Text,
    View,
} from 'react-native';
import Slider from '@react-native-community/slider';
import { minutesAndSeconds } from '../../../utils/TextUtils';
import styles from './styles';

export default function ProgressBar({
    duration,
    currentPosition,
    onStartSeek,
    onSeek,
    onFinishSeek,
}) {
    const elapsed = minutesAndSeconds(currentPosition);
    const remaining = minutesAndSeconds(duration - currentPosition);
    
    return (
        <View style={styles.progressBarContainer}>
            <Slider
                style={styles.slider}
                maximumValue={Math.max(duration, 1, currentPosition + 1)}
                onSlidingStart={onStartSeek}
                onValueChange={onSeek}
                onSlidingComplete={onFinishSeek}
                value={currentPosition}
                minimumTrackTintColor='black'
                maximumTrackTintColor='grey'
            />
            <View style={styles.durationContainer}>
                <Text stlye={styles.text}>
                    {duration > 1 && `${elapsed[0]}:${elapsed[1]}`}
                </Text>
                <View style={{ flex: 1 }} />
                <Text stlye={styles.text}>
                    {duration > 1 && `-${remaining[0]}:${remaining[1]}`}
                </Text>
            </View>
        </View>
    );
};