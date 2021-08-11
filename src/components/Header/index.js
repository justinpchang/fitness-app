import React from 'react';
import {
    TouchableOpacity,
    View,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { COLORS } from '../../constants';

export default function Header({ navigation }) {
    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.backButton} onClick={goBack}>
                <Ionicons
                    name="md-chevron-back-sharp"
                    size={30}
                    color={COLORS.GREY[4]}
                />
            </TouchableOpacity>
        </View>
    );
}