import React from 'react';
import {
	Modal,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import styles from './styles';

export default function FocusScreen({ navigation }) {
	const [foci, setFoci] = React.useState([]);
	const [selectedFocusIndex, setSelectedFocusIndex] = React.useState();
	const [modalVisible, setModalVisible] = React.useState(false);

	React.useEffect(() => {
		// TODO grab from database
		setFoci([
			{
				name: 'Yoga',
				description: 'During yoga, your body goes through a full range and variety of motion that can counteract aches and pains associated with tension or poor postural habits.',
			},
			{
				name: 'Pilates',
				description: 'Designed to improve physical strength, flexibility, and posture, and enhance mental awareness.',
			},
			{
				name: 'Breath',
				description: 'Breathing exercises can help you relax, because they make your body feel like it does when you are already relaxed. Deep breathing is one of the best ways to lower stress in the body. This is because when you breathe deeply, it sends a message to your brain to calm down and relax.',
			},
		]);
	}, []);

	const selectFocus = () => {
		if (isNaN(selectedFocusIndex) || !modalVisible) return;
		alert(`Selected focus ${foci[selectedFocusIndex].name}`);
	};

	return (
        <View style={styles.container}>
            {modalVisible && (
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        setModalVisible(false);
                    }}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modal}>
                            <Text style={[styles.modalText, styles.modalTitle]}>
                                {foci[selectedFocusIndex].name}
                            </Text>
                            <Text style={styles.modalText}>
                                {foci[selectedFocusIndex].description}
                            </Text>
                            <View style={styles.row}>
                                <TouchableOpacity
                                    style={styles.modalButton}
                                    onPress={selectFocus}
                                >
                                    <Text style={styles.modalButtonText}>
                                        Select
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[
                                        styles.modalButton,
                                        styles.closeButton,
                                    ]}
                                    onPress={() => setModalVisible(false)}
                                >
                                    <Text style={styles.modalButtonText}>
                                        Close
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
            <Text style={styles.title}>
                What do you want to focus on during your workouts?
            </Text>
            {foci.map((focus, i) => (
                <TouchableOpacity
                    style={styles.card}
                    key={focus.name}
                    onPress={() => {
                        setSelectedFocusIndex(i);
                        setModalVisible(true);
                    }}
                >
                    <Text style={styles.cardTitle}>{focus.name}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}