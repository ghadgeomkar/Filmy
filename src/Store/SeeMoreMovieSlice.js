import { createSlice } from "@reduxjs/toolkit";

const SeeMoreMovie = createSlice({
    name: 'seeMoreMovie',
    initialState: {
        getTitle: null
    },
    reducers: {
        addTitle: (state, action) => {
            state.getTitle = action.payload
        }
    }
})

export default SeeMoreMovie.reducer
export const { addTitle } = SeeMoreMovie.actions