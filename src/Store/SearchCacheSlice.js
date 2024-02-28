import { createSlice } from "@reduxjs/toolkit";

const SearchCache = createSlice({
    name: 'SearchCache',
    initialState: {
        cache: []
    },
    reducers: {
        addSearchCache: (state, action) => {
            state.cache.push(action.payload);
        }
    }
})

export default SearchCache.reducer
export const { addSearchCache } = SearchCache.actions