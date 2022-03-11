import styled from 'styled-components';

const Input = styled.input`
  padding: 1em;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  border: 0.1px solid rgba(128, 128, 128, 0.5);

  padding: 0.5rem;
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-bottom: 2px solid gray;
    outline: none;
  }
`;

export default Input;
