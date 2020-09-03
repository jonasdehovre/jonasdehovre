import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Logo from './Logo';
import Container from './Container';
import HamburgerMenu from './HamburgerMenu';
import HamburgerIcon from '../assets/svg/hamburger_icon.svg';

const navigationItems = [
  {
    name: 'Client work',
    link: 'http://58north.nl',
  },
];

const Navigation = () => {
  const [isActive, setIsActive] = useState(false);

  const renderNavItems = navigationItems.map((item) => (
    <NavLi key={item.name}>
      <Link to={item.link}>{item.name}</Link>
    </NavLi>
  ));

  return (
    <StyledNavigation>
      <Container>
        <StyledLogo>
          <Link to="/">
            <Logo color="var(--darkGray)" />
          </Link>
        </StyledLogo>
        <HamburgerMenu
          isActive={isActive}
          setIsActive={() => setIsActive(!isActive)}
        >
          <HamburgerIcon />
        </HamburgerMenu>
        <Nav isActive={isActive} setIsActive={setIsActive}>
          {renderNavItems}
        </Nav>
      </Container>
    </StyledNavigation>
  );
};

const StyledNavigation = styled.nav`
  position: sticky;
  top: 0;
  display: flex;
  z-index: 9;
  width: 100%;
  height: 90px;
  background-color: var(--light);
  align-items: center;
  & > * > * {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
`;

const Nav = styled.ul`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  will-change: transform;
  transition-duration: 0.2s;
  transform: ${(props) =>
      props.isActive
        ? 'translate3d(0px, 90px, 0px);'
        : 'translate3d(0px, 100vh, 0px);'}
    @media (min-width: 600px) {
    position: relative;
    background: var(--white);
    transform: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    width: auto;
    top: 0;
    list-style-type: none;
    padding: 0;
  }
`;

const NavLi = styled.li`
  a {
    color: var(--light);
  }

  @media (min-width: 600px) {
    a {
      color: var(--darkGray);
    }
  }
`;

export default Navigation;
