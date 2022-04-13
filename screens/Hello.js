import { Text, View, Button } from "react-native";
import styles from "./styles";

export default ({ navigation }) => (
    <View style={styles.container}>
        <Text>Hello World!</Text>
        <Button
            title="Profile"
            onPress={() =>
                navigation.navigate('Profile', { name: 'Min' })
            }
        />
        <Button
            title="Home"
            onPress={() =>
                navigation.navigate('Home', { name: 'God' })
            }
        />
    </View>
)