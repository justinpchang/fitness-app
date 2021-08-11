import React from 'react';
import {
	Text,
	TouchableOpacity,
	View
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import useAuthStore from '../../stores/AuthStore';
import useDataStore from '../../stores/DataStore';

export default function OnboardingScreen({ navigation }) {
	const loadingMetrics = useDataStore((state) => state.loadingMetrics);
	const metrics = useDataStore((state) => state.metrics);
	const getMetrics = useDataStore((state) => state.getMetrics);
	const updateMetrics = useDataStore((state) => state.updateMetrics);
	const user = useAuthStore((state) => state.user);

	const [height, setHeight] = React.useState();
	const [weight, setWeight] = React.useState();
	const [age, setAge] = React.useState();

	React.useEffect(() => {
		getMetrics(user.id);
	}, []);

	React.useEffect(() => {
		setHeight(metrics.height);
		setWeight(metrics.weight);
		setAge(metrics.age);
	}, [metrics]);

	const generateHeightOptions = React.useMemo(() => {
		let opts = [];
		for (let ft = 3; ft <= 7; ft++) {
			for (let inch = 0; inch < 12; inch++) {
				const fmt = `${ft}' ${inch}"`;
				opts.push(<Picker.Item key={fmt} label={fmt} value={fmt} />);
			}
		}
		return opts;
	}, []);

	const generateWeightOptions = React.useMemo(() => {
		let opts = [];
		for (let lbs = 70; lbs <= 300; lbs++) {
			const fmt = `${lbs} lbs`;
			opts.push(<Picker.Item key={fmt} label={fmt} value={fmt} />);
		}
		return opts;
	}, []);

	const generateAgeOptions = React.useMemo(() => {
		let opts = [];
		for (let yrs = 18; yrs < 100; yrs++) {
			const fmt = `${yrs}`;
			opts.push(<Picker.Item key={fmt} label={fmt} value={fmt} />);
		}
		return opts;
	}, []);

	const onNextPress = () => {
		updateMetrics({ uid: user.id, height, weight, age });
        navigation.navigate('Focus');
	};

	return (
        <View style={styles.container}>
            {!loadingMetrics && (
                <>
                    <View style={styles.row}>
                        <Text style={styles.label}>Height</Text>
                        <Picker
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                            selectedValue={height}
                            onValueChange={(val) => setHeight(val)}
                        >
                            {generateHeightOptions}
                        </Picker>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Weight</Text>
                        <Picker
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                            selectedValue={weight}
                            onValueChange={(val) => setWeight(val)}
                        >
                            {generateWeightOptions}
                        </Picker>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Age</Text>
                        <Picker
                            style={styles.picker}
                            itemStyle={styles.pickerItem}
                            selectedValue={age}
                            onValueChange={(val) => setAge(val)}
                        >
                            {generateAgeOptions}
                        </Picker>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Active hours ...</Text>
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.label}>Interval ...</Text>
                    </View>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => onNextPress()}
                    >
                        <Text style={styles.buttonTitle}>Next</Text>
                    </TouchableOpacity>
                </>
            )}
        </View>
    );
}