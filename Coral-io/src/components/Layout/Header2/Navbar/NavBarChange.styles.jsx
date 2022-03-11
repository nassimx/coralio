import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  /* height: -80px; */
  /* width: 30%; */

  font-size: 1rem;
  position: absolute;
  /* top: 1vw; */
  left: 10vw;
  /* margin-left: 20%; */
  z-index: 11;
  //trasparent
  background: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(8px);
  backdrop-filter: blur(8px);
  /* background: red; */
  border-radius: 10px;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    position: sticky;
    margin-top: 5px;
    border-radius: 0px;
  }
`;

export const NavBarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: -80px; */
  z-index: 1;
  width: 100%;
  padding: 1px 30px 1px 10px;
  /* max-width: 1100px; */
`;

export const NavLogo = styled(LinkR)`
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  /* margin-left: 24px; */
  font-weight: bold;
  text-decoration: none;
`;
export const Logo = styled.img`
  /* width: 45%; */

  @media screen and (max-width: 960px) {
    /* width: 35%; */
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 768px) {
    /* display: none; */
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkR)`
  color: black;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  font-family: 'Lato', sans-serif;

  &:hover {
    color: #0a66c2;
    transition: all 0.3s ease-out;
  }
  &active {
    border-bottom: 3px solid #01bf71;
  }
`;
