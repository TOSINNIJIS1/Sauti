import React from 'react'

function NotFound() {
    return (
        <div style={{
            backgroundImage: 'url(https://i.pinimg.com/originals/25/d9/90/25d990dc7872181f5f2841533bce52d2.gif)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            display: 'flex',
            justifyContent: 'center',
            margin: '0 auto',
            width: '100%',
            // border: 'solid',
            height: '100vh',
        }}>
            <div style={{
                alignSelf: 'center',

            }}>
                <h1 > Not Found! </h1>
            </div>
            
        </div>
    )
}

export default NotFound
