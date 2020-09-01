import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const HamburgerMenu = ({ isActive, setIsActive }) => (
  <Hamburger
    viewBox="0 0 100 100"
    width="50"
    height="50"
    onClick={() => setIsActive(!isActive)}
    isActive={isActive}
  >
    <TopLine
      isActive={isActive}
      d="m 70,33 h -40 c 0,0 -6,1.368796 -6,8.5 0,7.131204 6,8.5013 6,8.5013 l 20,-0.0013"
    />
    <MiddleLine d="m 70,50 h -40" isActive={isActive} />
    <BottomLine
      isActive={isActive}
      d="m 69.575405,67.073826 h -40 c -5.592752,0 -6.873604,-9.348582 1.371031,-9.348582 8.244634,0 19.053564,21.797129 19.053564,12.274756 l 0,-40"
    />
  </Hamburger>
);

const Hamburger = styled.svg`
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: transform 400ms;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;

  ${(props) =>
    props.isActive &&
    `
      transform: rotate(45deg);
    `}

  & > path {
    fill: none;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
    stroke: #000;
    stroke-width: 5.5;
    stroke-linecap: round;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;

const TopLine = styled.path`
  stroke-dasharray: 40 82;
  ${(props) =>
    props.isActive &&
    `
    stroke-dasharray: 17 82;
    stroke-dashoffset: -62px;
    `}
`;

const MiddleLine = styled.path`
  stroke-dasharray: 40 111;
  ${(props) =>
    props.isActive &&
    `
    stroke-dashoffset: 23px;
    `}
`;

const BottomLine = styled.path`
  stroke-dasharray: 40 161;
  ${(props) =>
    props.isActive &&
    `
    stroke-dashoffset: -83px;
    `}
`;

HamburgerMenu.propTypes = {
  isActive: PropTypes.bool,
};

HamburgerMenu.defaultProps = {
  isActive: false,
};

export default HamburgerMenu;
