// import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #cf1717;
  border: 0;
  color: #fff;
  padding: 1em;
  text-transform: uppercase;
  border-radius: 5px;
  width: 150px;
  height: 50px;
  cursor: pointer;

  &:hover,
  &:focus {
    background: #b8161f;
    color: #fff;
    outline: 0;
    transition: background-color 2s ease-out;
  }
`;

export default StyledButton;
