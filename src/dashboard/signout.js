import React from 'react';
import { withRouter } from 'react-router-dom';

function Signout(props) {
    return (
        <div className='left'>
            <p style={{
                cursor: 'pointer',
            }}
            onClick={ 
                () => {
                    localStorage.removeItem('token')
                    props.history.push('/')
                }
            }
            > Sign Out </p> 

        </div>
    )
}

export default withRouter(Signout)
