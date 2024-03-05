import { createSlice } from "@reduxjs/toolkit";


const showAuthPage = createSlice({
    name: 'showPage',
    initialState: {
        val: true,
    },
    reducers: {
        toggelPage: (state) => {
            state.val = !state.val
        }
    }
})

export default showAuthPage.reducer
export const { toggelPage } = showAuthPage.actions