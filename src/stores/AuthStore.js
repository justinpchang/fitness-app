import create from 'zustand';

import { firebase } from '../firebase';

const useAuthStore = create((set) => ({
	user: null,
	signIn: (email, password) => {
		return firebase.auth().signInWithEmailAndPassword(email, password).then((res) => {
			const uid = res.user.uid;
			return firebase.firestore().collection('users').doc(uid).get();
		}).then((doc) => {
			if (!doc.exists) {
				alert('User does not exist.');
				return;
			}
			return doc.data();
		}).catch((err) => {
			alert(error);
		});
	},
	signOut: () => {
		set({ user: null });
		return firebase.auth().signOut();
	},
}));

export default useAuthStore;