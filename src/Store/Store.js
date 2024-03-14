import { configureStore } from "@reduxjs/toolkit";
import MovieListSlice from "./MovieListSlice";
import SearchCacheSlice from "./SearchCacheSlice";

const store = configureStore({
    reducer: {
        MovieList: MovieListSlice,
        SearchCache: SearchCacheSlice
    }
})

export default store