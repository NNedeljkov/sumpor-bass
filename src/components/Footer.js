import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 40px;
    width: 100%;
    background-color: red;

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-top: 25px;
`

const Footer = () => {
    return (
        <Wrapper>
            Sumpi Footer
        </Wrapper>
    )
}

export default Footer;