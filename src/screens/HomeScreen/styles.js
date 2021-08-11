import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.GREY[0],
        paddingLeft: 50,
        paddingRight: 30,
    },
    firstName: {
        fontFamily: 'Avenir-Heavy',
        fontSize: 60,
        color: COLORS.GREY[4],
    },
    lastName: {
        marginTop: -20,
        fontFamily: 'Avenir-Light',
        fontSize: 60,
        color: COLORS.GREY[3],
    },
    buttonsContainer: {
        marginTop: 100,
        flex: 1,
    },
    navButton: {
        backgroundColor: COLORS.GREY[0],
        color: COLORS.GREY[4],
        marginTop: 10,
    },
    signOutButton: {
        backgroundColor: COLORS.GREY[1],
        color: COLORS.GREY[4],
        marginBottom: 120,
    },


    title: {
        color: 'black',
        fontSize: 24,
    },
    button: {
        height: 47,
        borderRadius: 5,
        backgroundColor: '#788eec',
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
    },
});
