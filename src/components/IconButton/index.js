import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';
import { COLORS } from '../../constants';

export default function IconButton({
    icon,
    style,
    onPress,
    text,
    textStyle,
    iconBackground,
    showArrow,
}) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <View
                style={
                    iconBackground && {
                        backgroundColor: COLORS.LIGHT(icon?.props?.color),
                        ...styles.iconBackground,
                    }
                }
            >
                {icon}
            </View>
            <Text
                style={[
                    styles.text,
                    iconBackground && { marginLeft: 20, fontSize: 20, flex: 1 },
                    textStyle,
                ]}
            >
                {text}
            </Text>
            {showArrow && (
                <View style={styles.arrowBackground}>
                    <Ionicons
                        name="md-chevron-forward-sharp"
                        size={20}
                        color={COLORS.GREY[4]}
                    />
                </View>
            )}
        </TouchableOpacity>
    );
}