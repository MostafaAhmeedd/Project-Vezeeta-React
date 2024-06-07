import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";

export const AllDoctorsData = createAsyncThunk("/filtered_doctors", async () => {
    const res = await axios.get("http://localhost:4000/doctors");
    return res.data;
});

const SearchFilteredDoctors = createSlice({
    name: "searchfiltereddoctors",
    initialState: {
        AllDoctor: [],
        FilteredDoctors: [],
    },
    
    reducers: {
        // filterDoctors: (state, action) => {
        //     const { speciality, city, doctorName } = action.payload;
        //     state.FilteredDoctors = state.AllDoctor.filter(doctor => {
        //         const matchesSpecialty = speciality ? doctor.speciality.toLowerCase().includes(speciality.toLowerCase()) : true;
        //         // const matchesLocation = city ? doctor.city.toLowerCase().includes(city.toLowerCase()) : true;
        //         // const matchesName = doctorName ? doctor.name.toLowerCase().includes(doctorName.toLowerCase()) : true;

        //         return matchesSpecialty
        //     });
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(AllDoctorsData.fulfilled, (state, action) => {
            state.AllDoctor = action.payload;

        });
    }
});

export const { filterDoctors } = SearchFilteredDoctors.actions;

export default SearchFilteredDoctors.reducer;
