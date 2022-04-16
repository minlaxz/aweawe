import axios from 'axios';
import { addNews, setLoading } from '../features/reducers/newsSlice';
import store from '../features/store';

export const initialFetch = (offset = 0, limit = 20) => async (dispatch) => {
    try {
        dispatch(setLoading(true));
        const { data } = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
        const newData = await Promise.all(data.slice(offset, limit).map(async (id) => {
            const { data } = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            return data;
        }));
        dispatch(addNews(newData));
        console.log('Fetched and Dispatching news');
    } catch (error) {
        console.log(error);
    }
}