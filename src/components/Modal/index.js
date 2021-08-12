import React from 'react';
import {
    Modal as Modal_,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import styles from './styles';

export default function Modal({
    visible,
    setVisible,
    children,
}) {
    return (
        <Modal_
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={() => setVisible(false)}
        >
            <View style={styles.container}>
                <View style={styles.modal}>
                    <Text>Hello</Text>
                </View>
            </View>
        </Modal_>
    );
}