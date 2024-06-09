import React from 'react';
import SearchPage from './SearchPage';
/* import MarketingAndDownloadPage from './MarketingAndDownloadPage'; */
import ChooseAndBookPage from './ChooseAndBookPage'; 
import FooterPage from './FooterPage';

const Home = () => {
    return (
        <div style={{ overflow: 'auto', height: '760px'}}>
            <div>
                <SearchPage></SearchPage>
            </div>
            {/* <MarketingAndDownloadPage></MarketingAndDownloadPage> */}
            <ChooseAndBookPage></ChooseAndBookPage>
            <div style={{ height: '100px' }}>
                <FooterPage></FooterPage>
            </div>
        </div>
    );
}

export default Home;
