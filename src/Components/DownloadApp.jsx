import React from 'react';
import '../Styles/DownloadAppStyle.css'

const DownloadApp = () => {
    return (
        <div>
            <div className="DbeforeAndAfter">
                <section id="Ddownload-the-app" className="DownloadBannerstyle__DownloadContainer-sc-19fh9n5-0 DlbVAzC">
                    <div className="Dimage-container">
                        <img className="Dimage" alt="Vezeeta registration form on a smartphone." src="DownloadAppImages/downloadApp-eg-en.jpg" />
                    </div>
                    <div className="Dtext">
                        <h1 className="Dheader">Download Vezeeta Application</h1>
                        <p className="Dparagraph">
                            Search, compare and book doctor consultations with ease. Order
                            your medicines &amp; get them delivered within 60 minutes.
                            Track your steps count &amp; earn points on hitting the daily goal.
                        </p>
                        <div className="Dbuttons-container">
                            <a className="Dbutton" href="https://itunes.apple.com/eg/app/vezeeta/id1010281314?">
                                <img className="Dlogo" alt="App Store logo" src="DownloadAppImages/apple-logo.svg" />
                                <span className="Dapp-download-text">App Store</span>
                            </a>
                            <a className="Dbutton" href="https://play.google.com/store/apps/details?id=com.ionicframework.vezeetapatientsmobile694843&amp;hl">
                                <img className="Dlogo" alt="Google Play logo" src="DownloadAppImages/google-play-logo.svg" />
                                <span className="Dapp-download-text">Google Play</span>
                            </a>
                            <a className="Dbutton" href="https://appgallery.huawei.com/app/C100269167">
                                <img className="Dlogo" alt="App Gallery logo" src="DownloadAppImages/app-gallery-logo.svg" />
                                <span className="Dapp-download-text">App Gallery</span>
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default DownloadApp;
