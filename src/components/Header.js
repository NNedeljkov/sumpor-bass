import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    height: 40px;
    width: 100%;
    background-color: blue;

    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    margin-bottom: 25px;
`

const Header = () => {
    return (
        <Wrapper>
            Sumpi Header
        </Wrapper>
    )
}

export default Header;