import React from 'react';
import SearchBox from '../Components/SearchBox';
import SearchBoxBackground from '../Components/SearchBoxBackground';
import '../Styles/SearchPageStyle.css';
const SearchPage = () => {
    return (
<div className="background">
   <SearchBoxBackground className="search-box-background"></SearchBoxBackground>
    <div className="search">
        <SearchBox></SearchBox>
    </div>
</div>
    );
}

export default SearchPage;
