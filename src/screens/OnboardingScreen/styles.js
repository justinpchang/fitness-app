import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
	},
	picker: {
		height: 50,
		width: 150,
	},
	pickerItem: {
		height: 50,
	},
	row: {
		marginTop: 25,
		flexDirection: 'row',
	},
	label: {
		top: 12,
		fontSize: 18,
	},
    button: {
        backgroundColor: '#788eec',
        marginTop: 50,
        height: 48,
		paddingHorizontal: 15,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});