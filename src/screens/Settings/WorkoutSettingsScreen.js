import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';

export default function WorkoutSettingsScreen({ navigation }) {
    const [currentLevel, setCurrentLevel] = React.useState('Amateur');
    const [intensity, setIntensity] = React.useState('Medium');

    const submitWorkoutSettings = () => {
        navigation.navigate('Home');
    };

    return (
        <View styles={styles.container}>
            <View style={styles.row}>
                <Text style={styles.label}>Current Level</Text>
                <Picker
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                    selectedValue={currentLevel}
                    onValueChange={(val) => setCurrentLevel(val)}
                >
                    <Picker.Item label="Beginner" value="Beginner" />
                    <Picker.Item label="Amateur" value="Amateur" />
                    <Picker.Item label="Pro" value="Pro" />
                </Picker>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Desired Intensity</Text>
                <Picker
                    style={styles.picker}
                    itemStyle={styles.pickerItem}
                    selectedValue={intensity}
                    onValueChange={(val) => setIntensity(val)}
                >
                    <Picker.Item label="Easy" value="Easy" />
                    <Picker.Item label="Medium" value="Medium" />
                    <Picker.Item label="Hard" value="Hard" />
                </Picker>
            </View>
            <TouchableOpacity
                style={styles.button}
                onPress={submitWorkoutSettings}
            >
                <Text style={styles.buttonText}>Done</Text>
            </TouchableOpacity>
        </View>
    );
}
