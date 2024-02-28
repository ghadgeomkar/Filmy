import { createSlice } from "@reduxjs/toolkit";

const Pagination = createSlice({
    name: 'Pagination',
    initialState: {
        page: '1'
    },
    reducers: {
        addPage: (state, action) => {
            state.page = action.payload
        }
    }
})

export default Pagination.reducer
export const { addPage } = Pagination.actions