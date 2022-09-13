import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    find: "", // browser || light || dark
};

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.find = action.payload;
        },
    },
});

export const { setSearch } = searchSlice.actions;

export default searchSlice.reducer;
