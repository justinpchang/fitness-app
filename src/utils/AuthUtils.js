import { unstable_batchedUpdates } from 'react-native';
import useAuthStore from '../stores/AuthStore';
import useDataStore from '../stores/DataStore';

export const signOut = () => {
	unstable_batchedUpdates(() => {
		useAuthStore.getState().signOut();
		useDataStore.getState().clearMetrics();
	});
};