import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        display: 'flex',
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-evenly',
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
    buttonText: {
        fontSize: 20,
        color: '#000',
        fontWeight: 'bold',
        textAlign: 'center',

    }
});
