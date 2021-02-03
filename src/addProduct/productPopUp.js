import React, { useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import CloseIcon from '@material-ui/icons/Close';

const Background = styled.div`
    width: 50%;
    height: 70%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    @media only screen and (max-width: 600px) {
        // border: solid red;
        // width: 300px;
        display: flex;
        margin-left: 35px;
        justify-content: center;
    }
`;

const ModalWrapper = styled.div`
    margin: 0 auto;
    width: 500px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    border-radius: 10px;
    border: solid;
    max-width: 90%;
    // margin-bottom: 140%;

    @media only screen and (max-width: 600px) {
        border: solid red;
        width: 300px;
        display: flex;
        justify-content: center;
        margin-bottom: 90px;

    }

`;

const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    margin: 90px auto;
    justify-content: center;
    align-items: center;
    align-content: center;
    line-height: 1.8;
    // max-width: 50%;
    // border: solid

    
`;

const CloseModalButton = styled(CloseIcon)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 40px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;


function PopUp ({productPopup, productList, setProductPopUp}) {
    const popUpRef = useRef();

    const closePopUp = e => {
        if (popUpRef.current === e.target) {
            setProductPopUp(false)
        }
    }

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: productPopup ? 1 : 0,
        transform: productPopup ? `translateY(0%)` : `translateY(-100%)`
    });

    const keyPress = useCallback( (e) => {
            if (e.key === 'Escape' && productPopup) {
            setProductPopUp(false);
            console.log('I Press the escape key');
            }
        },
        [setProductPopUp, productPopup]
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
        {productPopup ? (
        
        <Background onClick={closePopUp} ref={popUpRef}>
            <animated.div style={animation}>
                <ModalWrapper productPopup={productPopup}>
                    <ModalContent>
                        <h1> {productList.item} Added </h1>
                        <h1> Product Update </h1> 
                        
                        <div className='button' style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            marginTop: '10%',
                            width: '50%',
                            
                        }}>
                            <button 
                            onClick={() => window.location.reload(false)}
                            style={{
                                width: '100%',
                                padding: '5px',
                                margin: '2px'
                            }}>
                                <Link to='/product' style={{color: "white"}} >
                                    Add More
                                </Link>
                            </button>
                            
                            <button style={{
                                width: '100%',
                                padding: '4px',
                                margin: '2px'
                            }}>
                                <Link to='/' style={{color: 'white'}}>
                                    Home
                                </Link>
                            </button>
                        </div>
                    </ModalContent>
                    <CloseModalButton 
                    onClick={() => setProductPopUp(prev => !prev)}
                    />
                </ModalWrapper>
            </animated.div>
        </Background> 
        ) : null }
        </>
    )
}

export default withRouter(PopUp)
