import create from 'zustand';

import { firebase } from '../firebase';

const useAuthStore = create((set) => ({
	user: null,
	signOut: () => {
		set({ user: null });
		return firebase.auth().signOut();
	},
}));

export default useAuthStore;