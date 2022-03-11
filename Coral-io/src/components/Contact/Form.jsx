import styled from 'styled-components';

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export default Form;
