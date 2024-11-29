import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    client: {
        toggleform: false
    }
}

export const ReduxSlice = createSlice({
    name: 'crudapp',
    initialState,
    reducers: {
        toggleChangeAction: (state) => {
            state.client.toggleform = !state.client.toggleform
        }
    }
})

export const {toggleChangeAction} = ReduxSlice.actions;

export default ReduxSlice.reducer;