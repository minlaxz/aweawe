import { StatusBar } from 'expo-status-bar';
import { Text, View, Button } from 'react-native';
import styles from './styles';
import { useState } from 'react';

const HomeScreen = ({ navigation }) => {
    const [isClicked, setIsClicked] = useState(false);
    const messages = [
        'This is going to be working...',
        'Well you did this!',
    ]
    return (
        <View style={styles.container}>
            <Text
                style={[styles.welcomeText, isClicked ? styles.clickedText : styles.unClickedText]}
            >
                {messages[isClicked ? 1 : 0]}
            </Text>
            <Button
                title="Clack ?"
                onPress={() => setIsClicked(!isClicked)}
            />
            <Button
                title="Plofile"
                onPress={() =>
                    navigation.navigate('Profile', { name: 'Min' })
                }
            />
            <Button
                title="Ya Another"
                onPress={() =>
                    navigation.navigate('Hello', { name: 'God' })
                }
            />
            <StatusBar style="inverted" />
        </View>
    );
};

export default HomeScreen;