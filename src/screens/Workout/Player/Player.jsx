import React from 'react';
import {
    View,
} from 'react-native';
import { useInterval } from '../../../utils/TimeUtils';
import styles from './styles';
import ProgressBar from './ProgressBar';
import Controls from './Controls';

const length = 60;
const barHz = 5;

export default function Player() {
    const [paused, setPaused] = React.useState(true);
    const [duration, setDuration] = React.useState(length);
    const [currentPosition, setCurrentPosition] = React.useState(0);

    useInterval(() => {
        if (!paused) {
            if (currentPosition > duration) {
                setCurrentPosition(0);
            } else {
                setCurrentPosition((last) => last + 1 / barHz);
            }
        }
    }, 1000 / barHz);

    return (
        <View styles={styles.playerContainer}>
            <ProgressBar
                duration={duration}
                currentPosition={currentPosition}
                onSeek={(pos) => setCurrentPosition(pos)}
                pause={() => setPaused(true)}
            />
            <Controls
                paused={paused}
                pause={() => setPaused(true)}
                play={() => setPaused(false)}
                back={() => setCurrentPosition(0)}
                next={() => setCurrentPosition(duration)}
                nextDisabled={false}
            />
        </View>
    );
};