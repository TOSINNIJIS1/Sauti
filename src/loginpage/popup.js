import React from 'react'

function Popup({popup, setPopup}) {
    return (
        <div>
            {popup ? (
            <div className='bang'> bang </div>
            ) : null }
        </div>
    )
}

export default Popup
