import React from 'react';
import styled from 'styled-components';

const Container = ({ children, variant = 'light', className }) => (
  <StyledWrapper className={className} variant={variant}>
    <StyledContainer>{children}</StyledContainer>
  </StyledWrapper>
);

const StyledWrapper = styled.div`
  width: 100%;
  ${(props) =>
    props.variant === 'dark' &&
    `background: var(--dark);
    `}
`;

const StyledContainer = styled.div`
  max-width: 90vw;
  margin: 0 auto;
  @media (min-width: 1600px) {
    width: 1600px;
    max-width: 1600px;
  }
`;

export default Container;
