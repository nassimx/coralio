// import React from 'react';
import styled from 'styled-components';
import { css } from 'styled-components';

const ContainerContact = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1170px;

  ${(props) =>
    props.wrapper &&
    css`
      background: whitesmoke;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      border-radius: 15px;
      padding: 1.3rem;
      /* margin: 4rem 1rem; */
      @media (max-width: 700px) {
        padding: 0.7rem;
      }
      > * {
        //check
        padding: 1.1rem;
        /* margin: 5px; */
        /* background: blue; */
      }

      @media (min-width: 700px) {
        display: grid;
        grid-template-columns: 1fr 2fr;

        > * {
          padding: 2em;
        }
      }
    `}
`;

export default ContainerContact;
