import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    news: [],
    newsCount: 0,
    loading: false,
    error: null,
}

const newsSlice = createSlice({
    name: "news",
    initialState,
    reducers: {
        addNews: (state, action) => {
            state.news = action.payload;
            state.newsCount = action.payload.length;
            state.loading = false;
            state.error = null;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        }
    }
});

export const { addNews, setLoading, setError } = newsSlice.actions;
export default newsSlice.reducer;