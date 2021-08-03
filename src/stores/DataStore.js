import create from 'zustand';

import { firebase } from '../firebase';

const useDataStore = create((set) => ({
	loadingMetrics: true,
	metrics: {
		height: '5\' 5"',
		weight: '120 lbs',
		age: '18',
	},
	clearMetrics: () => set({
		metrics: {
			height: '5\' 5"',
			weight: '120 lbs',
			age: '18',
		},
	}),
	getMetrics: (uid) => {
		const metricsRef = firebase.firestore().collection('userMetrics');
		metricsRef.doc(uid).get().then((doc) => {
			if (doc.exists) {
				const metrics = doc.data();
				set({ metrics, loadingMetrics: false });
			}
		});
	},
	updateMetrics: ({ uid, height, weight, age }) => {
		const metricsRef = firebase.firestore().collection('userMetrics');
		metricsRef.doc(uid).set({
            height,
            weight,
            age,
        }).then(() => {
			set({
                metrics: {
                    height,
                    weight,
                    age,
                },
                loadingMetrics: false,
            });
		});
	},
}));

export default useDataStore;