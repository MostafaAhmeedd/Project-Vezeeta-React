import {createSlice } from "@reduxjs/toolkit";

const SearchDetails = createSlice({

    name: "searchdetails",
    initialState: {
        speciality: "",
        city: "",
        doctorName: "",
    },
    reducers: {
        holdSpecialty: function (state, action) {

            state.speciality = action.payload;
        },

        holdCity: function (state, action) {
            state.city = action.payload;
        },
        holdDocName: function (state, action) {

            state.doctorName = action.payload;
        },




    }
})


export const { holdSpecialty, holdCity,holdDocName,holdType} = SearchDetails.actions;
export default SearchDetails.reducer;