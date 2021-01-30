import React, { useRef, useEffect, useCallback } from 'react';
import './styles/popup.scss';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import CloseIcon from '@material-ui/icons/Close';

const Background = styled.div`
    width: 50%;
    height: 50%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalWrapper = styled.div`
    margin: 0 auto;
    width: 600px;
    // height: 650px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 10px;
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
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
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
            console.log('I pressed');
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
        <>
        {popup ? (
        
        <Background onClick={closePopUp} ref={popUpRef}>
            <animated.div style={animation}>
                <ModalWrapper popup={popup}>
                    <ModalContent>
                        <h1> Price Comparison </h1>     
                        <h1> {popUpDescription} </h1>
                        <p> Average Listing </p>
                        <h1> {popUpPrice} </h1> 
                        
                        <div className='button'>
                            <button>
                                <Link to='/edit' style={{color: "white"}} >
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
        </>
    )
}

export default withRouter(PopUp)
