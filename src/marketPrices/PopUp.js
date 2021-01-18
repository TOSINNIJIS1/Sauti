import React from 'react';
import './popup.scss';

function PopUp ({popup}) {
    return (
        <div className='popup'>
            <div className={`popupBg popup-${popup}`}>
                <div className='innerPopup'>
                    <h1> Price Comparison </h1> 
                    <h1> Blue Shirt Medium </h1>
                    <p> Average Listing </p>
                    <h1> 2500.134 </h1> 

                    <div className='button'>
                        <button>Update Price</button>
                        <button>Home</button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default PopUp
