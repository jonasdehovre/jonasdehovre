import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Button = ({ children, to, variant = 'dark' }) => (
  <StyledButton to={to} variant={variant}>
    {children}
  </StyledButton>
);

const StyledButton = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 7px 15px;
  color: var(--dark);
  border: 1px solid var(--dark);
  border-radius: 8px;
  width: fit-content;
  font-size: 14px;

  ${(props) =>
    props.variant === 'light' &&
    'color: var(--light); border: 1px solid var(--light);'}
`;

export default Button;
