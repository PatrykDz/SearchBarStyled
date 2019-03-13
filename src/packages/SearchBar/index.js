import React, { useState } from 'react';
import styled from 'styled-components';

const STATE_CLOSED = 'closed';
const STATE_SQUARE = 'square';
const STATE_DEFAULT = 'default';

const Content =
    styled.div`
        position: absolute;
        height: 50px;
        width: 300px;
        margin-left: 170px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        
        -webkit-animation-name: in-out;
        animation-name: in-out;
        -webkit-animation-duration: 0.7s;
        animation-duration: 0.7s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        -webkit-animation-iteration-count: 1;
        animation-iteration-count: 1;
        `;

const Input =
    styled.input`
        box-sizing: border-box;
        width: 50px;
        height: 50px;
        border: 4px solid ${({ color }) => color};
        border-radius: 50%;
        background: none;
        color: ${({ color }) => color};
        font-size: 16px;
        font-weight: 400;
        font-family: Roboto;
        outline: 0;
        -webkit-transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out, padding 0.2s;
        transition: width 0.4s ease-in-out, border-radius 0.8s ease-in-out, padding 0.2s;
        -webkit-transition-delay: 0.4s;
        transition-delay: 0.4s;
        -webkit-transform: translate(-100%, -50%);
        -ms-transform: translate(-100%, -50%);
        transform: translate(-100%, -50%);
        
        ${({ inputState }) => {
            if (inputState == STATE_SQUARE) {
                return `
                box-sizing: border-box;
                padding: 0 40px 0 10px;
                width: 300px;
                height: 50px;
                border: 4px solid ${({ color }) => color};
                border-radius: 0;
                background: none;
                color: ${({color}) => color};
                font-family: Roboto;
                font-size: 16px;
                font-weight: 400;
                outline: 0;
                -webkit-transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out, padding 0.2s;
                transition: width 0.4s ease-in-out, border-radius 0.4s ease-in-out, padding 0.2s;
                -webkit-transition-delay: 0.4s, 0s, 0.4s;
                transition-delay: 0.4s, 0s, 0.4s;
                -webkit-transform: translate(-100%, -50%);
                -ms-transform: translate(-100%, -50%);
                transform: translate(-100%, -50%);
                `;
            }
        }}`;

const Button =
    styled.button`    
        background: none;
        position: absolute;
        top: 0px;
        left: 0;
        height: 50px;
        width: 50px;
        padding: 0;
        border-radius: 100%;
        outline: 0;
        border: 0;
        color: inherit;
        cursor: pointer;
        -webkit-transition: 0.2s ease-in-out;
        transition: 0.2s ease-in-out;
        -webkit-transform: translate(-100%, -50%);
        -ms-transform: translate(-100%, -50%);
        transform: translate(-100%, -50%);

        &:before{
            content: "";
            position: absolute;
            width: 20px;
            height: 4px;
            background-color: ${({color}) => color};
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            margin-top: 26px;
            margin-left: 17px;
            -webkit-transition: 0.2s ease-in-out;
            transition: 0.2s ease-in-out;}
            
        ${({ buttonState }) => {
            if (buttonState == STATE_CLOSED) {
                return `-webkit-transition: 0.4s ease-in-out;
                        transition: 0.4s ease-in-out;
                        -webkit-transition-delay: 0.4s;
                        transition-delay: 0.4s;

                        &:before {
                            content: "";
                            position: absolute;
                            width: 27px;
                            height: 4px;
                            margin-top: -1px;
                            margin-left: -13px;
                            background-color: ${({color}) => color};
                            -webkit-transform: rotate(45deg);
                            -ms-transform: rotate(45deg);
                            transform: rotate(45deg);
                            -webkit-transition: 0.2s ease-in-out;
                            transition: 0.2s ease-in-out;
                        }

                        &:after {
                            content: "";
                            position: absolute;
                            width: 27px;
                            height: 4px;
                            background-color: ${({color}) => color};
                            margin-top: -1px;
                            margin-left: -13px;
                            cursor: pointer;
                            -webkit-transform: rotate(-45deg);
                            -ms-transform: rotate(-45deg);
                            transform: rotate(-45deg);
                        }`;
            }
        }}`;


const SearchBar = ({ color = '#fff' }) => {
    const [inputState, setInputState] = useState(STATE_DEFAULT);
    const [buttonState, setButtonState] = useState(STATE_DEFAULT);

    const toggleState = () => {
        setInputState(inputState == STATE_DEFAULT ? STATE_SQUARE : STATE_DEFAULT);
        setButtonState(buttonState == STATE_DEFAULT ? STATE_CLOSED : STATE_DEFAULT);
    }

    return (
        <React.Fragment>
            <Content>
                <Input inputState={inputState} color={color}></Input>
                <Button buttonState={buttonState} color={color} onClick={toggleState}></Button>
            </Content>
        </React.Fragment>
    )
}

export default SearchBar;