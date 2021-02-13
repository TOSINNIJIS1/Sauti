import React, { useRef, useEffect, useCallback } from 'react';
import './styles/popup.scss';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import CloseIcon from '@material-ui/icons/Close';

const Background = styled.div`
    position: fixed;

    @media only screen and (max-width: 600px) {
        margin: 0 auto;
        width: 90%;
        display: flex;
        margin-left: 20px;
    }
`;

const ModalWrapper = styled.div`
    width: 600px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 10px;
    border: solid;

    @media only screen and (max-width: 600px) {
        height: 500px;
        display: flex;
        justify-content: center;
    }

`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    
`;

const CloseModalButton = styled(CloseIcon)`
    cursor: pointer;
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 1;
`;


function PopUp ({popup, marketList, setPopUp}) {
    let popUpDescription = marketList.map(ele => <div> {ele.description} </div>)
    let popUpPrice = marketList.map(ele => <div> {ele.price} </div>)

    const popUpRef = useRef();

    const closePopUp = e => {
        if (popUpRef.current === e.target) {
            setPopUp(false)
        }
    }

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: popup ? 1 : 0,
        transform: popup ? `translateY(0%)` : `translateY(-100%)`
    });

    const keyPress = useCallback( (e) => {
            if (e.key === 'Escape' && popup) {
            setPopUp(false);
            // console.log('I Press the escape key');
            }
        },
        [setPopUp, popup]
    );
    
    useEffect(
        () => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return (
        <div className='marketPopUp'>
        {popup ? (
        
        <Background onClick={closePopUp} ref={popUpRef}>
            <animated.div style={animation}>
                <ModalWrapper popup={popup}>
                    <ModalContent >
                        <h1 style={{margin: '0'}}> Price Comparison </h1>     
                        <h1> {popUpDescription} </h1>
                        <p style={{margin: '0'}}> Average Listing </p>
                        <h1> {popUpPrice} </h1> 
                        
                        <div className='popButton'>
                            <button>
                                <Link to='/edit'>
                                    Update Price
                                </Link>
                            </button>
                            
                            <button>
                                <Link to='/'>
                                    Home
                                </Link>
                            </button>
                        </div>
                    </ModalContent>
                    <CloseModalButton 
                    onClick={() => setPopUp(prev => !prev)}
                    />
                </ModalWrapper>
            </animated.div>
        </Background> 
        ) : null }
        </div>
    )
}

export default withRouter(PopUp)
