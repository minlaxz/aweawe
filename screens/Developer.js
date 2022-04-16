import { Text, Button, SafeAreaView, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";

const ProfileScreen = ({ navigation, route }) => {
    const { devName } = route.params;
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <SafeAreaView style={styles.container}>
            <Text>Hello I am {devName}</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                onChangeText={text => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter your message"
                onChangeText={text => setMessage(text)}
            />

            <Button
                title="About"
                onPress={() => navigation.navigate('About')}
            />
        </SafeAreaView>
    )
};

export default ProfileScreen;