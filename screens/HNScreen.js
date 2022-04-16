import { StatusBar } from 'expo-status-bar';
import { Text, View, Button, Linking, FlatList } from 'react-native';
import styles from './styles';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initialFetch } from '../middlewares/initialFetch';
import store from '../features/store';

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
                <Text key={item.id} style={styles.cardText}>
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
                justifyContent: 'space-evenly',
                alignItems: 'center',
                margin: 10,
                width: '100%'
            }}>
                <Button
                    title="About"
                    onPress={() =>
                        navigation.navigate('Developer', { devName: 'minlaxz' })
                    }
                />
                <Text>
                    Top news: {news.length}
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