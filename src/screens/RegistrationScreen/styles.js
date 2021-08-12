import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 150,
        marginHorizontal: 30,
    },
    title: {
        marginBottom: 50,
    },
    input: {
        height: 48,
        borderRadius: 5,
        overflow: 'hidden',
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        paddingLeft: 16,
    },
    button: {
        backgroundColor: '#788eec',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 50,
        height: 48,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTitle: {
        color: 'white',
        fontSize: 18,
        fontFamily: 'Avenir-Heavy',
    },
    footerView: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    footerText: {
        fontSize: 16,
        color: '#2e2e2d',
        fontFamily: 'Avenir-Medium',
    },
    footerLink: {
        color: '#788eec',
        fontFamily: 'Avenir-Heavy',
        fontSize: 16,
    },
});
