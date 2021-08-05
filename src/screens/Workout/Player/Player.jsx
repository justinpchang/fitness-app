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
    const [wasPaused, setWasPaused] = React.useState(true);
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

    const onStartSeek = () => {
        setWasPaused(paused);
        setPaused(true);
    };

    const onSeek = (pos) => {
        setCurrentPosition(pos);
    };

    const onFinishSeek = () => {
        setPaused(wasPaused);
    };

    return (
        <View styles={styles.playerContainer}>
            <ProgressBar
                duration={duration}
                currentPosition={currentPosition}
                onStartSeek={onStartSeek}
                onSeek={onSeek}
                onFinishSeek={onFinishSeek}
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