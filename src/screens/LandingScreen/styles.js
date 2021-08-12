import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
    container: {
        marginTop: -100,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    titleText: {
        fontFamily: 'Avenir-Heavy',
        fontSize: 180,
        color: COLORS.ORANGE,
    },
    titleNumber: {
        fontFamily: 'Avenir-Black',
        color: COLORS.RED,
    },
    subText: {
        fontFamily: 'Avenir-Light',
        fontSize: 20,
        textAlign: 'center',
        marginHorizontal: 50,
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginBottom: 100,
        marginHorizontal: 50,
        backgroundColor: COLORS.GREY[1],
        borderColor: COLORS.GREY[0],
        borderWidth: 2,
        borderRadius: 8,
    },
    button: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        paddingVertical: 15,
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'Avenir-Medium',
        fontSize: 16,
    },
    registerButton: {
        backgroundColor: COLORS.GREY[0],
        borderColor: COLORS.GREY[0],
        borderRadius: 8,
    },
    logInButton: {

    },
});