import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => (
  <StyledContainer>{children}</StyledContainer>
);

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: 1200px) {
    width: 90vw;
    max-width: 1200px;
    margin: 0 auto;
    & > * {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
`;

export default Container;
