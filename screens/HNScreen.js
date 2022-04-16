import { StatusBar } from 'expo-status-bar';
import { Text, View, Linking, FlatList, ToastAndroid } from 'react-native';
import styles from './styles';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialFetch } from '../middlewares/initialFetch';
import store from '../features/store';
import { Fontisto } from '@expo/vector-icons';
import { Button } from "../utils";

const HomeScreen = ({ navigation }) => {

    const dispatch = useDispatch();
    const { news } = useSelector(state => state.news);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const shouldFetch = store.getState().news.news.length === 0;
        shouldFetch && dispatch(initialFetch());
    }, []);

    const RenderNews = (item) => {
        return (
            <View>
                <Text
                    onPress={() =>
                        navigation.navigate('Detail', { item })
                    }
                    key={item.id}
                    style={styles.cardText}>
                    <Text>
                        {item.title}
                    </Text>
                    <Text style={{ fontWeight: 'bold' }}>
                        {' '}: By {item.by} {' '}
                    </Text>
                    <Text style={{ color: 'blue' }}
                        onPress={() => Linking.openURL(item.url)}
                    >
                        Read More
                    </Text>
                </Text>
            </View>
        )
    }

    const Loadingscreen = () => <View style={styles.container}>
        <Text>Loading, please wait 👻...</Text>
    </View>

    const ItemSeprator = () => <View style={{
        height: 2,
        width: "100%",
        backgroundColor: "rgba(0,0,0,0.5)",
    }} />

    const handleRefresh = () => {
        setLoading(true);
        dispatch(initialFetch());
        setLoading(false);
    }

    const showToastWithGravityAndOffset = () => {
        ToastAndroid.showWithGravityAndOffset(
            "Refreshing... wait!",
            ToastAndroid.SHORT,
            ToastAndroid.BOTTOM,
            25,
            50
        );
    };


    return (
        <View style={styles.container}>
            {news.length === 0 ? <Loadingscreen /> :
                <FlatList
                    data={news}
                    renderItem={({ item }) => RenderNews(item)}
                    keyExtractor={item => item.id}
                    ItemSeparatorComponent={ItemSeprator}
                    refreshing={loading}
                    onRefresh={() => handleRefresh()}
                />
            }
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                margin: 10,
                width: '100%',
                backgroundColor: '#3B97D7',
                position: 'absolute',
                bottom: 10,
            }}>
                <Button
                    title="Test Run"
                    onPress={() =>
                        navigation.navigate('Test', { devName: 'minlaxz' })
                    }
                />
                <Text
                    onPress={() => showToastWithGravityAndOffset()}
                    style={{ color: "#fafafa" }}>
                    <Fontisto name="hacker-news" size={18} color="white" />
                    {' '} Top news: {news.length}
                </Text>
                <Button
                    title="Feedback"
                    onPress={() =>
                        navigation.navigate('Developer', { devName: 'minlaxz' })
                    }
                />
            </View>
            <StatusBar style="auto" />
        </View>
    );
};

export default HomeScreen;