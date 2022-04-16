import { Text, View, Button } from "react-native";
import styles from "./styles";

export default ({ navigation }) => (
    <View style={styles.container}>
        <Text>Hello World!</Text>
        <Button
            title="Profile"
            onPress={() =>
                navigation.navigate('Developer', { name: 'Min' })
            }
        />
        <Button
            title="Home"
            onPress={() =>
                navigation.navigate('Hacker News', { name: 'God' })
            }
        />
    </View>
)