import countReducer from './countSlice';
import newsReducer from './newsSlice';

const rootReducer = ({
    count: countReducer,
    news: newsReducer,
});

export default rootReducer;