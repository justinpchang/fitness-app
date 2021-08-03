import create from 'zustand';

import { firebase } from '../firebase';

const useAuthStore = create((set) => ({
	user: null,
	setUser: (newUser) => set({ user: newUser }),
	signIn: ({ email, password }) => {
		return firebase
			.auth()
			.signInWithEmailAndPassword(email, password)
			.then((res) => {
				const uid = res.user.uid;
				return firebase.firestore().collection('users').doc(uid).get().catch((err) => {
					alert(err);
				});
			}).then((doc) => {
				if (!doc.exists) {
					alert('User does not exist.');
					return;
				}
				const user = doc.data();
				set({ user });
				return;
			}).catch((err) => {
				alert(err);
			});
	},
	signUp: ({ email, password, fullName }) => {
		return firebase
			.auth()
			.createUserWithEmailAndPassword(email, password)
			.then((res) => {
				const uid = res.user.uid;
				const data = {
					id: uid,
					email,
					fullName,
				};
				const usersRef = firebase.firestore().collection('users');
				return usersRef.doc(uid).set(data).then((user) => {
					set({ user });
					return;
				}).catch((err) => {
					alert(err);
				});
			}).catch((err) => {
				alert(err);
			});
	},
	signOut: () => {
		set({ user: null });
		return firebase.auth().signOut();
	},
}));

export default useAuthStore;