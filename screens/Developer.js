import { Text, SafeAreaView, View, TextInput, Image } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { Button } from '../utils'

const ProfileScreen = ({ navigation, route }) => {
    const { devName } = route.params;
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");

    return (
        <SafeAreaView style={styles.devContainer}>
            <Image
                style={styles.profileImage}
                source={require("../assets/images/profile.png")}
            />
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    textAlign: "center",
                    margin: 10,
                    padding: 10,
                }}>
                Hello I am {devName}</Text>
            <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    alignContent: "center",
                    height: "50%",
                    width: "100%",
                }}>
                <TextInput
                    style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        margin: 5,
                        padding: 3,
                        width: "80%",
                    }}
                    placeholder="Enter your name"
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    style={{
                        fontSize: 15,
                        fontWeight: "bold",
                        margin: 5,
                        padding: 3,
                        width: "80%",
                        height: "50%",
                    }}
                    placeholder="Enter your message"
                    onChangeText={text => setMessage(text)}
                />
                <Button
                    title="Send"
                    onPress={() => {
                        // navigation.navigate("Chat", {
                        //     name: name,
                        //     message: message,
                        // });
                        console.log(name, message);
                    }}
                />
            </View>

            <Button
                title="About"
                onPress={() => navigation.navigate('About')}
            />
        </SafeAreaView>
    )
};

export default ProfileScreen;