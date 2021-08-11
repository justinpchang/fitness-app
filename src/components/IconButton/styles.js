import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderRadius: 15,
        alignSelf: 'flex-start',
    },
    iconBackground: {
        marginLeft: -15,
        borderRadius: 50,
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        marginLeft: 10,
        fontFamily: 'Avenir-Medium',
        fontSize: 16,
    },
    arrowBackground: {
        borderRadius: 10,
        backgroundColor: COLORS.GREY[1],
        height: 45,
        width: 45,
        alignItems: 'center',
        justifyContent: 'center',
    },
});