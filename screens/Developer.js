import { Text, SafeAreaView, View, TextInput, Image, StyleSheet } from "react-native";
import { useState } from "react";
import { Button } from '../utils';


const styles = StyleSheet.create({
    textInput: {
        fontSize: 15,
        fontWeight: "bold",
        margin: 10,
        padding: 10,
        width: "80%",
        borderBottomWidth: 10,
        borderColor: "gray",
        borderWidth: 1,
        color: "black",
    },
    textInputFocus: {
        borderBottomColor: "red",
    },
    detailContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignContent: 'center',
        height: '80%',
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 20,
        padding: 20,
        borderWidth: 1,
        borderColor: 'black',
        shadowRadius: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.5,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
        marginTop: 50,
        padding: 10,
    },
    inputGroup: {
        display: "flex",
        flexDirection: "row",
        // justifyContent: "space-around",
        flexDirection: "column",
        alignItems: "center",
        alignContent: "center",
        height: "50%",
        width: "100%",
    },
    pressableColor: {
        backgroundColor: 'black'
    },
    unpressableColor: {
        backgroundColor: 'gray'
    },
});


const ProfileScreen = ({ navigation, route }) => {
    const { devName } = route.params;
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isSending, setIsSending] = useState(false);

    return (
        <SafeAreaView style={styles.devContainer}>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                <Image
                    style={styles.profileImage}
                    source={require("../assets/images/profile.png")}
                />
                <Text
                    style={name !== "" || message !== "" ? ({ ...styles.title, color: 'gray' }) : ({ ...styles.title, color: 'black' })}>
                    Hello I am @{devName}
                </Text>
            </View>
            <View
                style={styles.inputGroup}
            >
                <Text>
                    {`How Do You Think ?`}
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter your name"
                    onChangeText={text => setName(text)}
                />
                <TextInput
                    style={[styles.textInput]}
                    placeholder="Enter your message"
                    onChangeText={text => setMessage(text)}
                />
                <Button
                    disabled={isSending ? true : false}
                    title={isSending ? `Sending` : `Send`}
                    customButtonStyles={isSending ? styles.unpressableColor : styles.pressableColor}
                    onPress={() => {
                        setIsSending(true)
                        setTimeout(() => setIsSending(false), 3000)
                    }}
                />
            </View>

            <Button
                title="More"
                onPress={() => navigation.navigate('About')}
            />
        </SafeAreaView>
    )
};

export default ProfileScreen;