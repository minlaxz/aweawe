import { Text, View, ListViewBase } from "react-native";
import styles from "./styles";
import { Button } from "../utils";

export default ({ navigation, route }) => {

    const item = route.params.item;
    console.log(item)

    return (
        <View
            style={styles.detailContainer}>
            <Text
                style={styles.deatilTitle}>
                {item.title}
                <Text>
                    {' '} by : {item.by}
                </Text>
            </Text>
            <Text
                style={{margin: 20, padding:20}}>
                Score: {item.score} {'\n'}
                Time: {item.time} {'\n'}
                Type: {item.type} {'\n'}
                Descendants: {item.descendants} {'\n'}
                Kids: {item.kids.length}
            </Text>
            <Text
                style={styles.detailText}
                onPress={() => { }}>
                Read More
            </Text>

            <Button
                title="Home"
                onPress={() =>
                    navigation.navigate('Hacker News', { name: null })
                }
            />
        </View>
    )
}