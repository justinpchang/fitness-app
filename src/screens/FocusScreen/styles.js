import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 35,
        paddingLeft: 50,
        backgroundColor: COLORS.GREY[0],
    },
    headerHelperText: {
        fontFamily: 'Avenir-Medium',
        fontSize: 40,
        color: COLORS.GREY[3],
    },
    headerText: {
        fontFamily: 'Avenir-Medium',
        fontSize: 40,
        color: COLORS.GREY[4],
    },

    /*
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        marginTop: 25,
    },
    card: {
        marginTop: 25,
        width: 200,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'palevioletred',
    },
    cardTitle: {
        fontSize: 50,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modal: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalText: {
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 25,
    },
    modalTitle: {
        fontSize: 18,
    },
    row: {
        flexDirection: 'row',
    },
    modalButton: {
        margin: 10,
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#2196F3',
    },
    closeButton: {
        backgroundColor: 'red',
    },
    modalButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    */
});