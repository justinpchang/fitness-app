import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.GREY[0],
    },
    purple: {
        position: 'absolute',
        top: -100,
        left: -100,
        height: 500,
        width: 500,
        borderRadius: 500,
        backgroundColor: COLORS.PURPLE,
    },
    orange: {
        position: 'absolute',
        top: 100,
        left: 100,
        height: 600,
        width: 600,
        borderRadius: 300,
        backgroundColor: COLORS.ORANGE,
    },
    red: {
        position: 'absolute',
        top: 300,
        left: -200,
        height: 700,
        width: 700,
        borderRadius: 600,
        backgroundColor: COLORS.RED,
    },
    blue: {
        position: 'absolute',
        top: 500,
        left: -300,
        height: 600,
        width: 600,
        borderRadius: 600,
        backgroundColor: COLORS.BLUE,
    },
    blur: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    }
});