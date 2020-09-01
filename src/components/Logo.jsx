import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import LogoImage from '../assets/svg/jonasdehovre.svg';

const Logo = ({ width, color }) => <LogoSvg color={color} width={width} />;

const LogoSvg = styled(LogoImage)`
  path,
  polygon,
  g {
    fill: ${(props) => props.color};
  }
`;

Logo.propTypes = {
  width: PropTypes.string,
  color: PropTypes.string,
};

Logo.defaultProps = {
  width: '122px',
  color: 'black',
};

export default Logo;
