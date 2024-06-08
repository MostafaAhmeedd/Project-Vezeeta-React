import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const AllDoctorsData = createAsyncThunk("/filtered_doctors", async () => {
    const res = await axios.get("http://localhost:4000/doctors");
    return res.data;
});
export const EditDoctorsData = createAsyncThunk("/edit_doctors", async (doctor) => {
    const res = await axios.put(`${"http://localhost:4000/doctors"}/${doctor.id}`,doctor);
    return res.data;
});


const SearchFilteredDoctors = createSlice({
    name: "searchfiltereddoctors",
    initialState: {
        AllDoctor: [],
        FilteredDoctors: [],
    },
    
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(AllDoctorsData.fulfilled, (state, action) => {
            state.AllDoctor = action.payload;

        })
        .addCase(EditDoctorsData.fulfilled, (state, action) => {
            const i = state.AllDoctor.findIndex(doctor => doctor.id === action.payload.id);
            state.AllDoctor[i] = action.payload;
        })
    }
});

export const { filterDoctors } = SearchFilteredDoctors.actions;

export default SearchFilteredDoctors.reducer;
