import { configureStore } from "@reduxjs/toolkit";


import SearchDetails from "./Slices/SearchDetails.js"
import SearchFilteredDoctors from "./Slices/SearchFilteredDoctors.js"

const store =configureStore({
    reducer:{
        SearchDetails:SearchDetails,
        FilteredDoctorsData:SearchFilteredDoctors,
    }
})
export default store;