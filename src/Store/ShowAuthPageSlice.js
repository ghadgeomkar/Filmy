import { createSlice } from "@reduxjs/toolkit";


const showAuthPage = createSlice({
    name: 'showPage',
    initialState: {
        val: true,
        useLogIn: false
    },
    reducers: {
        toggelPage: (state) => {
            state.val = !state.val
        },
        userLoginStatus: (state) => {
            state.useLogIn = !state.useLogIn
        }
    }
})

export default showAuthPage.reducer
export const { toggelPage, userLoginStatus } = showAuthPage.actions