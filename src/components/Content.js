import React from 'react';
import styled from 'styled-components';

import Card from './Card';

import data from '../assets/data.json';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  flex: 1;
  flex-direction: column;
  align-items: center;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-bottom: 50px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;


const Content = () => {

    return (
      <Wrapper>
        <TitleWrapper>
          <h1>SUMPOOOOOOOOOR</h1>
          <h3>this is a blog about bass guitars</h3>
        </TitleWrapper>
        <CardWrapper>
          {data.map( item => (
              <Card {...item} />
          ))}
        </CardWrapper>
      </Wrapper>
    )
}

export default Content;