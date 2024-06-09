import React from 'react';
import '../Styles/FooterStyle.css';


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-text-part">
                <div className="footer-parts">
                    <div className="footer-part-one-three">
                        <img className="logo" src="/FooterImages/whitelogowithdotcom.jpg" alt="vezeeta-logo" />
                        <ol className="first-list">
                            <li><a className="list-elements" href="https://www.vezeeta.com/en/Generic/AboutUs">About Us</a></li>
                            <li><a className="list-elements" href="https://www.vezeeta.com/en/Generic/OurTeam">Our Team</a></li>
                            <li><a className="list-elements" href="https://careers.vezeeta.com/">Careers</a></li>
                            <li><a className="list-elements" href="https://www.vezeeta.com/en/Generic/News">Press</a></li>
                        </ol>
                    </div>

                    <div className="footer-part-two-four">
                        <div className="part-title">
                            <p className="part-header">Search by</p>
                            <a href="https://www.vezeeta.com/en/specialties" className="list-elements">Speciality</a>
                            <a href="https://www.vezeeta.com/en/areas" className="list-elements">Area</a>
                            <a href="https://www.vezeeta.com/en/insurances" className="list-elements">Insurance</a>
                            <a href="https://www.vezeeta.com/en/hospitals" className="list-elements">Hospital</a>
                            <a href="https://www.vezeeta.com/en/clinics" className="list-elements">Center</a>
                        </div>
                    </div>
                    
                    <div className="footer-part-one-three">
                        <div className="part-title">
                            <p className="part-header">Are you a doctor?</p>
                            <a className="list-elements" href="https://doctors.vezeeta.com/">Join Vezeeta doctors</a>
                        </div>
                    </div>

                    <div className="footer-part-two-four">
                        <div className="part-title">
                            <p className="part-header">Need help?</p>
                            <a className="list-elements" href="https://www.vezeeta.com/en/medical-topics">Medical Library</a>
                            <a className="list-elements" href="https://www.vezeeta.com/en/Generic/ContactUs">Contact Us</a>
                            <a className="list-elements" href="https://www.vezeeta.com/en/termsofuse">Terms Of Use</a>
                            <a className="list-elements" href="https://www.vezeeta.com/en/Generic/PrivacyPolicy">Privacy Policy</a>
                            <a className="list-elements" href="https://www.vezeeta.com/en/Generic/DoctorsPrivacyPolicy">Doctors Privacy Policy</a>
                        </div>
                    </div>

                    <div className="footer-part-five">
                        <div className="first-download-part">
                            <ol>
                                <a href="https://play.google.com/store/apps/details?id=com.ionicframework.vezeetapatientsmobile694843&amp;hl">
                                    <img alt="Download Vezeeta App from play store" src="/FooterImages/google-play-badge.jpg" />
                                </a>
                            </ol>
                            <ol>
                                <a href="https://itunes.apple.com/eg/app/vezeeta/id1010281314?">
                                    <img alt="Download Vezeeta App from app store" src="/FooterImages/app-store-badge.jpg" />
                                </a>
                            </ol>
                        </div>
                        <div className="second-download-part">
                            <div className="second-download-part-links">
                                <a href="https://www.facebook.com/vezeeta" className="facebook-link"></a>
                                <a href="https://www.instagram.com/vezeeta" className="instagram-link"></a>
                                <a href="https://twitter.com/VEZEETA_Egypt" className="twitter-link"></a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Footer;
