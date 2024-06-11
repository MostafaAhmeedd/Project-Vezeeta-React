import React from 'react';
import SearchPage from './SearchPage';
import MarketingAndDownloadPage from './MarketingAndDownloadPage';
import ChooseAndBookPage from './ChooseAndBookPage';
import FooterPage from './FooterPage';
import OfferSlider from './OffersSliderPage';
import SpecialitySlider from './SpecialitySliderPage'

const Home = () => {
    return (
        <div style={{ overflow: 'auto', height: '1000px', width: '100%' }}>
            <div>
                <SearchPage></SearchPage>
            </div>

            <div style={{ overflow: 'auto' }}>
                <div style={{ height: '400px', width: '100%', backgroundColor: 'white' }}>
                    <OfferSlider></OfferSlider>
                </div>
                <div style={{ height: '400px', width: '100%'  }}>
                    <SpecialitySlider></SpecialitySlider>
                </div>
            </div>


            <MarketingAndDownloadPage></MarketingAndDownloadPage>

            <ChooseAndBookPage></ChooseAndBookPage>
            <div style={{ height: '100px' }}>
                <FooterPage></FooterPage>
            </div>
        </div>
    );
}

export default Home;
