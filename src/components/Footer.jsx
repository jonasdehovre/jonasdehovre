import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Container from './Container';
import Logo from './Logo';

const footerItems = [
  {
    name: 'Client work',
    link: 'http://58north.nl/contact',
  },
];

const Footer = () => {
  const renderFooterItems = footerItems.map((item) => (
    <FooterLi key={item.name}>
      <Link to={item.link}>{item.name}</Link>
    </FooterLi>
  ));

  return (
    <StyledFooter>
      <Container>
        <FooterUl>{renderFooterItems}</FooterUl>
        <StyledLogo>
          <Link to="/">
            <Logo color="var(--light)" />
          </Link>
        </StyledLogo>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  display: block;
  width: 100%;
  background-color: var(--darkGray);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-top: 40px;
  padding-bottom: 40px;
  & > * {
    display: flex;
    justify-content: space-between;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
`;

const FooterUl = styled.ul`
  padding: 0;
  @media (min-width: 1600px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style-type: none;
    margin: 0;
  }
`;

const FooterLi = styled.li`
  a {
    color: var(--light);
  }
`;

export default Footer;
