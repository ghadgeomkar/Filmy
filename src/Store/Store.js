import { configureStore } from "@reduxjs/toolkit";
import ShowAuthPageSlice from "./ShowAuthPageSlice";
import MovieListSlice from "./MovieListSlice";
import SearchCacheSlice from "./SearchCacheSlice";
import PaginationSlice from "./PaginationSlice";

const store = configureStore({
    reducer: {
        showAuthPage: ShowAuthPageSlice,
        MovieList: MovieListSlice,
        Pagination: PaginationSlice,
        SearchCache: SearchCacheSlice
    }
})

export default store