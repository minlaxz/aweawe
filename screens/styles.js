import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        alignContent: 'center',
        height: '100%'
    },
    devContainer: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        alignContent: 'center',
        height: '100%'
    },
    welcomeText: {
        fontWeight: 'bold',
        textAlign: 'center',
    },
    clickedText: {
        color: 'red',
        fontSize: 20,
    },
    unClickedText: {
        color: 'black',
        fontSize: 30,
    },
    cardText: {
        fontSize: 13,
        padding: 5,
        margin: 5,
        borderRadius: 5,
        borderWidth: 1,
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
    },
    deatilTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        margin:20,
        padding:20
    },
});
