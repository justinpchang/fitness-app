import create from 'zustand';

import { firebase } from '../firebase';

const useAuthStore = create((set) => ({
	user: null,
	loadingUser: true,
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
					set({ loadingUser: false });
					return;
				}
				const user = doc.data();
				set({ user, loadingUser: false });
				return;
			}).catch((err) => {
				set({ loadingUser: false });
				alert(err);
			});
	},
	persistantSignIn: () => {
		const usersRef = firebase.firestore().collection('users');
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
				usersRef
					.doc(user.uid)
					.get()
					.then((doc) => {
						const user = doc.data();
						set({ user, loadingUser: false });
					}).catch((err) => {
						alert(err);
						set({ loadingUser: false });
					});
			} else {
				set({ loadingUser: false });
			}
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
					set({ user, loadingUser: false });
					return;
				}).catch((err) => {
					set({ loadingUser: false });
					alert(err);
				});
			}).catch((err) => {
				set({ loadingUser: false });
				alert(err);
			});
	},
	signOut: () => {
		set({ user: null });
		return firebase.auth().signOut();
	},
}));

export default useAuthStore;