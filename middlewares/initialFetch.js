import axios from 'axios';
import { addNews } from '../features/reducers/newsSlice';

export const initialFetch = () => async (dispatch) => {
    try {
        const { data } = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json');
        const news = await Promise.all(data.slice(0, 50).map(async (id) => {
            const { data } = await axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
            return data;
        }));
        dispatch(addNews(news));
        console.log('Fetched and Dispatching news');
    } catch (error) {
        console.log(error);
    }
}