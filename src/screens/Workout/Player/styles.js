import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    /**
     * PLAYER
     */
    playerContainer: {
        flex: 1,
    },


    /**
     * PROGRESS BAR
     */

    progressBarContainer: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 16,
    },
    durationContainer: {
        flexDirection: 'row',
    },
    text: {
        color: 'rgba(255, 255, 255, 0.72)',
        fontSize: 12,
        textAlign: 'center',
    },
    slider: {
        marginBottom: -8,
        width: '100%',
    },


    /**
     * CONTROLS
     */

    controlsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
    },
});