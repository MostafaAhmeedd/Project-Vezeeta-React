import React from 'react';
import '../Styles/MarketingStyle.css'

const MarketingAndDowload = () => {
    return (
        <div className="MbeforeAndAfter">
            <div className="Mcontainer">
                <span className="Mitem">
                    <img className="Mimage" alt="All your healthcare needs" src="MarketingImages/medical-care-icon.svg" />
                    <span className="Mparagraph">
                        <span className="Mheader">All your healthcare needs</span>
                        <span className="Mbody">
                            Search and book a clinic visit, home visit, or a teleconsultation. Order your medicine and book a
                            service or operation.
                        </span>
                    </span>
                </span>
                <span className="Mitem">
                    <img className="Mimage" alt="Verified patient reviews" src="MarketingImages/doctor-icon.svg" />
                    <span className="Mparagraph">
                        <span className="Mheader">Verified patient reviews</span>
                        <span className="Mbody">
                            Doctor ratings are from patients who booked and visited the doctor through Vezeeta.
                        </span>
                    </span>
                </span>
                <span className="Mitem">
                    <img className="Mimage" alt="Your booking is confirmed" src="MarketingImages/booking-icon.svg" />
                    <span className="Mparagraph">
                        <span className="Mheader">Your booking is confirmed</span>
                        <span className="Mbody">
                            Your booking is automatically confirmed, as the doctor specifies his working hours and is notified
                            of the booking details.
                        </span>
                    </span>
                </span>
                <span className="Mitem">
                    <img className="Mimage" alt="Book for free, and pay in the clinic" src="MarketingImages/security-icon.svg" />
                    <span className="Mparagraph">
                        <span className="Mheader">Book for free, and pay in the clinic</span>
                        <span className="Mbody">
                            The consultation fees stated on Vezeeta are the actual doctor's fees with no extra charges.
                        </span>
                    </span>
                </span>
            </div>
        </div>
    );
};

export default MarketingAndDowload;
