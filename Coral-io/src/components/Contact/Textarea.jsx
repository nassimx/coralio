import styled from 'styled-components';

const Textarea = styled.textarea`
  padding: 0.5rem;
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 5px;
  border: 0.1px solid rgba(128, 128, 128, 0.5);
  font-size: 1.2rem;
  font-weight: 500;
  transition: all 0.3s ease-in-out;
  margin-bottom: 1.3rem;
  &:focus {
    border-bottom: 2px solid gray;
    outline: none;
  }
`;

export default Textarea;
