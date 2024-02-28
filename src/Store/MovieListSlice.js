import { createSlice } from "@reduxjs/toolkit";

const MovieList = createSlice({
    name: 'movieList',
    initialState: {
        popular: null,
        NowPlaying: null,
        Upcoming: null,
        TopRated: null
    },
    reducers: {
        addPopularMovies: (state, action) => {
            state.popular = action.payload
        },
        addNowPlayingMovies: (state, action) => {
            state.NowPlaying = action.payload
        },
        addUpcomingMovies: (state, action) => {
            state.Upcoming = action.payload
        },
        AddTopRatedMoies: (state, action) => {
            state.TopRated = action.payload
        }
    }
})

export default MovieList.reducer
export const { addPopularMovies, addNowPlayingMovies, addUpcomingMovies, AddTopRatedMoies } = MovieList.actions