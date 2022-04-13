import { Text, Button, View } from "react-native";
import styles from "./styles";

const ProfileScreen = ({ navigation, route }) => {
    return (
        <View style={styles.container}>
            <Text>This is {route.params.name}'s profile</Text>
            <Button
                title="Hello"
                onPress={() => navigation.navigate('Hello')}
            />
        </View>
    )
};

export default ProfileScreen;