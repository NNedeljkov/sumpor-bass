import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 400px;
  width: 250px;

  display: flex;
  align-items: center;
  flex-direction: column;

  padding:20px;
  gap: 15px;
  border: 3px solid black;
  border-radius: 25px;
  box-shadow: 10px 10px gray;
`;

const Description = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Price = styled.div`

`;

const Image = styled.img`
  height: 200px;
  width: 120px;

  object-fit: contain;
`;

const Card = ({
  name,
  price,
  description,
  notes,
  img,
}) => (
  <Wrapper>
    <Image src={(`${img}`)} />
    <h3>
      {name}
    </h3>
    <Price>{price}</Price>
    <Description>{description}</Description>
  </Wrapper>
)

export default Card;